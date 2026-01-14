import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";

export const AboutCta = () => {
  return (
    <section className="section">
      <div className="section-shell">
        <Card className="overflow-hidden border-primary/20 bg-primary/5">
          <CardContent className="grid gap-10 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div>
              <Badge className="eyebrow px-4 py-2">
                Work With Us
              </Badge>
              <h2 className="section-title mt-6">
                Let us help you build a reliable aquaculture operation
              </h2>
              <p className="section-lead max-w-xl">
                We are ready to support your farm with certified inputs,
                training, and logistics that keep production on track.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="rounded-full px-6">
                  <Link href="/services">
                    View Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6">
                  <Link href="/contact">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Where we help
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  Hatchery setup and breeding programs
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  Pond and cage farm optimization
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  Feed planning, water testing, and logistics
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
