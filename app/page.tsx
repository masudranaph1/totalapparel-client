import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import PromoBanners from "@/components/PromoBanners";
import BestSelling from "@/components/BestSelling";
import NewArrivals from "@/components/NewArrivals";
import OnSellingProducts from "@/components/OnSellingProducts";
import SubBannerSlider from "@/components/SubBannerSlider";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between bg-white">
      <Hero />
      <BrandMarquee />
      <PromoBanners />
      <NewArrivals />
      <SubBannerSlider />
      <OnSellingProducts />
      <BestSelling />
    </main>
  );
}
