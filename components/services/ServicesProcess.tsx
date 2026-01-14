import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ClipboardList, LineChart, Settings, Users } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Assess & Plan",
    description:
      "We review your farm setup, production goals, and risks to design a tailored service plan.",
  },
  {
    icon: Settings,
    title: "Deploy & Supply",
    description:
      "Fingerlings, feeds, and equipment are delivered with clear handling and feeding schedules.",
  },
  {
    icon: Users,
    title: "Train & Support",
    description:
      "Your team receives on-site training plus remote support for day-to-day decisions.",
  },
  {
    icon: LineChart,
    title: "Track & Optimize",
    description:
      "We monitor performance data and adjust practices to improve survival and harvest yield.",
  },
];

const supportItems = [
  "Seasonal pond preparation and stocking plans",
  "Feed conversion and growth tracking reports",
  "Market linkage and harvest readiness guidance",
];

export const ServicesProcess = () => {
  return (
    <section className="section bg-muted/40 dark:bg-muted/20 section-pattern">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div>
            <Badge className="eyebrow px-4 py-2">
              Our Process
            </Badge>
            <h2 className="section-title mt-6">
              A clear path from stocking to harvest
            </h2>
            <p className="section-lead">
              Samaki Express pairs on-the-ground expertise with data-driven
              advisory to help your farm scale predictably.
            </p>

            <Card className="mt-8 feature-card">
              <CardContent className="space-y-4 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Always Included
                </p>
                <Separator />
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {supportItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={step.title} className="feature-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="feature-icon">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-semibold text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {step.description}
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
