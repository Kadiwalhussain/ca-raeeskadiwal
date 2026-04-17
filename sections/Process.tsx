import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Book a free 30-minute consultation. We understand your financial situation, goals, and compliance requirements.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Document Collection",
    description:
      "We send you a precise checklist of documents needed — securely collected via email or our shared portal.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Expert Processing",
    description:
      "Our CA team reviews, verifies, and processes your data with zero-error precision before any submission.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Filing & Submission",
    description:
      "Returns, registrations, or reports are filed with the relevant authority — with acknowledgement shared instantly.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "We remain your long-term financial partner — available for queries, notices, audits, and future planning needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28" style={{ backgroundColor: "#FFFEF5" }}>
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
            How We Work
          </Badge>
          <h2
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            style={{ color: "var(--navy)" }}
          >
            Our Simple 5-Step Process
          </h2>
          <div
            className="w-14 h-1 rounded-full mx-auto mb-5"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            From your first call to ongoing compliance — a structured, transparent
            process every step of the way.
          </p>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting dashed line */}
            <div
              className="absolute top-10 left-[10%] right-[10%] h-px border-t-2 border-dashed"
              style={{ borderColor: "rgba(212,175,55,0.4)" }}
            />

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, i) => (
                <div key={step.number} className="flex flex-col items-center text-center group">
                  {/* Circle */}
                  <div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 bg-white shadow-sm group-hover:shadow-md transition-shadow z-10"
                    style={{ borderColor: i === 0 ? "var(--gold)" : "rgba(212,175,55,0.4)" }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: "var(--navy)" }}
                    >
                      {step.icon}
                    </div>
                    {/* Step number badge */}
                    <span
                      className="absolute -top-2 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ backgroundColor: "var(--gold)" }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <h3
                    className="font-heading font-semibold text-sm mb-2 leading-tight"
                    style={{ color: "var(--navy)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-5 relative">
              {/* Left: icon + connector */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: "var(--navy)" }}
                >
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-px flex-1 my-2 min-h-[32px]"
                    style={{ backgroundColor: "rgba(212,175,55,0.35)" }}
                  />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-8 pt-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className="text-xs font-bold rounded px-1.5 py-0.5"
                    style={{ backgroundColor: "rgba(212,175,55,0.15)", color: "var(--gold)" }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="font-heading font-semibold text-base"
                    style={{ color: "var(--navy)" }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
