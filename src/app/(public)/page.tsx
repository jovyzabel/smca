import Hero from "@/components/Hero";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-0 shadow mb-5 p-5 rounded-b-4xl bg-amber-400 w-full" >
          
      </div>
      <main className="m-5 p-5">
        <div>
          <h2 className="text-2xl font-bold text-center">Qui sommes nous?</h2>
          <br />
          <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app. </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Voir</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="text-center">
          <blockquote className="text-4xl font-bold text-center"> L'heure vient où <br/> les vrais adorateurs <br></br> adorerons en esprit ...</blockquote>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-center">Evenements</h2>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Voir</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
