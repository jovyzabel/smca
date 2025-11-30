import Link from "next/link";

export default function NavBar(){
    return (
      <nav className="navbar bg-base-100 shadow-sm fixed top-0 z-10">
        <div className="navbar-start relative">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 z-1 p-2 shadow"
            >
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <a>Nous Rejoindre</a>
                <ul className="p-2">
                  <li>
                    <Link href="/contact">Contacts</Link>
                  </li>
                  <li>
                    <Link href="/members">Devenir membre</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/about_us">Qui sommes nous?</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">SMCA</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <details>
                <summary>Nous Rejoindre</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/contact">Contacts</Link>
                  </li>
                  <li>
                    <Link href="/members">Devenir membre</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/about_us">Qui sommes nous?</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Devenir membre</a>
        </div>
      </nav>
    );
}

