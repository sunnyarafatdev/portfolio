# arafatsunny.com — Personal Portfolio

Digital Marketing Specialist & Paid Media Buyer portfolio, built for job applications.

## Stack
Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Resend (contact form)
Deployed on Cloudflare Workers via the OpenNext adapter.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in your real Resend API key
npm run dev
```

Visit http://localhost:3000

## Deploy to Cloudflare

1. Push this repo to GitHub (see commands below).
2. Install Wrangler and log in: `npx wrangler login`
3. Add your Resend key as a Cloudflare secret (do NOT put it in wrangler.toml):
   ```bash
   npx wrangler secret put RESEND_API_KEY
   npx wrangler secret put CONTACT_TO_EMAIL
   ```
4. Build and deploy:
   ```bash
   npm run cf:build
   npm run cf:deploy
   ```
5. In the Cloudflare dashboard, connect your GitHub repo under Workers & Pages for automatic deploys on every push (recommended), or keep deploying manually with the command above.
6. Point your `arafatsunny.com` domain to the Worker under Workers & Pages → your project → Custom Domains.

## Auto-deploy on every push (recommended — set up once)

This repo includes `.github/workflows/deploy.yml`, which builds and deploys to Cloudflare
automatically every time you push to `main`. No token ever goes through chat — GitHub
stores everything encrypted as repo secrets, and the workflow runs on GitHub's own servers.

**One-time setup (5 minutes):**

1. Push this repo to GitHub (commands below).
2. Get a Cloudflare API token: Cloudflare dashboard → My Profile → API Tokens → Create Token →
   use the "Edit Cloudflare Workers" template → copy the token.
3. Get your Cloudflare Account ID: Cloudflare dashboard → Workers & Pages → right sidebar.
4. In your GitHub repo: Settings → Secrets and variables → Actions → New repository secret.
   Add these four:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
5. Push anything to `main` — the Actions tab will show the deploy running, and the site
   goes live automatically a minute or two later.

After this one-time setup, every future push just works — you (or Claude Code) push code,
GitHub Actions builds and deploys it, done.

## Manual deploy (without GitHub Actions)

## Push this project to GitHub yourself

Run these on your own machine (never paste tokens into a chat):

```bash
cd arafatsunny-portfolio
git init
git add .
git commit -m "Initial commit: arafatsunny.com portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

When Git asks for a password over HTTPS, paste your personal access token there (in your terminal, not in any chat) — or set up the GitHub CLI (`gh auth login`) / SSH keys instead, which is safer long-term.

## Still to do
- Swap placeholder photo (`/public/`) for your real headshot
- Swap placeholder project images for real screenshots (or wire up the screenshot-API pipeline discussed for the admin dashboard phase)
- Fill in your real Resend API key as a Cloudflare secret
- Add real social links (LinkedIn, GitHub) in `src/components/Footer.tsx` and `Hero.tsx`
