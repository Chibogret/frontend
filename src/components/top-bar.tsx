"use client";

import { Bell, Menu, ShieldCheck } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function TopBar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 mx-auto flex h-18 max-w-5xl items-center justify-between border-b bg-background/92 px-4 pt-safe backdrop-blur-xl sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <Avatar className="size-11 rounded-2xl bg-primary text-primary-foreground shadow-sm">
          <AvatarFallback className="rounded-2xl bg-primary text-primary-foreground">
            <ShieldCheck />
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-base font-semibold leading-tight">Bansud</h1>
          <p className="text-xs font-medium text-muted-foreground">Citizen Services</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="hidden sm:inline-flex">
          Official guide
        </Badge>
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Menu">
          <Menu />
        </Button>
      </div>
    </header>
  );
}
