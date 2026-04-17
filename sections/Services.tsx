import { Badge } from "@/components/ui/badge";

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
    accent: "#2C1408",
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
    accent: "#CE8946",
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
    accent: "#7A7240",
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
    accent: "#D4AF37",
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
    accent: "#9B7B3A",
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
    accent: "#4D2F0E",
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
    <section id="services" className="py-20 lg:py-28" style={{ backgroundColor: "#F5F0DC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge
            className="mb-4 text-xs font-semibold px-3 py-1 rounded-full border"
            style={{
              backgroundColor: "rgba(212,175,55,0.12)",
              borderColor: "rgba(206,137,70,0.35)",
              color: "var(--navy)",
            }}
          >
            What We Offer
          </Badge>
          <h2
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            style={{ color: "var(--navy)" }}
          >
            Our Services
          </h2>
          <div
            className="w-14 h-1 rounded-full mx-auto mb-5"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Full-spectrum financial and compliance services trusted by 500+
            businesses and professionals across India.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-250 cursor-default"
              style={{ backgroundColor: "#FFFEF5", borderColor: "rgba(212,175,55,0.2)" }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 text-white transition-transform group-hover:scale-105"
                style={{ backgroundColor: service.accent }}
              >
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3
                className="font-heading font-semibold text-lg mb-2"
                style={{ color: "var(--navy)" }}
              >
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Items */}
              <ul className="space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--gold)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover bottom accent */}
              <div
                className="mt-6 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-300"
                style={{ backgroundColor: service.accent, opacity: 0.4 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
