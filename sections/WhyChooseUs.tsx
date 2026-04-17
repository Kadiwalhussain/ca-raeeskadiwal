import { Badge } from "@/components/ui/badge";

const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: "17+",
    title: "Years of Experience",
    description:
      "Over 17 years of deep expertise in Indian taxation law, GST, and corporate compliance. We've seen every edge case.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    stat: "ICAI",
    title: "Certified Expert CA Team",
    description:
      "Our team of qualified Chartered Accountants is certified by ICAI and stays current with every regulatory change.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stat: "100%",
    title: "Compliance Assurance",
    description:
      "Zero tolerance for errors. Every filing is reviewed and verified before submission — on time, every time.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: "48hr",
    title: "Fast Turnaround",
    description:
      "Most standard filings completed within 48 hours. No backlogs, no delays — your deadlines are ours.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    stat: "1-on-1",
    title: "Personalised Advice",
    description:
      "You speak directly with your assigned CA — not a call centre. Your business gets the attention it deserves.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    stat: "₹50Cr+",
    title: "Tax Savings Delivered",
    description:
      "Proactive planning has saved our clients over ₹50 Crore in legitimate tax outgo over the years.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1A0800 0%, #2C1408 40%, #4D2F0E 70%, #2C1408 100%)",
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: "rgba(212,175,55,0.4)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge
            className="mb-4 text-xs font-semibold px-3 py-1 rounded-full border"
            style={{
              backgroundColor: "rgba(212,175,55,0.15)",
              borderColor: "rgba(212,175,55,0.45)",
              color: "var(--gold-light)",
            }}
          >
            Why Clients Trust Us
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Why Choose{" "}
            <span style={{ color: "var(--gold)" }}>Raees Kadiwal &amp; Co.</span>?
          </h2>
          <div
            className="w-14 h-1 rounded-full mx-auto mb-5"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            500+ businesses and professionals across India choose us because we
            deliver results — not just reports.
          </p>
        </div>

        {/* Reason cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group relative rounded-xl p-7 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8 backdrop-blur-sm transition-all duration-250"
            >
              {/* Gold top line on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                style={{ backgroundColor: "var(--gold)" }}
              />

              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-white"
                  style={{ backgroundColor: "rgba(212,175,55,0.18)", color: "var(--gold)" }}
                >
                  {r.icon}
                </div>
                <div>
                  <div
                    className="font-heading font-bold text-2xl leading-none mb-0.5"
                    style={{ color: "var(--gold)" }}
                  >
                    {r.stat}
                  </div>
                  <div className="font-heading font-semibold text-white text-sm">{r.title}</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
