import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, Fish, PackageCheck } from "lucide-react";
import Image from "next/image";

export const CoreOfferingsSection = () => {
  return (
    <section className="section bg-muted/40 section-pattern">
      <div className="section-shell">
        <div className="max-w-2xl mb-16">
          <Badge className="eyebrow px-4 py-2">
            Core Offerings
          </Badge>

          <h2 className="section-title mt-6">
            What We{" "}
            <span className="highlight-text">Do Best</span>
          </h2>

          <p className="section-lead">
            Our flagship products and services are built to deliver consistent
            results, healthier fish, and sustainable farm growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <OfferingCard
            image="/Artemia.webp"
            icon={Fish}
            title="Quality Fingerlings"
            description="Certified, disease-free fingerlings bred for fast growth, high survival rates, and predictable yields."
          />

          <OfferingCard
            image="/wean mix.webp"
            icon={PackageCheck}
            title="Premium Fish Feeds"
            description="High-performance feeds formulated to maximize growth efficiency while minimizing waste."
          />

          <OfferingCard
            image="/water tester.webp"
            icon={ClipboardCheck}
            title="Farm Support & Advisory"
            description="Professional farm assessments, training, and technical support tailored to your operation."
          />
        </div>
      </div>
    </section>
  );
};

const OfferingCard = ({
  image,
  icon: Icon,
  title,
  description,
}: {
  image: string;
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <Card className="offering-card group">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="pb-4">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
          <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
