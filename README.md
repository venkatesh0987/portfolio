# VENKATESAN R — Portfolio

Professional portfolio and freelance lead-generation website for a Senior Full-Stack Software Developer with 13+ years of experience in SaaS and business application development.

## Overview

- **Frontend**: React + TypeScript single-page portfolio (client/)
- **Backend**: Small Node.js/Express API for the contact form (server/)
- **Content**: All portfolio copy lives in `client/src/data/*.ts`, separate from UI components

This is a Version 1 portfolio: no database, no authentication, no CMS. Content is edited directly in the data files.

## Technology Stack

**Frontend**
- React 19, TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React (icons)

**Backend**
- Node.js, Express
- Helmet, CORS
- TypeScript (via `tsx` in development)

**Tooling**
- npm workspaces (root `client` + `server`)
- Git / GitHub

## Folder Structure

```
portfolio/
├─ client/                   React frontend
│  ├─ public/                favicon, robots.txt, sitemap.xml
│  ├─ src/
│  │  ├─ components/         Reusable UI components (Button, ProjectCard, ContactForm, ...)
│  │  ├─ sections/           Page sections (Hero, About, Projects, Contact, ...)
│  │  ├─ layouts/             Navbar, Footer
│  │  ├─ hooks/               useTheme, useReducedMotion
│  │  ├─ data/                 profile.ts, projects.ts, skills.ts, services.ts, experience.ts, social.ts
│  │  ├─ App.tsx, main.tsx, index.css
│  ├─ package.json
│  └─ vite.config.ts
├─ server/                   Express API
│  ├─ src/
│  │  ├─ routes/              health.ts, contact.ts
│  │  ├─ controllers/         contactController.ts
│  │  ├─ services/            contactService.ts
│  │  ├─ middleware/          errorHandler.ts
│  │  └─ server.ts
│  └─ package.json
├─ package.json              npm workspaces root
├─ .gitignore
└─ .env.example
```

## Prerequisites

- Node.js 18 or later
- npm 9 or later

Works the same on Windows, macOS and Linux — all scripts are cross-platform npm scripts (no shell-specific syntax or hardcoded paths).

## Installation

From the project root:

```bash
npm install
```

This installs dependencies for the root workspace, `client` and `server` in one step.

## Environment Variables

Copy the example env files and adjust as needed:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

**client/.env**

| Variable | Description | Default |
|---|---|---|
| `VITE_API_URL` | Base URL of the backend API | `http://localhost:4000` |

**server/.env**

| Variable | Description | Default |
|---|---|---|
| `PORT` | Port the API server listens on | `4000` |
| `CLIENT_ORIGIN` | Comma-separated list of allowed CORS origins | `http://localhost:5173` |
| `RESEND_API_KEY` | Resend API key used to email contact form submissions | _(unset — logs only)_ |
| `CONTACT_TO_EMAIL` | Address that receives contact form submissions | _(unset — logs only)_ |
| `CONTACT_FROM_EMAIL` | Sender address for outgoing emails | `onboarding@resend.dev` |

Never commit `.env` files — they are excluded via `.gitignore`.

## Development

Run both the frontend and backend together from the root:

```bash
npm run dev
```

Or run them individually:

```bash
npm run dev:client   # http://localhost:5173
npm run dev:server   # http://localhost:4000
```

## Build

```bash
npm run build
```

This type-checks and builds the client (output in `client/dist`) and compiles the server (output in `server/dist`).

## Production

```bash
# Frontend: serve client/dist with any static host (see Vercel deployment below)
# Backend:
cd server
npm run build
npm start
```

## API Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Validates and processes a contact form submission |

`POST /api/contact` expects a JSON body: `{ name, email, subject, message }`. Submissions are always logged server-side. If `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are set, the submission is also emailed via [Resend](https://resend.com) (see `server/src/services/contactService.ts`) — otherwise it's logged only.

### Email delivery setup (Resend)

1. Sign up at [resend.com](https://resend.com) with the inbox you want submissions delivered to.
2. Create an API key and set it as `RESEND_API_KEY` on the server (Render).
3. Set `CONTACT_TO_EMAIL` to that same inbox address.
4. Leave `CONTACT_FROM_EMAIL` unset to use Resend's shared sandbox sender (`onboarding@resend.dev`) — this only works because it can **only deliver to the address your Resend account was created with**. To send to a different `CONTACT_TO_EMAIL` or from your own domain, [verify a domain](https://resend.com/domains) in Resend and set `CONTACT_FROM_EMAIL` to an address on it.
5. Redeploy the backend after setting these.

## Deployment

### Frontend → Vercel

1. Push this repository to GitHub.
2. In Vercel, import the repository.
3. Set the **Root Directory** to `client`.
4. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
5. Add environment variable `VITE_API_URL` pointing to your deployed backend (e.g. `https://api.yourdomain.com`).
6. Deploy.

### Backend → Render

1. In Render, create a new **Web Service** from the same GitHub repository.
2. Set the **Root Directory** to `server`.
3. Build command: `npm install && npm run build`. Start command: `npm start`.
4. Add environment variables `PORT` (Render sets this automatically), `CLIENT_ORIGIN` (your deployed frontend URL, e.g. `https://yourdomain.com`), and `RESEND_API_KEY` / `CONTACT_TO_EMAIL` (see [Email delivery setup](#email-delivery-setup-resend) above) if you want submissions emailed to you.
5. Deploy, then confirm `GET /api/health` responds on the Render URL.

### Custom Domain

1. Point `yourdomain.com` (or `www`) to the Vercel project via Vercel's domain settings.
2. Point `api.yourdomain.com` to the Render service via Render's custom domain settings.
3. Update `VITE_API_URL` (Vercel) to `https://api.yourdomain.com` and `CLIENT_ORIGIN` (Render) to `https://yourdomain.com`.
4. Update the placeholder URLs in `client/index.html`, `client/public/robots.txt` and `client/public/sitemap.xml` with your real domain.

## Troubleshooting

- **Contact form fails with a network error**: confirm `VITE_API_URL` in `client/.env` matches where the API is actually running, and that the API's `CLIENT_ORIGIN` includes the frontend's URL.
- **CORS errors in the browser console**: the backend's `CLIENT_ORIGIN` env var must exactly match the frontend origin (protocol + domain, no trailing slash).
- **Contact form submits successfully but no email arrives**: check the Render service logs for the submission line; if `RESEND_API_KEY` / `CONTACT_TO_EMAIL` aren't set, submissions are logged only, not emailed. If they are set, check logs for a Resend delivery error — the most common cause is sending to an address other than your Resend account's own email without a verified domain.
- **Port already in use**: change `PORT` in `server/.env` or stop the process using that port.
- **Type errors on build**: run `npm run typecheck` from the root to see errors from both client and server.

## Placeholders to Replace

Search the project for the following and replace with your real information:

- `[YOUR LINKEDIN]` — LinkedIn profile URL
- `[YOUR DOMAIN]` — your production domain (used in `client/index.html`, `robots.txt`, `sitemap.xml`)
- `[YOUR LOCATION]` — your location, if you want to display one

## Optional Future Improvements (Not Implemented in V1)

The codebase is structured so these can be added later without a rewrite: blog, case studies, additional projects, testimonials, resume/CV download, analytics, newsletter signup, CMS, database, admin panel.
