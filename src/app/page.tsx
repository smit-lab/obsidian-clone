import NavBar from "@/ui/NavBar";
import Hero from "@/ui/Hero";
import FeatureHighlight from "@/ui/feature-highlight";
import MainFeatures from "@/ui/main-features";
import Publish from "@/ui/publish";
import Sync from "@/ui/sync";
import Shine from "@/ui/shine";
import Footer from "@/ui/footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="py-16 md:py-20 lg:pt-20 lg:pb-28">
        <FeatureHighlight />
      </div>
      <div className="pb-20 md:pb-28 lg:pb-40">
        <MainFeatures />
      </div>
      <div className="pb-20 md:pb-28 lg:pb-40">
        <Sync />
      </div>
      <div className="pb-40 md:pb-52 lg:pb-64">
        <Publish />
      </div>
      <div className="pb-36 md:pb-48 lg:pb-52">
        <Shine />
      </div>
      <div className="pb-10 md:pb-20 lg:pb-28">
        <Footer />
      </div>
    </div>
  );
}
