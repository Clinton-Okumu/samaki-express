import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Fish, PackageCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Fish,
    title: "Certified Hatchery Inputs",
    description: "Fingerling support tools and breeding inputs for healthier stock.",
  },
  {
    icon: PackageCheck,
    title: "Feeding & Nutrition",
    description: "Balanced feeds and supplements aligned to growth stages.",
  },
  {
    icon: ShieldCheck,
    title: "Monitoring & Treatment",
    description: "Accurate testing equipment for proactive farm management.",
  },
];

export const ProductsHero = () => {
  return (
    <section className="section hero-grid">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <Badge className="eyebrow px-4 py-2">
              Products
            </Badge>
            <h1 className="section-title mt-6">
              Aquaculture products built for{" "}
              <span className="highlight-text">performance</span>
            </h1>
            <p className="section-lead max-w-xl">
              Stock up on reliable feeds, testing equipment, aeration, and farm
              tools that help you improve survival rates and harvest quality.
            </p>
            <div className="hero-actions">
              <Button asChild className="rounded-full px-6">
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="/contact">Get Product Advice</Link>
              </Button>
            </div>
          </div>

          <Card className="feature-card">
            <CardContent className="p-6 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Product Focus
              </p>
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="icon-orb h-10 w-10 rounded-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <CheckCircle2 className="ml-auto h-5 w-5 text-primary" />
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
