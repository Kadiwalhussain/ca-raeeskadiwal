import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
};

const itrPlans: Plan[] = [
  {
    name: "Salaried Individual",
    price: "₹999",
    period: "per filing",
    description: "For salaried employees with Form 16 and basic deductions.",
    cta: "Get Started",
    highlighted: false,
    features: [
      "ITR-1 / ITR-2 Filing",
      "Form 16 processing",
      "Standard deduction & HRA",
      "Capital gains (basic)",
      "Acknowledgement within 24hrs",
    ],
  },
  {
    name: "Business / Professional",
    price: "₹2,999",
    period: "per filing",
    description: "For freelancers, consultants, and small business owners.",
    cta: "Most Popular",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "ITR-3 / ITR-4 Filing",
      "Business income computation",
      "44AD / 44ADA presumptive tax",
      "Advance tax calculation",
      "Tax saving advisory included",
      "Acknowledgement within 48hrs",
    ],
  },
  {
    name: "NRI / HNI",
    price: "₹4,999",
    period: "per filing",
    description: "For Non-Resident Indians and high net-worth individuals.",
    cta: "Get Started",
    highlighted: false,
    features: [
      "NRI ITR Filing",
      "DTAA benefit application",
      "Foreign income & TRC",
      "Capital gains on property",
      "FEMA guidance",
      "Dedicated CA assigned",
    ],
  },
];

const businessPlans: Plan[] = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "per month",
    description: "For early-stage startups and small businesses.",
    cta: "Get Started",
    highlighted: false,
    features: [
      "GST Returns (GSTR-1 + 3B)",
      "Monthly Bookkeeping",
      "TDS Filing",
      "Bank Reconciliation",
      "Basic P&L Statement",
    ],
  },
  {
    name: "Growth",
    price: "₹9,999",
    period: "per month",
    description: "For growing businesses needing full compliance management.",
    cta: "Best Value",
    highlighted: true,
    badge: "Best Value",
    features: [
      "Everything in Starter",
      "ITR Filing (Business)",
      "ROC Annual Filing",
      "Payroll & PF/ESIC",
      "Quarterly MIS Reports",
      "Director CA advisory calls",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per month",
    description: "For larger businesses with multi-entity or complex needs.",
    cta: "Contact Us",
    highlighted: false,
    features: [
      "Everything in Growth",
      "Statutory Audit",
      "Internal Audit",
      "Transfer Pricing Advisory",
      "Multi-entity management",
      "Dedicated CA team",
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative rounded-xl border p-7 flex flex-col transition-all duration-200 hover:shadow-lg ${
        plan.highlighted
          ? "border-transparent shadow-md"
          : "hover:-translate-y-0.5"
      }`}
      style={
        plan.highlighted
          ? { backgroundColor: "var(--navy)", color: "white" }
          : { backgroundColor: "#FFFEF5", borderColor: "rgba(212,175,55,0.25)" }
      }
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className="text-[10px] font-bold px-3 py-1 rounded-full"
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--navy)",
            }}
          >
            {plan.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3
          className={`font-heading font-semibold text-lg mb-1 ${
            plan.highlighted ? "text-white" : ""
          }`}
          style={plan.highlighted ? {} : { color: "var(--navy)" }}
        >
          {plan.name}
        </h3>
        <p
          className={`text-xs leading-relaxed mb-4 ${
            plan.highlighted ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {plan.description}
        </p>
        <div className="flex items-baseline gap-1">
          <span
            className={`font-heading font-bold text-3xl ${
              plan.highlighted ? "text-white" : ""
            }`}
            style={plan.highlighted ? {} : { color: "var(--navy)" }}
          >
            {plan.price}
          </span>
          <span
            className={`text-xs ${
              plan.highlighted ? "text-gray-400" : "text-gray-400"
            }`}
          >
            /{plan.period}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div
        className="mb-5 border-t"
        style={{
          borderColor: plan.highlighted ? "rgba(255,255,255,0.1)" : undefined,
        }}
      />

      {/* Features */}
      <ul className="space-y-3 flex-1 mb-7">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <svg
              className="w-4 h-4 mt-0.5 shrink-0"
              fill="none"
              stroke={plan.highlighted ? "var(--gold)" : "var(--navy)"}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span
              className={plan.highlighted ? "text-gray-200" : "text-gray-600"}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="#contact"
        className={cn(
          buttonVariants({ size: "default" }),
          "w-full justify-center font-semibold rounded text-sm transition-opacity hover:opacity-90"
        )}
        style={
          plan.highlighted
            ? {
                backgroundColor: "var(--gold)",
                borderColor: "var(--gold)",
                color: "var(--navy)",
              }
            : {
                backgroundColor: "var(--navy)",
                borderColor: "var(--navy)",
                color: "white",
              }
        }
      >
        {plan.cta === "Most Popular" || plan.cta === "Best Value"
          ? "Get Started"
          : plan.cta}
      </Link>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28" style={{ backgroundColor: "#FFFEF5" }}>
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
            Transparent Pricing
          </Badge>
          <h2
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            style={{ color: "var(--navy)" }}
          >
            Simple, Honest Pricing
          </h2>
          <div
            className="w-14 h-1 rounded-full mx-auto mb-5"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            No hidden charges. No surprises. Pay only for what you need — with
            the quality of a top-tier CA firm.
          </p>
        </div>

        {/* ITR Filing Plans */}
        <div className="mb-16">
          <h3
            className="font-heading font-semibold text-xl mb-8 flex items-center gap-3"
            style={{ color: "var(--navy)" }}
          >
            <span
              className="w-1 h-6 rounded-full inline-block"
              style={{ backgroundColor: "var(--gold)" }}
            />
            ITR Filing Plans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {itrPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>

        {/* Business Packages */}
        <div className="mb-14">
          <h3
            className="font-heading font-semibold text-xl mb-8 flex items-center gap-3"
            style={{ color: "var(--navy)" }}
          >
            <span
              className="w-1 h-6 rounded-full inline-block"
              style={{ backgroundColor: "var(--gold)" }}
            />
            Monthly Business Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>

        {/* Disclaimer + CTA */}
        <div
          className="rounded-xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ backgroundColor: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
        >
          <div>
            <p
              className="font-heading font-semibold text-base mb-1"
              style={{ color: "var(--navy)" }}
            >
              Not sure which plan fits you?
            </p>
            <p className="text-sm text-gray-500">
              Book a free consultation and we&apos;ll recommend the right
              service for your exact situation.
            </p>
          </div>
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: "default" }),
              "shrink-0 font-semibold px-6 rounded text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            )}
            style={{
              backgroundColor: "var(--navy)",
              borderColor: "var(--navy)",
              color: "white",
            }}
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
