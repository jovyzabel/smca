// src/app/(admin)/layout.tsx

// Admin layout design will be changed
// This is just temporarely
import AdminSidebar from '@/components/AdminSidebar';
import AdminHeader from '@/components/AdminHeader';
import { notFound } from 'next/navigation';

// Exemple de vérification d'authentification ou de rôle (à implémenter)
function isAdminAuthenticated() {
  // Logic pour vérifier si l'utilisateur est connecté et est admin
  // ...
  return true; // Remplacer par la logique réelle
}

export default function AdminLayout({
  children, // Les pages enfants (dashboard, settings, etc.)
}: {
  children: React.ReactNode;
}) {
  // Optionnel : Rediriger si l'utilisateur n'est pas admin
  if (!isAdminAuthenticated()) {
    // Cela affichera la page 404 de Next.js
    return notFound();
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 1. Barre Latérale (Navigation Admin) */}
      <AdminSidebar />
      
      <main className="flex-1 overflow-y-auto">
        {/* 2. En-tête de l'Admin */}
        <AdminHeader />
        
        {/* 3. Contenu de la Page */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
