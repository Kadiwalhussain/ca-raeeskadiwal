import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

const PHONE_RE = /^[6-9]\d{9}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

export async function POST(request: NextRequest) {
  try {
    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { name, phone, email, service, message } = body as Record<string, string>;

    if (!name?.trim() || name.trim().length < 2)
      return Response.json({ error: "Invalid name" }, { status: 400 });
    if (name.trim().length > 100)
      return Response.json({ error: "Name too long" }, { status: 400 });

    const cleanPhone = phone?.replace(/\s/g, "") ?? "";
    if (!PHONE_RE.test(cleanPhone))
      return Response.json({ error: "Invalid phone number" }, { status: 400 });

    if (!EMAIL_RE.test(email ?? ""))
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    if (email.length > 200)
      return Response.json({ error: "Email too long" }, { status: 400 });

    if (!service)
      return Response.json({ error: "Service required" }, { status: 400 });

    if (!message?.trim() || message.trim().length < 10)
      return Response.json({ error: "Message too short" }, { status: 400 });
    if (message.trim().length > 2000)
      return Response.json({ error: "Message too long (max 2000 characters)" }, { status: 400 });

    await connectDB();
    const contact = await Contact.create({
      name: name.trim(),
      phone: cleanPhone,
      email: email.trim().toLowerCase(),
      service,
      message: message.trim(),
    });

    return Response.json({ success: true, id: contact._id }, { status: 201 });
  } catch (err) {
    console.error("[POST /api/contact] Error:", err);
    return Response.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
