// prisma/seed.ts
import bcrypt from "bcryptjs";
import "dotenv/config";
import { prisma } from "../lib/prisma";

const adminEmail = process.env.ADMIN_EMAIL ?? "admin@example.com";
const adminName = process.env.ADMIN_NAME ?? "admin";
const adminPassword = process.env.ADMIN_PASSWORD;

async function main() {
  if (!adminPassword) {
    throw new Error(
      "La variable d'environnement ADMIN_PASSWORD n'est pas définie"
    );
  }

  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (existingAdmin) {
    const updatedAdmin = await prisma.user.update({
      where: { email: adminEmail },
      data: {
        password: hashedPassword,
        name: adminName,
        role: "ADMIN",
      },
    });

    console.log("Admin user already exists. Password and profile were updated:", updatedAdmin.email);
    return;
  }

  const adminUser = await prisma.user.create({
    data: {
      email: adminEmail,
      password: hashedPassword,
      role: "ADMIN",
      name: adminName,
    },
  });

  console.log("Admin user created:", adminUser.email);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error creating admin user:", e);
    await prisma.$disconnect();
    process.exit(1);
  });