# Resonance – Full‑Stack ElevenLabs‑Style AI Voice Platform

Resonance is a full‑stack AI voice platform inspired by the ElevenLabs product and built following the **“Build and Deploy a Full Stack ElevenLabs Clone”** workshop by Code with Antonio. It combines a modern Next.js frontend with a type‑safe backend, database, and AI text‑to‑speech pipeline.

> Learn more about the original workshop on [Code with Antonio](https://www.codewithantonio.com/workshops/build-and-deploy-a-full-stack-elevenlabs-clone).

---

## Features

- Modern **Next.js App Router** frontend with a responsive dashboard and sidebar layout.
- Text‑to‑speech interface with prompt input and real‑time audio playback (work in progress).
- Database layer configured with **Prisma** for users, voices, and generation history (see `/prisma`).
- Planned features: auth, billing, voice management, and a full AI pipeline following the workshop roadmap.

---

## Tech Stack

- **Framework:** Next.js (TypeScript, App Router)
- **Styling & UI:** Tailwind CSS and component‑based dashboard UI.
- **Database & ORM:** PostgreSQL + Prisma (`/prisma`)
- **Runtime:** Node.js
- **Package manager:** npm (or pnpm/yarn/bun)

Planned integrations (as you progress through the workshop):

- tRPC backend for type‑safe API procedures.
- Cloudflare R2 for audio file storage and custom voice uploads.
- Authentication and subscription billing with usage metering.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, yarn, or bun
- PostgreSQL (local or hosted)

### 1. Clone the repository

```bash
git clone https://github.com/rishavvrajj/resonance.git
cd resonance
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### 3. Configure environment variables

Create a `.env` file in the project root (and optionally base it on `.env.example` once added):

```bash
touch .env
```

Add values for:

- `DATABASE_URL` – PostgreSQL connection string used by Prisma.

Future variables (to be added as features land):

- `NEXTAUTH_SECRET` and provider keys for auth.
- `STRIPE_SECRET_KEY` and Stripe webhook secret for billing.
- `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET` for Cloudflare R2.
- Any API keys for the chosen text‑to‑speech model.

### 4. Set up the database

```bash
npx prisma migrate dev
```

You can inspect and edit the schema at:

```text
prisma/schema.prisma
```

### 5. Run the development server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

Edit the main page at:

```text
src/app/page.tsx
```

The app will hot‑reload as you make changes.

---

## Project Structure

```text
resonance/
  prisma/           # Prisma schema and migrations
  public/           # Static assets (icons, fonts, images)
  src/
    app/            # Next.js app router pages/layouts
    components/     # Reusable UI components
    lib/            # Utilities and helpers
    server/         # (Planned) tRPC routers and server logic
  prisma.config.ts  # Prisma configuration
  next.config.ts    # Next.js configuration
  package.json
  tsconfig.json
```

- `prisma/` holds database schema and migration history.
- `public/` contains static assets used in the UI.
- `src/` contains the app router, dashboard layout, and TTS interface logic.

---

## Roadmap

This project follows the chapters in the Code with Antonio ElevenLabs clone workshop.

- Project setup, Next.js, and Prisma foundations ✅
- Dashboard shell and navigation ✅
- Text‑to‑speech UI and waveform/audio playback ⏳ in progress
- Backend infrastructure (tRPC, AI model integration) 🔜
- Voice selection and history pages 🔜
- Voice management (uploads, recording, cloning) 🔜
- Billing and usage‑based limits 🔜
- Production deployment, logging, and monitoring (e.g., Sentry) 🔜

---

## Deployment

The app is ready to be deployed on any Next.js‑friendly platform:

- **Vercel** is recommended for smooth App Router support.
- You can also deploy via Docker or a custom Node.js server.

See the official [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for platform‑specific steps.

---

## Acknowledgements

- Workshop & architecture by **Antonio** – [codewithantonio.com](https://www.codewithantonio.com).
- Workshop: [Build and Deploy a Full Stack ElevenLabs Clone](https://www.codewithantonio.com/workshops/build-and-deploy-a-full-stack-elevenlabs-clone).
