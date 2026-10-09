import Link from "next/link";
import Image from "next/image";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#141821" }}>
      <Image
        src="/images/cta-boardroom.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(15,18,26,0.95) 0%, rgba(20,24,33,0.86) 50%, rgba(31,36,48,0.66) 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
            <span className="text-sm font-medium tracking-wide text-[#C8D0DB]">
              Let&apos;s work together
            </span>
          </div>
          <h2
            className="font-heading font-medium text-white leading-[1.1] mb-5"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            A quick conversation is usually all it takes
          </h2>
          <p className="text-[#C3CCD8] text-lg leading-relaxed mb-9 max-w-xl">
            Tell us where you are and what you need. We&apos;ll tell you exactly how
            we can help, what it will cost, and what the next step is — at no charge.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md px-7 py-3.5 text-[15px] font-semibold transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#EEF1F4", color: "#1F2430" }}
            >
              Book a free consultation
            </Link>
            <a
              href="tel:+919967839778"
              className="inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-[15px] font-medium text-white transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.28)" }}
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +91 99678 39778
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
