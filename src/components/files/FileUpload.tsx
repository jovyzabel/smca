// "use client"; 

// import { useState } from "react";

// export default function FileUpload() {
//   const [uploading, setUploading] = useState(false);

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     try {
//       setUploading(true);

//       // --- Étape 2.A : Demander l'URL signée au serveur ---
//       const res = await fetch("/api/upload", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ fileName: file.name }),
//       });

//       const { url, path, error } = await res.json();
//       if (error) throw new Error(error);

//       // --- Étape 2.B : Upload direct vers le Storage Supabase ---
//       const uploadRes = await fetch(url, {
//         method: "PUT", // Supabase attend un PUT pour les URLs signées
//         headers: { "Content-Type": file.type },
//         body: file,
//       });

//       if (!uploadRes.ok) throw new Error("Échec de l'upload vers le storage");

//       // --- Étape 2.C : Enregistrer dans la DB via une Server Action ou API ---
//       // C'est ici que Prisma intervient (via ton endpoint de sauvegarde)
//       await fetch("/api/save-image", {
//         method: "POST",
//         body: JSON.stringify({ path }),
//       });

//       alert("Image enregistrée avec succès !");
//     } catch (err) {
//       console.error(err);
//       alert("Erreur lors de l'upload");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4 p-4 border rounded-lg">
//       <label className="font-bold">Uploader une image :</label>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleFileChange}
//         disabled={uploading}
//         className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//       />
//       {uploading && (
//         <p className="text-blue-500 animate-pulse">Upload en cours...</p>
//       )}
//     </div>
//   );
// }
