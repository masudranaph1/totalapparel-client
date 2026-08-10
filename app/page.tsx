import Hero from "@/components/Hero";
import CompanyStory from "@/components/CompanyStory";
import CottonFarming from "@/components/CottonFarming";
import SpinningMill from "@/components/SpinningMill";
import WeavingLoom from "@/components/WeavingLoom";
import YarnToFabric from "@/components/YarnToFabric";
import FabricDyeing from "@/components/FabricDyeing";
import QualityLaboratory from "@/components/QualityLaboratory";
import GarmentManufacturing from "@/components/GarmentManufacturing";
import GlobalManufacturing from "@/components/GlobalManufacturing";
import LetsWorkTogether from "@/components/LetsWorkTogether";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start bg-white">
      <Hero />
      <CompanyStory />
      <CottonFarming />
      <SpinningMill />
      <WeavingLoom />
      <YarnToFabric />
      <FabricDyeing />
      <QualityLaboratory />
      <GarmentManufacturing />
      <GlobalManufacturing />
      <LetsWorkTogether />
    </main>
  );
}
