# Welcome to the Freshbase SaaS Kit!

This boilerplate kit is designed to give you a massive head start on your next SaaS project. We’ve handled the boring stuff and selected the best, most robust tech stack so you can focus on building what makes your app unique.

—

## What's Included?

_Everything you need to launch:_

- **Theme Editor**: A visual tool to customize your look for both Light and Dark modes.
- **Marketing Site**: SEO-optimized landing pages to convert visitors.
- **User Authentication**: Secure sign up, login, password reset.
- **User Dashboard**: A complete portal for users to manage their profiles and settings.
- **Subscriptions & Billing**: Regular and recurring encrypted payments and customer portal.
- **Blog Engine**: A built-in blog to share updates and improve your search ranking.
- **Email System**: Transactional emails to welcome users and keep them in the loop.
- **Site Search**: Instant, zero-latency search for your content.
- **Contact Form**: Integrated request handling to capture leads.

_Everything is just a prompt away!_

–

_More reasons to love it:_

- **Lightning Fast**: Pre-rendered pages that hit 100/100 on Google PageSpeed.
- **Extensible**: A solid foundation that grows with you. Add new pages, components, and endpoints easily.
- **MIT Open Source**: 100% free to use and modify. It's yours to edit and use however you want.

—

## Tech Stack

_We picked a modern, robust, industry-standard secure stack that scales from day one:_

- **Framework**: SvelteKit (Fast, easy, powerful)
- **Styling**: TailwindCSS + DaisyUI (Beautiful UI, fast)
- **Auth & DB**: Firebase (Reliable, serverless, scales infinitely)
- **Payments**: Stripe (The gold standard for SaaS billing)
- **Hosting**: Netlify (Recommended for easiest deployment)

_...If you don't know what that means, don't worry about it... It's good stuff!_

—

## Quick Start Guide

### 1. Prerequisites

You'll need a code editor. We highly recommend **[Antigravity](https://antigravity.google/)** or **[Cursor](https://cursor.com/home)** for the best AI-assisted experience, but **[VS Code](https://code.visualstudio.com)** works great too if you're more technical!

**Reference for AI Models (Important!) when using an AI assistant like Antigravity or Cursor:**
For anything beyond basic tweaks it's good practice to reference the `_AI-CONTEXT.md` file to your AI at the start of a chat.

- The file contains the "brain" of the project: architecture rules, tech stack details, and coding conventions.
- Giving this context helps the AI write perfect code for _this_ specific project and avoids outdated patterns.

—

### 2. Understand the Documentation Ecosystem 🗺️

This kit comes with three key documents designed to work together:

1.  **[\_START-HERE.md](_START-HERE.md)** (This File): Your _Technical Setup Guide_. Use this first to install tools, configure Firebase/Stripe, and get the app running.
2.  **[docs/launch_guide.md](docs/launch_guide.md)**: Your _Strategy & Strategy_. Read this for "vibe coding" best practices, AI prompt engineering, and a high-level overview of how to build features.
3.  **[docs/roadmap.md](docs/roadmap.md)**: Your _Master Checklist_. Use this as a living document to track your progress from idea to launch. It breaks down the entire process into actionable boxes to check off. We got it started for you!

**Suggested Workflow:**
Complete the setup in this file -> Read the Launch Guide -> Execute using the Roadmap.

**Other Helper Docs:**

- **[docs/data_schema.md](docs/data_schema.md)**: Reference for you and your AI to understand your database structure (if you need to enable a database).
- **[docs/function_map.md](docs/function_map.md)**: Quick lookup for key functions and API endpoints (Don't worry about this too much if you're a beginner!).

—

### 3. Clone & Run

_Taking the first steps toward vibe coding_

1. Create a new folder for your project.
2. Open it in your code editor of choice.
3. Ask your AI to "Clone the repo from https://github.com/wdcampbell3/Freshbase-SAAS-Kit directly into this current folder". *NOTE: If asked you can replace all contents with the new files.*
4. Let it install any dependencies or other things it requests.
5. Ask it to "Run the dev server" AKA `npm run dev`.
6. Open [`localhost:5173`](http://localhost:5173) to see your new app preview!

—

### 4. Make it Yours

_Important for branding and personalization!_

1. This kit includes a powerful **Theme Editor** to customize your app's look.
2. Navigate to [`/styles`](http://localhost:5173/styles) in your browser.
3. You can edit the color palette for both **Light** and **Dark** modes to ensure both look great, with changes previewed in real-time.
4. Click **Save** to instantly update your app's global styles and choose what you want the default mode to be.
   **TIP: Mess something up? You can Use **Restore Defaults** if you ever need to reset to the original look.**

—

### 5. Just Experimenting? You can keep it simple!

_For more basic apps and prototyping, you may not need the database or other advanced features yet._

**If you're just:**

- Playing with UI ideas and layouts
- Building simple tools just as a calculator or game
- Testing out the basics of vibe coding with AI
- Creating static content, websites or portfolios

**Does that sounds like you? If so, you can skip steps 6-9 entirely!** Jump straight to **Next Steps** at the bottom of this file and start building.

**The app gracefully handles missing Firebase credentials:**
- Pages that don't require auth/database work perfectly without Firebase configured
- If Firebase credentials are missing or invalid, you'll see a helpful warning in the console explaining the issue
- The app won't crash—it continues running with auth/database features disabled
- Protected routes (like `/account`) will simply redirect to login, which is expected behavior

**Come back to this guide later** when you're ready to add user authentication, payments, or data persistence. The backend setup will be waiting for you!

—

## Activating the OPTIONAL Advanced Features... Pick & Choose Accordingly!

### 1. Set up Firebase (Your Database Backend)

_Required for data persistence across browsers & computers, user auth, billing, etc._

1. Go to the [Firebase Console](https://console.firebase.google.com) and create a project.
3. **Enable Database**: Go to Build → Firestore Database. Create New Database → Standard edition → Default Database ID & location → Start in *Production mode*.
2. **Enable Auth**: Go to Build → Authentication → Get started → Choose "Email/Password" and enable it → You can also enable "Google" as a new provider (Optional, requires additional advanced steps)
4. **Get Credentials**: Click gear icon in Project Overview:
   - *Client*: Project Settings → General → Add App (Click "Web" icon) → Name the app whatever you like → Do NOT select Firebase hosting → Register app → Continue to Console → Go back to your coding app → Copy/paste in the following:
   ```
   Rename `.env.example` to `.env.local` and fill in the necessary Firebase values from this information:
   [THEN PASTE IN ENTIRE BLOCK OF CONFIGURATION TEXT HERE]
   ```
   - *Server*: Project Settings → Service Accounts → "Generate new private key" → Generate key → Open the downloaded text file → Go back to your coding app → Copy/paste in the following:
   ```
   Fill in the necessary Firebase values in .env.local from this information:
   [THEN PASTE IN ENTIRE BLOCK OF TEXT FROM DONWLOADED FILE]
   ```
5. **Test Connection**: Type "Test Firebase connection" → The app will attempt to make the connection. *NOTE: If you have not enabled authentication then you will get an error, but this will not prevent you from building. You can always return to Firebase and enable the authorization later if you need it.* 


—

### 2. Set up User Authentication

If you've configured Firebase authentication in the previous step, auth is auto-magically handled.

- **Login/Signup**: Visit `/login` or `/signup` to test it out.
- **Protected Routes**: Any route in `src/routes/(admin)` requires login.
- **Session Management**: We use secure server-side cookies, not client-side JWTs.

—

### 3. Set up the Blog Engine

The blog is pre-configured for SEO and Markdown support.

- **Location**: Blog posts live in `src/routes/(marketing)/blog/posts/`.
- **How to Post**: Simply add a new `.md` file to that folder. The filename becomes the URL (slug).
- **Frontmatter**: Ensure your markdown file starts with metadata like `title`, `date`, `author`, `description`, and `coverImage`.

**NOTE: This is a very basic blog engine. If you need more advanced features, you can create your own blog system behind an admin dashboard just by prompting it into being. Remember you can always ask the AI how to go about it and it can help you build it.**

–

### 4. Set up Cloudinary

_Required for uploading & optimizing user uploads and marketing images._

1. Create a free account at [Cloudinary](https://cloudinary.com).
2. Go to API Keys and click "Generate new API Key" and update the name to reflect your app's name.
3. Get your *Cloud Name* (top of page), *API Key*, and *API Secret* from the dashboard.
4. Copy/paste these values over to the `.env.local` environment variables file.
5. Test the connection by typing "Test Cloudinary connection"

—

### 5. Set up Stripe

_Ready to make money?_

1. Create a free account at [Stripe](https://stripe.com).
2. Click the gear icon in the nav bar → Developers → Manage API keys → Create restricted key → Providing this key to another website → Name it and enter the website URL you intend to use it on.
2. Copy the *Secret API Key* and add it to `.env.local`. At this point you can type "Test my Stripe connection" to see if you've done it correctly.
3. Create a Product in your [Stripe Dashboard](https://dashboard.stripe.com)
4. Copy the `Price ID` (starts with `price_...`)
5. Update `src/routes/(marketing)/pricing/pricing_plans.ts` with your new Product IDs.
6. The `/pricing` page handles checkout automatically

—

### 6. Set up Google Analytics (Optional)

_Track your users and understand how they interact with your app._

**The app works perfectly without Google Analytics configured**—this is completely optional!

If you want to track visitors and user behavior:

1. Create a free account at [Google Analytics](https://analytics.google.com).
2. Set up a new property for your website.
3. Get your **Measurement ID** (starts with `G-` for GA4).
4. Add it to your `.env.local` file:
   ```
   PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```
5. Restart your dev server for the changes to take effect.

**Note**: The Google Analytics script will only load if this environment variable is set, so the app works out of the box without it.

—

### 7. Deploy to Netlify

_Time to go live!_

1. At this point it's a good idea to make sure that no secret information will be visible once published. Ask the AI: "I'm going to push my code to Github. Please double check the security of my project to make sure nothing sensitive will be visible on Github" and accept any fixes it might have.
2. Create A GitHub account if you don't already have one and create a new repo → New → name it to reflect your app  → Keep default settings → Create repository → Copy repository URL → Ask the AI: "Connect to my github and push all of my code to this repo: [INSERT NEW REPO URL]" (IMPORTANT!!)
3. Log in to [Netlify](https://www.netlify.com) with your GitHub login for the easiest set up.
4. Click "Add new project" → "Import an existing project" → "GitHub"
5. Select your repo → Give it a name to reflect your app. _NOTE: In "Build settings", the defaults usually work (Base directory: `/`, Build command: `npm run build`, Publish directory: `build` or `public`). SvelteKit's adapter-auto handles this._ → Click "Deploy" 
6. **Crucial**: Add your final local environment variables to Netlify: Project configuration → Environment variables → Add a variable → Import from a .env file → Copy the values from your `.env.local` file and paste them into Netlify. Just remove any blank lines and # comments. *Only keep the key-value pairs.* → Import variables.
- IMPORTANT: After importing make sure to go back and for all PRIVATE variables click arrow → Options → Check the "Contains secret values" box. *You will see a lock next to the item in the list if you've done it correctly.*
- NOTE: If you add any more local environmental variables in the future you will need to come back here to add them here too.
7. **Test Deployment**: Go to Deploys → Trigger deploys → Deploy project. *If it works you should see an "Open production deploy" button. Click it... HUZZAH!*

### 8. Connect your domain

_Make it OFFICIAL!_

1. In your Netlify project go to Domain management. Click "Add a domain". 
2. Go through the domain verification process. This usually involves adding a TXT record in the DNS settings at your domain registrar or hosting. 
3. Create the CNAME domain record in the DNS settings at your domain registrar or hosting that points to your Netlify project URL: my-project.netlify.app
4. Wait a while until the DNS propagates and your site will soon be live!


—

## Next Steps

Now that you're set up, it's time to build!

- **Strategy**: Read **[`docs/launch_guide.md`](docs/launch_guide.md)** next. It's essential for first-time builders to understand how to "vibe code" effectively with AI if they want to build a robustSaaS app.
- **Execution**: Use **[`docs/roadmap.md`](docs/roadmap.md)** as your interactive checklist. Mark items off as you go to track your journey from idea to launch. This is a PRO MOVE!

—

## Common Issues

Problem: "Page not found" after adding a route
Solution: Check file is named `+page.svelte` (not `.ts`)

Problem: Firebase initialization warning on startup
Solution: This is expected if you haven't configured Firebase yet (see "Set up Firebase" in the "Activating the OPTIONAL Advanced Features" section above). The app will continue running with auth/database features disabled. To fix: add valid Firebase credentials to `.env.local` and restart the dev server.

Problem: Firebase permission denied
Solution: Verify Firestore rules in Firebase Console match your query

Problem: Styles not updating
Solution: Clear browser cache or restart dev server

Problem: Images not loading
Solution: Check console for Cloudinary errors or verify connection in `.env.local`

—

_Thanks to the [CMSaasStarter](https://github.com/scosman/CMSaasStarter/blob/main/README.md) team for their original inspiration for this kit._

–

**Happy building! 🚀**
