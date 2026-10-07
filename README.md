# Raees Kadiwal & Co. — CA Firm Website

Marketing website + admin dashboard for a Chartered Accountant firm, built with
**Next.js 16** (App Router), **React 19**, **Tailwind CSS v4** and **MongoDB**
(via Mongoose).

- Public site: landing sections + a contact form that saves inquiries to MongoDB.
- Admin dashboard at `/admin`: password-protected, lists/filters inquiries and shows stats.

## Requirements

- Node.js 20+
- A MongoDB database (e.g. a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster)

## Environment variables

Copy `.env.example` to `.env.local` and fill it in:

| Variable | Required | Purpose |
| --- | --- | --- |
| `MONGODB_URI` | yes | MongoDB connection string (contact form + admin) |
| `ADMIN_PASSWORD` | yes | Password for the `/admin` login |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | no | Google Search Console token |

## Local development

```bash
npm install
cp .env.example .env.local   # then edit the values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The admin dashboard is at
[http://localhost:3000/admin](http://localhost:3000/admin).

## Deploying to Netlify

1. Push this repo to GitHub and "Add new site → Import an existing project" in Netlify.
2. Netlify auto-detects Next.js (config is also pinned in `netlify.toml`), so the
   default build command `npm run build` is correct.
3. In **Site settings → Environment variables**, add `MONGODB_URI` and
   `ADMIN_PASSWORD` (and optionally `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`).
4. If using MongoDB Atlas, allow Netlify's outbound IPs — the simplest option for
   testing is to allow access from anywhere (`0.0.0.0/0`) in Atlas Network Access.
5. Deploy.

## Security notes

- Every `/api/admin/*` route checks the `admin_session` cookie **server-side**
  (`lib/auth.ts`), so inquiry data is never exposed without logging in — this does
  not depend on edge middleware.
- The admin password is compared on the server; the session is an `httpOnly`
  cookie.
