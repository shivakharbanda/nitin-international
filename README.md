# Firebase Studio

This is a Next.js starter in Firebase Studio.

To get started, take a look at `src/app/page.tsx`.

## Environment Variables

Create a `.env` file based on `.env.example` and provide your Supabase credentials. The following variables are expected:

```
POSTGRES_URL=
POSTGRES_PRISMA_URL=
SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
POSTGRES_URL_NON_POOLING=
SUPABASE_JWT_SECRET=
POSTGRES_USER=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are used in the browser. `SUPABASE_SERVICE_ROLE_KEY` is optional and only required if your API routes need elevated privileges.

## Running Locally

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```
