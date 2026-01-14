import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Droplets,
  Fan,
  FlaskConical,
  PackageCheck,
  Thermometer,
} from "lucide-react";

const categories = [
  {
    icon: PackageCheck,
    title: "Feeds & Supplements",
    description: "Growth feeds, hatchery boosters, and diet optimizers.",
  },
  {
    icon: Droplets,
    title: "Water Quality Kits",
    description: "Testers for oxygen, ammonia, nitrite, and pH levels.",
  },
  {
    icon: Fan,
    title: "Aeration & Pumps",
    description: "Air pumps, compressors, and circulation systems.",
  },
  {
    icon: Thermometer,
    title: "Temperature Control",
    description: "Heaters and thermometers for stable hatchery climates.",
  },
  {
    icon: FlaskConical,
    title: "Hatchery Inputs",
    description: "Breeding inputs and incubation essentials.",
  },
];

export const ProductsCategories = () => {
  return (
    <section className="section bg-muted/40 dark:bg-muted/20 section-pattern">
      <div className="section-shell">
        <div className="max-w-2xl mb-12">
          <Badge className="eyebrow mb-4 px-4 py-2">
            Categories
          </Badge>
          <h2 className="section-title">
            Find the right products for your system
          </h2>
          <p className="section-lead">
            Explore our core product lines built to support hatcheries, ponds,
            cages, and recirculating aquaculture systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="feature-card">
                <CardContent className="p-6">
                  <div className="feature-icon">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {category.description}
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
