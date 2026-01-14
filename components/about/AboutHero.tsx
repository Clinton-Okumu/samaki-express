import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Users } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Leaf,
    title: "Sustainable growth",
    description: "We prioritize responsible aquaculture practices for every farm.",
  },
  {
    icon: Users,
    title: "Farmer-first support",
    description: "Hands-on training and responsive advisory at every step.",
  },
];

export const AboutHero = () => {
  return (
    <section className="section hero-grid">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <Badge className="eyebrow px-4 py-2">
              About Us
            </Badge>
            <h1 className="section-title mt-6">
              Building confident aquaculture teams across East Africa
            </h1>
            <p className="section-lead max-w-xl">
              Samaki Express EA Ltd delivers end-to-end aquaculture solutions,
              from certified inputs to advisory and logistics. We help farmers
              grow healthy stock, improve yields, and build sustainable
              businesses.
            </p>
            <div className="hero-actions">
              <Button asChild className="rounded-full px-6">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="/contact">Meet the Team</Link>
              </Button>
            </div>
          </div>

          <Card className="feature-card">
            <CardContent className="p-6 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Our Promise
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
