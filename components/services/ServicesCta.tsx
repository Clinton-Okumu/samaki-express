import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";
import Link from "next/link";

const assurances = [
  "Certified supply chain and quality checks",
  "Rapid response support for urgent issues",
  "Flexible service packages for every budget",
];

export const ServicesCta = () => {
  return (
    <section className="section">
      <div className="section-shell">
        <Card className="overflow-hidden border-primary/20 bg-primary/5">
          <CardContent className="grid gap-10 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div>
              <Badge className="eyebrow px-4 py-2">
                Ready to Scale
              </Badge>
              <h2 className="section-title mt-6">
                Build a resilient farm with Samaki Express
              </h2>
              <p className="section-lead max-w-xl">
                Tell us about your farm size, location, and production goals.
                We will craft a service plan and delivery schedule that meets
                your needs.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="rounded-full px-6">
                  <Link href="/quote">
                    Start a Service Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6">
                  <Link href="/contact">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Book a Call
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="icon-orb h-11 w-11 rounded-xl">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Service assurance</p>
                  <p className="text-sm text-muted-foreground">
                    Trusted by farms across East Africa.
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {assurances.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
