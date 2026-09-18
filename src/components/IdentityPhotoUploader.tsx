"use client";

import { useState } from "react";

export default function IdentityPhotoUploader() {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleIdentityUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setPreview(null);
      setFileName("");
      return;
    }

    setFileName(file.name);

    if (file.type.startsWith("image/")) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    } else {
      setPreview(null);
    }
  };

  return (
    <fieldset className="fieldset text-center">
      <legend className="fieldset-legend">Photo identité</legend>

      <label htmlFor="pieceIdentite" className="cursor-pointer">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden w-32 h-32 flex items-center justify-center">
            {preview ? (
              <img src={preview} alt="Aperçu de la photo d’identité" className="w-full h-full object-cover" />
            ) : (
              <span className="text-4xl">+</span>
            )}
          </div>
        </div>
      </label>

      <input
        id="pieceIdentite"
        type="file"
        accept="image/*"
        className="hidden"
        name="pieceIdentite"
        required
        onChange={handleIdentityUpload}
      />

      <div className="mt-3 text-sm text-base-content/70">
        {fileName ? fileName : "Cliquez pour ajouter une photo"}
      </div>
      <label className="label justify-center text-xs">Max size 2MB</label>
    </fieldset>
  );
}
