"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

type Status = "new" | "read" | "replied";
type FilterStatus = "all" | Status;

interface Contact {
  _id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  status: Status;
  createdAt: string;
}

interface Stats {
  total: number;
  newCount: number;
  repliedCount: number;
  todayCount: number;
  weekCount: number;
  byService: { _id: string; count: number }[];
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) +
    " · " + d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
}

function StatusBadge({ status }: { status: Status }) {
  const cls: Record<Status, string> = {
    new: "badge-new",
    read: "badge-read",
    replied: "badge-replied",
  };
  const labels: Record<Status, string> = { new: "New", read: "Read", replied: "Replied" };
  return <span className={`status-badge ${cls[status]}`}>{labels[status]}</span>;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [filter, setFilter] = useState<FilterStatus>("all");
  const [selected, setSelected] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"dashboard" | "inquiries">("dashboard");

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const loadStats = useCallback(async () => {
    const res = await fetch("/api/admin/stats");
    if (res.ok) setStats(await res.json());
  }, []);

  const loadContacts = useCallback(async () => {
    setLoading(true);
    const res = await fetch(`/api/admin/contacts?status=${filter}&page=${page}`);
    if (res.ok) {
      const data = await res.json();
      setContacts(data.contacts);
      setTotal(data.total);
      setPages(data.pages);
    }
    setLoading(false);
  }, [filter, page]);

  useEffect(() => { loadStats(); }, [loadStats]);
  useEffect(() => { loadContacts(); }, [loadContacts]);

  const updateStatus = async (id: string, status: Status) => {
    setActionLoading(id + status);
    const res = await fetch("/api/admin/contacts", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (res.ok) {
      setContacts((prev) => prev.map((c) => c._id === id ? { ...c, status } : c));
      if (selected?._id === id) setSelected((prev) => prev ? { ...prev, status } : null);
      await loadStats();
      showToast(`Marked as ${status}`);
    } else {
      showToast("Action failed", "error");
    }
    setActionLoading(null);
  };

  const deleteContact = async (id: string) => {
    if (!confirm("Delete this inquiry permanently?")) return;
    setActionLoading(id + "delete");
    const res = await fetch("/api/admin/contacts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setContacts((prev) => prev.filter((c) => c._id !== id));
      if (selected?._id === id) setSelected(null);
      await loadStats();
      showToast("Inquiry deleted");
    } else {
      showToast("Delete failed", "error");
    }
    setActionLoading(null);
  };

  const logout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin/login");
  };

  const filteredContacts = contacts.filter((c) =>
    search ? (
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search) ||
      c.service.toLowerCase().includes(search.toLowerCase())
    ) : true
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .admin-root {
          min-height: 100vh;
          background: #F5F0DC;
          font-family: 'DM Sans', sans-serif;
          color: #2C1408;
          display: flex;
        }

        /* ── Sidebar ── */
        .sidebar {
          width: 230px;
          flex-shrink: 0;
          background: #2C1408;
          display: flex;
          flex-direction: column;
          padding: 0;
          position: fixed;
          top: 0; left: 0; bottom: 0;
          z-index: 30;
        }

        .sidebar-logo {
          padding: 24px 20px 20px;
          border-bottom: 1px solid rgba(212,175,55,0.15);
        }

        .sidebar-logo-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sidebar-logo-icon {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(212,175,55,0.12);
          border: 1px solid rgba(212,175,55,0.2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .sidebar-brand {
          font-family: 'Cinzel', serif;
          font-size: 12px;
          font-weight: 600;
          color: #D4AF37;
          letter-spacing: 0.04em;
          line-height: 1.4;
        }

        .sidebar-role {
          font-size: 10px;
          color: rgba(212,175,55,0.4);
          letter-spacing: 0.08em;
          margin-top: 2px;
        }

        .nav-section {
          padding: 16px 12px;
          flex: 1;
        }

        .nav-group-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(212,175,55,0.35);
          padding: 0 8px;
          margin-bottom: 6px;
          margin-top: 12px;
        }

        .nav-group-label:first-child { margin-top: 0; }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 10px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(245,239,214,0.5);
          cursor: pointer;
          transition: all 0.15s;
          border: 1px solid transparent;
          background: none;
          width: 100%;
          text-align: left;
          margin-bottom: 2px;
          text-decoration: none;
        }

        .nav-item:hover {
          color: rgba(245,239,214,0.85);
          background: rgba(212,175,55,0.07);
        }

        .nav-item.active {
          color: #F5EFD6;
          background: rgba(212,175,55,0.12);
          border-color: rgba(212,175,55,0.2);
        }

        .nav-item.active svg { color: #D4AF37; }

        .nav-badge {
          margin-left: auto;
          background: #D4AF37;
          color: #2C1408;
          font-size: 10px;
          font-weight: 700;
          padding: 1px 7px;
          border-radius: 10px;
        }

        .sidebar-bottom {
          padding: 12px;
          border-top: 1px solid rgba(212,175,55,0.1);
        }

        /* ── Main ── */
        .main-content {
          margin-left: 230px;
          flex: 1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* ── Topbar ── */
        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 32px;
          border-bottom: 1px solid #E8DFB8;
          background: #FDFAF0;
          position: sticky;
          top: 0;
          z-index: 20;
          gap: 16px;
        }

        .topbar-left h1 {
          font-family: 'Cinzel', serif;
          font-size: 17px;
          font-weight: 600;
          color: #2C1408;
          letter-spacing: 0.02em;
        }

        .topbar-left p {
          font-size: 12px;
          color: #A89660;
          margin-top: 1px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          border: 1.5px solid #E8DFB8;
          border-radius: 8px;
          padding: 7px 12px;
          min-width: 240px;
          transition: border-color 0.2s;
        }

        .search-box:focus-within {
          border-color: #D4AF37;
          box-shadow: 0 0 0 3px rgba(212,175,55,0.1);
        }

        .search-input {
          background: none; border: none; outline: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #2C1408;
          width: 100%;
        }

        .search-input::placeholder { color: #C4B88A; }

        /* ── Page body ── */
        .page-body { padding: 28px 32px; }

        /* ── Stats Grid ── */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 14px;
          margin-bottom: 28px;
        }

        .stat-card {
          background: #FDFAF0;
          border: 1.5px solid #E8DFB8;
          border-radius: 14px;
          padding: 20px 22px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .stat-card:hover {
          border-color: #D4AF37;
          box-shadow: 0 4px 16px rgba(212,175,55,0.1);
        }

        .stat-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 0 0 12px 12px;
          background: linear-gradient(90deg, transparent, var(--accent-color, #D4AF37), transparent);
          opacity: 0.4;
        }

        .stat-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
        }

        .stat-value {
          font-family: 'Cinzel', serif;
          font-size: 34px;
          font-weight: 700;
          color: #2C1408;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 12px;
          color: #A89660;
          font-weight: 500;
        }

        .stat-chip {
          position: absolute;
          top: 14px; right: 14px;
          font-size: 10px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(212,175,55,0.1);
          color: #CE8946;
          border: 1px solid rgba(212,175,55,0.2);
        }

        /* ── Service breakdown ── */
        .section-card {
          background: #FDFAF0;
          border: 1.5px solid #E8DFB8;
          border-radius: 14px;
          padding: 24px;
          margin-bottom: 24px;
        }

        .section-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 20px;
        }

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: 13px;
          font-weight: 600;
          color: #2C1408;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          display: flex; align-items: center; gap: 8px;
        }

        .section-title::before {
          content: '';
          display: block;
          width: 3px; height: 14px;
          border-radius: 2px;
          background: #D4AF37;
        }

        .section-sub { font-size: 12px; color: #A89660; }

        .service-row {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 12px;
        }

        .service-name {
          font-size: 12px;
          color: #4D2F0E;
          min-width: 180px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 500;
        }

        .service-bar-wrap {
          flex: 1;
          background: #EDE6C8;
          border-radius: 4px;
          height: 7px;
          overflow: hidden;
        }

        .service-bar {
          height: 100%;
          border-radius: 4px;
          background: linear-gradient(90deg, #2C1408, #CE8946);
          transition: width 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-count {
          font-size: 12px;
          font-weight: 700;
          color: #2C1408;
          min-width: 24px;
          text-align: right;
        }

        /* ── Filter bar ── */
        .filter-bar {
          display: flex; align-items: center; gap: 6px;
          margin-bottom: 16px; flex-wrap: wrap;
        }

        .filter-tab {
          padding: 7px 16px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          border: 1.5px solid #E8DFB8;
          background: #FDFAF0;
          color: #A89660;
          cursor: pointer;
          transition: all 0.15s;
          display: flex; align-items: center; gap: 6px;
        }

        .filter-tab:hover { border-color: #D4AF37; color: #2C1408; }

        .filter-tab.active {
          background: #2C1408;
          border-color: #2C1408;
          color: #F5EFD6;
        }

        .filter-count {
          font-size: 10px;
          font-weight: 700;
          background: rgba(44,20,8,0.08);
          color: #4D2F0E;
          padding: 1px 6px;
          border-radius: 5px;
        }

        .filter-tab.active .filter-count {
          background: rgba(245,239,214,0.15);
          color: #D4AF37;
        }

        /* ── Table ── */
        .table-card {
          background: #FDFAF0;
          border: 1.5px solid #E8DFB8;
          border-radius: 14px;
          overflow: hidden;
        }

        .table-wrap { overflow-x: auto; }

        table { width: 100%; border-collapse: collapse; min-width: 700px; }

        thead th {
          padding: 13px 16px;
          text-align: left;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #A89660;
          border-bottom: 1.5px solid #E8DFB8;
          background: #F5F0DC;
        }

        tbody tr {
          border-bottom: 1px solid #EDE6C8;
          transition: background 0.12s;
          cursor: pointer;
        }

        tbody tr:hover { background: rgba(212,175,55,0.05); }
        tbody tr:last-child { border-bottom: none; }

        tbody td {
          padding: 13px 16px;
          font-size: 13px;
          color: #4D2F0E;
          vertical-align: middle;
        }

        .td-name { font-weight: 600; color: #2C1408; }
        .td-email { font-size: 11px; color: #A89660; margin-top: 1px; }
        .td-service { font-size: 11px; color: #8A7040; max-width: 160px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .td-date { font-size: 11px; color: #A89660; white-space: nowrap; }

        /* ── Action buttons ── */
        .action-btn {
          padding: 4px 10px;
          border-radius: 6px;
          border: 1.5px solid;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s;
          display: inline-flex; align-items: center; gap: 4px;
          background: none;
        }

        .btn-read { border-color: #D4AF37; color: #CE8946; }
        .btn-read:hover { background: rgba(212,175,55,0.1); }

        .btn-replied { border-color: #4CAF50; color: #2E7D32; }
        .btn-replied:hover { background: rgba(76,175,80,0.08); }

        .btn-delete { border-color: #FFCDD2; color: #C62828; }
        .btn-delete:hover { background: rgba(198,40,40,0.06); border-color: #E53935; }

        .action-btn:disabled { opacity: 0.4; cursor: not-allowed; }

        /* ── Status badges ── */
        .status-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 6px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: inline-block;
        }

        .badge-new {
          background: rgba(212,175,55,0.12);
          color: #CE8946;
          border: 1px solid rgba(212,175,55,0.3);
        }

        .badge-read {
          background: rgba(44,20,8,0.07);
          color: #4D2F0E;
          border: 1px solid rgba(44,20,8,0.15);
        }

        .badge-replied {
          background: rgba(76,175,80,0.1);
          color: #2E7D32;
          border: 1px solid rgba(76,175,80,0.25);
        }

        /* ── Pagination ── */
        .pagination {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 20px;
          border-top: 1.5px solid #E8DFB8;
          background: #F5F0DC;
        }

        .page-info { font-size: 12px; color: #A89660; }

        .page-btns { display: flex; gap: 5px; }

        .page-btn {
          padding: 5px 12px;
          border-radius: 6px;
          border: 1.5px solid #E8DFB8;
          background: #FDFAF0;
          color: #A89660;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.15s;
        }

        .page-btn:hover:not(:disabled) { border-color: #D4AF37; color: #2C1408; }
        .page-btn:disabled { opacity: 0.35; cursor: not-allowed; }

        .page-btn.current {
          background: #2C1408;
          border-color: #2C1408;
          color: #F5EFD6;
          font-weight: 600;
        }

        /* ── Slide-over ── */
        .overlay {
          position: fixed; inset: 0;
          background: rgba(44,20,8,0.3);
          z-index: 40;
          backdrop-filter: blur(2px);
          animation: fadeIn 0.2s ease;
        }

        .slide-over {
          position: fixed;
          top: 0; right: 0; bottom: 0;
          width: 420px;
          max-width: 100vw;
          background: #FDFAF0;
          border-left: 1.5px solid #E8DFB8;
          z-index: 50;
          display: flex;
          flex-direction: column;
          animation: slideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }

        .so-header {
          display: flex; align-items: flex-start; justify-content: space-between;
          padding: 24px 24px 18px;
          border-bottom: 1.5px solid #E8DFB8;
          gap: 12px;
          background: #F5F0DC;
        }

        .so-name {
          font-family: 'Cinzel', serif;
          font-size: 18px;
          font-weight: 600;
          color: #2C1408;
          margin-bottom: 3px;
        }

        .so-service { font-size: 12px; color: #A89660; }

        .so-close {
          width: 32px; height: 32px;
          border-radius: 8px;
          border: 1.5px solid #E8DFB8;
          background: #fff;
          color: #A89660;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: all 0.15s;
        }
        .so-close:hover { border-color: #D4AF37; color: #2C1408; background: #FDFAF0; }

        .so-body { padding: 20px 24px; flex: 1; }

        .so-field { margin-bottom: 18px; }

        .so-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #A89660;
          margin-bottom: 5px;
        }

        .so-value { font-size: 14px; color: #2C1408; line-height: 1.6; }
        .so-value a { color: #CE8946; text-decoration: none; }
        .so-value a:hover { text-decoration: underline; }

        .so-message {
          background: #F5F0DC;
          border: 1.5px solid #E8DFB8;
          border-radius: 10px;
          padding: 14px;
          font-size: 13px;
          color: #4D2F0E;
          line-height: 1.75;
          white-space: pre-wrap;
        }

        .so-actions {
          padding: 16px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-top: 1.5px solid #E8DFB8;
        }

        .so-btn {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 1.5px solid;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s;
          display: flex; align-items: center; justify-content: center; gap: 7px;
          background: none;
        }

        .so-btn-read { border-color: #D4AF37; color: #CE8946; }
        .so-btn-read:hover { background: rgba(212,175,55,0.08); }

        .so-btn-replied { border-color: #4CAF50; color: #2E7D32; }
        .so-btn-replied:hover { background: rgba(76,175,80,0.06); }

        .so-btn-delete { border-color: #FFCDD2; color: #C62828; margin-top: 4px; }
        .so-btn-delete:hover { background: rgba(198,40,40,0.06); border-color: #E53935; }

        .so-btn:disabled { opacity: 0.4; cursor: not-allowed; }

        .so-contact-btns {
          display: flex; gap: 8px; flex-wrap: wrap;
          margin-top: 12px;
        }

        .so-contact-link {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.15s;
          border: 1.5px solid;
        }

        .so-contact-wa {
          border-color: rgba(37,211,102,0.3);
          color: #2E7D32;
          background: rgba(37,211,102,0.06);
        }
        .so-contact-wa:hover { background: rgba(37,211,102,0.1); border-color: rgba(37,211,102,0.5); }

        .so-contact-email {
          border-color: rgba(212,175,55,0.3);
          color: #CE8946;
          background: rgba(212,175,55,0.05);
        }
        .so-contact-email:hover { background: rgba(212,175,55,0.1); border-color: rgba(212,175,55,0.5); }

        /* ── Toast ── */
        .toast {
          position: fixed;
          bottom: 24px; right: 24px;
          padding: 11px 16px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          z-index: 100;
          animation: toastIn 0.25s ease;
          display: flex; align-items: center; gap: 8px;
          box-shadow: 0 8px 24px rgba(44,20,8,0.12);
          border: 1.5px solid;
        }

        .toast-success {
          background: #F0FFF4;
          border-color: rgba(76,175,80,0.3);
          color: #2E7D32;
        }

        .toast-error {
          background: #FFF5F5;
          border-color: rgba(229,57,53,0.3);
          color: #C62828;
        }

        @keyframes toastIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        /* ── Empty state ── */
        .empty-state {
          padding: 64px 24px;
          text-align: center;
        }

        .empty-state svg { width: 40px; height: 40px; color: #D4AF37; margin: 0 auto 12px; display: block; opacity: 0.4; }
        .empty-state p { font-size: 14px; color: #A89660; }
        .empty-state span { font-size: 12px; color: #C4B88A; }

        /* ── Skeleton ── */
        .skeleton {
          background: linear-gradient(90deg, #EDE6C8 25%, #F5F0DC 50%, #EDE6C8 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s ease-in-out infinite;
          border-radius: 4px;
        }

        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .sidebar { display: none; }
          .main-content { margin-left: 0; }
          .page-body { padding: 16px; }
          .topbar { padding: 12px 16px; }
          .slide-over { width: 100vw; }
        }
      `}</style>

      <div className="admin-root">
        {/* ── Sidebar ── */}
        <aside className="sidebar">
          <div className="sidebar-logo">
            <div className="sidebar-logo-row">
              <div className="sidebar-logo-icon" style={{ overflow: "hidden", padding: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ca-india-logo.png" alt="CA India Logo" style={{ width: 36, height: 36, objectFit: "contain", display: "block" }} />
              </div>
              <div>
                <div className="sidebar-brand">CA Raees<br />Kadiwal & Co.</div>
                <div className="sidebar-role">Admin Panel</div>
              </div>
            </div>
          </div>

          <nav className="nav-section">
            <div className="nav-group-label">Navigation</div>
            <button
              className={`nav-item ${activeTab === "dashboard" ? "active" : ""}`}
              onClick={() => setActiveTab("dashboard")}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              Dashboard
            </button>
            <button
              className={`nav-item ${activeTab === "inquiries" ? "active" : ""}`}
              onClick={() => setActiveTab("inquiries")}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Inquiries
              {stats && stats.newCount > 0 && (
                <span className="nav-badge">{stats.newCount}</span>
              )}
            </button>

            <div className="nav-group-label">Other</div>
            <a href="/" target="_blank" className="nav-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              View Website
            </a>
          </nav>

          <div className="sidebar-bottom">
            <button className="nav-item" onClick={logout} style={{ color: "rgba(245,120,100,0.7)" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Logout
            </button>
          </div>
        </aside>

        {/* ── Main content ── */}
        <div className="main-content">
          <header className="topbar">
            <div className="topbar-left">
              <h1>{activeTab === "dashboard" ? "Dashboard" : "Client Inquiries"}</h1>
              <p>{new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
            </div>
            {activeTab === "inquiries" && (
              <div className="search-box">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A89660" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  className="search-input"
                  placeholder="Search name, email, service..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            )}
          </header>

          <div className="page-body">
            {/* ── Dashboard Tab ── */}
            {activeTab === "dashboard" && (
              <>
                <div className="stats-grid">
                  {[
                    { label: "Total Inquiries", value: stats?.total ?? 0, icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", iconBg: "#FFF8E1", iconColor: "#CE8946", chip: `${stats?.weekCount ?? 0} this week`, accent: "#D4AF37" },
                    { label: "New / Unread", value: stats?.newCount ?? 0, icon: "M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0", iconBg: "rgba(212,175,55,0.1)", iconColor: "#D4AF37", chip: "Needs attention", accent: "#D4AF37" },
                    { label: "Replied", value: stats?.repliedCount ?? 0, icon: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z", iconBg: "rgba(76,175,80,0.1)", iconColor: "#2E7D32", chip: "Completed", accent: "#4CAF50" },
                    { label: "Today", value: stats?.todayCount ?? 0, icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z", iconBg: "rgba(44,20,8,0.07)", iconColor: "#4D2F0E", chip: "Today's leads", accent: "#CE8946" },
                  ].map((s) => (
                    <div key={s.label} className="stat-card" style={{ "--accent-color": s.accent } as React.CSSProperties}>
                      <div className="stat-icon" style={{ background: s.iconBg }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={s.iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d={s.icon} />
                        </svg>
                      </div>
                      <div className="stat-value">{s.value}</div>
                      <div className="stat-label">{s.label}</div>
                      <span className="stat-chip">{s.chip}</span>
                    </div>
                  ))}
                </div>

                {stats && stats.byService.length > 0 && (
                  <div className="section-card">
                    <div className="section-head">
                      <span className="section-title">Top Services Requested</span>
                      <span className="section-sub">From {stats.total} total inquiries</span>
                    </div>
                    {stats.byService.map((s) => (
                      <div key={s._id} className="service-row">
                        <div className="service-name">{s._id}</div>
                        <div className="service-bar-wrap">
                          <div className="service-bar" style={{ width: `${Math.round((s.count / stats.total) * 100)}%` }} />
                        </div>
                        <div className="service-count">{s.count}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div style={{ textAlign: "center", marginTop: 4 }}>
                  <button
                    onClick={() => setActiveTab("inquiries")}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "10px 24px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                      background: "#2C1408", color: "#F5EFD6", border: "none", cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(44,20,8,0.15)", transition: "all 0.15s",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    View All Inquiries
                  </button>
                </div>
              </>
            )}

            {/* ── Inquiries Tab ── */}
            {activeTab === "inquiries" && (
              <>
                <div className="filter-bar">
                  {(["all", "new", "read", "replied"] as FilterStatus[]).map((f) => {
                    const counts: Record<FilterStatus, number | undefined> = {
                      all: stats?.total,
                      new: stats?.newCount,
                      read: undefined,
                      replied: stats?.repliedCount,
                    };
                    return (
                      <button
                        key={f}
                        className={`filter-tab ${filter === f ? "active" : ""}`}
                        onClick={() => { setFilter(f); setPage(1); }}
                      >
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                        {counts[f] !== undefined && (
                          <span className="filter-count">{counts[f]}</span>
                        )}
                      </button>
                    );
                  })}
                  <button
                    className="filter-tab"
                    style={{ marginLeft: "auto" }}
                    onClick={() => { loadContacts(); loadStats(); }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 4v6h-6M1 20v-6h6" />
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                    </svg>
                    Refresh
                  </button>
                </div>

                <div className="table-card">
                  <div className="table-wrap">
                    <table>
                      <thead>
                        <tr>
                          <th>Client</th>
                          <th>Service</th>
                          <th>Phone</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          Array.from({ length: 6 }).map((_, i) => (
                            <tr key={i} style={{ cursor: "default" }}>
                              {Array.from({ length: 6 }).map((_, j) => (
                                <td key={j}>
                                  <div className="skeleton" style={{ height: 13, width: j === 5 ? 80 : "70%" }} />
                                </td>
                              ))}
                            </tr>
                          ))
                        ) : filteredContacts.length === 0 ? (
                          <tr style={{ cursor: "default" }}>
                            <td colSpan={6}>
                              <div className="empty-state">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                <p>No inquiries found</p>
                                <span>Try a different filter or check back later</span>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          filteredContacts.map((c) => (
                            <tr key={c._id} onClick={() => setSelected(c)}>
                              <td>
                                <div className="td-name">{c.name}</div>
                                <div className="td-email">{c.email}</div>
                              </td>
                              <td><div className="td-service">{c.service}</div></td>
                              <td style={{ fontSize: 13, color: "#4D2F0E" }}>{c.phone}</td>
                              <td><div className="td-date">{formatDate(c.createdAt)}</div></td>
                              <td><StatusBadge status={c.status} /></td>
                              <td onClick={(e) => e.stopPropagation()}>
                                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                                  {c.status !== "read" && (
                                    <button className="action-btn btn-read" disabled={!!actionLoading} onClick={() => updateStatus(c._id, "read")}>Read</button>
                                  )}
                                  {c.status !== "replied" && (
                                    <button className="action-btn btn-replied" disabled={!!actionLoading} onClick={() => updateStatus(c._id, "replied")}>Replied</button>
                                  )}
                                  <button
                                    className="action-btn btn-delete"
                                    disabled={!!actionLoading}
                                    onClick={() => deleteContact(c._id)}
                                  >
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <polyline points="3 6 5 6 21 6" />
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>

                  {pages > 1 && (
                    <div className="pagination">
                      <span className="page-info">
                        Showing {Math.min((page - 1) * 20 + 1, total)}–{Math.min(page * 20, total)} of {total}
                      </span>
                      <div className="page-btns">
                        <button className="page-btn" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>← Prev</button>
                        {Array.from({ length: pages }, (_, i) => i + 1)
                          .filter((p) => p === 1 || p === pages || Math.abs(p - page) <= 1)
                          .map((p) => (
                            <button key={p} className={`page-btn ${p === page ? "current" : ""}`} onClick={() => setPage(p)}>{p}</button>
                          ))}
                        <button className="page-btn" disabled={page === pages} onClick={() => setPage((p) => p + 1)}>Next →</button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── Slide-over panel ── */}
        {selected && (
          <>
            <div className="overlay" onClick={() => setSelected(null)} />
            <div className="slide-over">
              <div className="so-header">
                <div>
                  <div className="so-name">{selected.name}</div>
                  <div className="so-service">{selected.service}</div>
                  <div style={{ marginTop: 8 }}><StatusBadge status={selected.status} /></div>
                </div>
                <button className="so-close" onClick={() => setSelected(null)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="so-body">
                <div className="so-field">
                  <div className="so-label">Phone</div>
                  <div className="so-value"><a href={`tel:${selected.phone}`}>{selected.phone}</a></div>
                </div>
                <div className="so-field">
                  <div className="so-label">Email</div>
                  <div className="so-value"><a href={`mailto:${selected.email}`}>{selected.email}</a></div>
                </div>
                <div className="so-field">
                  <div className="so-label">Service Required</div>
                  <div className="so-value">{selected.service}</div>
                </div>
                <div className="so-field">
                  <div className="so-label">Received On</div>
                  <div className="so-value" style={{ fontSize: 13, color: "#A89660" }}>{formatDate(selected.createdAt)}</div>
                </div>
                <div className="so-field">
                  <div className="so-label">Message</div>
                  <div className="so-message">{selected.message}</div>
                </div>

                <div className="so-contact-btns">
                  <a
                    href={`https://wa.me/91${selected.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`Hello ${selected.name}, thank you for your inquiry about "${selected.service}". We will assist you shortly.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="so-contact-link so-contact-wa"
                  >
                    <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${selected.email}?subject=Re: Your inquiry about ${selected.service}`}
                    className="so-contact-link so-contact-email"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Email
                  </a>
                </div>
              </div>

              <div className="so-actions">
                {selected.status !== "read" && (
                  <button className="so-btn so-btn-read" disabled={!!actionLoading} onClick={() => updateStatus(selected._id, "read")}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    Mark as Read
                  </button>
                )}
                {selected.status !== "replied" && (
                  <button className="so-btn so-btn-replied" disabled={!!actionLoading} onClick={() => updateStatus(selected._id, "replied")}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                    Mark as Replied
                  </button>
                )}
                <button className="so-btn so-btn-delete" disabled={!!actionLoading} onClick={() => deleteContact(selected._id)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                  </svg>
                  Delete Inquiry
                </button>
              </div>
            </div>
          </>
        )}

        {/* ── Toast ── */}
        {toast && (
          <div className={`toast toast-${toast.type}`}>
            {toast.type === "success" ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
            )}
            {toast.msg}
          </div>
        )}
      </div>
    </>
  );
}
