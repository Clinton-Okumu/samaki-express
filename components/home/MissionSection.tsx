import { Leaf, Lightbulb, ShieldCheck, Users } from "lucide-react";

export const MissionSection = () => {
  return (
    <section className="section bg-muted/40 dark:bg-muted/20 section-pattern">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <span className="eyebrow mb-4">
              Our Mission
            </span>

            <h2 className="section-title leading-tight">
              Dedicated to Sustainable Aquaculture Growth
            </h2>

            <p className="section-lead">
              Samaki Express EA Ltd is committed to advancing aquaculture across
              East Africa by providing certified fingerlings, premium feeds, and
              expert technical support. Our mission is to help farmers achieve
              predictable yields, healthier stock, and long-term profitability.
            </p>

            <p className="mt-4 text-muted-foreground">
              We believe sustainable fish farming is built on quality,
              knowledge, and strong partnerships with farmers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <ValueCard
              icon={Leaf}
              title="Sustainability"
              description="Promoting eco-friendly farming practices for long-term environmental and economic viability."
            />
            <ValueCard
              icon={Lightbulb}
              title="Innovation"
              description="Leveraging modern aquaculture techniques and data-driven insights for better yields."
            />
            <ValueCard
              icon={Users}
              title="Community"
              description="Building a network of empowered farmers through training, support, and shared knowledge."
            />
            <ValueCard
              icon={ShieldCheck}
              title="Integrity"
              description="Transparent pricing, certified quality, and honest partnerships you can trust."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="value-card">
      <div className="icon-orb mb-4 h-10 w-10 rounded-lg">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
