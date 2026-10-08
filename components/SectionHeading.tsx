import { cn } from "@/lib/utils";

/**
 * Editorial section heading: a fine gold hairline + a quiet kicker, a serif
 * display title, and an optional lead. Deliberately replaces the pill-badge +
 * gold-bar-divider pattern that reads as a generated template.
 */
export default function SectionHeading({
  kicker,
  title,
  lead,
  align = "left",
  onDark = false,
}: {
  kicker: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  const centered = align === "center";
  return (
    <div className={cn(centered ? "text-center mx-auto max-w-2xl" : "max-w-2xl")}>
      <div className={cn("flex items-center gap-3 mb-5", centered && "justify-center")}>
        <span className="h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
        <span
          className="text-sm font-medium tracking-wide"
          style={{ color: onDark ? "#C4B890" : "#8C7B57" }}
        >
          {kicker}
        </span>
      </div>
      <h2
        className="font-heading font-medium leading-[1.08]"
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: onDark ? "#FFFFFF" : "#2C1408",
        }}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn("text-lg leading-relaxed mt-5", centered && "mx-auto")}
          style={{ color: onDark ? "#D8CBB0" : "#6B5938" }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
