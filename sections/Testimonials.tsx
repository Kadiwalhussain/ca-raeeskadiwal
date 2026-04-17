import { Badge } from "@/components/ui/badge";

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
    text: "CA Raees Kadiwal has been handling our GST and income tax for the past 6 years. Their team is incredibly responsive and proactive. They flagged a potential compliance issue before it became a problem — saved us from a hefty penalty.",
    initials: "RS",
    color: "#D4AF37",
  },
  {
    name: "Priya Mehta",
    role: "Founder",
    company: "Mehta Digital Solutions",
    rating: 5,
    text: "As a startup founder, I had no idea how complex company registration and GST setup could be. The team walked me through every step with clarity and patience. We were operational in weeks, not months.",
    initials: "PM",
    color: "#CE8946",
  },
  {
    name: "Suresh Patel",
    role: "NRI — USA",
    company: "Property & Investment Client",
    rating: 5,
    text: "Managing my India tax obligations from the US was a nightmare until I found this firm. They handle my NRI ITR, FEMA compliance, and property income reporting efficiently every year. Highly recommended for fellow NRIs.",
    initials: "SP",
    color: "#7A7240",
  },
  {
    name: "Anita Joshi",
    role: "Managing Partner",
    company: "Joshi & Associates LLP",
    rating: 5,
    text: "Our firm relies on CA Raees Kadiwal for all our statutory audits and ROC filings. Their attention to detail is unmatched and they always deliver before deadlines — never once needed to chase them.",
    initials: "AJ",
    color: "#9B7B3A",
  },
  {
    name: "Mohammed Qureshi",
    role: "CEO",
    company: "QTech Manufacturing",
    rating: 5,
    text: "Switched to this firm after a bad experience elsewhere. Night and day difference — proper tax planning saved us over ₹18 lakhs last year alone. The personalized attention from the CA directly is something I deeply value.",
    initials: "MQ",
    color: "#4D2F0E",
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
    <section id="testimonials" className="py-20 lg:py-28" style={{ backgroundColor: "#F5F0DC" }}>
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
            Client Stories
          </Badge>
          <h2
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            style={{ color: "var(--navy)" }}
          >
            What Our Clients Say
          </h2>
          <div
            className="w-14 h-1 rounded-full mx-auto mb-5"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Trusted by businesses, professionals, and NRIs — here is what they
            experience working with us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border p-7 hover:shadow-md transition-shadow duration-200 flex flex-col"
              style={{ backgroundColor: "#FFFEF5", borderColor: "rgba(212,175,55,0.2)" }}
            >
              {/* Quote mark */}
              <div
                className="text-5xl font-serif leading-none mb-4 select-none"
                style={{ color: "rgba(212,175,55,0.35)" }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Text */}
              <p className="text-sm text-gray-600 leading-relaxed mt-4 flex-1">{t.text}</p>

              {/* Divider */}
              <div className="my-5 border-t" style={{ borderColor: "rgba(212,175,55,0.2)" }} />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-heading font-semibold text-sm shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="font-heading font-semibold text-sm"
                    style={{ color: "var(--navy)" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div
          className="mt-14 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ backgroundColor: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
        >
          {[
            { num: "500+", label: "Happy Clients" },
            { num: "4.9/5", label: "Average Rating" },
            { num: "17+", label: "Years Trusted" },
            { num: "Pan-India", label: "Client Coverage" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="font-heading font-bold text-2xl sm:text-3xl mb-1"
                style={{ color: "var(--navy)" }}
              >
                {item.num}
              </div>
              <div className="text-xs text-gray-500 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
