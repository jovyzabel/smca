import Hero from "@/components/Hero";
import Link from "next/link";
import image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-0 shadow mb-5 p-5 rounded-b-4xl bg-amber-400 w-full"></div>
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        <section>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold tracking-tight text-primary">
              Qui sommes-nous ?
            </h2>
            <div className="divider w-24 mx-auto before:bg-primary after:bg-primary"></div>
          </div>

          <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden border border-base-200">
            <figure className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1510915367464-556e553dc36a?auto=format&fit=crop&q=80&w=800"
                alt="Notre communauté"
                className="h-full object-cover"
              />

            </figure>
            <div className="card-body lg:w-1/2 justify-center">
              <h3 className="card-title text-2xl text-primary ">
                Une communauté vibrante
              </h3>
              <p className="text-lg leading-relaxed text-base-content/80">
                Bienvenue dans notre espace de partage. Nous sommes dédiés à la
                louange et à l'édification mutuelle à travers la musique et la
                parole. Découvrez notre parcours et notre mission.
              </p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary btn-outline">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section Citation / Verset (Focus visuel) */}
        <section className="py-16 bg-base-200 rounded-3xl px-8 shadow-inner">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-6xl text-amber-500 font-serif opacity-50">
              “
            </span>
            <blockquote className="text-3xl md:text-5xl font-serif italic font-medium leading-tight">
              L'heure vient où les{" "}
              <span className="text-amber-600">vrais adorateurs</span> adoreront
              le Père en esprit et en vérité.
            </blockquote>
            <cite className="block text-xl font-semibold opacity-70">
              — Jean 4:23
            </cite>
          </div>
        </section>

        {/* Section Événements */}
        <section>
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-primary">
                Événements
              </h2>
              <p className="text-base-content/60 mt-2">
                Ne manquez pas nos prochains rendez-vous.
              </p>
            </div>
            <Link href="/events" className="link link-primary font-bold">
              Voir tout
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card Événement 1 */}
            <div className="card bg-base-100 shadow-md hover:shadow-2xl transition-shadow duration-300 border border-base-200">
              <figure className="px-4 pt-4">
                <img
                  src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=400"
                  alt="Concert"
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <div className="badge bg-amber-500 text-white mb-2">
                  Bientôt
                </div>
                <h2 className="card-title text-xl">Soirée de Louange</h2>
                <p className="text-base-content/70">
                  Un moment unique pour se rassembler et célébrer ensemble.
                </p>
                <div className="card-actions justify-end mt-4 border-t pt-4">
                  <button className="btn btn-ghost btn-sm">Détails</button>
                  <button className="btn btn-primary btn-sm">S'inscrire</button>
                </div>
              </div>
            </div>

            {/* Card Événement 2 */}
            <div className="card bg-base-100 shadow-md hover:shadow-2xl transition-shadow duration-300 border border-base-200">
              <figure className="px-4 pt-4">
                <img
                  src="https://images.unsplash.com/photo-1546443046-ed1ce6ffd1c9?auto=format&fit=crop&q=80&w=400"
                  alt="Atelier"
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <div className="badge badge-accent mb-2">À venir</div>
                <h2 className="card-title text-xl">Atelier Chorale</h2>
                <p className="text-base-content/70">
                  Atelier pratique pour améliorer nos harmonies et techniques.
                </p>
                <div className="card-actions justify-end mt-4 border-t pt-4">
                  <button className="btn btn-ghost btn-sm">Détails</button>
                  <button className="btn btn-primary btn-sm">S'inscrire</button>
                </div>
              </div>
            </div>

            {/* Card Événement 3 */}
            <div className="card bg-base-100 shadow-md hover:shadow-2xl transition-shadow duration-300 border border-base-200">
              <figure className="px-4 pt-4">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400"
                  alt="Retraite"
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <div className="badge badge-primary mb-2">Inscription</div>
                <h2 className="card-title text-xl">Retraite Spirituelle</h2>
                <p className="text-base-content/70">
                  Un week-end pour se ressourcer et grandir ensemble.
                </p>
                <div className="card-actions justify-end mt-4 border-t pt-4">
                  <button className="btn btn-ghost btn-sm">Détails</button>
                  <button className="btn btn-primary btn-sm">S'inscrire</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
