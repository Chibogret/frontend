import { CheckCircle2, ClipboardList, Clock, FileText, ShieldAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { permitRequirements } from "@/lib/bansud-content";

export default function RequirementsPage() {
  return (
    <div className="flex flex-col gap-5 px-4 py-4 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-primary p-5 text-primary-foreground shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-3">
            <Badge variant="secondary" className="w-fit bg-background/14 text-primary-foreground">
              Preparation checklist
            </Badge>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Requirements</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-primary-foreground/82">
                Bring the right documents before you queue for permits, clearances, certificates, and registry requests.
              </p>
            </div>
          </div>
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-background/14">
            <ClipboardList />
          </div>
        </div>
      </section>

      <div className="grid gap-3 sm:grid-cols-2">
        <Alert className="rounded-2xl bg-card shadow-sm">
          <ShieldAlert />
          <AlertTitle>Document tip</AlertTitle>
          <AlertDescription>
            Bring originals for verification and at least one photocopy for records.
          </AlertDescription>
        </Alert>
        <Alert className="rounded-2xl bg-card shadow-sm border-primary/20">
          <Clock className="text-primary size-4" />
          <AlertTitle>Office Hours</AlertTitle>
          <AlertDescription>
            Mon - Fri, 8:00 AM - 5:00 PM. Some offices may have earlier cut-offs.
          </AlertDescription>
        </Alert>
      </div>

      <section className="grid gap-3">
        {permitRequirements.map((item, index) => (
          <Card key={item.title} className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText />
                {item.title}
              </CardTitle>
              <CardDescription>Common preparation items for this request.</CardDescription>
              <CardAction>
                <Badge variant="outline">Step {index + 1}</Badge>
              </CardAction>
            </CardHeader>
            <CardContent>
              <Separator className="mb-3" />
              <ul className="flex flex-col gap-3">
                {item.items.map((entry) => (
                  <li key={entry} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-primary" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
