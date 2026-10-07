import { OG_SIZE, OG_CONTENT_TYPE, renderOgImage } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt =
  "Raees Kadiwal & Co. — Chartered Accountant Firm in Malad East, Mumbai";

export default function TwitterImage() {
  return renderOgImage();
}
