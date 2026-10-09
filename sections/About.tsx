import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

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
    <section id="about" className="py-20 lg:py-28" style={{ backgroundColor: "#EDF0F3" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-12">
          <SectionHeading
            kicker="Who we are"
            title="A Mumbai practice that has grown up with its clients"
            lead="Since 2007, Raees Kadiwal & Co. has looked after the tax, compliance and advisory needs of businesses, professionals and families across India. We pair deep regulatory knowledge with plain-spoken advice — the kind you can actually act on."
          />
        </div>

        {/* Office image */}
        <div className="relative aspect-[21/8] rounded-xl overflow-hidden mb-14 bg-[#E3E7EC]">
          <Image
            src="/images/office.jpg"
            alt="Our practice"
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover object-center"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Pillars */}
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
            {pillars.map((item) => (
              <div key={item.title}>
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(94, 110, 130,0.14)", color: "var(--caramel)" }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-heading font-medium text-lg mb-2"
                  style={{ color: "var(--navy)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#55606E] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Expertise list + CTA */}
          <div>
            <div
              className="rounded-xl p-8 mb-8"
              style={{ backgroundColor: "rgba(94, 110, 130,0.09)", border: "1px solid rgba(94, 110, 130,0.2)" }}
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
                  style={{ borderColor: "rgba(94, 110, 130,0.25)", backgroundColor: "#FFFFFF" }}
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
