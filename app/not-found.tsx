import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-16">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-200/50 sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
          404 error
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
          Page not found
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-sky-700 px-6 py-3 font-bold text-white transition hover:bg-sky-800"
          >
            Return Home
          </Link>

          <a
            href="tel:+442045996496"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 transition hover:border-sky-300 hover:text-sky-800"
          >
            Call SamCerts
          </a>
        </div>
      </div>
    </main>
  );
}