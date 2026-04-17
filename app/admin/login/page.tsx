"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setError("Incorrect password. Access denied.");
        setPassword("");
      }
    } catch {
      setError("Connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .login-root {
          min-height: 100vh;
          background: #F5F0DC;
          display: flex;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }

        /* Left decorative panel */
        .login-left {
          width: 420px;
          flex-shrink: 0;
          background: #2C1408;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 48px 44px;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) { .login-left { display: none; } }

        .login-left::before {
          content: '';
          position: absolute;
          top: -120px; right: -120px;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .login-left::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(206,137,70,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .left-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .left-logo-icon {
          width: 44px; height: 44px;
          border-radius: 10px;
          background: rgba(212,175,55,0.15);
          border: 1px solid rgba(212,175,55,0.25);
          display: flex; align-items: center; justify-content: center;
        }

        .left-logo-text {
          font-family: 'Cinzel', serif;
          font-size: 13px;
          font-weight: 600;
          color: #D4AF37;
          letter-spacing: 0.04em;
          line-height: 1.4;
        }

        .left-hero {
          position: relative; z-index: 1;
        }

        .left-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(212,175,55,0.6);
          margin-bottom: 16px;
          display: flex; align-items: center; gap: 8px;
        }

        .left-eyebrow::before {
          content: '';
          display: block;
          width: 24px; height: 1px;
          background: rgba(212,175,55,0.4);
        }

        .left-title {
          font-family: 'Cinzel', serif;
          font-size: 28px;
          font-weight: 700;
          color: #F5EFD6;
          line-height: 1.35;
          margin-bottom: 20px;
        }

        .left-title span { color: #D4AF37; }

        .left-desc {
          font-size: 14px;
          color: rgba(245,239,214,0.5);
          line-height: 1.8;
        }

        .left-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          position: relative; z-index: 1;
        }

        .left-stat {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(212,175,55,0.12);
          border-radius: 10px;
          padding: 14px;
        }

        .left-stat-num {
          font-family: 'Cinzel', serif;
          font-size: 22px;
          font-weight: 700;
          color: #D4AF37;
          margin-bottom: 2px;
        }

        .left-stat-lbl {
          font-size: 11px;
          color: rgba(245,239,214,0.4);
        }

        /* Right form panel */
        .login-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          background: #FDFAF0;
        }

        .login-card {
          width: 100%;
          max-width: 400px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .login-card.mounted { opacity: 1; transform: translateY(0); }

        .card-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(212,175,55,0.1);
          border: 1px solid rgba(212,175,55,0.25);
          border-radius: 20px;
          padding: 5px 12px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #CE8946;
          margin-bottom: 24px;
        }

        .card-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #D4AF37;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .card-title {
          font-family: 'Cinzel', serif;
          font-size: 26px;
          font-weight: 700;
          color: #2C1408;
          margin-bottom: 6px;
          letter-spacing: 0.01em;
        }

        .card-subtitle {
          font-size: 14px;
          color: #8A7A58;
          margin-bottom: 36px;
          line-height: 1.6;
        }

        .field-group { margin-bottom: 20px; }

        .field-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: #4D2F0E;
          margin-bottom: 7px;
          letter-spacing: 0.02em;
        }

        .field-wrap { position: relative; }

        .field-input {
          width: 100%;
          background: #fff;
          border: 1.5px solid #E8DFB8;
          border-radius: 10px;
          padding: 12px 44px 12px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #2C1408;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .field-input::placeholder { color: #C4B88A; }

        .field-input:focus {
          border-color: #D4AF37;
          box-shadow: 0 0 0 3px rgba(212,175,55,0.12);
        }

        .field-input.error-input {
          border-color: #E53935;
          box-shadow: 0 0 0 3px rgba(229,57,53,0.08);
        }

        .field-toggle {
          position: absolute; right: 13px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          color: #A89660; cursor: pointer;
          padding: 2px; display: flex;
          transition: color 0.15s;
        }
        .field-toggle:hover { color: #2C1408; }

        .error-box {
          display: flex; align-items: center; gap: 8px;
          background: #FFF5F5;
          border: 1px solid rgba(229,57,53,0.25);
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 13px;
          color: #C62828;
          margin-bottom: 20px;
        }

        .submit-btn {
          width: 100%;
          padding: 13px;
          border-radius: 10px;
          border: none;
          background: #2C1408;
          color: #F5EFD6;
          font-family: 'Cinzel', serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 4px 16px rgba(44,20,8,0.18);
        }

        .submit-btn:hover:not(:disabled) {
          background: #4D2F0E;
          box-shadow: 0 6px 20px rgba(44,20,8,0.25);
          transform: translateY(-1px);
        }

        .submit-btn:active:not(:disabled) { transform: translateY(0); }
        .submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }

        .spinner {
          width: 15px; height: 15px;
          border: 2px solid rgba(245,239,214,0.3);
          border-top-color: #F5EFD6;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .divider {
          display: flex; align-items: center; gap: 12px;
          margin: 24px 0 20px;
        }
        .divider-line { flex: 1; height: 1px; background: #E8DFB8; }
        .divider-text { font-size: 11px; color: #C4B88A; letter-spacing: 0.06em; }

        .gold-bar {
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, #D4AF37, #CE8946, #D4AF37);
          margin-bottom: 32px;
          width: 48px;
        }

        .footer-note {
          text-align: center;
          margin-top: 20px;
          font-size: 11px;
          color: #C4B88A;
        }
      `}</style>

      <div className="login-root">
        {/* Left decorative panel */}
        <div className="login-left">
          <div className="left-logo">
            <div className="left-logo-icon" style={{ overflow: "hidden", padding: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ca-india-logo.png" alt="CA India Logo" style={{ width: 36, height: 36, objectFit: "contain", display: "block" }} />
            </div>
            <div className="left-logo-text">CA Raees<br />Kadiwal & Co.</div>
          </div>

          <div className="left-hero">
            <div className="left-eyebrow">Admin Portal</div>
            <h1 className="left-title">
              Manage your<br /><span>client inquiries</span><br />with ease.
            </h1>
            <p className="left-desc">
              Track leads, respond to clients, and monitor your firm's growth — all in one place.
            </p>
          </div>

          <div className="left-stats">
            {[
              { num: "17+", lbl: "Years of Trust" },
              { num: "500+", lbl: "Happy Clients" },
              { num: "16", lbl: "Services Offered" },
              { num: "100%", lbl: "Compliance Rate" },
            ].map((s) => (
              <div key={s.lbl} className="left-stat">
                <div className="left-stat-num">{s.num}</div>
                <div className="left-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right form panel */}
        <div className="login-right">
          <div className={`login-card ${mounted ? "mounted" : ""}`}>
            <div className="card-badge">
              <span className="card-badge-dot" />
              Secure Access
            </div>
            <div className="gold-bar" />
            <h2 className="card-title">Welcome back</h2>
            <p className="card-subtitle">Sign in to the admin dashboard to manage your client inquiries and firm data.</p>

            {error && (
              <div className="error-box">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="field-group">
                <label className="field-label" htmlFor="password">Admin Password</label>
                <div className="field-wrap">
                  <input
                    id="password"
                    type={showPass ? "text" : "password"}
                    className={`field-input${error ? " error-input" : ""}`}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(""); }}
                    autoFocus
                    required
                  />
                  <button type="button" className="field-toggle" onClick={() => setShowPass((v) => !v)} tabIndex={-1}>
                    {showPass ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button type="submit" className="submit-btn" disabled={loading || !password}>
                {loading ? (
                  <><span className="spinner" /> Verifying...</>
                ) : (
                  <>
                    Enter Dashboard
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            <p className="footer-note">CA Raees Kadiwal & Co. · Authorized personnel only</p>
          </div>
        </div>
      </div>
    </>
  );
}
