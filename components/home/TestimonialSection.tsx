import { Quote, StarIcon, CheckCircle2, Heart, Award } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TestimonialsSection = () => {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-muted/20 to-muted/50">
      <div className="absolute inset-0 section-pattern opacity-70" />
      <div className="section-shell relative z-10">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <Badge className="eyebrow px-4 py-2">
            <StarIcon className="mr-2 h-4 w-4" />
            Testimonials
          </Badge>

          <h2 className="section-title mt-8 leading-tight">
            What Our <span className="highlight-text">Farmers Say</span>
          </h2>

          <p className="section-lead">
            Hear from farmers who trust Samaki Express for reliable aquaculture
            products and expert support.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          <TestimonialCard
            quote="Since partnering with Samaki Express, our survival rates have improved significantly. Their fingerlings are consistently healthy and fast-growing. The team's dedication to quality is unmatched."
            name="Caroline Awino"
            role="Tilapia Farmer, Kiambu"
            image="/caroline awino.webp"
            rating={5}
            highlights={["Improved survival rates", "Quality fingerlings", "Reliable support"]}
          />

          <TestimonialCard
            quote="The quality of feeds and technical advice has helped us scale our farm with confidence. Delivery is always on time, and their team is always available for consultations."
            name="Janeffer Nafula"
            role="Fish Farm Manager, Kisumu"
            image="/janeffer nafula.webp"
            rating={5}
            highlights={["Premium feeds", "Expert advice", "Timely delivery"]}
          />

          <TestimonialCard
            quote="Their training sessions gave us practical knowledge that immediately improved our pond management and yields. Our production has doubled in just six months."
            name="Vanessa Musula"
            role="Small-Scale Farmer, Siaya"
            image="/vanessa-musula.webp"
            rating={5}
            highlights={["Practical training", "Doubled production", "Better management"]}
          />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 md:gap-12 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Verified Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Trusted by 500+ Farmers</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Industry Leader</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  quote,
  name,
  role,
  image,
  rating,
  highlights,
}: {
  quote: string;
  name: string;
  role: string;
  image?: string;
  rating?: number;
  highlights?: string[];
}) => {
  return (
    <Card className="testimonial-card group">
      <CardContent className="p-6 sm:p-8 relative">
        <div className="absolute -top-3 left-6 bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-bold shadow-lg shadow-primary/25">
          VERIFIED
        </div>

        <div className="flex gap-0.5 mb-5">
          {[...Array(rating || 5)].map((_, i) => (
            <StarIcon
              key={i}
              className="h-5 w-5 fill-primary text-primary transition-all duration-300 group-hover:scale-110"
            />
          ))}
        </div>

        <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10 group-hover:text-primary/20 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" />

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed relative z-10 mb-6">
          "{quote}"
        </p>

        {highlights && highlights.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {highlights.slice(0, 3).map((highlight, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium"
              >
                <CheckCircle2 className="h-3 w-3" />
                {highlight}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-border/50 flex items-center gap-4">
          <div className="relative">
            {image ? (
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl ring-4 ring-background shadow-xl shadow-primary/10 group-hover:ring-primary/30 group-hover:scale-110 transition-all duration-500">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-xl font-bold text-primary ring-4 ring-background">
                {name.charAt(0)}
              </div>
            )}
          </div>

          <div className="flex-1">
            <p className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">{name}</p>
            <p className="text-sm text-muted-foreground mt-0.5">{role}</p>
          </div>

          <div className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <Quote className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialsSection;
