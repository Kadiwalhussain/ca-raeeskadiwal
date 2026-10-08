import Link from "next/link";

const ledger = [
  { value: "17", suffix: "+", label: "Years in practice" },
  { value: "500", suffix: "+", label: "Clients served" },
  { value: "100", suffix: "%", label: "Compliance record" },
  { value: "₹50", suffix: "Cr+", label: "Tax saved for clients" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, #170902 0%, #2C1408 55%, #3A2410 100%)",
      }}
    >
      {/* Fine engraved frame — like the border of a share certificate */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-4 sm:inset-6 rounded-[4px] hidden sm:block"
        style={{ border: "1px solid rgba(212,175,55,0.16)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-6 sm:inset-8 rounded-[2px] hidden sm:block"
        style={{ border: "1px solid rgba(212,175,55,0.08)" }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">

          {/* ── Left: editorial statement ── */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: "0.05s" }}>
              <span className="h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
              <span className="text-sm font-medium tracking-wide text-[#E6D9A8]">
                Raees Kadiwal &amp; Co., Chartered Accountants
              </span>
            </div>

            <h1
              className="font-heading text-white font-medium leading-[1.04] mb-8 animate-fade-up"
              style={{
                fontSize: "clamp(2.5rem, 5.4vw, 4.4rem)",
                animationDelay: "0.12s",
              }}
            >
              Clarity in your books,
              <br />
              confidence in every&nbsp;filing.
            </h1>

            <p
              className="text-[15px] sm:text-lg leading-relaxed text-[#D8CBB0] max-w-xl mb-10 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              For over 17 years, individuals, founders and NRIs across India have
              trusted us with their income tax, GST, audit and compliance — so the
              numbers never get in the way of the next decision.
            </p>

            <div
              className="flex flex-wrap items-center gap-4 mb-10 animate-fade-up"
              style={{ animationDelay: "0.28s" }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md px-7 py-3.5 text-[15px] font-semibold transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--gold)", color: "#2C1408" }}
              >
                Book a free consultation
              </Link>
              <a
                href={`https://wa.me/919967839778?text=${encodeURIComponent("Hello, I'd like to inquire about your CA services")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-[15px] font-medium text-white transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.22)" }}
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message us on WhatsApp
              </a>
            </div>

            <p
              className="text-sm text-[#A8936A] animate-fade-up"
              style={{ animationDelay: "0.36s" }}
            >
              ICAI-registered firm in Malad East, Mumbai · Serving clients Pan-India
            </p>
          </div>

          {/* ── Right: the "certificate" — seal + ledger of results ── */}
          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div
              className="relative rounded-lg p-8 sm:p-9"
              style={{
                backgroundColor: "#F7F2E2",
                boxShadow: "0 30px 60px -20px rgba(0,0,0,0.55)",
              }}
            >
              {/* inner engraved border */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-3 rounded"
                style={{ border: "1px solid rgba(44,20,8,0.12)" }}
              />

              <div className="relative flex items-start justify-between mb-7">
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.18em] text-[#A8936A] uppercase">
                    Established
                  </div>
                  <div
                    className="font-heading text-5xl font-semibold text-[#2C1408] nums leading-none mt-1"
                  >
                    2007
                  </div>
                </div>
                {/* Gold seal */}
                <svg width="66" height="66" viewBox="0 0 100 100" aria-hidden>
                  <circle cx="50" cy="50" r="47" fill="none" stroke="#C9A227" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#C9A227" strokeWidth="0.75" strokeDasharray="2 3" />
                  <circle cx="50" cy="50" r="30" fill="#2C1408" />
                  <text x="50" y="47" textAnchor="middle" fill="#C9A227" fontFamily="serif" fontSize="18" fontWeight="700">RK</text>
                  <text x="50" y="62" textAnchor="middle" fill="#C9A227" fontFamily="serif" fontSize="7" letterSpacing="1">&amp; CO.</text>
                </svg>
              </div>

              <div className="relative h-px rule-gold mb-1" />

              <dl className="relative">
                {ledger.map((row, i) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between py-3.5"
                    style={{
                      borderBottom:
                        i < ledger.length - 1 ? "1px solid rgba(44,20,8,0.08)" : "none",
                    }}
                  >
                    <dt className="text-sm text-[#6B5938]">{row.label}</dt>
                    <dd className="font-heading text-2xl font-semibold text-[#2C1408] nums">
                      {row.value}
                      <span className="text-[var(--caramel)]">{row.suffix}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
