# Design & Architecture Decisions

This document records the reasoning behind key decisions made during development of Will Schmidt's portfolio site. It is intended to preserve context across development sessions.

---

## Tooling & Framework

### Next.js 16 (App Router)
**Decision:** Use Next.js with the App Router.
**Reason:** Industry-standard React framework with strong TypeScript support, file-based routing, and excellent deployment options (Vercel). App Router enables future server components if needed.

### TypeScript
**Decision:** TypeScript throughout.
**Reason:** Type safety reduces bugs and signals engineering discipline to technical reviewers who may look at the repo.

### Tailwind CSS v4
**Decision:** Tailwind for styling.
**Reason:** Utility-first CSS enables rapid iteration without context-switching between files. Consistent spacing and sizing tokens reduce visual inconsistency.

### shadcn/ui + Base UI
**Decision:** Added shadcn component library and Base UI early.
**Reason:** Provides accessible, polished primitives (Button, etc.) so components are not built from scratch. Reduces time-to-polish.

### lucide-react
**Decision:** lucide-react for icons.
**Reason:** Lightweight, consistent icon set with good TypeScript support.

---

## Visual Design

### Dark Theme (Black Background)
**Decision:** `bg-black text-white` as the base theme, applied globally.
**Reason:** Dark themes are common in developer-facing products (Vercel, Linear, GitHub dark mode). Consistent with the target aesthetic: modern, technical, minimal. High contrast supports readability.

### No Animations (As of initial build)
**Decision:** No scroll animations, parallax, or entrance effects in the initial build.
**Reason:** Consistent with CLAUDE.md design philosophy — animations can feel gimmicky and hurt readability if poorly timed. Clean static layouts establish baseline first.

### Typography Scale
**Decision:** Large headings (`text-5xl`, `text-6xl`, `text-8xl`) with subdued body text (`text-gray-300`, `text-gray-400`).
**Reason:** Strong typographic hierarchy lets a recruiter skim the page in seconds and identify the most important information (name, role, contact).

---

## Site Architecture

### Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero section — name, title, contact info, navigation CTAs |
| About | `/about` | Bio, contact info, profile photo, experience timeline |
| Resume | `/resume` | Embedded PDF viewer with download button |

### Component Structure
```
components/
  ui/
    hero.tsx     — Full-screen hero section
    navbar.tsx   — Sticky top navigation bar
    button.tsx   — shadcn button primitive
```

### Navbar Design
**Decision:** Fixed, frosted-glass navbar (`bg-black/40 backdrop-blur-md`).
**Reason:** Keeps navigation accessible during scrolling without fully blocking content. Subtle border (`border-white/10`) adds depth without heaviness.

### Hero Section
**Decision:** Centered, full-screen hero with name + subtitle + contact row + CTA buttons.
**Reason:** Directly answers the homepage's primary questions — "Who is this?" and "How do I navigate further?" — within the first 5 seconds. Buttons link to GitHub, Projects, Resume, and About.

### About Page Layout
**Decision:** Two-column layout (bio/contact left, photo right), followed by a vertical experience timeline.
**Reason:** Photo + bio together creates a more personal, trustworthy impression than text alone. Timeline format is readable and familiar for recruiters reviewing work history.

### Resume Page
**Decision:** Embedded `<iframe>` PDF viewer with a Download button in the header.
**Reason:** Lets recruiters view the resume without leaving the site. Download button provides the expected workflow for ATS uploads. Last updated date is shown for transparency.

---

## Content Decisions

### Contact Info in Hero
**Decision:** Email, phone, and LinkedIn shown in the hero subtitle row.
**Reason:** Eliminates friction for a recruiter who wants to reach out immediately. Visible without scrolling or navigating.

### Experience as Data Array
**Decision:** Experience entries are stored as a typed array (`experiences`) in `about/page.tsx`.
**Reason:** Clean separation of data from rendering logic. Easy to add or update entries without touching layout code. Sets up for potential extraction to a shared data file later.

---

## AI-Assisted Development

### Claude Code Integration (Introduced: 2026-06-02)
**Decision:** Claude Code (Anthropic's CLI) was introduced at this point in development to assist with design evaluation, code improvements, and architectural guidance.
**Reason:** The CLAUDE.md file was expanded with a full product brief defining the site's purpose (2027 SWE internship recruiting), design philosophy (Stripe/Linear/Vercel aesthetic), and content modification rules (personal copy is protected; layout and styling are freely improvable).

Claude Code's role on this project is defined by CLAUDE.md: act as an experienced technical recruiter and senior product designer — not just a code generator. Every change should be evaluated through the question: "Would this improve the likelihood that a recruiter or hiring manager interviews this candidate?"

This milestone marks the transition from solo manual development to AI-assisted, recruiter-optimized iteration.
