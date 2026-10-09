import Link from "next/link";
import Image from "next/image";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export default function Insights() {
  const latest = getAllPosts().slice(0, 3);

  return (
    <section id="insights" className="py-20 lg:py-28" style={{ backgroundColor: "#EDF0F3" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Editorial header — left heading, right link */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
              <span className="text-sm font-medium tracking-wide text-[#78828F]">
                Insights &amp; guidance
              </span>
            </div>
            <h2
              className="font-heading font-medium text-[#1F2430] leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Reading worth your time
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-semibold text-[var(--caramel)] hover:gap-3 transition-all pb-2"
          >
            All insights <span>→</span>
          </Link>
        </div>

        <ul>
          {latest.map((post, i) => (
            <li
              key={post.slug}
              style={{
                borderTop: "1px solid rgba(31, 36, 48,0.12)",
                borderBottom: i === latest.length - 1 ? "1px solid rgba(31, 36, 48,0.12)" : "none",
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group grid sm:grid-cols-[120px_1fr_auto] gap-5 sm:gap-7 py-7 items-center"
              >
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-[#E3E7EC]">
                  <Image
                    src={post.cover}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 text-[13px] text-[#78828F]">
                    <span className="font-semibold text-[var(--caramel)]">{post.category}</span>
                    <span className="opacity-40">·</span>
                    <span>{formatPostDate(post.date)}</span>
                  </div>
                  <h3
                    className="font-heading font-medium text-[#1F2430] leading-snug"
                    style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)" }}
                  >
                    <span className="bg-[linear-gradient(var(--gold),var(--gold))] bg-[length:0%_1.5px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 group-hover:bg-[length:100%_1.5px] pb-0.5">
                      {post.title}
                    </span>
                  </h3>
                </div>
                <span className="text-sm text-[#99A2AE] whitespace-nowrap sm:text-right">
                  {post.readingMinutes} min
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
