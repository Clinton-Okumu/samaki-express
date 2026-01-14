import { ServicesCatalog } from "@/components/services/ServicesCatalog";
import { ServicesCta } from "@/components/services/ServicesCta";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesProcess } from "@/components/services/ServicesProcess";

export const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesCatalog />
      <ServicesProcess />
      <ServicesCta />
    </>
  );
};

export default Services;
