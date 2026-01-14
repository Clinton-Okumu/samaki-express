"use client"

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, PhoneCall, XIcon } from "lucide-react";
import * as React from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="nav-shell shadow-sm">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="/logo.webp"
            alt="Samaki Express"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="text-base sm:text-lg">Samaki Express</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link",
                pathname === link.href
                  ? "nav-link-active"
                  : ""
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
              {pathname === link.href && (
                <span className="nav-pill" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden sm:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-full px-4 text-sm"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                Contact
              </Link>
            </Button>
            <Button asChild className="rounded-full px-4 lg:px-6 text-sm shadow-sm">
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="section-shell py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-3 px-3 rounded-lg transition-colors duration-200 hover:bg-muted",
                  pathname === link.href
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 grid gap-3">
              <Button asChild variant="outline" className="w-full rounded-full">
                <Link href="/contact">Contact</Link>
              </Button>
              <Button asChild className="w-full rounded-full">
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
