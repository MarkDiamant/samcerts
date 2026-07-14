import Image from "next/image";

const clientLoginUrl = "https://app.samcerts.co.uk/account/sign-in";

const featuredServices = [
  "Energy Performance Certificates",
  "Gas Safety Certificates",
  "Electrical Safety Certificates",
  "Floor Plans",
  "Fire Risk Assessments",
  "Asbestos Reports",
];

export default function Home() {
  return (
    <main>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
          <a
            href="#top"
            aria-label="SAMCERTS Ltd home"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/samcerts-logo.png"
              alt="SAMCERTS Ltd Property Certificates"
              width={260}
              height={100}
              className="h-auto w-40 sm:w-48"
              priority
            />
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex"
          >
            <a className="transition hover:text-sky-700" href="#services">
              Services
            </a>
            <a className="transition hover:text-sky-700" href="#why-us">
              Why SAMCERTS
            </a>
            <a className="transition hover:text-sky-700" href="#process">
              How it works
            </a>
            <a className="transition hover:text-sky-700" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href={clientLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-sky-700 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 sm:px-6"
          >
            Client Login
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative overflow-hidden bg-slate-50"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sky-100/70 to-transparent"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-bold text-sky-800 shadow-sm">
              Property certificates made straightforward
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              Property certification you can rely on
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Fast, reliable property certificates and compliance reports for
              landlords, estate agents, property managers and homeowners.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+442045996496"
                className="inline-flex min-h-13 items-center justify-center rounded-xl bg-sky-700 px-6 py-3 font-bold text-white shadow-sm transition hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                Call 0204 599 6496
              </a>

              <a
                href="mailto:info@samcerts.co.uk"
                className="inline-flex min-h-13 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 shadow-sm transition hover:border-sky-300 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                Email Us
              </a>

              <a
                href={clientLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center justify-center rounded-xl border border-sky-700 bg-sky-50 px-6 py-3 font-bold text-sky-800 transition hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                Client Login
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700"
                >
                  ✓
                </span>
                Fast turnaround
              </div>

              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700"
                >
                  ✓
                </span>
                Fully certified
              </div>

              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700"
                >
                  ✓
                </span>
                Agent friendly
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
                  Complete service
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  Certificates for every property requirement
                </h2>
              </div>

              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl text-green-700"
              >
                ✓
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {featuredServices.map((service) => (
                <div
                  key={service}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  {service}
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="mt-7 inline-flex font-bold text-sky-700 transition hover:text-sky-900"
            >
              View all services
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}