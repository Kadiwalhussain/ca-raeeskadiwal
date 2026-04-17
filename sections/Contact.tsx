"use client";

import { useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const SERVICES = [
  "Income Tax (ITR) Filing",
  "Tax Planning & Advisory",
  "Income Tax Notice Handling",
  "GST Registration",
  "GST Returns & Compliance",
  "GST Audit & Notice",
  "Company Registration (Pvt Ltd / OPC)",
  "LLP / Partnership Registration",
  "Startup Advisory & MSME",
  "Monthly Bookkeeping & Accounting",
  "Statutory Audit",
  "Internal Audit",
  "TDS Filing",
  "ROC Compliance",
  "NRI Taxation",
  "Other / General Inquiry",
];

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const PHONE_RE = /^[6-9]\d{9}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Please enter your full name (at least 2 characters).";
  if (!data.phone.trim())
    errors.phone = "Phone number is required.";
  else if (!PHONE_RE.test(data.phone.replace(/\s/g, "")))
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  if (!data.email.trim())
    errors.email = "Email address is required.";
  else if (!EMAIL_RE.test(data.email))
    errors.email = "Enter a valid email address.";
  if (!data.service)
    errors.service = "Please select the service you need.";
  if (!data.message.trim() || data.message.trim().length < 10)
    errors.message = "Please describe your requirement (at least 10 characters).";
  return errors;
}

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Office Address",
    value: "Shop No. 10, Fatima Tower, Near Noorani Masjid,\nPathanwadi, Rani Sati Marg, Malad East,\nMumbai – 400097, Maharashtra",
    href: null,
    isLink: false,
    multi: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone Numbers",
    value: "",
    href: null,
    isLink: false,
    multi: [
      { tag: "GST Queries", number: "+91 98337 71177", href: "tel:+919833771177" },
      { tag: "Tax / Audit / Other", number: "+91 99678 39778", href: "tel:+919967839778" },
    ],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "raeesrahim@gmail.com",
    href: "mailto:raeesrahim@gmail.com",
    isLink: true,
    multi: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 7:00 PM\nSun: By Appointment Only",
    href: null,
    isLink: false,
    multi: null,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ca-raees-kadiwal-28737835/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    bg: "#0077b5",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/919967839778?text=${encodeURIComponent("Hello, I want to inquire about your CA services")}`,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    bg: "#25d366",
  },
  {
    label: "Email",
    href: "mailto:raeesrahim@gmail.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    bg: "#D4AF37",
  },
];

function InputField({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1 animate-fade-up">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = (error?: string) =>
  cn(
    "w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200",
    "focus:ring-2 focus:ring-offset-0",
    error
      ? "border-red-300 bg-red-50/40 focus:border-red-400 focus:ring-red-200"
      : "border-[rgba(212,175,55,0.3)] bg-[#FFFEF5] focus:border-[var(--gold)] focus:ring-[rgba(212,175,55,0.15)]"
  );

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched[name as keyof FormData]) {
      const newErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormData] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormData] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      (Object.keys(formData) as (keyof FormData)[]).map((k) => [k, true])
    );
    setTouched(allTouched);
    const newErrors = validate(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28" style={{ backgroundColor: "#F5F0DC" }}>
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
            Let&apos;s Connect
          </Badge>
          <h2
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            style={{ color: "var(--navy)" }}
          >
            Book Your Free Consultation
          </h2>
          <div className="w-14 h-1 rounded-full mx-auto mb-5" style={{ backgroundColor: "var(--gold)" }} />
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Talk to a qualified CA today — no commitment, no charges. We&apos;ll
            help you understand exactly what you need.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* ── Left: Contact Info + Map ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-5 rounded-xl hover:shadow-sm transition-shadow"
                  style={{ backgroundColor: "#FFFEF5", border: "1px solid rgba(212,175,55,0.2)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-white"
                    style={{ backgroundColor: "var(--navy)" }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                      {item.label}
                    </p>
                    {item.multi ? (
                      <div className="flex flex-col gap-1.5">
                        {item.multi.map((m) => (
                          <div key={m.href} className="flex items-center gap-2 flex-wrap">
                            <span
                              className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
                              style={{ backgroundColor: "rgba(212,175,55,0.15)", color: "var(--caramel)" }}
                            >
                              {m.tag}
                            </span>
                            <a
                              href={m.href}
                              className="text-sm font-semibold hover:underline"
                              style={{ color: "var(--navy)" }}
                            >
                              {m.number}
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : item.isLink && item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium hover:underline whitespace-pre-line break-all"
                        style={{ color: "var(--navy)" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="text-sm font-medium whitespace-pre-line"
                        style={{ color: "var(--navy)" }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                Connect via:
              </span>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-white text-xs font-medium transition-opacity hover:opacity-85"
                  style={{ backgroundColor: s.bg }}
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>

            {/* Google Map embed — Fatima Tower */}
            <div className="rounded-xl overflow-hidden shadow-sm h-56 lg:h-64" style={{ border: "1px solid rgba(212,175,55,0.25)" }}>
              <iframe
                title="CA Raees Kadiwal & Co. — Shop No. 10, Fatima Tower, Malad East, Mumbai"
                src="https://maps.google.com/maps?q=19.1791743,72.8616513&hl=en&z=19&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl shadow-sm p-8 lg:p-10" style={{ backgroundColor: "#FFFEF5", border: "1px solid rgba(212,175,55,0.2)" }}>

              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-10 animate-fade-up">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ backgroundColor: "rgba(212,175,55,0.15)" }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="var(--gold)"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3
                    className="font-heading font-bold text-2xl mb-2"
                    style={{ color: "var(--navy)" }}
                  >
                    Inquiry Received!
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
                    Thank you, <strong className="text-gray-700">{formData.name}</strong>. We
                    have received your inquiry and our CA team will reach out to you
                    within <strong className="text-gray-700">24 business hours</strong>.
                  </p>
                  <a
                    href={`https://wa.me/919967839778?text=${encodeURIComponent(
                      `Hello, I recently submitted an inquiry on your website. My name is ${formData.name}. Service required: ${formData.service}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#25d366" }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp Instead
                  </a>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <h3
                      className="font-heading font-bold text-xl mb-1"
                      style={{ color: "var(--navy)" }}
                    >
                      Send Us a Message
                    </h3>
                    <p className="text-sm text-gray-400">
                      All fields are required. We typically respond within 4 business hours.
                    </p>
                  </div>

                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                    {/* Row: Name + Phone */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <InputField label="Full Name" id="name" error={errors.name}>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Rahul Sharma"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={inputClass(errors.name)}
                        />
                      </InputField>

                      <InputField label="Phone Number" id="phone" error={errors.phone}>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={inputClass(errors.phone)}
                        />
                      </InputField>
                    </div>

                    {/* Email */}
                    <InputField label="Email Address" id="email" error={errors.email}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="rahul@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass(errors.email)}
                      />
                    </InputField>

                    {/* Service dropdown */}
                    <InputField label="Service Required" id="service" error={errors.service}>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={cn(inputClass(errors.service), "cursor-pointer")}
                      >
                        <option value="" disabled>
                          — Select a service —
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </InputField>

                    {/* Message */}
                    <InputField label="Your Message" id="message" error={errors.message}>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Briefly describe your requirement or any questions you have..."
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={cn(inputClass(errors.message), "resize-none")}
                      />
                    </InputField>

                    {/* Error banner */}
                    {status === "error" && (
                      <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Something went wrong. Please try again or contact us via WhatsApp.
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "submitting" || status === "error"}
                      className={cn(
                        "w-full py-3 rounded-lg font-heading font-semibold text-sm transition-all duration-200",
                        "flex items-center justify-center gap-2",
                        status === "submitting"
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:opacity-90 active:scale-[0.99]"
                      )}
                      style={{ backgroundColor: "var(--navy)", color: "white" }}
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending your inquiry...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      By submitting, you agree to be contacted by our team. We respect your privacy.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
