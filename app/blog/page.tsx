import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights — Tax, GST & Compliance Guidance",
  description:
    "Plain-English guidance on income tax, GST, NRI taxation, business setup and compliance from Raees Kadiwal & Co., Chartered Accountants in Mumbai.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const all = getAllPosts();
  const [featured, ...rest] = all;

  return (
    <>
      <Navbar solid />
      <main className="bg-[#F6F1E2]">
        {/* Masthead */}
        <header className="pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
              <span className="text-sm font-medium tracking-wide text-[#8C7B57]">
                Insights &amp; guidance
              </span>
            </div>
            <h1
              className="font-heading font-medium text-[#2C1408] leading-[1.05] mb-5"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.6rem)" }}
            >
              Notes from the practice
            </h1>
            <p className="text-lg text-[#6B5938] max-w-2xl leading-relaxed">
              Straight answers on the tax, GST and compliance questions our clients
              actually ask — written to be read by business owners, not only
              accountants.
            </p>
          </div>
        </header>

        {/* Featured */}
        {featured && (
          <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-14">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-xl overflow-hidden"
              style={{ backgroundColor: "#2C1408" }}
            >
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-5 text-[#E6D9A8] text-sm">
                  <span className="font-semibold">{featured.category}</span>
                  <span className="opacity-40">·</span>
                  <span className="opacity-80">{formatPostDate(featured.date)}</span>
                </div>
                <h2
                  className="font-heading font-medium text-white leading-[1.1] mb-4 max-w-3xl"
                  style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.5rem)" }}
                >
                  {featured.title}
                </h2>
                <p className="text-[#D8CBB0] text-base sm:text-lg leading-relaxed max-w-2xl mb-6">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-[var(--gold)] font-semibold">
                  Read the article
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </section>
        )}

        {/* The rest — editorial list, not a card grid */}
        <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-24">
          <ul>
            {rest.map((post) => (
              <li key={post.slug} style={{ borderTop: "1px solid rgba(44,20,8,0.12)" }}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid sm:grid-cols-[1fr_auto] gap-x-8 gap-y-3 py-8 items-start"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3 text-[13px] text-[#8C7B57]">
                      <span className="font-semibold text-[var(--caramel)]">{post.category}</span>
                      <span className="opacity-40">·</span>
                      <span>{formatPostDate(post.date)}</span>
                    </div>
                    <h3
                      className="font-heading font-medium text-[#2C1408] leading-snug mb-2"
                      style={{ fontSize: "clamp(1.25rem, 2.4vw, 1.6rem)" }}
                    >
                      <span className="bg-[linear-gradient(var(--gold),var(--gold))] bg-[length:0%_1.5px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 group-hover:bg-[length:100%_1.5px] pb-0.5">
                        {post.title}
                      </span>
                    </h3>
                    <p className="text-[#6B5938] leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="text-sm text-[#A8936A] sm:text-right whitespace-nowrap sm:pt-9">
                    {post.readingMinutes} min read
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-14 text-sm text-[#A8936A] leading-relaxed border-t border-[rgba(44,20,8,0.1)] pt-6">
            These articles are general guidance, not advice for your specific
            situation — tax rules change and the details matter.{" "}
            <Link href="/#contact" className="text-[var(--caramel)] font-medium hover:underline">
              Talk to us
            </Link>{" "}
            before you act on anything here.
          </p>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
