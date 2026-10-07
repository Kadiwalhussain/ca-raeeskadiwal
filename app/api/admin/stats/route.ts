import { connectDB } from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";
import { isAdminAuthenticated } from "@/lib/auth";

export async function GET() {
  try {
    if (!(await isAdminAuthenticated()))
      return Response.json({ error: "Unauthorized" }, { status: 401 });

    await connectDB();

    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfWeek = new Date(startOfToday);
    startOfWeek.setDate(startOfToday.getDate() - 7);

    const [total, newCount, repliedCount, todayCount, weekCount, byService] = await Promise.all([
      Contact.countDocuments(),
      Contact.countDocuments({ status: "new" }),
      Contact.countDocuments({ status: "replied" }),
      Contact.countDocuments({ createdAt: { $gte: startOfToday } }),
      Contact.countDocuments({ createdAt: { $gte: startOfWeek } }),
      Contact.aggregate([
        { $group: { _id: "$service", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 6 },
      ]),
    ]);

    return Response.json({ total, newCount, repliedCount, todayCount, weekCount, byService });
  } catch (err) {
    console.error("[GET /api/admin/stats] Error:", err);
    return Response.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
