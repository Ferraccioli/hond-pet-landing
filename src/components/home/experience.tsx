import { motion, useScroll, useTransform } from "framer-motion"; // Turbo: Import motion hook
import { useRef } from "react";
import patinhas from "../../assets/experience-patinhas.png";
import iconReviews from "../../assets/experience-icon-reviews.svg";
import iconMenu from "../../assets/experience-icon-menu.svg";
import iconRoutes from "../../assets/experience-icon-routes.svg";
// Using the single image asset for the phones mockups as requested
import mockCelulares from "../../assets/mock-celulares.png";
import pata from "../../assets/features-pata.png";
// New assets for side decorations
import foodLeft from "../../assets/experience-food-left.png";
import foodRight from "../../assets/experience-food-right.png";

export function ExperienceSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax/Scale effects
    // Left food: Starts smaller and further left, moves to normal size and pos
    const xLeft = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
    const scaleLeft = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.5]);
    const opacityLeft = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    // Right food: Starts smaller and further right, moves to normal size and pos
    const xRight = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
    const scaleRight = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.5]);
    const opacityRight = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={containerRef} className="bg-white min-h-screen snap-start flex flex-col justify-center py-20 lg:py-32 overflow-hidden relative">
            <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 w-full">

                {/* Left Content */}
                <div className="flex flex-col items-start max-w-md z-10 pl-4 md:pl-10">
                    <div className="relative mb-6">
                        <img src={patinhas} alt="" className="w-16 md:w-20 opacity-80" />
                        <h2 className="font-heading font-semibold text-4xl md:text-[40px] text-dark mt-4 leading-tight">
                            A experiência completa na palma da sua mão
                        </h2>
                    </div>

                    <div className="flex flex-col gap-8 mb-10 w-full">
                        {/* Feature 1 */}
                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                                <img src={iconReviews} alt="Reviews" className="w-8 h-8 rotate-180" />
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-lg text-dark mb-1">Avaliações Reais</h4>
                                <p className="font-sans text-muted text-base">Leia o que outros tutores acharam do ambiente e do atendimento.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                                <img src={iconMenu} alt="Menu" className="w-8 h-8 rotate-180" />
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-lg text-dark mb-1">Pet Menu Exclusivo</h4>
                                <p className="font-sans text-muted text-base">Veja cardápios especiais feitos exclusivamente para seu pet.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                                <img src={iconRoutes} alt="Routes" className="w-8 h-8 rotate-180" />
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-lg text-dark mb-1">Rotas Pet-Friendly</h4>
                                <p className="font-sans text-muted text-base">Traçamos o melhor caminho para você e seu amigo peludo.</p>
                            </div>
                        </div>
                    </div>

                    <button className="bg-[#ff9f41] text-white font-heading font-bold text-lg px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors">
                        Saiba mais
                    </button>
                </div>

                {/* Right Content (Image Asset) */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full max-w-[500px] flex items-center justify-center lg:justify-end mt-10 lg:mt-0"
                >
                    {/* Scaled down as requested */}
                    <img src={mockCelulares} alt="App Interface Mockups" className="w-[85%] lg:w-[90%] h-auto object-contain lg:translate-x-0" />
                </motion.div>

            </div>

            {/* Food Decorations - Absolute Positioned & Animated */}
            {/* Left Food */}
            <motion.div
                style={{ x: xLeft, scale: scaleLeft, opacity: opacityLeft }}
                className="absolute top-[30%] left-0 w-[250px] lg:w-[320px] z-0 pointer-events-none opacity-90 hidden lg:block"
            >
                <img src={foodLeft} alt="" className="w-full h-auto object-contain" />
            </motion.div>

            {/* Right Food */}
            <motion.div
                style={{ x: xRight, scale: scaleRight, opacity: opacityRight }}
                className="absolute top-[10%] right-0 w-[250px] lg:w-[280px] z-0 pointer-events-none opacity-90 hidden lg:block"
            >
                <img src={foodRight} alt="" className="w-full h-auto object-contain" />
            </motion.div>

            {/* Paw Decorations (kept for extra texture if needed, but lowered opacity) */}
            <div className="absolute top-20 left-[15%] w-[150px] h-[150px] opacity-5 pointer-events-none rotate-12 z-0 hidden lg:block">
                <img src={pata} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-10 right-[20%] w-[120px] h-[120px] opacity-5 pointer-events-none -rotate-12 z-0 hidden lg:block">
                <img src={pata} alt="" className="w-full h-full object-contain" />
            </div>

        </section>
    );
}
