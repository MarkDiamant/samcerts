"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  services: string[];
};

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "loading"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function ContactForm({ services }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus({ type: "loading", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          service: formData.get("service"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Your enquiry could not be sent.");
      }

      form.reset();

      setStatus({
        type: "success",
        message:
          "Thank you. Your enquiry has been sent and the SamCerts team will be in touch.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Your enquiry could not be sent. Please try again.",
      });
    }
  }

  return (
    <form className="mt-7 grid gap-5" onSubmit={handleSubmit}>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company website</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
            placeholder="Phone number"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-bold text-slate-700"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-2 block text-sm font-bold text-slate-700"
        >
          Service required
        </label>

        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
        >
          <option value="" disabled>
            Select a service
          </option>

          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}

          <option value="Not sure">Not sure</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-bold text-slate-700"
        >
          Property details
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={3000}
          className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
          placeholder="Tell us about the property and what you require"
        />
      </div>

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="inline-flex min-h-13 items-center justify-center rounded-xl bg-sky-700 px-6 py-3 font-bold text-white shadow-sm transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.type === "loading" ? "Sending..." : "Send Enquiry"}
      </button>

      {status.type === "success" && (
        <p
          role="status"
          className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold leading-6 text-green-800"
        >
          {status.message}
        </p>
      )}

      {status.type === "error" && (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold leading-6 text-red-800"
        >
          {status.message}
        </p>
      )}

      <p className="text-sm leading-6 text-slate-500">
        Your details will only be used to respond to your enquiry.
      </p>
    </form>
  );
}