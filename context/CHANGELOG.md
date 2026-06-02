# Changelog

All notable changes to the portfolio site, derived from git history.

---

## [Unreleased]

### Added
- `context/DECISIONS.md` — design and architecture decision log
- `context/CHANGELOG.md` — this file
- Claude Code introduced as AI development assistant (2026-06-02); CLAUDE.md expanded with full product brief and recruiter-evaluation framework

---

## 2026-05-26

### Merge — Sync with Remote
**Commit:** `56e0c99`

- Merged remote `main` into local `main` after README update conflict. No functional changes.

---

### Tweaks — About Page Formatting
**Commit:** `87a63f8`

- Minor formatting adjustment to the About page layout.

---

### Docs — README Update
**Commit:** `0ed4bb7`

- Expanded README with project overview, tech stack, and setup instructions.

---

### Feature — About Page
**Commit:** `976d44f`

**Added:**
- `/about` route (`app/about/page.tsx`)
- Two-column layout: contact info + bio text on the left, profile photo on the right
- Vertical experience timeline with three entries:
  - AI Solutions Engineer Intern @ BPN Solutions (Summer 2026)
  - Software Engineer Intern @ Sonablate Corp (Summer 2025)
  - Junior Counselor Team Leader @ Diabetes Youth Foundation (Summers 2022–2024)
- Profile photo added (`public/about_image.JPG`)
- Navbar updated: added `/about` link, activated active-link styling

---

### Polish — Resume Page
**Commit:** `d357ac0`

**Changed:**
- Added Download button to the Resume page header
- Improved Resume page layout and spacing

---

### Feature — Hero, Navbar, and Resume Page
**Commit:** `92ed7cc`

**Added:**
- `components/ui/hero.tsx` — Full-screen centered hero section with name, subtitle, contact row, and CTA buttons (GitHub, Projects, Resume, About)
- `components/ui/navbar.tsx` — Fixed frosted-glass navigation bar
- `app/resume/page.tsx` — Resume page with embedded PDF `<iframe>` viewer
- `public/William_Schmidt_Resume.pdf` — Resume PDF

**Changed:**
- `app/page.tsx` refactored to render `<Hero />` component

---

### Fix — Tailwind CSS Config
**Commit:** `f9faa93`

- Fixed Tailwind CSS configuration to resolve styling issues.

---

### Chore — Remove IDE Files, Add shadcn
**Commit:** `4b580b8`

**Removed:**
- `.idea/` directory from repo tracking (added to `.gitignore`)

**Added:**
- `components.json` — shadcn/ui configuration
- `components/ui/button.tsx` — shadcn Button primitive
- `lib/utils.ts` — `cn()` utility for conditional class merging
- Tailwind CSS v4, shadcn, Base UI, lucide-react, class-variance-authority, clsx, tailwind-merge, tw-animate-css added to dependencies

**Changed:**
- `app/globals.css` updated with Tailwind base and shadcn CSS variables

---

### Feature — Homepage
**Commit:** `8122de1`

- First iteration of `app/page.tsx`: basic homepage layout built on top of Next.js scaffold.

---

### Init — Project Bootstrap
**Commit:** `cf2c079` (2026-05-26)

- Next.js 16 project initialized with TypeScript, Tailwind CSS, ESLint
- `AGENTS.md` and `CLAUDE.md` created (initial stubs)
- Default Next.js boilerplate files and public assets in place
