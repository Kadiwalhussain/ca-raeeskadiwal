import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
      <main className="bg-[#EDF0F3]">
        {/* Masthead */}
        <header className="pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
              <span className="text-sm font-medium tracking-wide text-[#78828F]">
                Insights &amp; guidance
              </span>
            </div>
            <h1
              className="font-heading font-medium text-[#1F2430] leading-[1.05] mb-5"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.6rem)" }}
            >
              Notes from the practice
            </h1>
            <p className="text-lg text-[#55606E] max-w-2xl leading-relaxed">
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
              className="group grid md:grid-cols-2 rounded-xl overflow-hidden"
              style={{ backgroundColor: "#1F2430" }}
            >
              <div className="relative min-h-[240px] md:min-h-full overflow-hidden">
                <Image
                  src={featured.cover}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex items-center gap-3 mb-5 text-[#C8D0DB] text-sm">
                  <span className="font-semibold">{featured.category}</span>
                  <span className="opacity-40">·</span>
                  <span className="opacity-80">{formatPostDate(featured.date)}</span>
                </div>
                <h2
                  className="font-heading font-medium text-white leading-[1.12] mb-4"
                  style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)" }}
                >
                  {featured.title}
                </h2>
                <p className="text-[#C3CCD8] leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-[#C8D0DB] font-semibold">
                  Read the article
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </section>
        )}

        {/* The rest — editorial list with thumbnails */}
        <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-24">
          <ul>
            {rest.map((post) => (
              <li key={post.slug} style={{ borderTop: "1px solid rgba(31, 36, 48,0.12)" }}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid sm:grid-cols-[200px_1fr] gap-6 sm:gap-8 py-8 items-center"
                >
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-[#E3E7EC]">
                    <Image
                      src={post.cover}
                      alt=""
                      fill
                      sizes="200px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3 text-[13px] text-[#78828F]">
                      <span className="font-semibold text-[var(--caramel)]">{post.category}</span>
                      <span className="opacity-40">·</span>
                      <span>{formatPostDate(post.date)}</span>
                      <span className="opacity-40">·</span>
                      <span>{post.readingMinutes} min read</span>
                    </div>
                    <h3
                      className="font-heading font-medium text-[#1F2430] leading-snug mb-2"
                      style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)" }}
                    >
                      <span className="bg-[linear-gradient(var(--gold),var(--gold))] bg-[length:0%_1.5px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 group-hover:bg-[length:100%_1.5px] pb-0.5">
                        {post.title}
                      </span>
                    </h3>
                    <p className="text-[#55606E] leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-14 text-sm text-[#99A2AE] leading-relaxed border-t border-[rgba(31, 36, 48,0.1)] pt-6">
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
