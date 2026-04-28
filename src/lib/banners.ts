export type BannerIconName = "calendar-days" | "sparkles" | "shield-alert";

export interface CommunityBanner {
  id: string;
  title: string;
  description: string;
  image?: string;
  href?: string;
  label?: string;
  icon?: BannerIconName;
  accent?: string;
}

/**
 * Community Banners Configuration
 * 
 * To add a new banner:
 * 1. Upload the image to /public/images/banners/
 * 2. Add a new object to the list below
 * 3. Banners are displayed in the order they appear here
 */
export const communityBanners: CommunityBanner[] = [
  {
    id: "office-hours",
    title: "Enhanced Training For Out-of-School Youth",
    description: "Gusto mo bang matuto ng bagong kasanayan at makakuha ng sertipiko? Mag-enroll na sa Bansud Training Center!",
    label: "Mga Programa ng TESDA",
    accent: "bg-primary text-primary-foreground",
    image: "/images/banners/training.png",
    href: "/services",
  },
  {
    id: "festival",
    title: "Festival and community events",
    description: "Use this slot for town fiestas, sports meets, public hearings, and civic announcements.",
    label: "Tourism and Culture",
    icon: "sparkles",
    accent: "bg-[oklch(0.55_0.14_180)] text-white",
    image: "/images/banners/festival.png",
    href: "/announcements",
  },
  {
    id: "emergency",
    title: "Emergency updates",
    description: "Highlight weather advisories, safety reminders, and response information for residents.",
    label: "Public Safety",
    icon: "shield-alert",
    accent: "bg-[oklch(0.72_0.16_75)] text-[oklch(0.18_0.04_60)]",
    image: "/images/banners/emergency.png",
    href: "/announcements",
  },
  {
    id: "text-only-test",
    title: "Community Town Hall",
    description: "Join us this Friday at the Municipal Plaza for a discussion on upcoming infrastructure projects.",
    label: "Community Event",
    icon: "calendar-days",
    accent: "bg-[oklch(0.65_0.12_210)] text-white",
    href: "/announcements",
  },
];
