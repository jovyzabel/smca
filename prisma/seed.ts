// prisma/seed.ts
import bcrypt from "bcryptjs";
import "dotenv/config";
// import { PrismaClient } from "@/generated/prisma/client";
import { prisma } from "../lib/prisma";

// const prisma = new PrismaClient();

const adminPassword = process.env.ADMIN_PASSWORD;

async function main() {
  if (!adminPassword) {
    throw new Error(
      "La variable d'environnement ADMIN_PASSWORD n'est pas définie"
    );
  }

  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  const existingAdmin = await prisma.user.findFirst({
    where: {
      role: "ADMIN",
    },
  });

  if (existingAdmin) {
    console.log("Admin user already exists. Skipping creation.");
    return;
  }

  // Upsert an admin user
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: { password: hashedPassword, name: "admin" },
    create: {
      email: "admin@example.com",
      password: hashedPassword,
      role: "ADMIN",
      name: "admin",
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