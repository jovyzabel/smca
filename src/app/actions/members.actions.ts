//members.actions.ts

import { prisma } from "../../../lib/prisma";

async function becomeMember(data: FormData) {
//   "use server";
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

// if(birthDate != null && birthDate < new Date()){}

if(birthDate === null) throw new Error("Date de naissance invalide.");

try{
    const newAdherent = await prisma.adherent.create({
        data: {
            firstName: prenom,
            lastName: nom,
            birthDate: birthDate,
            nationality: nationalite,
            email,
            phone:telephone,
            address:adresse,
            churchAffiliation:eglise,
            id_card: pieceIdentite.name
        } 
    });

    await prisma.adhesionRequest.create({
        data: {
            adherentId: newAdherent.id,
            motivation: motivation || "Pas de motivation fournie.",
        }
    })

    return {
      success: true,
      message: "Demande d'adhésion soumis avec succès.",
      data: newAdherent,
    };
}
catch(error){
    console.error("Erreur :", error);
    throw new Error("Erreur lors de la soumission d'adhésion");
}


}

export default becomeMember;