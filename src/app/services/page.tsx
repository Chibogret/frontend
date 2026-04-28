import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, ClipboardList, PhoneCall } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
import { Separator } from "@/components/ui/separator";
import { serviceGroups, serviceShortcuts } from "@/lib/bansud-content";

function toAnchor(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-5 px-4 py-4 sm:px-6 lg:px-8">
      <section className="grid gap-3 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[2rem] bg-card p-5 shadow-sm ring-1 ring-foreground/8">
          <div className="flex flex-col gap-3">
            <Badge className="w-fit">Municipal directory</Badge>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Services</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                Find the right office, what each desk handles, and what to prepare before visiting municipal hall.
              </p>
            </div>
            <Button asChild className="w-full justify-between sm:w-fit">
              <Link href="#office-directory">
                Browse offices
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <Alert className="rounded-2xl bg-card shadow-sm">
            <Clock className="text-primary" />
            <AlertTitle>Office hours</AlertTitle>
            <AlertDescription>Most offices are open Mon - Fri, 8:00 AM - 5:00 PM.</AlertDescription>
          </Alert>
          <Alert className="rounded-2xl border-primary/20 bg-card shadow-sm">
            <PhoneCall className="text-primary" />
            <AlertTitle>Before visiting</AlertTitle>
            <AlertDescription>Check the request requirements and bring valid ID.</AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        {serviceShortcuts.map((shortcut) => (
          <Button
            key={shortcut.title}
            asChild
            variant="outline"
            className="h-auto justify-start whitespace-normal rounded-2xl bg-card p-4 text-left shadow-sm"
          >
            <Link href={shortcut.href} className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <shortcut.icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-foreground">{shortcut.title}</span>
                <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                  {shortcut.description}
                </span>
              </span>
            </Link>
          </Button>
        ))}
      </section>

      <section id="office-directory" className="grid gap-3">
        <div className="flex items-center justify-between px-1">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">Office directory</h3>
            <p className="text-sm text-muted-foreground">Choose the office that matches your request.</p>
          </div>
          <Badge variant="outline">{serviceGroups.length} offices</Badge>
        </div>

        {serviceGroups.map((service) => (
          <Card key={service.title} id={toAnchor(service.title)} className="scroll-mt-24 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <service.icon className="size-5" />
                </span>
                {service.title}
              </CardTitle>
              <CardDescription>{service.summary}</CardDescription>
              <CardAction className="flex flex-col items-end gap-2">
                <Badge variant="outline">Service desk</Badge>
                <div className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
                  <Clock className="size-3" />
                  {service.schedule}
                </div>
              </CardAction>
            </CardHeader>
            <CardContent>
              <Separator className="mb-3" />
              <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
                <div className="flex flex-col gap-3">
                  <p className="text-sm leading-6 text-muted-foreground">{service.note}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <Badge key={item} variant="secondary">{item}</Badge>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-muted p-3">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <ClipboardList className="size-4 text-primary" />
                    Prepare before you go
                  </div>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{service.requirements}</p>
                  <Button asChild variant="link" className="mt-2 h-auto p-0 text-primary">
                    <Link href="/requirements">
                      Open requirements
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <Card className="bg-primary text-primary-foreground shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 />
            Visit prepared
          </CardTitle>
          <CardDescription className="text-primary-foreground/78">
            Requirements differ by office. Start with the checklist to avoid repeat trips.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="secondary" className="w-full justify-between rounded-2xl">
            <Link href="/requirements">
              Open requirements
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
