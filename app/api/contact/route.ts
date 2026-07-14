import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequest = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  service?: unknown;
  message?: unknown;
  company?: unknown;
};

function cleanText(value: unknown, maximumLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maximumLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    const name = cleanText(body.name, 100);
    const phone = cleanText(body.phone, 30);
    const email = cleanText(body.email, 254).toLowerCase();
    const service = cleanText(body.service, 150);
    const message = cleanText(body.message, 3000);
    const company = cleanText(body.company, 100);

    if (company) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          success: false,
          message:
            "The enquiry service is temporarily unavailable. Please call or email SamCerts.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "SamCerts Website <website@samcerts.co.uk>",
      to: ["info@samcerts.co.uk"],
      replyTo: email,
      subject: `Website enquiry: ${service}`,
      text: [
        "New SamCerts website enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Service: ${service}`,
        "",
        "Property details:",
        message,
      ].join("\n"),
      html: `
        <h1>New SamCerts website enquiry</h1>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <h2>Property details</h2>
        <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend contact form error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "Your enquiry could not be sent. Please call or email SamCerts.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Your enquiry could not be sent. Please call or email SamCerts.",
      },
      { status: 500 }
    );
  }
}