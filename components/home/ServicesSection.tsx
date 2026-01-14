import { Fish, GraduationCap, Truck, Wrench } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section className="section">
      <div className="section-shell">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow mb-4">
            Our Services
          </span>

          <h2 className="section-title">
            Discover What Samaki Express Offers
          </h2>

          <p className="section-lead">
            We provide end-to-end aquaculture solutions designed to support
            farmers at every stage of fish production.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon={Fish}
            title="Fish Breeding"
            description="High-quality fish species bred in our state-of-the-art facilities."
          />

          <ServiceCard
            icon={Wrench}
            title="Aquaculture Equipment"
            description="Modern tools and equipment for effective and efficient fish farming."
          />

          <ServiceCard
            icon={GraduationCap}
            title="Training & Consultation"
            description="Expert guidance and training for both beginners and established farmers."
          />

          <ServiceCard
            icon={Truck}
            title="Delivery Services"
            description="Fast and reliable delivery of fingerlings and feeds across East Africa."
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="service-card group">
      <div className="icon-orb mb-4 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="font-semibold text-lg">{title}</h3>

      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
