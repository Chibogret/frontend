"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/bansud-content";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 mx-auto flex h-18 max-w-5xl items-center justify-around border-t bg-background/92 px-3 pb-safe backdrop-blur-xl md:hidden">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex min-w-16 flex-col items-center justify-center gap-1 rounded-2xl px-3 py-2 text-xs font-medium transition-all active:scale-95",
              isActive 
                ? "bg-primary text-primary-foreground shadow-sm" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className={cn("transition-transform", isActive && "scale-105")} />
            <span className="leading-none tracking-tight">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
