import {becomeMember} from "@/app/actions/members.actions";
import Tiptap from "@/components/wysiwyg/Tiptap";
import styles from "./member.module.css";
import nationality from "@/enum/enum";

export default function MembersPage() {
  return (
    <main className="mt-5 p-5 max-w-4xl mx-auto">
      <div className="border m-10 py-4 mb-8 bg-base-200 rounded-lg text-center">
        <h1 className={`text-3xl font-bold ${styles.h1}`}>Devenir membre</h1>
      </div>
      <div className="">
        <form action={becomeMember}>
          <div className="form-control flex gap-5 justify-center flex-wrap">
            <div className="">
              {/* CHAMP 1 : Nom(s) */}
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Nom(s)</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  name="nom"
                  required
                />
              </div>

              {/* CHAMP 2 : Prénom(s) */}
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Prénom(s)</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  name="prenom"
                  required
                />
              </div>

              {/* CHAMP 3 : Date de naissance */}
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Date de naissance</span>
                </label>
                <input
                  type="date"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  name="dateNaissance"
                  required
                />
              </div>

              {/* CHAMP 4 : Lieu de naissance */}
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Nationalité</span>
                </label>
                <select defaultValue="Choisissez une nationalité" className="select" name="nationalite">
                  <option disabled={true}>Pick a color</option>
                  <option value={nationality.CONGO}>Congo</option>
                  <option value={nationality.RDC}>RDC</option>
                  <option value={nationality.CAMEROUN}>Cameroun</option>
                  <option value={nationality.GABON}>Gabon</option>
                  <option value={nationality.SENEGAL}>Sénégal</option>
                  <option value={nationality.AUTRE}>Autre</option>
                </select>
              
              </div>
            </div>

            <div className="w-64">
              {/* CHAMP 5 : Email */}
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  name="email"
                  required
                />
              </div>

              {/* CHAMP 6 : Téléphone */}
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Téléphone</span>
                </label>
                <input
                  type="tel"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  name="telephone"
                />
              </div>

              {/* CHAMP 7 : Adresse */}
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Adresse</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  name="adresse"
                />
              </div>
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Eglise locale</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  name="eglise"
                />
              </div>
            </div>

            {/* ... Le reste du formulaire (à appliquer le même pattern) */}
          </div>
          <br />

          {/* CHAMP 8 : Textearea */}
          <div className="">
            <div className="mb-4 grid">
              <label className="font-bold text-center mb-2">
                Votre motivation
              </label>
              
              <Tiptap />
            </div>
          </div>
          {/* CHAMP 9 : Fichier */}
          <div className="mb-4 flex justify-center">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo identité</legend>
              <input type="file" className="file-input" name="pieceIdentite" required />
              <label className="label">Max size 2MB</label>
            </fieldset>
          </div>
          <div className="flex justify-center">
            <button className="btn btn-primary">Soumettre</button>
          </div>
        </form>
      </div>
    </main>
  );
}
