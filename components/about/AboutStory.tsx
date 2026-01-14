import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, ShieldCheck, TrendingUp } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality you can measure",
    description: "Certified inputs, strict handling, and transparent sourcing.",
  },
  {
    icon: Droplets,
    title: "Technical excellence",
    description: "Farm assessments, water management, and feed planning support.",
  },
  {
    icon: TrendingUp,
    title: "Growth mindset",
    description: "We help farmers scale sustainably with reliable supply chains.",
  },
];

export const AboutStory = () => {
  return (
    <section className="section bg-muted/40 dark:bg-muted/20 section-pattern">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div>
            <Badge className="eyebrow px-4 py-2">
              Our Story
            </Badge>
            <h2 className="section-title mt-6">
              Trusted by farmers who need reliable supply and guidance
            </h2>
            <p className="section-lead">
              We started Samaki Express to solve a simple problem: farmers need
              dependable access to quality fingerlings, feeds, and expertise. Our
              team combines hatchery experience, field operations, and logistics
              to keep farms productive year-round.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today, we partner with farms across East Africa, offering tailored
              service plans that balance performance with sustainability.
            </p>
          </div>

          <div className="grid gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="feature-card">
                  <CardContent className="p-6">
                    <div className="feature-icon">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
