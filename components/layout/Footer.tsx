"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Nexium Institute", href: "/nexium-institute" },
    { label: "Projets", href: "/projets" },
    { label: "Blog", href: "/blog" },
    { label: "Programme Ambassadeur", href: "/ambassadors" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Développement web", href: "/services" },
    { label: "Consulting & conseil", href: "/services" },
    { label: "Marketing digital", href: "/services" },
    { label: "Design graphique", href: "/services" },
    { label: "Conception architecturale", href: "/services" },
    { label: "Nexium Institute", href: "/nexium-institute" },
  ],
};

export default function Footer() {
  const openCookiePreferences = () => {
    window.dispatchEvent(new Event("open-cookie-preferences"));
  };

  return (
    <footer className="bg-[#0B1026] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(5,162,218,0.20)]">
                <Image
                  src="/images/logo/logo.png"
                  alt="Logo GoulBAM Enterprises"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="leading-none">
                <p className="text-lg font-bold text-white">GoulBAM</p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/60">
                  Enterprises
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              GoulBAM Enterprises accompagne les entreprises, organisations et
              porteurs de projets avec des solutions numériques, du consulting,
              du marketing digital, du design, de la conception et de la
              formation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7DD3FC]">
              Navigation
            </h3>
            <div className="mt-5 space-y-3">
              {footerLinks.navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7DD3FC]">
              Expertises
            </h3>
            <div className="mt-5 space-y-3">
              {footerLinks.services.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7DD3FC]">
              Contact
            </h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <a
                href="mailto:contact@goulbam.com"
                className="block transition hover:text-white"
              >
                contact@goulbam.com
              </a>
              <a
                href="mailto:goulbam8@gmail.com"
                className="block transition hover:text-white"
              >
                goulbam8@gmail.com
              </a>
              <a
                href="https://wa.me/237696896758"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-white"
              >
                WhatsApp : +237696896758
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} GoulBAM Enterprises. Tous droits
              réservés.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <Link
                href="/mentions-legales"
                className="transition hover:text-white"
              >
                Mentions légales
              </Link>

              <Link
                href="/politique-confidentialite"
                className="transition hover:text-white"
              >
                Politique de confidentialité
              </Link>

              <button
                type="button"
                onClick={openCookiePreferences}
                className="transition hover:text-white"
              >
                Gestion des cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}