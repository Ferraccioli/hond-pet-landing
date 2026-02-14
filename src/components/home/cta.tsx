
import { motion } from "framer-motion";
import bgImage from "../../assets/cta-background.png";
import dogImage from "../../assets/cta-dog.png";
import iconApple from "../../assets/cta-icon-apple.svg";
import iconGoogle from "../../assets/cta-icon-google.svg";

export function CtaSection() {
    return (
        <section className="relative pt-20 pb-0 overflow-hidden bg-[#ff9f41] -mt-14 z-20 min-h-screen snap-start flex flex-col items-center justify-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <img src={bgImage} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center text-center">

                {/* Heading */}
                <h2 className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 drop-shadow-sm">
                    Pronto para transformar a rotina<br />do seu pet? 🐶
                </h2>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button className="bg-dark text-white font-heading font-bold px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-opacity-90 hover:scale-105 transition-all shadow-xl min-w-[200px]">
                        <img src={iconApple} alt="Apple" className="w-6 h-6 flex-shrink-0" />
                        <span className="whitespace-nowrap text-lg">App Store</span>
                    </button>
                    <button className="bg-dark text-white font-heading font-bold px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-opacity-90 hover:scale-105 transition-all shadow-xl min-w-[200px]">
                        <img src={iconGoogle} alt="Google Play" className="w-6 h-6 flex-shrink-0" />
                        <span className="whitespace-nowrap text-lg">Google Play</span>
                    </button>
                </div>
            </div>

            {/* Dog Image - Growing from bottom */}
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute bottom-0 left-0 right-0 w-full max-w-[1200px] mx-auto z-10 px-4 pointer-events-none"
            >
                <img
                    src={dogImage}
                    alt="Happy Dog"
                    className="w-full h-auto object-contain mx-auto display-block"
                />
            </motion.div>
        </section>
    );
}
