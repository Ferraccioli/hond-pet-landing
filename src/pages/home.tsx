import { Hero } from "../components/home/hero";
import { FeaturesSection } from "../components/home/features";
import { ExperienceSection } from "../components/home/experience";
import { CTASection } from "../components/home/cta";

export default function HomePage() {
    return (
        <>
            <Hero />
            <FeaturesSection />
            <ExperienceSection />
            <CTASection />
        </>
    );
}
