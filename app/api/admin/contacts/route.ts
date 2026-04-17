import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1"));
    const limit = 20;

    await connectDB();

    const filter = status && status !== "all" ? { status } : {};
    const [contacts, total] = await Promise.all([
      Contact.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
      Contact.countDocuments(filter),
    ]);

    return Response.json({ contacts, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    console.error("[GET /api/admin/contacts] Error:", err);
    return Response.json({ error: "Failed to fetch contacts" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    let body: { id?: string; status?: string };
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { id, status } = body;
    if (!id || typeof id !== "string")
      return Response.json({ error: "Invalid ID" }, { status: 400 });
    if (!["new", "read", "replied"].includes(status ?? ""))
      return Response.json({ error: "Invalid status" }, { status: 400 });

    await connectDB();
    const contact = await Contact.findByIdAndUpdate(id, { status }, { new: true });
    if (!contact)
      return Response.json({ error: "Contact not found" }, { status: 404 });

    return Response.json({ success: true, contact });
  } catch (err) {
    console.error("[PATCH /api/admin/contacts] Error:", err);
    return Response.json({ error: "Failed to update contact" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    let body: { id?: string };
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { id } = body;
    if (!id || typeof id !== "string")
      return Response.json({ error: "Invalid ID" }, { status: 400 });

    await connectDB();
    const result = await Contact.findByIdAndDelete(id);
    if (!result)
      return Response.json({ error: "Contact not found" }, { status: 404 });

    return Response.json({ success: true });
  } catch (err) {
    console.error("[DELETE /api/admin/contacts] Error:", err);
    return Response.json({ error: "Failed to delete contact" }, { status: 500 });
  }
}
