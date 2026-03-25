# Somil Jain — Portfolio Website

A premium, cinematic dark-mode portfolio built with **Next.js 15 (App Router)**, **Tailwind CSS v4**, and **Framer Motion**. Features a live animated starfield background, glassmorphism UI, Playfair Display headings, and a fully responsive layout.

---

## 🚀 Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 + custom design system |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Playfair Display (headings) via Google Fonts |
| Language | TypeScript |
| Package manager | pnpm (also compatible with npm) |

---

## 📁 Project Structure

```
sj-portfolio-website/
├── app/                        # Next.js App Router pages
│   ├── globals.css             # 🎨 DESIGN SYSTEM — theme tokens, utility classes
│   ├── layout.tsx              # Root layout (fonts, metadata, providers)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About page
│   ├── work/
│   │   ├── page.tsx            # ✏️ Work/Projects listing — EDIT PROJECTS HERE
│   │   └── [slug]/page.tsx     # Individual project detail page
│   ├── blog/page.tsx           # ✏️ Blog listing — EDIT POSTS HERE
│   └── contact/page.tsx        # Contact page
│
├── components/
│   ├── navbar.tsx              # Top navigation bar (fixed, glass on scroll)
│   ├── footer.tsx              # Footer with links
│   ├── hero-section.tsx        # ✏️ HOME — name, tagline, stats, badges, social links
│   ├── featured-projects-section.tsx  # Home page project preview cards
│   ├── tech-stack-section.tsx  # Home page tech grid
│   ├── stars-background.tsx    # Animated starfield + shooting stars canvas
│   ├── cursor.tsx              # Custom animated cursor
│   ├── scroll-progress.tsx     # Top scroll progress bar
│   ├── typewriter.tsx          # Typewriter animation component
│   ├── project-card.tsx        # Reusable project card
│   │
│   ├── about/                  # About page sections
│   │   ├── intro-section.tsx   # ✏️ Bio, profile text
│   │   ├── experience-timeline.tsx  # ✏️ EDIT EXPERIENCE HERE
│   │   ├── certifications-grid.tsx  # ✏️ EDIT CERTIFICATIONS HERE
│   │   ├── education-section.tsx    # ✏️ EDIT EDUCATION HERE
│   │   └── beyond-tech-section.tsx  # Interests / hobbies
│   │
│   ├── blog/
│   │   └── blog-card.tsx       # Blog row card component
│   │
│   └── contact/
│       ├── contact-form.tsx    # Contact form (currently sends mailto)
│       └── contact-links.tsx   # Email / LinkedIn / GitHub links
│
├── lib/
│   └── colors.ts               # getTagColor() — tech tag badge colors
│
├── public/
│   ├── avatar.png              # ✏️ Your profile photo — replace with yours
│   ├── resume.pdf              # ✏️ YOUR RESUME — drop your PDF here!
│   └── badges/                 # AWS Credly badge images
│       ├── sa-professional.png
│       ├── sa-associate.png
│       └── cloud-practitioner.png
```

---

## 🖥️ Pages Overview

### Home (`app/page.tsx`)
- Hero section with animated name, Typewriter tagline, stats (3× AWS, CGPA, YoE), AWS Credly badges
- Featured Projects preview (2 cards)
- Tech Stack grid with category filters

### About (`app/about/page.tsx`)
- Bio / intro paragraph
- Experience timeline (scroll-animated)
- Certifications grid (AWS, Microsoft, FinOps, NISM)
- Education card
- Beyond the Terminal (interests)

### Work (`app/work/page.tsx` + `app/work/[slug]/page.tsx`)
- Filterable project list (All / Infrastructure / Consulting / DevOps)
- Each project links to a detail page with highlights and tags

### Blog (`app/blog/page.tsx`)
- List of posts with category, read time, and external link
- "Coming soon" placeholder support for planned posts

### Contact (`app/contact/page.tsx`)
- Quick-reply links (email, LinkedIn, GitHub)
- Contact form (⚠️ email integration pending — see TODO)

---

## ✏️ How to Edit Content

### Update Your Personal Info (Hero)
File: `components/hero-section.tsx`

```tsx
// Line ~10 — social links
const socialLinks = [
  { href: "https://github.com/YOUR_USERNAME", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/YOUR_PROFILE", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:YOUR_EMAIL", icon: Mail, label: "Email" },
]

// Line ~16 — stats bar
const stats = [
  { value: "3×",   label: "AWS Certified" },
  { value: "9.17", label: "CGPA"          },
  { value: "1+",   label: "Year @ Celebal" },
]
```

Also update the Typewriter phrases and tagline text in the JSX below the const blocks.

---

### Add / Edit a Project
File: `app/work/page.tsx`

Add a new object to the `projects` array:

```tsx
{
  index: "05",                          // display number
  slug: "my-new-project",              // URL slug → /work/my-new-project
  type: "Infrastructure",              // filter category
  primaryTech: "aws",                  // drives card accent colour
  title: "My New Project",
  description: "Full description...",
  highlights: [
    "Key achievement 1",
    "Key achievement 2",
  ],
  tags: ["AWS", "Terraform", "S3"],    // coloured pills
},
```

To add a full project detail page, edit `app/work/[slug]/page.tsx` and add an entry there too (it reads from the same `projects` import).

---

### Add / Edit a Blog Post
File: `app/blog/page.tsx`

```tsx
// Add to the `posts` array:
{
  title:    "How I Set Up PrivateLink for Databricks",
  category: "Cloud Infrastructure",     // controls pill colour
  readTime: "8 min",
  href:     "https://dev.to/your-post", // omit href → shows "Coming soon"
},
```

**Category colours:**
| Category | Colour |
|---|---|
| Cloud Infrastructure | Indigo |
| Databricks | Red/Orange |
| Finance | Gold |
| DevOps | Cyan |

To add a new category, add it to `categoryColors` in `components/blog/blog-card.tsx`.

---

### Add / Edit Experience
File: `components/about/experience-timeline.tsx`

```tsx
// Prepend to the `experiences` array (most recent first):
{
  index:    "01",
  role:     "Cloud Engineer",
  type:     "Full-time",          // "Full-time" | "Trainee" | "Intern" | "Contract"
  company:  "Celebal Technologies",
  duration: "Aug 2025 – Present",
  points: [
    "Bullet point 1",
    "Bullet point 2",
  ],
  color: "indigo",                // "indigo" (latest) | "cyan" | "muted" (older)
},
```

---

### Add / Edit a Certification
File: `components/about/certifications-grid.tsx`

```tsx
{
  name:      "Full Certification Name",
  issuer:    "AWS",                  // or "Microsoft", "NISM", etc.
  date:      "Mar 2025",
  note:      "One-line description",
  isPrimary: true,                   // true = top row (larger); false = bottom row
  color:     "#FF9900",              // brand colour for border/badge
                                     // AWS="#FF9900", Microsoft="#0078D4"
},
```

---

### Replace Your Avatar
Drop your photo at: `public/avatar.png`
- Square crop works best
- Min 512×512px recommended

---

### Enable Resume Download
1. Export your resume as PDF
2. Drop the file here: `public/resume.pdf`
3. ✅ The "Resume" button on the homepage will immediately work

---

## 🎨 Design System

All design tokens and utility classes live in `app/globals.css`.

### Key Colour Variables
| Variable | Value | Usage |
|---|---|---|
| `--background` | `#040814` | Page background (deep navy) |
| `--foreground` | `#f8fafc` | Default text |
| `--primary` | `#10b981` | Emerald — buttons, accents |
| `--muted-foreground` | `#94a3b8` | Subtle text |

### Key Utility Classes
| Class | Effect |
|---|---|
| `.glass-card` | Glassmorphism card (backdrop-blur + border) |
| `.gradient-text` | Emerald gradient text (for name / hero) |
| `.gradient-text-heading` | White-to-silver shimmer (for section headings) |
| `.btn-primary-glow` | Emerald glow on primary buttons |
| `.btn-ghost-glow` | Subtle glow on ghost buttons |
| `.animate-float` | Gentle floating animation |
| `.animate-avatar-border` | Rotating conic gradient border on avatar |

---

## 🌟 Features

- **Starfield canvas** — live animated stars + shooting stars (max 2 grouped at once)
- **Custom cursor** — spotlight cursor on desktop
- **Scroll progress bar** — thin emerald line at top
- **Framer Motion** — page entry animations and scroll-triggered reveals
- **Fully responsive** — works at 75%–150% browser zoom; mobile-first design
- **`overflow-x: hidden`** — global safety net preventing horizontal scroll at any zoom

---

## 🔧 Local Development

```bash
# Install dependencies
pnpm install         # or: npm install

# Start dev server
pnpm dev             # or: npm run dev
# → open http://localhost:3000
```

---

## 📋 Pending TODOs (Next ~1 Month)

- [ ] **Project content** — Write descriptions, highlights, and architecture diagrams for all 4 projects
- [ ] **Experience section** — Expand bullet points with specific metrics and outcomes
- [ ] **Resume PDF** — Upload to `public/resume.pdf` (or host on Google Drive/GitHub and update button `href`)
- [ ] **Email integration** — Connect contact form to an email service (recommended: [Resend](https://resend.com) — free tier, works great with Next.js API routes)
- [ ] **Domain** — Buy and connect your custom domain; deploy to [Vercel](https://vercel.com) (free, zero-config for Next.js)
- [ ] **Blog posts** — Publish first posts on Dev.to / Hashnode / Medium and add `href` links in `app/blog/page.tsx`

---

## 🚀 Deployment (Recommended: Vercel)

```bash
# 1. Push to GitHub (already done)
# 2. Go to https://vercel.com → Import the GitHub repo
# 3. Zero config needed — Vercel auto-detects Next.js
# 4. Add your custom domain in Vercel's dashboard
```

---

## 📧 Email Integration Guide (Contact Form)

When ready to connect the contact form:

1. Sign up at [resend.com](https://resend.com) (free: 100 emails/day)
2. Get your API key
3. Create `app/api/contact/route.ts`:

```ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: 'somiljn02@gmail.com',
    subject: `Portfolio contact from ${name}`,
    text: message,
  })
  return Response.json({ ok: true })
}
```

4. Update `components/contact/contact-form.tsx` to POST to `/api/contact` instead of `mailto`
5. Add `RESEND_API_KEY=re_xxx` to `.env.local`

---

*Built with ❤️ by Somil Jain — Cloud & DevOps Engineer*