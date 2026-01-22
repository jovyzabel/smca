import { prisma } from "../../../../../lib/prisma";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";


const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;

        const { email, password } = credentials;

        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user) {
          throw new Error("Invalid Credentials"); // I've to delete this line when in production
        }
        if (user && user.password) {
          // Here you should verify the password with a hashing function
          const isValid = await bcrypt.compare(password, user.password);
          if (isValid) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role,
            };
          }
          if (!isValid) {
            throw new Error(" Invalid Credentials"); // I've to delete this line when in production 
            // and find another way to notify the user
          }

        }
        return null; //  this means that the user could not be authenticated. 
        // the authentication failed or the user does not exist
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role as "ADMIN" | "MEMBER";
      }
      return session;
    }, // Permet d’accéder au rôle dans le frontend
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
