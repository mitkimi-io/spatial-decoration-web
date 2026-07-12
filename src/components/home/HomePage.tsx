import CompatibilitySection from "./CompatibilitySection";
import DownloadCtaSection from "./DownloadCtaSection";
import FeaturesSection from "./FeaturesSection";
import GettingStartedSection from "./GettingStartedSection";
import HeroSection from "./HeroSection";
import PreviewSection from "./PreviewSection";
import ThemeShowcase from "./ThemeShowcase";

export default function HomePage() {
  return (
    <div className="bg-background text-foreground transition-colors duration-300">
      <HeroSection />
      <FeaturesSection />
      <ThemeShowcase />
      <PreviewSection />
      <GettingStartedSection />
      <CompatibilitySection />
      <DownloadCtaSection />
    </div>
  );
}
