import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <>
      {/* Header : Centré avec padding adaptatif */}
      <div className="mt-16 py-10 md:py-14 border-b-2 text-center bg-gray-50">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Contact Page
        </h1>
      </div>

      {/* Main Container : Utilisation de Flexbox avec wrap pour le responsive */}
      <div className="m-4 md:m-10 flex flex-col lg:flex-row justify-center gap-8">
        {/* Section Formulaire */}
        <div className="flex-1 max-w-2xl p-6 border rounded-xl shadow-sm bg-white">
          <h2 className="text-2xl font-bold mb-6">Nous Écrire</h2>

          <form
            action="mailto:jovymonka7@gmail.com"
            className="flex flex-col gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Votre Email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Objet du message"
              className="input input-bordered w-full"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Votre Message"
              className="textarea textarea-bordered w-full min-h-[150px] text-base"
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary w-full md:w-max px-10"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Section Réseaux & Vidéo */}
        <div className="flex-1 max-w-2xl p-6 border rounded-xl shadow-sm bg-white flex flex-col gap-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <h2 className="text-green-600 font-bold text-xl">
              Nos Réseaux Sociaux
            </h2>
            <a
              href="tel:+242067436028"
              className="text-green-600 font-medium hover:underline"
            >
              Tel: +242 06 743 60 28
            </a>
          </div>

          {/* Liens Réseaux Sociaux */}
          <div className="flex flex-wrap gap-4 py-4 border-y border-gray-100">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-red-600 transition-colors"
            >
              <FontAwesomeIcon icon={faYoutube} className="text-red-600" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-pink-600 transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-pink-600" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-black transition-colors"
            >
              <FontAwesomeIcon icon={faTiktok} className="text-black" />
            </a>
          </div>

          {/* Vidéo Responsive */}
          <div
            className="relative w-full overflow-hidden rounded-lg shadow-md"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/nc-g9zptZ3g"
              title="Architecturer votre projet"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
