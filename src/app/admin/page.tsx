import { auth } from "@/auth";
import { redirect } from "next/dist/client/components/navigation";

// src/app/admin/page.tsx
export default async function AdminPage(){

    const session = await auth();
    
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