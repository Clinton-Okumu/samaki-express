import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

const quickContacts = [
  { icon: PhoneCall, label: "Call us", value: "+254 700 000 000" },
  { icon: Mail, label: "Email", value: "hello@samakiexpress.co.ke" },
  { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
];

export const ContactHero = () => {
  return (
    <section className="section hero-grid">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <Badge className="eyebrow px-4 py-2">
              Contact
            </Badge>
            <h1 className="section-title mt-6">
              Let us build the right plan for your farm
            </h1>
            <p className="section-lead max-w-xl">
              Share your production goals and challenges. Our team will respond
              with expert guidance, product recommendations, and a delivery plan.
            </p>
            <div className="hero-actions">
              <Button asChild className="rounded-full px-6">
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </div>

          <Card className="feature-card">
            <CardContent className="p-6 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Reach us fast
              </p>
              {quickContacts.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="icon-orb h-10 w-10 rounded-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.value}
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
