import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Full name is required." }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }
    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    // ─── Log submission (extend here with Resend / Nodemailer / any email service) ───
    console.log("📩 New contact form submission:", {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "—",
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    });

    // ─── WhatsApp fallback deep-link (optional – returned so client can open it) ───
    const waText = encodeURIComponent(
      `Hi Iriseagle, my name is ${name.trim()}. ${message.trim()}`
    );
    const waLink = `https://wa.me/2348054029416?text=${waText}`;

    return NextResponse.json({ success: true, waLink }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
