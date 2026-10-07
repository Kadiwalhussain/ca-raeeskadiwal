import { cookies } from "next/headers";

/**
 * Server-side admin session check.
 *
 * Auth is enforced directly inside every admin API route (defense-in-depth)
 * rather than relying only on edge middleware, because Next.js 16's `proxy.ts`
 * middleware is not reliably supported by Netlify's Next runtime yet. This way
 * the contacts data stays protected no matter where the app is deployed.
 */
export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get("admin_session")?.value === "authenticated";
}
