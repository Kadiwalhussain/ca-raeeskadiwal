"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "/blog" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

/** On sub-pages, hash links must point back to the landing page. */
function resolveHref(href: string, onHome: boolean): string {
  if (!href.startsWith("#")) return href;
  return onHome ? href : `/${href}`;
}

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!onHome) return;
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = navLinks
        .filter((l) => l.href.startsWith("#"))
        .map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isLight = solid || scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isLight
            ? "backdrop-blur-lg shadow-[0_1px_0_0_rgba(212,175,55,0.15)]"
            : "bg-transparent"
        )}
        style={isLight ? { backgroundColor: "rgba(255,254,245,0.97)" } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ── Logo ── */}
            <Link href={resolveHref("#home", onHome)} className="flex items-center gap-3 group shrink-0">
              <div className="relative w-9 h-9 shrink-0">
                <Image
                  src="/ca-india-logo.png"
                  alt="CA India Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className={cn(
                    "font-heading font-bold text-sm sm:text-[15px] leading-tight transition-colors duration-300",
                    isLight ? "" : "text-white"
                  )}
                  style={isLight ? { color: "var(--navy)" } : {}}
                >
                  Raees Kadiwal &amp; Co.
                </span>
                <span
                  className={cn(
                    "text-[10px] font-medium tracking-widest uppercase hidden sm:block transition-colors duration-300",
                    isLight ? "text-gray-400" : "text-white/60"
                  )}
                >
                  Chartered Accountants
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => {
                const isPage = link.href.startsWith("/");
                const isActive = isPage
                  ? pathname.startsWith(link.href)
                  : onHome && activeSection === link.href.replace("#", "");
                return (
                  <Link
                    key={link.label}
                    href={resolveHref(link.href, onHome)}
                    className={cn(
                      "text-sm font-medium relative py-1 transition-colors duration-200 group",
                      isLight
                        ? isActive
                          ? "text-[var(--navy)]"
                          : "text-gray-500 hover:text-[var(--navy)]"
                        : isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all duration-250",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                      style={{ backgroundColor: "var(--gold)" }}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex flex-col gap-0.5 items-end">
                <a
                  href="tel:+919833771177"
                  className={cn(
                    "text-[11px] font-medium flex items-center gap-1.5 transition-colors duration-200",
                    isLight ? "text-gray-500 hover:text-[var(--navy)]" : "text-white/70 hover:text-white"
                  )}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>GST: +91 98337 71177</span>
                </a>
                <a
                  href="tel:+919967839778"
                  className={cn(
                    "text-[11px] font-medium flex items-center gap-1.5 transition-colors duration-200",
                    isLight ? "text-gray-500 hover:text-[var(--navy)]" : "text-white/70 hover:text-white"
                  )}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Tax: +91 99678 39778</span>
                </a>
              </div>
              <Link
                href={resolveHref("#contact", onHome)}
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "font-semibold px-5 rounded-lg text-sm hover:opacity-90 transition-opacity"
                )}
                style={
                  isLight
                    ? { backgroundColor: "var(--navy)", borderColor: "var(--navy)", color: "white" }
                    : { backgroundColor: "var(--gold)", borderColor: "var(--gold)", color: "var(--navy)" }
                }
              >
                Book Free Consultation
              </Link>
            </div>

            {/* ── Mobile toggle ── */}
            <button
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors",
                isLight ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
              )}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="border-t shadow-xl" style={{ backgroundColor: "#FFFEF5", borderColor: "rgba(212,175,55,0.2)" }}>
            <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
              {navLinks.map((link) => {
                const isPage = link.href.startsWith("/");
                const isActive = isPage
                  ? pathname.startsWith(link.href)
                  : onHome && activeSection === link.href.replace("#", "");
                return (
                  <Link
                    key={link.label}
                    href={resolveHref(link.href, onHome)}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-sm font-medium py-3 px-3 rounded-lg flex items-center justify-between transition-colors",
                      isActive
                        ? "text-[var(--navy)]"
                        : "text-gray-700 hover:text-[var(--navy)]"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "var(--gold)" }}
                      />
                    )}
                  </Link>
                );
              })}
              <div className="py-3 border-t border-gray-100 mt-1 flex flex-col gap-2">
                <a
                  href="tel:+919833771177"
                  className="flex items-center gap-2 text-sm text-gray-600 px-3 py-1.5"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>GST: +91 98337 71177</span>
                </a>
                <a
                  href="tel:+919967839778"
                  className="flex items-center gap-2 text-sm text-gray-600 px-3 py-1.5"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Tax / Audit: +91 99678 39778</span>
                </a>
                <Link
                  href={resolveHref("#contact", onHome)}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "justify-center font-semibold rounded-lg text-white"
                  )}
                  style={{ backgroundColor: "var(--navy)", borderColor: "var(--navy)" }}
                >
                  Book Free Consultation
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
