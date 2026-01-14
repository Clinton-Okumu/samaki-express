import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  ClipboardCheck,
  Fish,
  GraduationCap,
  ShieldCheck,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Fish,
    title: "Fingerling Supply",
    description:
      "Certified, disease-free fingerlings with fast growth traits and high survival rates.",
    tag: "Hatchery",
  },
  {
    icon: ShieldCheck,
    title: "Health & Biosecurity",
    description:
      "Routine health screening, vaccination guidance, and biosecurity protocols tailored to your farm.",
    tag: "Protection",
  },
  {
    icon: Activity,
    title: "Water Quality Management",
    description:
      "On-site testing, water treatment plans, and monitoring systems to optimize pond conditions.",
    tag: "Monitoring",
  },
  {
    icon: ClipboardCheck,
    title: "Farm Audits & Advisory",
    description:
      "Operational audits, yield forecasting, and performance dashboards for every production cycle.",
    tag: "Advisory",
  },
  {
    icon: GraduationCap,
    title: "Training & Upskilling",
    description:
      "Hands-on workshops and remote coaching to build confident, capable farm teams.",
    tag: "Training",
  },
  {
    icon: Truck,
    title: "Logistics & Distribution",
    description:
      "Reliable delivery of fingerlings, feeds, and equipment with cold-chain handling.",
    tag: "Logistics",
  },
];

export const ServicesCatalog = () => {
  return (
    <section className="section">
      <div className="section-shell">
        <div className="max-w-2xl mb-14">
          <Badge className="eyebrow mb-4 px-4 py-2">
            What We Deliver
          </Badge>
          <h2 className="section-title">
            Services designed for every stage of growth
          </h2>
          <p className="section-lead">
            Choose a single service or combine our packages for a complete
            aquaculture solution that scales with your farm.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="service-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="icon-orb h-11 w-11 rounded-xl">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="secondary">{service.tag}</Badge>
                  </div>
                  <CardTitle className="mt-4 text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
