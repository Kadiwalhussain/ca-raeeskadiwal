import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Income Tax Filing", href: "/#services" },
  { label: "GST Compliance", href: "/#services" },
  { label: "Audit & Assurance", href: "/#services" },
  { label: "Company Registration", href: "/#services" },
  { label: "Tax Planning", href: "/#services" },
  { label: "NRI Taxation", href: "/#services" },
];

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/#about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ca-raees-kadiwal-28737835/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/919967839778?text=${encodeURIComponent("Hello, I want to inquire about your CA services")}`,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:raeesrahim@gmail.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--navy)" }} className="text-white">

      {/* ── Pre-footer CTA strip ── */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(255,255,255,0.07)", backgroundColor: "#161A22" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p
              className="font-heading font-bold text-lg sm:text-xl mb-1"
              style={{ color: "#C3CCD8" }}
            >
              Ready to simplify your finances?
            </p>
            <p className="text-sm text-gray-400">
              Book a free consultation today — zero commitment, expert guidance.
            </p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#EEF1F4", color: "var(--navy)" }}
          >
            Book Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Gold top border */}
      <div className="h-px" style={{ backgroundColor: "rgba(94, 110, 130,0.4)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 shrink-0 bg-white rounded-lg p-1">
                <Image
                  src="/ca-india-logo.png"
                  alt="CA India Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-semibold text-sm text-white leading-tight">
                  Raees Kadiwal &amp; Co.
                </span>
                <span className="text-[10px] text-gray-500 tracking-widest uppercase">
                  Chartered Accountants
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              17+ years of trusted CA expertise in taxation, GST, audit, and
              financial advisory across India. ICAI registered firm.
            </p>

            {/* Social */}
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/8 hover:bg-white/15 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-heading font-semibold text-xs mb-5 tracking-widest uppercase"
              style={{ color: "#C3CCD8" }}
            >
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0 group-hover:bg-[var(--gold)] transition-colors"
                      style={{ backgroundColor: "rgba(94, 110, 130,0.5)" }}
                    />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-heading font-semibold text-xs mb-5 tracking-widest uppercase"
              style={{ color: "#C3CCD8" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0 group-hover:bg-[var(--gold)] transition-colors"
                      style={{ backgroundColor: "rgba(94, 110, 130,0.5)" }}
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-heading font-semibold text-xs mb-5 tracking-widest uppercase"
              style={{ color: "#C3CCD8" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">
                  Shop No. 10, Fatima Tower, Near Noorani Masjid,<br />
                  Pathanwadi, Rani Sati Marg, Malad East,<br />
                  Mumbai – 400097, Maharashtra
                </span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:raeesrahim@gmail.com" className="hover:text-white transition-colors break-all">
                  raeesrahim@gmail.com
                </a>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919833771177" className="hover:text-white transition-colors">
                    +91 98337 71177
                    <span className="text-xs text-gray-600 ml-1">(GST)</span>
                  </a>
                  <a href="tel:+919967839778" className="hover:text-white transition-colors">
                    +91 99678 39778
                    <span className="text-xs text-gray-600 ml-1">(Tax / Audit)</span>
                  </a>
                </div>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon – Sat: 9 AM – 7 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs">
            &copy; {year} Raees Kadiwal &amp; Co. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            ICAI Registered Firm · Mumbai, Maharashtra · India
          </p>
        </div>
      </div>
    </footer>
  );
}
