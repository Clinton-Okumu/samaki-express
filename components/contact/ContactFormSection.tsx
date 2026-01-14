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
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, PhoneCall } from "lucide-react";

const directContacts = [
  {
    title: "Sales & Support",
    icon: PhoneCall,
    details: ["+254 700 000 000", "Mon - Fri, 9:00 AM - 6:00 PM"],
  },
  {
    title: "Email Us",
    icon: Mail,
    details: ["support@samakiexpress.co.ke", "We reply within 24 hours"],
  },
  {
    title: "Headquarters",
    icon: MapPin,
    details: ["Kilimani Business Park", "Nairobi, Kenya 00100"],
  },
];

export const ContactFormSection = () => {
  return (
    <section className="section bg-muted/40 dark:bg-muted/20 section-pattern">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div>
            <Badge className="eyebrow px-4 py-2">
              Send a Message
            </Badge>
            <h2 className="section-title mt-6">
              Send us a message
            </h2>
            <p className="section-lead">
              Tell us about your farm and needs and we will respond with a
              tailored service or product recommendation.
            </p>

            <Card className="mt-8 feature-card">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiry">Inquiry Type</Label>
                      <Select>
                        <SelectTrigger id="inquiry">
                          <SelectValue placeholder="General Inquiry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="products">Products</SelectItem>
                          <SelectItem value="services">Services</SelectItem>
                          <SelectItem value="training">Training</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your farm’s needs..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full">
                    Send Message →
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-6 text-sm text-muted-foreground">
              <span>Have a quick question? </span>
              <Button
                variant="link"
                className="h-auto p-0 text-primary"
                asChild
              >
                <a href="#">Visit Help Center →</a>
              </Button>
            </div>
          </div>

          <Card className="feature-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Direct Contact</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach our team directly for faster response times.
              </p>

              <div className="mt-6 space-y-4">
                {directContacts.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <div
                      key={contact.title}
                      className="rounded-2xl border border-border/60 bg-background/80 p-4 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="icon-orb h-10 w-10 rounded-lg">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold">{contact.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {contact.details[0]}
                          </p>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {contact.details[1]}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold">Find Us</h4>
                <div className="mt-3 overflow-hidden rounded-2xl border border-border/60 shadow-sm">
                  <iframe
                    title="Samaki Express location"
                    src="https://maps.google.com/maps?q=Nairobi%20Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="h-56 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <Button
                  variant="link"
                  className="mt-3 h-auto p-0 text-primary"
                  asChild
                >
                  <a
                    href="https://maps.google.com/?q=Nairobi%20Kenya"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Google Maps →
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
