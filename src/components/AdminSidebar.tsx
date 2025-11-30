// components/AdminSidebar.tsx
import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <Link
              href="/admin/dashboard"
              className="block p-2 rounded hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/admin/users"
              className="block p-2 rounded hover:bg-gray-700"
            >
              Utilisateurs
            </Link>
          </li>
          {/* ... autres liens ... */}
        </ul>
      </nav>
    </aside>
  );
}
