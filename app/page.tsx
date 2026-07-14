import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";

const clientLoginUrl = "https://app.samcerts.co.uk/account/sign-in";

const featuredServices = [
  "Energy Performance Certificates",
  "Gas Safety Certificates",
  "Electrical Safety Certificates",
  "Floor Plans",
  "Fire Risk Assessments",
  "Asbestos Reports",
];

const services = [
  {
    title: "Energy Performance Certificates",
    shortTitle: "EPC",
    description:
      "Domestic energy performance assessments for landlords, homeowners and property agents.",
  },
  {
    title: "SAP EPC",
    shortTitle: "SAP",
    description:
      "Energy assessments and compliance certificates for newly built residential properties.",
  },
  {
    title: "Commercial EPC",
    shortTitle: "EPC",
    description:
      "Energy performance certificates for commercial and non-domestic properties.",
  },
  {
    title: "Gas Safety Certificates",
    shortTitle: "GAS",
    description:
      "Professional gas safety inspections and certificates for rented properties.",
  },
  {
    title: "Electrical Safety Certificates",
    shortTitle: "EICR",
    description:
      "Electrical installation condition reports for landlords and property owners.",
  },
  {
    title: "Floor Plans",
    shortTitle: "PLAN",
    description:
      "Clear and professionally prepared floor plans for residential and commercial properties.",
  },
  {
    title: "Lease Plans",
    shortTitle: "LEASE",
    description:
      "Accurate, Land Registry compliant plans for leases and property transactions.",
  },
  {
    title: "Fire Alarm Certificates",
    shortTitle: "FIRE",
    description:
      "Fire alarm inspections and certification to support property safety compliance.",
  },
  {
    title: "Emergency Lighting Certificates",
    shortTitle: "LIGHT",
    description:
      "Testing and certification of emergency lighting systems within your property.",
  },
  {
    title: "Portable Appliance Testing",
    shortTitle: "PAT",
    description:
      "Safety testing for portable electrical appliances in residential and commercial premises.",
  },
  {
    title: "Fire Risk Assessments",
    shortTitle: "FRA",
    description:
      "Detailed fire risk assessments identifying hazards and necessary safety actions.",
  },
  {
    title: "Health and Safety Risk Assessments",
    shortTitle: "H&S",
    description:
      "Practical risk assessments designed to help keep properties safe and compliant.",
  },
  {
    title: "Asbestos Reports",
    shortTitle: "ASB",
    description:
      "Professional asbestos inspections and reports for residential and commercial properties.",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <Header clientLoginUrl={clientLoginUrl} />

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

      <section
        id="services"
        className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
              Our services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Property certificates and compliance reports
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From essential landlord certificates to detailed property plans
              and safety assessments, SamCerts provides a complete and reliable
              service.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
              >
                <div className="flex h-12 min-w-12 max-w-fit items-center justify-center rounded-xl bg-sky-100 px-3 text-sm font-black text-sky-800">
                  {service.shortTitle}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-slate-950 px-6 py-7 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-8">
            <div>
              <h3 className="text-xl font-bold">
                Not sure which certificate you need?
              </h3>

              <p className="mt-2 text-slate-300">
                Speak to our team and we will help you identify the right
                service for your property.
              </p>
            </div>

            <a
              href="tel:+442045996496"
              className="mt-5 inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-sky-100 sm:mt-0"
            >
              Call 0204 599 6496
            </a>
          </div>
        </div>
      </section>

      <section
        id="why-us"
        className="scroll-mt-24 bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
                Why choose us
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Property compliance without the hassle
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                SamCerts makes arranging property certificates straightforward,
                with a dependable service designed around landlords, agents,
                property managers and homeowners.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-sky-700 px-6 py-3 font-bold text-white shadow-sm transition hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                Request a Certificate
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-xl font-black text-sky-800"
                >
                  01
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  Fast and reliable
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Prompt appointments, efficient assessments and clear
                  communication throughout.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl font-black text-green-800"
                >
                  02
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  Fully certified professionals
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Qualified assessors delivering professional reports and
                  certificates you can rely on.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl font-black text-green-800"
                >
                  03
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  Competitive pricing
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Straightforward, competitive quotations based on your
                  property and requirements.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-xl font-black text-sky-800"
                >
                  04
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  Landlord and agent friendly
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  A practical service that works around tenants, landlords and
                  busy property teams.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Three simple steps
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Tell us what you need and we will take care of the rest.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="relative rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-700 text-lg font-black text-white">
                1
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                Contact our team
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Call, email or send an enquiry with the property details and
                the certificate you require.
              </p>
            </article>

            <article className="relative rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-700 text-lg font-black text-white">
                2
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                Arrange the assessment
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We will confirm the requirements and arrange a convenient time
                to inspect the property.
              </p>
            </article>

            <article className="relative rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-700 text-lg font-black text-white">
                3
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                Receive your certificate
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Once completed, your certificate or report will be prepared
                and sent directly to you.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-sky-700 px-5 py-14 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need a property certificate?
            </h2>

            <p className="mt-3 text-lg leading-8 text-sky-100">
              Speak to SamCerts today for a fast, straightforward and reliable
              service.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+442045996496"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-sky-800 transition hover:bg-sky-50"
            >
              Call 0204 599 6496
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Send an Enquiry
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
                Contact us
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Arrange your property certificate
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Tell us what you need and our team will get back to you with
                the next steps.
              </p>

              <div className="mt-9 space-y-4">
                <a
                  href="tel:+442045996496"
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-300"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-xl"
                  >
                    ☎
                  </span>

                  <span>
                    <span className="block text-sm font-semibold text-slate-500">
                      Call us
                    </span>
                    <span className="mt-1 block text-lg font-bold text-slate-950">
                      0204 599 6496
                    </span>
                  </span>
                </a>

                <a
                  href="mailto:info@samcerts.co.uk"
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-300"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl"
                  >
                    ✉
                  </span>

                  <span>
                    <span className="block text-sm font-semibold text-slate-500">
                      Email us
                    </span>
                    <span className="mt-1 block break-all text-lg font-bold text-slate-950">
                      info@samcerts.co.uk
                    </span>
                  </span>
                </a>

                <a
                  href={clientLoginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-300"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl"
                  >
                    ↗
                  </span>

                  <span>
                    <span className="block text-sm font-semibold text-slate-500">
                      Existing client?
                    </span>
                    <span className="mt-1 block text-lg font-bold text-slate-950">
                      Access the Client Portal
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
              <h3 className="text-2xl font-bold text-slate-950">
                Send an enquiry
              </h3>

              <p className="mt-2 text-slate-600">
                Complete the form and we will respond as soon as possible.
              </p>

              <ContactForm
                services={services.map((service) => service.title)}
              />
            </div>
          </div>
        </div>
      </section>
      </main>

      <footer className="bg-slate-950 px-5 py-12 text-slate-300 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <p className="text-2xl font-bold text-white">SamCerts Ltd</p>

              <p className="mt-4 max-w-md leading-7 text-slate-400">
                Fast and reliable property certificates and compliance reports
                for landlords, estate agents, property managers and homeowners.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-white">Quick links</h2>

              <nav
                aria-label="Footer navigation"
                className="mt-4 flex flex-col items-start gap-3"
              >
                <a href="#services" className="transition hover:text-white">
                  Services
                </a>
                <a href="#why-us" className="transition hover:text-white">
                  Why SamCerts
                </a>
                <a href="#process" className="transition hover:text-white">
                  How it works
                </a>
                <a href="#contact" className="transition hover:text-white">
                  Contact
                </a>
              </nav>
            </div>

            <div>
              <h2 className="font-bold text-white">Get in touch</h2>

              <div className="mt-4 flex flex-col items-start gap-3">
                <a
                  href="tel:+442045996496"
                  className="transition hover:text-white"
                >
                  0204 599 6496
                </a>

                <a
                  href="mailto:info@samcerts.co.uk"
                  className="break-all transition hover:text-white"
                >
                  info@samcerts.co.uk
                </a>

                <a
                  href={clientLoginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex min-h-11 items-center justify-center rounded-xl bg-sky-700 px-5 py-2 font-bold text-white transition hover:bg-sky-600"
                >
                  Client Login
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <p>
              © {new Date().getFullYear()} SamCerts Ltd. All rights reserved.
            </p>

            <p className="mt-3 sm:mt-0">
              Website by Diamant Solutions
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}