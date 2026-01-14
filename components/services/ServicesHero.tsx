import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Droplets, Fish, MapPin } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "1,200+", label: "Farms supported" },
  { value: "48 hrs", label: "Average delivery window" },
  { value: "98%", label: "Survival rate target" },
];

const snapshotItems = [
  {
    icon: Fish,
    title: "Fingerlings & hatchery supply",
    description: "Certified fingerlings with traceable genetics and health checks.",
  },
  {
    icon: Droplets,
    title: "Feed and water management",
    description: "Balanced nutrition plans with water quality monitoring.",
  },
  {
    icon: MapPin,
    title: "On-site farm support",
    description: "Field visits across East Africa with tailored action plans.",
  },
];

export const ServicesHero = () => {
  return (
    <section className="section hero-grid">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <Badge className="eyebrow px-4 py-2">
              Services
            </Badge>

            <h1 className="section-title mt-6">
              Full-cycle support for{" "}
              <span className="highlight-text">modern aquaculture</span>
            </h1>

            <p className="section-lead max-w-xl">
              From certified fingerlings to on-site farm optimization, Samaki
              Express delivers end-to-end services that keep your operation
              healthy, productive, and profitable.
            </p>

            <div className="hero-actions">
              <Button asChild className="rounded-full px-6">
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <p className="text-lg font-semibold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="feature-card">
            <CardHeader>
              <CardTitle className="text-2xl">Service Snapshot</CardTitle>
              <p className="text-sm text-muted-foreground">
                Everything you need for healthy stock and consistent yields.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {snapshotItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}>
                    <div className="flex items-start gap-3">
                      <div className="icon-orb h-10 w-10 rounded-lg">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      {index === 0 && (
                        <CheckCircle2 className="ml-auto h-5 w-5 text-primary" />
                      )}
                    </div>
                    {index !== snapshotItems.length - 1 && (
                      <Separator className="my-4" />
                    )}
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
