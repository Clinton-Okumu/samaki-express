import { ProductsCategories } from "@/components/products/ProductsCategories";
import { ProductsCta } from "@/components/products/ProductsCta";
import { ProductsGrid } from "@/components/products/ProductsGrid";
import { ProductsHero } from "@/components/products/ProductsHero";

export const Products = () => {
  return (
    <>
      <ProductsHero />
      <ProductsCategories />
      <ProductsGrid />
      <ProductsCta />
    </>
  );
};

export default Products;
