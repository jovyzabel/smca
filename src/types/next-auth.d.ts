//Etendre les types de NextAuth pour inclure le rôle de l'utilisateur

import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

// 1. Étendre l'objet Session
declare module "next-auth" {
  /**
   * Étend le type de Session.
   * Ajout de la propriété 'role' à l'objet 'user'.
   */
  interface Session {
    user: {
      role: "ADMIN" | "MEMBER"; // Assurez-vous que cela correspond à votre enum Prisma
    } & DefaultSession["user"];
  }

  /**
   * Étend l'objet User pour y inclure 'role' pour les callbacks
   */
  interface User extends DefaultUser {
    role: "ADMIN" | "MEMBER";
  }
}

// 2. Étendre l'objet JWT (JSON Web Token)
declare module "next-auth/jwt" {
  /**
   * Étend le type JWT pour inclure 'role'.
   */
  interface JWT {
    role: "ADMIN" | "MEMBER";
  }
}
