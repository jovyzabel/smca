// components/AdminHeader.tsx

export default function AdminHeader() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Tableau de Bord</h1>
      <button className="text-sm text-red-500 hover:text-red-700">
        Déconnexion
      </button>
    </header>
  );
}
