# Home Announcements and Services Redesign

## Goal

Make the home announcement section work as a current civic bulletin, and redo the services page as a useful municipal directory instead of a simple list.

## Home Announcements

The home page will replace the horizontal announcement banner carousel with a "Today's Bulletin" panel. It will show one priority notice first, including status, date, affected office, short summary, and a clear action link. Below it, two smaller dated notices will help residents see upcoming deadlines or service updates without opening the full announcements page.

## Services Page

The services page will lead with task-based shortcuts for common resident needs, then list municipal offices with their hours, common requests, and practical visit notes. Each office card will include a stronger path to requirements so users know what to prepare before visiting.

## Content Model

Add small static data arrays in `src/lib/bansud-content.ts` for bulletin items and service shortcuts. Reuse the existing `serviceGroups` data, extending it with visit notes and requirement labels where useful.

## Visual Direction

Use the existing shadcn-style cards, badges, buttons, and lucide icons. Keep the tone civic, dense, and scannable. Avoid decorative-only banners in the home announcement area.

## Verification

Run lint/build after editing. If available, inspect the pages at desktop and mobile widths to confirm spacing, wrapping, and navigation.
