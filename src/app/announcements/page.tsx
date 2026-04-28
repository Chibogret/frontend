import Image from "next/image";
import {
  BellRing,
  CalendarDays,
  CheckCircle2,
  Megaphone,
  Radio,
  ShieldAlert,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { communityBanners } from "@/lib/banners";
import { type BannerIconName } from "@/lib/banners";
import { featuredNotices } from "@/lib/bansud-content";
import { BannerCard } from "@/components/banner-card";

const bannerIcons: Record<BannerIconName, LucideIcon> = {
  "calendar-days": CalendarDays,
  sparkles: Sparkles,
  "shield-alert": ShieldAlert,
};

export default function AnnouncementsPage() {
  const bannersWithImages = communityBanners.filter((b) => b.image);
  const textOnlyBanners = communityBanners.filter((b) => !b.image);
  const priorityNotices = [
    ...textOnlyBanners.map((banner) => ({
      id: banner.id,
      title: banner.title,
      tag: banner.label ?? "Announcement",
      date: "Latest Update",
      summary: banner.description,
      icon: banner.icon,
      tone: "secondary" as const,
    })),
    ...featuredNotices.map((notice) => ({
      id: notice.title,
      title: notice.title,
      tag: notice.tag,
      date: notice.date,
      summary: notice.summary,
      icon: undefined,
      tone: notice.tone,
    })),
  ];

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 overflow-x-hidden px-4 py-4 sm:px-6 lg:px-8">
      <Card className="relative overflow-hidden border-none bg-zinc-950 text-white shadow-sm">
        <Image
          src="/images/bg.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <CardContent className="relative flex flex-col justify-center gap-0.5 p-4 sm:p-5">
          <div className="flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-widest text-primary-foreground/60">
            <Radio size={12} />
            Public bulletin
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight sm:text-xl">
            Alerts & Announcements
          </h2>
          <p className="max-w-md text-[11px] font-medium leading-normal text-primary-foreground/80">
            Key municipal advisories, tourism banners, emergency notices, and community events in one quick scan.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="flex min-w-0 flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex min-w-0 items-center gap-2">
              <BellRing className="text-primary size-5" />
              <h3 className="truncate text-base font-semibold tracking-tight">Community Banners</h3>
            </div>
          </div>

          <div className="relative flex w-full gap-3 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar">
            {bannersWithImages.map((banner) => (
              <BannerCard
                key={banner.id}
                banner={banner}
                className="w-[260px] sm:w-[300px]"
              />
            ))}
          </div>
        </section>

        <section className="flex min-w-0 flex-col gap-3">
          <div className="flex items-center gap-2 px-1">
            <CalendarDays className="text-primary size-5" />
            <h3 className="text-base font-semibold tracking-tight">Priority Notices</h3>
          </div>

          <div className="flex flex-col">
            {priorityNotices.map((notice, index) => {
              const NoticeIcon = notice.icon ? bannerIcons[notice.icon] : (index === 0 ? Megaphone : CheckCircle2);

              return (
                <div key={notice.id} className="flex items-start gap-3 border-b border-border/40 py-3 last:border-0 hover:bg-muted/40 px-1 transition-colors">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground mt-0.5">
                    <NoticeIcon size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-bold leading-none">{notice.title}</p>
                      <Badge variant={notice.tone} className="shrink-0 text-[10px] h-4.5 px-1.5 font-bold uppercase tracking-wider">
                        {notice.tag}
                      </Badge>
                    </div>
                    <p className="mt-1.5 text-[11px] font-medium leading-relaxed text-muted-foreground line-clamp-2">
                      {notice.summary}
                    </p>
                    <p className="mt-1 text-[10px] font-bold text-primary/70 uppercase tracking-tight">{notice.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
