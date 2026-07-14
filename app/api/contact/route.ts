import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await resend.emails.send({
      from: "SamCerts Website <website@samcerts.co.uk>",
      to: "info@samcerts.co.uk",
      replyTo: body.email,
      subject: `Website enquiry - ${body.service}`,
      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Service:</strong> ${body.service}</p>

        <h3>Message</h3>

        <p>${body.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send enquiry.",
      },
      {
        status: 500,
      }
    );
  }
}