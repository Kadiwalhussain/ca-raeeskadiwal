import SectionHeading from "@/components/SectionHeading";

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
        background: "linear-gradient(160deg, #141821 0%, #1F2430 60%, #2B323E 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: "rgba(94, 110, 130,0.35)" }} />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <SectionHeading
            onDark
            kicker="Why clients stay"
            title="The reasons 500+ clients don't shop around"
            lead="They stay because we deliver outcomes, not just reports — and because the person who knows their file is the person who answers the phone."
          />
        </div>

        {/* Reasons — hairline ledger grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-xl overflow-hidden"
          style={{ backgroundColor: "rgba(94, 110, 130,0.14)" }}
        >
          {reasons.map((r) => (
            <div
              key={r.title}
              className="p-7 lg:p-8"
              style={{ backgroundColor: "#232832" }}
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span
                  className="font-heading font-semibold text-3xl leading-none nums"
                  style={{ color: "#E4E8EE" }}
                >
                  {r.stat}
                </span>
                <span className="font-heading font-medium text-white text-[15px]">{r.title}</span>
              </div>
              <p className="text-sm text-[#AAB2BD] leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
