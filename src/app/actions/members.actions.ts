// members.actions.ts — server action

import { prisma } from "../../../lib/prisma";

export async function becomeMember(data: FormData) {
  "use server";
  // Logique pour traiter les données du formulaire et créer un nouveau membre
  const nom = data.get("nom") as string;
  const prenom = data.get("prenom") as string;
  const dateNaissance = data.get("dateNaissance") as string;
  const nationalite = data.get("nationalite") as string;
  const email = data.get("email") as string;
  const telephone = data.get("telephone") as string;
  const adresse = data.get("adresse") as string;
  const eglise = data.get("eglise") as string;
  const motivation = data.get("motivation") as string;
  const pieceIdentite = data.get("pieceIdentite") as File;

  const birthDate = dateNaissance ? new Date(dateNaissance) : null;

  if (
    email === null ||
    email === "" ||
    email.length === 0 ||
    !email.includes("@") 
  ) {
    throw new Error("L'email est requis.");
  }

  if (birthDate === null) throw new Error("Date de naissance invalide.");

  if(birthDate > new Date() || birthDate === new Date()) {
    throw new Error("Verifiez votre date de naissance.");
  }

  try {
    const existingAdherent = await prisma.adherent.findUnique({
      where: {
        email: email,
      },
    });

    if (existingAdherent) {
      throw new Error("Un adhérent avec cet email existe déjà.");
    }

    const newAdherent = await prisma.adherent.create({
      data: {
        firstName: prenom,
        lastName: nom,
        birthDate: birthDate,
        nationality: nationalite,
        email,
        phone: telephone,
        address: adresse,
        churchAffiliation: eglise,
        id_card: pieceIdentite.name,
      },
    });

    await prisma.adhesionRequest.create({
      data: {
        adherentId: newAdherent.id,
        motivation: motivation || "Pas de motivation fournie.",
      },
    });

    // success — nothing returned to the browser action handler
    return;
  } catch (error) {
    console.error("Erreur :", error);
    throw new Error("Erreur lors de la soumission d'adhésion");
  }

  resetInput(data);
}

function resetInput(data: FormData) {
  for (const key of [...data.keys()]) {
    data.delete(key);
  }
}