"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "next-auth/react";

export default function signInPage() {
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const email = (form.email as HTMLInputElement).value;
    const password = (form.password as HTMLInputElement).value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.error("Erreur de connexion :", result.error);
      return;
    }

    window.location.href = "/admin";
  }

  return (
    <main className="min-h-screen bg-base-200 px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl lg:grid-cols-2">
        <section className="flex items-center justify-center p-6 sm:p-8 lg:p-12">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center lg:text-left">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Espace admin
              </p>
              <h1 className="text-3xl font-bold text-base-content">Connexion</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="form-control w-full">
                <label className="label px-0 pb-2">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full">
                <label className="label px-0 pb-2">
                  <span className="label-text font-semibold">Mot de passe</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Mot de passe"
                    className="input input-bordered w-full pr-12"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                    className="absolute inset-y-0 right-3 flex items-center text-base-content/70 hover:text-base-content"
                    onClick={() => setShowPassword((value) => !value)}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-lg" />
                  </button>
                </div>
              </div>

              <button className="btn btn-primary w-full" type="submit">
                Se connecter
              </button>
            </form>
          </div>
        </section>

        <aside
          className="hidden lg:block"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15, 23, 42, 0.25), rgba(15, 23, 42, 0.45)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex h-full items-end p-10 text-white">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">Administration</p>
              <h2 className="mt-3 text-3xl font-bold">Bienvenue</h2>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
