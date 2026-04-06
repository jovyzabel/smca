// Each pages have a Hero.

import Link from "next/link";

// Props could be provided in order to make some difference
export default function Hero({}) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("img/landing.jpg")`,
        
          
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-md mx-auto">
            <h1 className="mb-5 text-5xl font-bold">Praise be the Lord!</h1>
            <p className="mb-5">
              Our Father, Who art in heaven, hallowed be Thy name; Thy kingdom come; 
              Thy will be done on earth as it is in heaven. 
              Give us this day our daily bread;
            </p>
            <Link href="/members" className="btn btn-primary">
              Devenir membre
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
