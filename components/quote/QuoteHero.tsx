import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ClipboardList, Truck } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: ClipboardList,
    title: "Share farm details",
    description: "Tell us your system, scale, and stocking timeline.",
  },
  {
    icon: Truck,
    title: "Get delivery plan",
    description: "We match products and services to your farm schedule.",
  },
  {
    icon: CheckCircle2,
    title: "Approve & supply",
    description: "Confirm the quote and we handle logistics end-to-end.",
  },
];

export const QuoteHero = () => {
  return (
    <section className="section hero-grid">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <Badge className="eyebrow px-4 py-2">
              Get a Quote
            </Badge>
            <h1 className="section-title mt-6">
              Request pricing for your aquaculture needs
            </h1>
            <p className="section-lead max-w-xl">
              Share your farm details and we will build a tailored package for
              feeds, inputs, equipment, and advisory support.
            </p>
            <div className="hero-actions">
              <Button asChild className="rounded-full px-6">
                <Link href="/contact">Talk to a Specialist</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </div>

          <Card className="feature-card">
            <CardContent className="p-6 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                How it works
              </p>
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex items-start gap-3">
                    <div className="icon-orb h-10 w-10 rounded-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
