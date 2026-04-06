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
      <div className="mt-16 py-10 md:py-14 border-b-2 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            Contact Page
          </h1>
        </div>
      </div>

      {/* Main Container : Utilisation de Flexbox avec wrap pour le responsive */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-center gap-8 py-10">
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

          <a
            href="#"
            className="flex items-center gap-2 hover:text-black transition-colors"
          >
            {/* <FontAwesomeIcon icon={faTiktok} className="text-black" /> */}
          </a>
        </div>

        {/* map */}
        <div
          className="relative overflow-hidden rounded-lg shadow-md"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.825885543035!2d15.271037675248724!3d-4.254100846072868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33a51bde2b4d%3A0x362fb51486137ee4!2sRond%20Point%20Moungali!5e0!3m2!1sfr!2scg!4v1775510622472!5m2!1sfr!2scg"
            width={600}
            height={450}
            style={{ border: "0" }}
            // allowfullscreen={}
            loading={"lazy"}
            referrerPolicy={"no-referrer-when-downgrade"}
            className=" my-0 mx-auto sm:h-[200px] md:h-[500px] lg:h-[600px]"
          ></iframe>
        </div>
      </div>
    </>
  );
}
