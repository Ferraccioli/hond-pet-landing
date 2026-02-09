import { AboutHero } from "../components/about/hero";
import { AboutMission } from "../components/about/mission";
import { AboutAppShowcase } from "../components/about/app-showcase";
import { CTASection } from "../components/home/cta"; // Reuse CTA from Home

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutMission />
            <AboutAppShowcase />
            <CTASection />
        </>
    );
}
