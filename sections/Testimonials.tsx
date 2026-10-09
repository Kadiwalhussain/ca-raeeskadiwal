import SectionHeading from "@/components/SectionHeading";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  initials: string;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rohit Sharma",
    role: "Director",
    company: "Sharma Exports Pvt Ltd",
    rating: 5,
    text: "Raees Kadiwal & Co. has been handling our GST and income tax for the past 6 years. Their team is incredibly responsive and proactive. They flagged a potential compliance issue before it became a problem — saved us from a hefty penalty.",
    initials: "RS",
    color: "#5E6E82",
  },
  {
    name: "Priya Mehta",
    role: "Founder",
    company: "Mehta Digital Solutions",
    rating: 5,
    text: "As a startup founder, I had no idea how complex company registration and GST setup could be. The team walked me through every step with clarity and patience. We were operational in weeks, not months.",
    initials: "PM",
    color: "#46586E",
  },
  {
    name: "Suresh Patel",
    role: "NRI — USA",
    company: "Property & Investment Client",
    rating: 5,
    text: "Managing my India tax obligations from the US was a nightmare until I found this firm. They handle my NRI ITR, FEMA compliance, and property income reporting efficiently every year. Highly recommended for fellow NRIs.",
    initials: "SP",
    color: "#525E6E",
  },
  {
    name: "Anita Joshi",
    role: "Managing Partner",
    company: "Joshi & Associates LLP",
    rating: 5,
    text: "Our firm relies on Raees Kadiwal & Co. for all our statutory audits and ROC filings. Their attention to detail is unmatched and they always deliver before deadlines — never once needed to chase them.",
    initials: "AJ",
    color: "#3A4452",
  },
  {
    name: "Mohammed Qureshi",
    role: "CEO",
    company: "QTech Manufacturing",
    rating: 5,
    text: "Switched to this firm after a bad experience elsewhere. Night and day difference — proper tax planning saved us over ₹18 lakhs last year alone. The personalized attention from the CA directly is something I deeply value.",
    initials: "MQ",
    color: "#2E3440",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          fill={i < count ? "var(--gold)" : "none"}
          stroke="var(--gold)"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <SectionHeading
            kicker="In their words"
            title="The kind of relationship clients don't switch out of"
            lead="Businesses, professionals and NRIs on why they've stayed with us — some for well over a decade."
          />
        </div>

        {/* Masonry-ish columns of quote cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-xl p-7 flex flex-col"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(94, 110, 130,0.22)" }}
            >
              <StarRating count={t.rating} />
              <blockquote className="font-heading text-[17px] leading-[1.6] text-[#1F2430] mt-4 flex-1">
                {t.text}
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-6 pt-5" style={{ borderTop: "1px solid rgba(94, 110, 130,0.22)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-heading font-semibold text-sm shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-medium text-sm text-[#1F2430]">{t.name}</div>
                  <div className="text-xs text-[#78828F]">
                    {t.role}, {t.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Trust strip — ledger of proof */}
        <div
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden"
          style={{ backgroundColor: "rgba(31, 36, 48,0.1)" }}
        >
          {[
            { num: "500+", label: "Clients served" },
            { num: "4.9/5", label: "Average rating" },
            { num: "17+", label: "Years trusted" },
            { num: "Pan-India", label: "Client coverage" },
          ].map((item) => (
            <div key={item.label} className="text-center py-7" style={{ backgroundColor: "#FFFFFF" }}>
              <div className="font-heading font-semibold text-2xl sm:text-3xl mb-1 text-[#1F2430] nums">
                {item.num}
              </div>
              <div className="text-xs text-[#78828F] font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
