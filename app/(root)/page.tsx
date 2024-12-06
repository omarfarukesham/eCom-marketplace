import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import EmblaCarousel from "./slider/page";
// import { EmblaCarousel } from "./slider/page";

export default function Home() {
  return (
    <>
      <EmblaCarousel />
      <Collections />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";

