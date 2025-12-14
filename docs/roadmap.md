# Project Roadmap & Checklist 🗺️

> **How to use this ecosystem:**
> 1.  🛠 **Setup**: Follow [`_START-HERE.md`](../_START-HERE.md) first to configure your environment, Firebase, and Stripe keys.
> 2.  🧠 **Strategy**: Read [`docs/launch_guide.md`](./launch_guide.md) for high-level advice ("vibe coding"), prompt engineering, and product management tips.
> 3.  ✅ **Execution**: Use **this document** as your master checklist to track concrete progress from idea to launch.

---

## Phase 1: Ideation & Foundation
*Before writing code, define what you are building.*

- [ ] **Define the "One-Liner"**: Write a single sentence describing your app (Who + Problem + Solution).
- [ ] **Generate a PRD**: Use your AI to write a Product Requirements Document (see `launch_guide.md`).
- [ ] **Map the Data**: basic database schema plan (Users, Projects, etc.).
- [ ] **Project Clean-up**: Remove any example code or routes from the starter kit you definitely won't need.

## Phase 2: Branding & Design
*Make it look like YOUR product.*

- [ ] **Theme Configuration**:
    - [ ] Run `npm run dev` and visit `/styles`.
    - [ ] Select a Primary Color and Font.
    - [ ] Toggle Dark/Light mode preferences.
    - [ ] Click **"Save Project-Wide"**.
- [ ] **Landing Page**:
    - [ ] Update `src/routes/(marketing)/+page.svelte` with your copy.
    - [ ] Update feature list and benefits.
    - [ ] Replace or update the Hero image.
- [ ] **Metadata**: Update `src/app.html` title and `src/config.ts` website details.

## Phase 3: Building the MVP (Core Features)
*The meat and potatoes of your application.*

- [ ] **Navigation**: Update the Navbar (`src/components/Navigation.svelte` or similar) with links to your new pages.
- [ ] **Core Feature Routes**: Create the necessary routes (e.g., `/app/dashboard`, `/app/projects`).
- [ ] **CRUD Operations**: Implements Create, Read, Update, Delete logic for your core data types in Firebase.
- [ ] **User Dashboard**: Customize `/account` to show relevant user data.
- [ ] **Permissions**: Ensure users can only read/write their own data (`firestore.rules`).

## Phase 4: Monetization & Growth (Optional)
*Turning users into customers.*

- [ ] **Stripe Product Setup**: Create products in Stripe Dashboard.
- [ ] **Link Products**: Update `plans` in `src/routes/(marketing)/pricing/pricing_plans.ts` with real Price IDs.
- [ ] **Test Payments**: Verify the checkout flow using Stripe Test Mode.
- [ ] **Blog**: Write 1-3 initial blog posts in `src/routes/(marketing)/blog/posts/` for SEO.
- [ ] **Email**: Configure transactional emails (Welcome, Reset Password) if using a provider like Resend/SendGrid.

## Phase 5: Pre-Launch Polish
*The "Vibe Check" before going live.*

- [ ] **Mobile Review**: Test all pages on mobile view (Chrome DevTools).
- [ ] **Accessibility Audit**: Check for missing alt tags or poor contrast in the Theme Editor.
- [ ] **Security Sweep**:
    - [ ] Search code for hardcoded API keys.
    - [ ] Remove `console.log` debugging statements.
- [ ] **Legal Pages**: Generate and add Privacy Policy & Terms of Service.

## Phase 6: Launch 🚀
*Go time.*

- [ ] **Git Push**: Ensure all changes are committed and pushed to GitHub.
- [ ] **Netlify/Vercel Setup**: Connect repository and **add all Environment Variables**.
- [ ] **Domain**: Purchase domain and configure DNS records.
- [ ] **Live Test**: Create a real account on the live site and run through the core loop.
- [ ] **Promote**: Share your new SaaS with the world!
