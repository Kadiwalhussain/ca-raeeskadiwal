import SectionHeading from "@/components/SectionHeading";

const industries = [
  {
    name: "Startups & Founders",
    desc: "Incorporation, fund-raising readiness and lean compliance.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    name: "SMEs & Family Business",
    desc: "The full compliance calendar, handled end to end.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m6-14h1m-1 4h1m4-4h1m-1 4h1",
  },
  {
    name: "Manufacturing & Trading",
    desc: "GST, inventory accounting and statutory audit.",
    icon: "M3 21h18M3 7v14m18-14v14M3 7l9-4 9 4M9 21v-6h6v6",
  },
  {
    name: "Real Estate & Construction",
    desc: "Project accounting, TDS on property and capital gains.",
    icon: "M3 21h18M5 21V7l8-4v18M19 21V11l-6-4",
  },
  {
    name: "Professionals & Freelancers",
    desc: "Presumptive tax, ITR and clean books without the overhead.",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l6.16-3.42",
  },
  {
    name: "E-commerce & D2C",
    desc: "Marketplace GST, reconciliations and TCS compliance.",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293A1 1 0 005.414 17H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    name: "NRIs & Expatriates",
    desc: "Residential status, DTAA relief and repatriation.",
    icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18a15 15 0 010-18z",
  },
  {
    name: "Healthcare & Hospitality",
    desc: "Multi-location accounting and payroll compliance.",
    icon: "M12 6v12m6-6H6",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28" style={{ backgroundColor: "#EDF0F3" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-14">
          <SectionHeading
            kicker="Who we work with"
            title="Depth across the sectors we serve"
            lead="Seventeen years in practice means we've seen the edge cases in your industry before — so your compliance is informed by experience, not guesswork."
          />
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden"
          style={{ backgroundColor: "rgba(31, 36, 48,0.1)" }}
        >
          {industries.map((ind) => (
            <div key={ind.name} className="p-7" style={{ backgroundColor: "#FFFFFF" }}>
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(94, 110, 130,0.12)", color: "var(--caramel)" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d={ind.icon} />
                </svg>
              </div>
              <h3 className="font-heading font-medium text-lg mb-1.5 text-[#1F2430]">{ind.name}</h3>
              <p className="text-sm text-[#55606E] leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
