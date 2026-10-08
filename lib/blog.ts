// Editorial content for the Insights / blog section.
// Stored as structured blocks so articles render cleanly without an MDX
// pipeline and stay easy to edit. Figures are general guidance as of the
// 2025–26 assessment years — each article carries a note to confirm specifics,
// which is the right posture for a CA firm anyway.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // ISO
  readingMinutes: number;
  content: Block[];
};

export const posts: Post[] = [
  {
    slug: "itr-filing-fy-2024-25-guide",
    title: "ITR filing for FY 2024–25: deadlines, documents and the mistakes that trigger notices",
    excerpt:
      "A plain-English walkthrough of who files which form, what to keep ready, and the small errors we see every season that turn into department notices.",
    category: "Income Tax",
    author: "CA Raees Kadiwal",
    date: "2025-06-18",
    readingMinutes: 7,
    content: [
      { type: "p", text: "Filing your income tax return is less about the form and more about reconciling what you earned with what the department already knows. Thanks to the Annual Information Statement (AIS) and Form 26AS, most of your income is already visible to the tax office before you file. The job of a good return is to match that picture — and explain anything that does not." },
      { type: "h2", text: "When is the return due?" },
      { type: "p", text: "For most individuals and businesses that are not subject to a tax audit, the due date for the financial year 2024–25 (assessment year 2025–26) is 31 July 2025. If your accounts need to be audited, you get until 31 October. Missing the date does not just mean a late fee — it can cost you the ability to carry forward certain losses, which is often the more expensive consequence." },
      { type: "h2", text: "Which form applies to you?" },
      { type: "list", items: [
        "ITR-1 (Sahaj): resident individuals with salary, one house property and modest other income.",
        "ITR-2: capital gains, more than one house property, or foreign assets/income.",
        "ITR-3: income from a business or profession, including most consultants and traders.",
        "ITR-4 (Sugam): small businesses and professionals opting for presumptive taxation.",
      ] },
      { type: "p", text: "Choosing the wrong form is one of the fastest ways to have a return treated as defective, so it is worth confirming before you start rather than after a notice arrives." },
      { type: "h2", text: "Documents to keep ready" },
      { type: "list", items: [
        "Form 16 from every employer you worked for during the year.",
        "Form 26AS and your AIS, downloaded and read — not assumed.",
        "Interest certificates from banks and the post office.",
        "Capital gains statements from your broker and mutual fund houses.",
        "Proof for any deductions you plan to claim (80C, 80D, home loan interest, and so on).",
      ] },
      { type: "h2", text: "The mistakes we see every season" },
      { type: "p", text: "The notices our clients bring us almost always trace back to a handful of avoidable slips: interest income left off because no TDS was deducted, a mismatch between the AIS and the return, forgetting to report a second employer's salary, or claiming the old-regime deductions after the new regime had already been selected as default." },
      { type: "callout", text: "Pick your tax regime deliberately. For many salaried taxpayers the new regime is now the default — if the old regime saves you more, you have to choose it actively and on time." },
      { type: "p", text: "If any of this feels like guesswork, that is exactly the point at which a short conversation saves far more than it costs. We would rather help you file it right once than fix a notice later." },
    ],
  },
  {
    slug: "gst-registration-maharashtra",
    title: "GST registration in Maharashtra: who needs it, the thresholds, and the step-by-step process",
    excerpt:
      "Turnover limits, voluntary registration, the documents the portal actually asks for, and how to avoid the rejection loop that delays your GSTIN.",
    category: "GST",
    author: "CA Raees Kadiwal",
    date: "2025-08-05",
    readingMinutes: 6,
    content: [
      { type: "p", text: "Whether you need GST registration is usually a question of turnover, but the answer has more nuance than the headline numbers suggest. Register too late and you face penalties; register when you did not need to and you take on monthly compliance you could have avoided." },
      { type: "h2", text: "The turnover thresholds" },
      { type: "p", text: "In most states, a business supplying goods must register once annual turnover crosses ₹40 lakh; for services the limit is ₹20 lakh. These are the common thresholds, but special-category states and certain supplies change the picture, so treat them as a starting point rather than a rule carved in stone." },
      { type: "h2", text: "When registration is mandatory regardless of turnover" },
      { type: "list", items: [
        "You sell across state lines (inter-state supply of goods).",
        "You sell through an e-commerce operator such as Amazon or Flipkart.",
        "You are liable to pay tax under the reverse charge mechanism.",
        "You are a casual taxable person or a non-resident taxable person.",
      ] },
      { type: "h2", text: "Why voluntary registration can be worth it" },
      { type: "p", text: "Even below the threshold, registering lets you claim input tax credit on your purchases and makes you a more credible supplier to larger, GST-registered clients who want their own credit. For a growing B2B business, that credibility often outweighs the compliance effort." },
      { type: "h2", text: "Documents the portal will ask for" },
      { type: "list", items: [
        "PAN and Aadhaar of the proprietor, partners or directors.",
        "Proof of business address — an electricity bill plus a rent agreement or NOC.",
        "A cancelled cheque or bank statement.",
        "Photographs and, for companies and LLPs, the incorporation documents.",
      ] },
      { type: "callout", text: "Most rejections we fix are address-proof mismatches: the name on the electricity bill, the rent agreement and the application simply need to tell the same story." },
      { type: "p", text: "Done cleanly, a registration comes through in a few working days. Done in a hurry with mismatched documents, it turns into a cycle of queries and resubmissions — which is the main reason clients hand this over to us." },
    ],
  },
  {
    slug: "nri-indian-income-tax-dtaa",
    title: "NRI? Here's how your Indian income is actually taxed — and the DTAA relief most people miss",
    excerpt:
      "Residential status decides everything. A clear look at what India taxes for an NRI, TDS on property and investments, and claiming double-taxation relief.",
    category: "NRI Taxation",
    author: "CA Raees Kadiwal",
    date: "2025-09-22",
    readingMinutes: 8,
    content: [
      { type: "p", text: "For Non-Resident Indians, almost every tax question comes back to one thing: your residential status for the year. Get that right and the rest follows logically. Get it wrong and you either overpay or invite a notice — both avoidable." },
      { type: "h2", text: "What India actually taxes for an NRI" },
      { type: "p", text: "As an NRI, you are taxed in India only on income that arises or is received in India — rent from an Indian property, capital gains on Indian shares or mutual funds, and interest on certain Indian accounts. Your salary earned and received abroad is generally outside the Indian net. The confusion usually starts when income straddles both countries." },
      { type: "h2", text: "TDS: the part that surprises people" },
      { type: "p", text: "Tax is often deducted at source at rates higher than your actual liability. Sell a property and the buyer may deduct TDS on the entire sale value; earn rent and the tenant may deduct it too. The money is not lost — it is a credit you claim when you file — but without a return you simply leave it with the department." },
      { type: "callout", text: "A Lower Deduction Certificate can cut the TDS on a property sale to match your real capital gain, instead of locking up a large refund for a year. It has to be arranged before the sale, not after." },
      { type: "h2", text: "DTAA: don't pay twice on the same income" },
      { type: "p", text: "India has Double Taxation Avoidance Agreements with most countries where Indians live and work. Depending on the treaty, you either pay tax in only one country or claim a credit in your country of residence for tax already paid in India. Claiming this relief usually needs a Tax Residency Certificate and Form 10F — paperwork that is simple once you know it is required and painful to reconstruct later." },
      { type: "h2", text: "The repatriation question" },
      { type: "p", text: "Moving money out of India has its own set of forms (15CA and 15CB) and limits. It is rarely difficult, but it is procedural, and banks will hold the transfer until the paperwork is exactly right." },
      { type: "p", text: "If you are managing property, investments or a business back home from abroad, this is precisely the kind of work that benefits from a single point of contact who understands both sides. That is a large part of what we do." },
    ],
  },
  {
    slug: "private-limited-vs-llp-vs-opc",
    title: "Private Limited, LLP or OPC: choosing the right structure for your new business",
    excerpt:
      "Liability, compliance cost, how investors see you, and tax treatment — an honest comparison to help founders pick a structure they won't regret.",
    category: "Business Setup",
    author: "CA Raees Kadiwal",
    date: "2026-01-14",
    readingMinutes: 7,
    content: [
      { type: "p", text: "The structure you register in your first month quietly shapes the next several years — your compliance bill, how easily you can raise money, and how protected your personal assets are. There is no single best answer, only the right fit for where your business is going." },
      { type: "h2", text: "Private Limited Company" },
      { type: "p", text: "This is the default for any business that plans to raise external capital. Investors understand it, equity is easy to issue, and your liability is limited to what you put in. The trade-off is the heaviest compliance of the three — board meetings, annual filings and statutory audit regardless of size." },
      { type: "h2", text: "Limited Liability Partnership (LLP)" },
      { type: "p", text: "An LLP gives you limited liability with noticeably lighter compliance, which makes it a natural home for professional services firms and bootstrapped businesses that are not chasing venture funding. The catch: equity investors generally will not put money into an LLP, so it is a poor fit if fundraising is on your roadmap." },
      { type: "h2", text: "One Person Company (OPC)" },
      { type: "p", text: "An OPC lets a single founder get the limited-liability protection of a company without a second shareholder. It suits a solo founder who wants a corporate identity today, and it can be converted to a Private Limited Company later as the business grows." },
      { type: "h2", text: "A quick way to decide" },
      { type: "list", items: [
        "Raising VC or angel money soon? Private Limited Company.",
        "Professional practice or a lean, self-funded business? LLP.",
        "Solo founder who wants limited liability now? OPC, with a path to convert later.",
        "Testing an idea with little revenue? A proprietorship may be enough to start — you can formalise as you grow.",
      ] },
      { type: "callout", text: "Register for the business you are becoming, not just the one you are today — but don't over-build. Converting later is routine; we do it regularly." },
      { type: "p", text: "We walk founders through this choice almost every week, usually in a single conversation. It is worth getting right before the paperwork is filed." },
    ],
  },
  {
    slug: "tds-checklist-small-business",
    title: "TDS on rent, salary and contractors: a small-business owner's compliance checklist",
    excerpt:
      "Deducting tax at source is where good businesses pick up avoidable penalties. The rates, the deadlines, and a simple monthly rhythm to stay clean.",
    category: "Compliance",
    author: "CA Raees Kadiwal",
    date: "2026-03-30",
    readingMinutes: 5,
    content: [
      { type: "p", text: "TDS is deceptively simple: when you pay certain expenses, you hold back a slice and deposit it with the government on the payee's behalf. The penalties for getting the timing wrong, though, are anything but simple — and they land on the business, not the payee." },
      { type: "h2", text: "Where a typical business has to deduct" },
      { type: "list", items: [
        "Salaries above the taxable threshold, deducted monthly.",
        "Rent, once it crosses the annual limit for the year.",
        "Payments to contractors and professionals — the common case for consultants, agencies and freelancers you hire.",
        "Commission, brokerage and interest payments beyond their thresholds.",
      ] },
      { type: "h2", text: "The deadlines that matter" },
      { type: "p", text: "Tax deducted in a month is generally due by the 7th of the following month. Quarterly TDS returns then report what you deducted and let the payee claim credit. Deposit late and interest accrues from the date of deduction; file the return late and a daily fee starts ticking — which is why this is worth a fixed routine rather than a scramble." },
      { type: "callout", text: "Issue Form 16 and Form 16A on time. Your contractors and employees cannot claim their credit without it, and a missing certificate is the fastest way to lose a good working relationship." },
      { type: "h2", text: "A simple monthly rhythm" },
      { type: "p", text: "The businesses that never worry about TDS treat it as a calendar habit: deduct as you pay, deposit by the 7th, reconcile at month-end, and file the quarterly return on time. Put those four steps on a recurring reminder and the penalties simply stop happening." },
      { type: "p", text: "If payroll and vendor payments have outgrown a spreadsheet, handing the deduction, deposit and filing to us removes a whole category of risk from your month." },
    ],
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
