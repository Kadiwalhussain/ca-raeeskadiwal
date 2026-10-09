import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getAllPosts, getPost, formatPostDate, type Block } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="font-heading font-semibold text-[#1F2430] mt-12 mb-4 leading-snug"
          style={{ fontSize: "clamp(1.4rem, 2.6vw, 1.85rem)" }}
        >
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="text-[17px] leading-[1.75] text-[#2B313C] mb-5">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={i} className="mb-6 space-y-2.5">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 text-[17px] leading-[1.7] text-[#2B313C]">
              <span
                className="mt-2.5 h-1.5 w-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <aside
          key={i}
          className="my-8 rounded-lg p-6 text-[16px] leading-relaxed text-[#1F2430]"
          style={{
            backgroundColor: "rgba(94, 110, 130,0.10)",
            borderLeft: "3px solid var(--gold)",
          }}
        >
          {block.text}
        </aside>
      );
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Raees Kadiwal & Co." },
  };

  return (
    <>
      <Navbar solid />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="bg-[#FFFFFF]">
        {/* Article header */}
        <header className="bg-[#EDF0F3] pt-32 pb-12 lg:pt-40 lg:pb-14">
          <div className="max-w-2xl mx-auto px-5 sm:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#78828F] hover:text-[#1F2430] mb-7 transition-colors"
            >
              <span>←</span> All insights
            </Link>
            <div className="flex items-center gap-3 mb-5 text-[13px] text-[#78828F]">
              <span className="font-semibold text-[var(--caramel)]">{post.category}</span>
              <span className="opacity-40">·</span>
              <span>{formatPostDate(post.date)}</span>
              <span className="opacity-40">·</span>
              <span>{post.readingMinutes} min read</span>
            </div>
            <h1
              className="font-heading font-medium text-[#1F2430] leading-[1.1] mb-6"
              style={{ fontSize: "clamp(1.9rem, 4.2vw, 2.9rem)" }}
            >
              {post.title}
            </h1>
            <p className="text-sm text-[#55606E]">
              By <span className="font-semibold text-[#1F2430]">{post.author}</span>
            </p>
          </div>
        </header>

        {/* Body */}
        <article className="max-w-2xl mx-auto px-5 sm:px-8 py-14">
          <p className="font-heading italic text-xl text-[#55606E] leading-relaxed mb-10 pb-10 border-b border-[rgba(31, 36, 48,0.1)]">
            {post.excerpt}
          </p>
          {post.content.map(renderBlock)}

          <div
            className="mt-14 rounded-xl p-8"
            style={{ backgroundColor: "#1F2430" }}
          >
            <h3 className="font-heading font-medium text-2xl text-white mb-2">
              Have a question on this?
            </h3>
            <p className="text-[#C3CCD8] leading-relaxed mb-6">
              A short conversation is usually all it takes to know where you stand.
              The first consultation is free.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#EEF1F4", color: "#1F2430" }}
            >
              Book a free consultation
            </Link>
          </div>

          <p className="mt-8 text-sm text-[#99A2AE] leading-relaxed">
            This article is general guidance as of its publication date, not advice
            for your specific situation. Tax law changes — please confirm the current
            position before acting.
          </p>
        </article>

        {/* More reading */}
        {more.length > 0 && (
          <section className="border-t border-[rgba(31, 36, 48,0.1)] bg-[#EDF0F3]">
            <div className="max-w-2xl mx-auto px-5 sm:px-8 py-12">
              <h2 className="font-heading font-medium text-xl text-[#1F2430] mb-6">
                Keep reading
              </h2>
              <ul className="space-y-6">
                {more.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="group block">
                      <div className="text-[13px] text-[#78828F] mb-1.5">
                        <span className="font-semibold text-[var(--caramel)]">{p.category}</span>
                      </div>
                      <h3 className="font-heading font-medium text-lg text-[#1F2430] leading-snug group-hover:text-[var(--caramel)] transition-colors">
                        {p.title}
                      </h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
