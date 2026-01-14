"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Fish, PackageCheck, ShieldCheck, Truck } from "lucide-react";

const packageItems = [
  {
    icon: Fish,
    title: "Fingerlings & hatchery inputs",
    description: "Certified fingerlings, spawning inputs, and early-stage care.",
  },
  {
    icon: PackageCheck,
    title: "Feeds & supplements",
    description: "Stage-based feed plans and nutritional boosters.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & treatments",
    description: "Water quality kits and preventive health inputs.",
  },
  {
    icon: Truck,
    title: "Equipment & logistics",
    description: "Aeration, pumps, and reliable delivery scheduling.",
  },
];

export const QuoteFormSection = () => {
  return (
    <section className="section bg-muted/40 dark:bg-muted/20 section-pattern">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div>
            <Badge className="eyebrow px-4 py-2">
              Quote Request
            </Badge>
            <h2 className="section-title mt-6">
              Build a package that fits your production cycle
            </h2>
            <p className="section-lead">
              Share your farm size, system type, and preferred delivery window.
              Our team will respond within 24 hours.
            </p>

            <Card className="mt-8 feature-card">
              <CardContent className="p-6 space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Bundle options
                </p>
                <Separator />
                <div className="space-y-4">
                  {packageItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="icon-orb h-10 w-10 rounded-lg">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="feature-card">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input id="phone" type="tel" placeholder="+254 700 000 000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="system">System type</Label>
                    <Select>
                      <SelectTrigger id="system">
                        <SelectValue placeholder="Select system type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ponds">Ponds</SelectItem>
                        <SelectItem value="cages">Cages</SelectItem>
                        <SelectItem value="ras">RAS / tanks</SelectItem>
                        <SelectItem value="hatchery">Hatchery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="volume">Stocking volume</Label>
                    <Input id="volume" placeholder="e.g. 20,000 fingerlings" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Delivery timeline</Label>
                    <Input id="timeline" placeholder="e.g. Next 2 weeks" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="needs">What do you need?</Label>
                  <Select>
                    <SelectTrigger id="needs">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full">Full-service package</SelectItem>
                      <SelectItem value="feeds">Feeds and supplements</SelectItem>
                      <SelectItem value="inputs">Hatchery inputs</SelectItem>
                      <SelectItem value="equipment">Equipment and testing kits</SelectItem>
                      <SelectItem value="advisory">Advisory services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional notes</Label>
                  <Textarea
                    id="message"
                    placeholder="Share any specifics or constraints we should know."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full rounded-full">
                  Request quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
