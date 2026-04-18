"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[#0B1026]/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(5,162,218,0.20)]">
            <Image
              src="/images/logo/logo.png"
              alt="Logo GoulBAM Enterprises"
              width={48}
              height={48}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <div className="leading-none">
            <p className="text-lg font-bold text-white">GoulBAM</p>
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/60">
              Enterprises
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition ${
                  active ? "text-[#7DD3FC]" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#05A2DA] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/careers"
            className="inline-flex items-center rounded-full bg-[#05A2DA] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(5,162,218,0.35)] transition hover:scale-[1.02] hover:bg-[#0294c8]"
          >
            Rejoindre l'équipe
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2 text-white lg:hidden"
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[520px] border-t border-white/10 bg-[#0B1026]/95"
            : "max-h-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-[#05A2DA]/15 text-[#7DD3FC]"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#05A2DA] px-5 py-3 text-sm font-semibold text-white"
          >
            Parlons de votre projet
          </Link>
        </div>
      </div>
    </header>
  );
}