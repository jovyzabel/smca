import bcrypt from "bcryptjs";
import { prisma } from "../../../../lib/prisma";

export async function approveAdherent(adherentId: number) {
  return prisma.$transaction(async (tx) => {
    const adherent = await tx.adherent.findUnique({
      where: { id: adherentId },
    });

    if (!adherent) {
      throw new Error("Adherent introuvable");
    }

    if (adherent.status === "APPROVED") {
      throw new Error("Adherent déjà approuvé");
    }

    // 1. Approuver l’adhérent
    await tx.adherent.update({
      where: { id: adherentId },
      data: { status: "APPROVED" },
    });

    // 2. Créer le compte User
    const password = await bcrypt.hash("temporaryPassword", 10);

    await tx.user.create({
      data: {
        email: adherent.email,
        name: `${adherent.firstName} ${adherent.lastName}`,
        password,
        role: "MEMBER",
        adherentId: adherent.id,
      },
    });
  });
}
  