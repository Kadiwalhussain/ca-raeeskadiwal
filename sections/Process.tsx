import SectionHeading from "@/components/SectionHeading";

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
    <section id="process" className="py-20 lg:py-28" style={{ backgroundColor: "#F6F1E2" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-16">
          <SectionHeading
            kicker="How we work"
            title="From your first call to filed and done"
            lead="A structured, transparent engagement — you always know what's happening, what's next, and who to call."
          />
        </div>

        {/* Desktop: numbered columns with a hairline rule */}
        <div className="hidden lg:block">
          <div className="h-px rule-gold mb-8" />
          <div className="grid grid-cols-5 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="font-heading font-semibold text-5xl nums mb-4 text-[#2C1408]">
                  {step.number}
                  <span className="text-[var(--gold)]">.</span>
                </div>
                <h3 className="font-heading font-medium text-lg mb-2 leading-tight text-[#2C1408]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B5938] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: numbered rows */}
        <div className="lg:hidden flex flex-col">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex gap-5 py-6"
              style={{ borderTop: i === 0 ? "none" : "1px solid rgba(44,20,8,0.1)" }}
            >
              <div className="font-heading font-semibold text-3xl nums text-[#2C1408] shrink-0 w-12">
                {step.number}
              </div>
              <div>
                <h3 className="font-heading font-medium text-lg mb-1.5 text-[#2C1408]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B5938] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
