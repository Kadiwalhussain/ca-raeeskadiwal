import SectionHeading from "@/components/SectionHeading";

type Service = {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  accent: string;
};

const services: Service[] = [
  {
    title: "Income Tax Services",
    description:
      "Complete income tax solutions for individuals, businesses, and NRIs — from filing to dispute resolution.",
    accent: "#1F2430",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      "ITR Filing — Individual, Business & NRI",
      "Tax Planning & Saving Strategies",
      "Income Tax Notices Handling",
      "Tax Audit (Sec 44AB)",
    ],
  },
  {
    title: "Business Registration",
    description:
      "End-to-end registration and structuring services to launch your business the right way in India.",
    accent: "#46586E",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    items: [
      "Private Limited Company Registration",
      "One Person Company (OPC)",
      "LLP & Partnership Registration",
      "Startup Advisory & MSME Registration",
    ],
  },
  {
    title: "GST Services",
    description:
      "Comprehensive GST compliance — registration, monthly filings, audits, and notice management.",
    accent: "#525E6E",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z" />
      </svg>
    ),
    items: [
      "GST Registration",
      "GSTR-1 & GSTR-3B Monthly Returns",
      "Quarterly Filing & Annual Returns",
      "GST Audit & Notice Handling",
    ],
  },
  {
    title: "Accounting Services",
    description:
      "Accurate bookkeeping and financial reporting to keep your business numbers clean and decision-ready.",
    accent: "#5E6E82",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    items: [
      "Monthly Bookkeeping",
      "Ledger Management",
      "Financial Statement Preparation",
      "Balance Sheet & Profit & Loss",
    ],
  },
  {
    title: "Audit & Compliance",
    description:
      "Independent audits and regulatory compliance to protect your business and build stakeholder trust.",
    accent: "#3A4452",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    items: [
      "Statutory Audit",
      "Internal Audit",
      "TDS Filing & Compliance",
      "ROC Compliance & Annual Filing",
    ],
  },
  {
    title: "NRI & International Tax",
    description:
      "Specialized advisory for Non-Resident Indians on repatriation, DTAA benefits, and Indian tax obligations.",
    accent: "#2E3440",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      "NRI ITR Filing",
      "DTAA Advisory",
      "Foreign Remittance & Repatriation",
      "FEMA Compliance",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <SectionHeading
            kicker="What we do"
            title="Everything your numbers need, under one roof"
            lead="Full-spectrum tax, compliance and advisory work — trusted by 500+ businesses, professionals and families across India."
          />
        </div>

        {/* Service list — paper panels with a hairline, not a shadow-card kit */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-xl overflow-hidden"
          style={{ backgroundColor: "rgba(31, 36, 48,0.1)" }}>
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-7 lg:p-8 transition-colors duration-200"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: service.accent }}
                >
                  {service.icon}
                </div>
                <h3
                  className="font-heading font-medium text-xl leading-tight"
                  style={{ color: "var(--navy)" }}
                >
                  {service.title}
                </h3>
              </div>

              <p className="text-[15px] text-[#55606E] leading-relaxed mb-5">
                {service.description}
              </p>

              <ul className="space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#49515E]">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--gold)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
