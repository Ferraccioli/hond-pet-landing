import { Hero } from "../components/home/hero";
import { FeaturesSection } from "../components/home/features";
import { ExperienceSection } from "../components/home/experience";
import { CtaSection } from "../components/home/cta"; // Use correct export name CtaSection

export default function HomePage() {
    return (
        <>
            <Hero />
            <FeaturesSection />
            <ExperienceSection />
            <CtaSection />
        </>
    );
}
