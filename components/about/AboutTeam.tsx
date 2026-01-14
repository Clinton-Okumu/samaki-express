import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const teamMembers = [
  {
    name: "Vanessa Musula",
    role: "Operations Lead",
    image: "/vanessa-musula.webp",
  },
  {
    name: "Mercy Achieng",
    role: "Client Success",
    image: "/mercy achieng.webp",
  },
  {
    name: "Lorna Nandwa",
    role: "Field Specialist",
    image: "/lorna nandwa.webp",
  },
  {
    name: "Janeffer Nafula",
    role: "Hatchery Technician",
    image: "/janeffer nafula.webp",
  },
  {
    name: "Caroline Awino",
    role: "Training Coordinator",
    image: "/caroline awino.webp",
  },
];

export const AboutTeam = () => {
  return (
    <section className="section">
      <div className="section-shell">
        <div className="max-w-2xl mb-12">
          <Badge className="eyebrow mb-4 px-4 py-2">
            Our Team
          </Badge>
          <h2 className="section-title">
            The people behind Samaki Express
          </h2>
          <p className="section-lead">
            Our team combines hatchery expertise, farm management, and on-site
            training to support every stage of aquaculture production.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name} className="service-card group">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <CardContent className="pt-5">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
