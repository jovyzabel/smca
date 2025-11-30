import becomeMember from "@/app/actions/members.actions";

export default function MembersPage() {


  return (
    <main className="mt-5 p-5 max-w-4xl mx-auto">
      <div className="p-6">
        <h1 className="text-3xl font-bold">Devenir membre</h1>
      </div>
      <div className="">
        <form action={becomeMember}>  
          <div className="form-control flex gap-5 justify-center flex-wrap">
            <div className="w-64">
              {/* CHAMP 1 : Nom(s) */}
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Nom(s)</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  name="nom"
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
                />
              </div>

              {/* CHAMP 4 : Lieu de naissance */}
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Nationalité</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  name="nationalite"
                />
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
                  <span className="label-text">Eglise</span>
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

            <div className="w-64">
              {/* CHAMP 8 : Textearea */}
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">
                    Pourquoi voulez-vous être un membre?
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-48 w-full max-w-xs"
                  placeholder="Votre réponse ici"
                  name="motivation"
                ></textarea>
              </div>

              {/* CHAMP 9 : Fichier */}
              <div className="mb-4">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Piece identité</legend>
                  <input
                    type="file"
                    className="file-input"
                    name="pieceIdentite"
                  />
                  <label className="label">Max size 2MB</label>
                </fieldset>
              </div>
            </div>
          </div>
          <br />
          <div className="flex justify-center">
            <button className="btn btn-primary">Soumettre</button>
          </div>
        </form>
      </div>
    </main>
  );
}
