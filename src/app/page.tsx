import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  MapPinned,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BannerCard } from "@/components/banner-card";
import { communityBanners } from "@/lib/banners";
import {
  contactCards,
  featuredNotices,
  quickActions,
} from "@/lib/bansud-content";

export default function Home() {

  return (
    <div className="flex flex-col gap-4 overflow-x-hidden px-4 py-4 sm:px-6 lg:px-8">
      <section className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-w-0 flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-semibold tracking-tight">Quick Actions</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <Link key={action.title} href={action.href} className="rounded-xl bg-card p-4 text-card-foreground shadow-sm ring-1 ring-foreground/10 transition active:scale-[0.98]">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <action.icon />
                  </div>
                  <ArrowRight className="text-muted-foreground" />
                </div>
                <h4 className="mt-3 text-sm font-semibold">{action.title}</h4>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-lg font-semibold tracking-tight">Announcements</h3>
              <Button asChild variant="ghost" size="sm">
                <Link href="/announcements">
                  View all
                  <ChevronRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>

            <div className="relative flex w-full gap-3 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar">
              {communityBanners.filter(b => b.image).map((banner) => (
                <BannerCard
                  key={banner.id}
                  banner={banner}
                  variant="compact"
                  className="w-[280px] sm:w-[320px]"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-lg font-semibold tracking-tight">Most Needed</h3>
              <Button asChild variant="ghost" size="sm">
                <Link href="/services">
                  Browse
                  <ChevronRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-3">
              {featuredNotices.slice(0, 2).map((item) => (
                <Card key={item.title} size="sm" className="shadow-sm">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.summary}</CardDescription>
                    <CardAction>
                      <Badge variant={item.tone as "default" | "secondary" | "outline"}>{item.tag}</Badge>
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs font-medium text-muted-foreground">{item.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-[1fr_1fr]">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPinned />
              Visit Bansud
            </CardTitle>
            <CardDescription>{contactCards[0].detail}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full justify-between">
              <Link href="/services">
                Office guide
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
