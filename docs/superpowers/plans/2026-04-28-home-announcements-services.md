# Home Announcements Services Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a practical home civic bulletin and a more useful services directory.

**Architecture:** Keep this static and server-rendered through App Router page components. Centralize announcement and service directory data in `src/lib/bansud-content.ts`, then render it from `src/app/page.tsx` and `src/app/services/page.tsx`.

**Tech Stack:** Next.js App Router, React Server Components, Tailwind CSS, shadcn UI components, lucide-react icons.

---

### Task 1: Content Data

**Files:**
- Modify: `src/lib/bansud-content.ts`

- [ ] Add `homeBulletins` with priority, schedule/deadline, office, summary, action label, href, and tone.
- [ ] Add `serviceShortcuts` with task labels, descriptions, icons, and anchors.
- [ ] Extend `serviceGroups` entries with visit notes and requirement labels.

### Task 2: Home Bulletin

**Files:**
- Modify: `src/app/page.tsx`

- [ ] Replace the compact banner carousel in the Announcements section with a priority bulletin card.
- [ ] Render two smaller dated bulletin rows under the priority item.
- [ ] Keep the existing View all link to `/announcements`.
- [ ] Remove unused imports after the banner carousel is gone.

### Task 3: Services Directory

**Files:**
- Modify: `src/app/services/page.tsx`

- [ ] Replace the current hero with a concise directory header and office-hours/status panel.
- [ ] Add task-based shortcuts near the top.
- [ ] Redesign service cards to show office, schedule, common requests, visit note, and a requirements link.
- [ ] Keep the final requirements CTA but make it feel like visit preparation, not a decorative footer.

### Task 4: Verification

**Commands:**
- Run: `npm run lint`
- Run: `npm run build`

Expected result: both commands complete without errors.
