import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2Icon,
  DropletsIcon,
  FishIcon,
  TrendingUpIcon,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

type Stat = { value: string; label: string };
type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
};

const STATS: Stat[] = [
  { value: "500+", label: "Farmers Served" },
  { value: "98%", label: "Survival Rate" },
  { value: "10+", label: "Years Experience" },
];

const FEATURES: Feature[] = [
  {
    icon: FishIcon,
    title: "Quality Fingerlings",
    description: "Certified disease-free for optimal growth.",
    bullets: ["Fast-growing", "High survival", "Consistent quality"],
  },
  {
    icon: DropletsIcon,
    title: "Premium Feeds",
    description: "Scientifically formulated for better results.",
    bullets: ["Better FCR", "Reduced waste", "Enhanced growth"],
  },
  {
    icon: TrendingUpIcon,
    title: "Expert Support",
    description: "Dedicated technical assistance when you need it.",
    bullets: ["Training programs", "Farm assessments", "Responsive support"],
  },
];

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div
        aria-hidden="true"
        className="hero-backdrop"
        style={{ backgroundImage: "url('/bg-img2.webp')" }}
      />

      <div aria-hidden="true" className="hero-overlay" />
      <div aria-hidden="true" className="hero-bottom-fade" />
      <div aria-hidden="true" className="hero-tint" />
      <div aria-hidden="true" className="absolute inset-0 hero-grid opacity-70" />

      <div className="hero-shell">
        <div className="max-w-4xl">
          <Badge className="eyebrow hero-kicker px-5 py-2.5">
            <FishIcon className="mr-2 h-4 w-4" />
            Welcome to Samaki Express
          </Badge>

          <h1 className="hero-title mt-6">
            Transforming{" "}
            <span className="hidden sm:inline">
              <br />
            </span>
            <span className="highlight-text">Aquaculture</span>{" "}
            <span className="hidden sm:inline">
              <br />
            </span>
            in East Africa
          </h1>

          <p className="hero-lead max-w-3xl">
            Premium fingerlings, nutritionally balanced feeds, and expert
            advisory services to help your fish farm thrive and grow profitably.
          </p>

          <div className="hero-actions">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
            >
              <Link href="/products" aria-label="Explore products">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/contact" aria-label="Get free consultation">
                Get Free Consultation
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FEATURES.map((f) => (
              <FeatureCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.description}
                bullets={f.bullets}
              />
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  {s.value}
                </div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/70">
          <span className="text-xs uppercase tracking-wider">
            Scroll to explore
          </span>
          <ArrowRight className="h-5 w-5 rotate-90" aria-hidden="true" />
          <span className="sr-only">Scroll down</span>
        </div>
      </div>
    </section>
  );
};

function FeatureCard({
  icon: Icon,
  title,
  description,
  bullets,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
}) {
  return (
    <Card className="feature-card group">
      <CardContent className="p-6">
        <div className="feature-icon mb-4">
          <Icon className="h-7 w-7" />
        </div>

        <h3 className="feature-title text-lg font-bold mb-2 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        <ul className="space-y-2">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <CheckCircle2Icon className="h-3.5 w-3.5 text-primary flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
