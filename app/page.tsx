import Hero from "@/components/Hero";
import ManufacturingSolutions from "@/components/ManufacturingSolutions";
import TrustStatistics from "@/components/TrustStatistics";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import VideoShowcase from "@/components/VideoShowcase";
import FeaturedCuration from "@/components/FeaturedCuration";
import NewsInsights from "@/components/NewsInsights";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start bg-white">
      <Hero />
      <ManufacturingSolutions />
      <TrustStatistics />
      <ManufacturingProcess />
      <VideoShowcase />
      <FeaturedCuration />
      <NewsInsights />
    </main>
  );
}
