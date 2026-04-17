import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const stats = [
  { value: "17+", label: "Years of Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "100%", label: "Compliance Rate" },
  { value: "₹50Cr+", label: "Tax Savings" },
];

const trustBadges = [
  "ICAI Registered",
  "GST Certified",
  "Pan-India Service",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1A0800 0%, #2C1408 40%, #4D2F0E 70%, #2C1408 100%)",
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* Gold top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 50%, var(--gold) 100%)",
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.07]"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.05]"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-44 w-full">
        <div className="max-w-3xl">

          {/* Top badge */}
          <div className="inline-flex items-center gap-2 mb-7">
            <Badge
              className="text-xs font-semibold px-3.5 py-1.5 rounded-full border"
              style={{
                backgroundColor: "rgba(212,175,55,0.14)",
                borderColor: "rgba(212,175,55,0.45)",
                color: "var(--gold-light)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 inline-block animate-pulse"
              />
              Accepting New Clients · Free Consultation Available
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-white leading-[1.12] mb-6 tracking-tight">
            Simplifying Tax.{" "}
            <br className="hidden sm:block" />
            <span
              className="relative inline-block"
              style={{ color: "var(--gold)" }}
            >
              Securing Your Financial Future.
              <span
                className="absolute -bottom-2 left-0 right-0 h-px opacity-30 hidden lg:block"
                style={{ backgroundColor: "var(--gold)" }}
              />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-gray-300/90 leading-relaxed max-w-2xl mb-10">
            Trusted Chartered Accountant firm in Mumbai with{" "}
            <strong className="text-white font-semibold">17+ years</strong> of
            expertise in ITR Filing, GST Compliance, Audit &amp; Financial
            Advisory. We handle the complexity — you focus on growth.
          </p>

          {/* CTA group */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "font-bold px-8 rounded-lg text-base hover:opacity-92 transition-all shadow-lg shadow-amber-900/20"
              )}
              style={{
                backgroundColor: "var(--gold)",
                borderColor: "var(--gold)",
                color: "var(--navy)",
              }}
            >
              Book Free Consultation
            </Link>
            <a
              href={`https://wa.me/919967839778?text=${encodeURIComponent("Hello, I want to inquire about your CA services")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "font-semibold px-7 rounded-lg text-sm bg-transparent border-white/25 text-white hover:bg-white/10 transition-colors flex items-center gap-2"
              )}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mb-14">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium"
              >
                <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {badge}
              </span>
            ))}
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8 border-t"
            style={{ borderColor: "rgba(212,175,55,0.2)" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="font-heading text-2xl sm:text-3xl font-bold"
                  style={{ color: "var(--gold)" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400/80 font-medium leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-[10px] text-white tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
