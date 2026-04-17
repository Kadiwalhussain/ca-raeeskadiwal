import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "ICAI Certified",
    desc: "Registered with the Institute of Chartered Accountants of India, upholding the highest professional standards.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Client-Centric",
    desc: "Every solution is tailored to your unique financial goals — no one-size-fits-all approach.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "End-to-End Advisory",
    desc: "From tax filing to business structuring — we handle every financial dimension under one roof.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Confidential & Secure",
    desc: "Your financial data is treated with complete discretion and protected under professional ethics.",
  },
];

const expertise = [
  "Income Tax Planning & Filing",
  "GST Registration & Returns",
  "Statutory Audit & Assurance",
  "Company Law Compliance",
  "Tax Litigation & Representation",
  "NRI Taxation Advisory",
  "Business Valuation",
  "Financial Statement Preparation",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28" style={{ backgroundColor: "#FFFEF5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <Badge
            className="mb-4 text-xs font-semibold px-3 py-1 rounded-full border"
            style={{
              backgroundColor: "rgba(212,175,55,0.12)",
              borderColor: "rgba(206,137,70,0.35)",
              color: "var(--navy)",
            }}
          >
            Who We Are
          </Badge>
          <h2
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
            style={{ color: "var(--navy)" }}
          >
            About CA Raees Kadiwal &amp; Co.
          </h2>
          <div
            className="w-14 h-1 rounded-full mb-6"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Founded on principles of integrity and excellence, CA Raees Kadiwal
            &amp; Co. is a full-service Chartered Accountant firm serving
            businesses, professionals, and HNIs across India for over{" "}
            <strong className="text-[var(--navy)]">17 years</strong>. We
            combine deep regulatory knowledge with a pragmatic approach to help
            you stay compliant and financially strong.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Pillars */}
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-lg border hover:shadow-md transition-shadow duration-200 group"
                style={{ borderColor: "rgba(212,175,55,0.2)", backgroundColor: "#FFFEF5" }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 text-white transition-colors"
                  style={{ backgroundColor: "var(--navy)" }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-heading font-semibold text-base mb-2"
                  style={{ color: "var(--navy)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Expertise list + CTA */}
          <div>
            <div
              className="rounded-xl p-8 mb-8"
              style={{ backgroundColor: "rgba(212,175,55,0.09)", border: "1px solid rgba(212,175,55,0.2)" }}
            >
              <h3
                className="font-heading font-semibold text-lg mb-6"
                style={{ color: "var(--navy)" }}
              >
                Areas of Expertise
              </h3>
              <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
                {expertise.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--gold)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust bar */}
            <div className="flex flex-col sm:flex-row gap-6">
              {[
                { num: "17+", sub: "Years Active" },
                { num: "500+", sub: "Happy Clients" },
                { num: "Pan-India", sub: "Service Coverage" },
              ].map((item) => (
                <div
                  key={item.sub}
                  className="flex-1 text-center py-5 rounded-lg border"
                  style={{ borderColor: "rgba(212,175,55,0.25)", backgroundColor: "#FFFEF5" }}
                >
                  <div
                    className="font-heading font-bold text-2xl mb-1"
                    style={{ color: "var(--navy)" }}
                  >
                    {item.num}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
