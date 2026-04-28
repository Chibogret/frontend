"use client";

import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

import { type BannerIconName, type CommunityBanner } from "@/lib/banners";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const bannerIcons: Record<BannerIconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  "calendar-days": CalendarDays,
  sparkles: Sparkles,
  "shield-alert": ShieldAlert,
};

interface BannerCardProps {
  banner: CommunityBanner;
  className?: string;
  variant?: "compact" | "full";
}

export function BannerCard({ banner, className, variant = "full" }: BannerCardProps) {
  const BannerIcon = banner.icon ? bannerIcons[banner.icon] : null;
  const content = (
    <div className={cn(
      "relative overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-md active:scale-[0.99]",
      variant === "full" ? "aspect-[16/9]" : "aspect-[2/1]",
      banner.accent || "bg-primary",
      className
    )}>
      {banner.image && (
        <Image
          src={banner.image}
          alt={banner.title}
          fill
          className={cn(
            "object-cover",
            variant === "full" ? "opacity-100" : "opacity-40 mix-blend-overlay"
          )}
        />
      )}

      {(variant === "compact" || !banner.image) && (
        <div className="relative z-10 flex flex-col gap-2 p-5 text-primary-foreground h-full justify-center">
          <div className="flex items-center gap-2">
            {BannerIcon && <BannerIcon className="size-4" />}
          </div>
          <h4 className="text-base font-bold leading-tight">{banner.title}</h4>
          <p className="max-w-[300px] text-xs leading-relaxed opacity-90 line-clamp-2">
            {banner.description}
          </p>
        </div>
      )}


    </div>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="block shrink-0 snap-center rounded-2xl text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label={`Open details for ${banner.title}`}
        >
          {content}
        </button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-0 sm:max-w-lg">
        {banner.image ? (
          <div className="relative aspect-[16/9] bg-muted">
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) calc(100vw - 2rem), 32rem"
            />
          </div>
        ) : (
          <div className={cn("flex min-h-32 flex-col justify-end gap-3 p-5", banner.accent || "bg-primary text-primary-foreground")}>
            {BannerIcon && (
              <div className="flex size-10 items-center justify-center rounded-xl bg-background/15">
                <BannerIcon className="size-5" />
              </div>
            )}
            {banner.label && (
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">
                {banner.label}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col gap-4 p-5 pt-1">
          <DialogHeader>
            {banner.label && (
              <div>
                <Badge variant="secondary">{banner.label}</Badge>
              </div>
            )}
            <DialogTitle className="text-xl leading-tight">
              {banner.title}
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed">
              {banner.description}
            </DialogDescription>
          </DialogHeader>
        </div>

        {banner.href && (
          <DialogFooter className="mx-0 mb-0 rounded-none">
            <Button asChild>
              <Link href={banner.href}>
                Open related page
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
