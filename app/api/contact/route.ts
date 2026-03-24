import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, organisation, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "GoKeenn Website <onboarding@resend.dev>",
    to: "lilian.cartey@gokeenngh.com",
    replyTo: email,
    subject: `Quote Request from ${name}${service ? ` — ${service}` : ""}`,
    html: `
      <h2>New Quote Request — GoKeenn IT Services</h2>
      <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
        <tr><td style="padding:8px;font-weight:bold;color:#475569;">Name</td><td style="padding:8px;">${name}</td></tr>
        <tr style="background:#f8fafc;"><td style="padding:8px;font-weight:bold;color:#475569;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#475569;">Phone</td><td style="padding:8px;">${phone || "—"}</td></tr>
        <tr style="background:#f8fafc;"><td style="padding:8px;font-weight:bold;color:#475569;">Organisation</td><td style="padding:8px;">${organisation || "—"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#475569;">Service</td><td style="padding:8px;">${service || "—"}</td></tr>
        <tr style="background:#f8fafc;"><td style="padding:8px;font-weight:bold;color:#475569;">Message</td><td style="padding:8px;white-space:pre-wrap;">${message}</td></tr>
      </table>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
