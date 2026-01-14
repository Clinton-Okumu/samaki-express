"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-surface">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="grid gap-10 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 font-semibold">
              <Image
                src="/logo.webp"
                alt="Samaki Express"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-lg">Samaki Express</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading the aquaculture revolution in East Africa with sustainable
              technology and expert support for farmers.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="h-9 w-9 rounded-lg bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="footer-link group">
                  <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-300" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link group">
                  <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-300" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link group">
                  <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-300" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="footer-link group">
                  <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-300" />
                  Products Shop
                </Link>
              </li>
              <li>
                <Link href="/careers" className="footer-link group">
                  <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-300" />
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="h-10 w-10 rounded-lg bg-background flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Nairobi, Kenya</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="h-10 w-10 rounded-lg bg-background flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-all duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground break-all">+254 700 000 000</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="h-10 w-10 rounded-lg bg-background flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-all duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground break-all text-xs sm:text-sm">info@samakiexpress.com</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Subscribe to get the latest farming tips, market prices, and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Your email" 
                className="flex-1 bg-background border-border/50 focus-visible:border-primary/50"
              />
              <Button 
                size="icon" 
                className="shrink-0 bg-primary hover:bg-primary/90"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Samaki Express EA Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
