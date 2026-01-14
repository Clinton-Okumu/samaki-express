import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const products = [
  {
    title: "Artemia",
    description: "High-protein hatchery feed to boost early-stage survival.",
    image: "/Artemia.webp",
    tag: "Feed",
  },
  {
    title: "Wean Mix",
    description: "Transition feed blend designed for rapid fry growth.",
    image: "/wean mix.webp",
    tag: "Feed",
  },
  {
    title: "Ovaprim",
    description: "Reliable spawning inducer for efficient broodstock cycles.",
    image: "/ovaprim.webp",
    tag: "Hatchery",
  },
  {
    title: "Ovatide",
    description: "Spawning hormone for consistent fertilization results.",
    image: "/ovatide.webp",
    tag: "Hatchery",
  },
  {
    title: "Dissolved Oxygen Analyzer",
    description: "Precision meter for tracking oxygen levels in ponds.",
    image: "/dissolved oxygen analyzer.webp",
    tag: "Testing",
  },
  {
    title: "7-in-1 Water Tester",
    description: "Multi-parameter tester for daily pond monitoring.",
    image: "/7in1 water tester.webp",
    tag: "Testing",
  },
  {
    title: "Ammonium Test Kit",
    description: "Detect ammonia levels early to prevent stress.",
    image: "/ammonium test kit.webp",
    tag: "Testing",
  },
  {
    title: "Nitrite (NO2) Test",
    description: "Rapid nitrite checks to maintain biosecurity.",
    image: "/no2 test.webp",
    tag: "Testing",
  },
  {
    title: "Air Compressor",
    description: "Heavy-duty aeration support for large ponds.",
    image: "/Air compressor.webp",
    tag: "Aeration",
  },
  {
    title: "Vento Airpump",
    description: "Quiet, efficient air pump for intensive systems.",
    image: "/vento airpump.webp",
    tag: "Aeration",
  },
  {
    title: "Submersible Pump",
    description: "Reliable water circulation and transfer solution.",
    image: "/submersible pump.webp",
    tag: "Pump",
  },
  {
    title: "Internal Liquid Filter",
    description: "Compact filtration for hatchery tanks.",
    image: "/Internal liquid filter.webp",
    tag: "Filtration",
  },
];

export const ProductsGrid = () => {
  return (
    <section className="section">
      <div className="section-shell">
        <div className="max-w-2xl mb-12">
          <Badge className="eyebrow mb-4 px-4 py-2">
            Product Lineup
          </Badge>
          <h2 className="section-title">
            Trusted equipment, feeds, and farm tools
          </h2>
          <p className="section-lead">
            Each product is selected for durability, performance, and alignment
            with small to commercial-scale aquaculture operations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.title} className="offering-card group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <Badge variant="secondary">{product.tag}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
