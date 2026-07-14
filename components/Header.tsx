"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeaderProps = {
  clientLoginUrl: string;
};

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Why SamCerts", href: "#why-us" },
  { label: "How it works", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ clientLoginUrl }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow ${
        scrolled
          ? "border-slate-200 shadow-sm"
          : "border-slate-200/80 shadow-none"
      }`}
    >
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          aria-label="SamCerts Ltd home"
          className="flex shrink-0 items-center"
          onClick={closeMenu}
        >
          <Image
            src="/samcerts-logo.png"
            alt="SamCerts Ltd Property Certificates"
            width={260}
            height={100}
            className="h-auto w-36 sm:w-44"
            priority
          />
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md transition hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+442045996496"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-800 transition hover:border-sky-300 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            Call Us
          </a>

          <a
            href={clientLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-sky-700 px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            Client Login
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={clientLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-sky-700 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            Login
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 transition hover:border-sky-300 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>

            {menuOpen ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-5 pb-5 pt-3 shadow-lg lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-7xl flex-col"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-slate-100 py-4 text-base font-bold text-slate-800 transition last:border-b-0 hover:text-sky-700"
              >
                {item.label}
              </a>
            ))}

            <a
              href="tel:+442045996496"
              onClick={closeMenu}
              className="mt-4 inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-900 transition hover:border-sky-300 hover:text-sky-800"
            >
              Call 0204 599 6496
            </a>

            <a
              href={clientLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 inline-flex min-h-12 items-center justify-center rounded-xl bg-sky-700 px-5 py-3 font-bold text-white transition hover:bg-sky-800"
            >
              Client Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}