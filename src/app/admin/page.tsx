import { getServerSession } from "next-auth/next";
import { redirect } from "next/dist/client/components/navigation";

// src/app/admin/page.tsx
export default async function AdminPage(){

    const session = await getServerSession();
    
    if (!session) {
      redirect("/auth/signin");
    }

    // if (session.user.role !== "ADMIN") {
    //   redirect("/error");
    // }

    return (
        <h1> Admin page</h1>
        
    );
}