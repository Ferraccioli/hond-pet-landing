
import { motion } from "framer-motion";
import rabisco from "../../assets/hero-scribble.png";
import heroImage from "../../assets/hero-main-dog.png";
import menuIcon from "../../assets/hero-icon-menu.png";
import pawIcon from "../../assets/hero-icon-paw.svg";

export function Hero() {
    return (
        <section className="bg-[#47349e] w-full min-h-screen snap-start relative flex justify-center items-center overflow-hidden py-20 lg:py-32">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Left Content */}
                <div className="flex flex-col items-start max-w-xl z-20">
                    <h1 className="font-heading font-semibold text-5xl lg:text-[64px] leading-tight text-[#e6c9ad]">
                        O mundo é <span className="text-secondary">pet</span>
                        <br />
                        <span className="text-secondary">friendly. </span>
                        A Hond Pet prova pra você.
                    </h1>

                    <div className="mt-8 max-w-lg">
                        <p className="font-sans text-xl text-white leading-relaxed">
                            Descubra os melhores lugares para ir com seu melhor
                            amigo. Restaurantes, parques e experiências pensadas para
                            vocês dois.
                        </p>
                    </div>

                    <div className="mt-10">
                        <button className="bg-secondary border-2 border-secondary text-white font-heading font-semibold text-lg px-8 py-4 rounded-3xl hover:bg-transparent hover:text-secondary transition-colors duration-300">
                            Conheça o App
                        </button>
                    </div>
                </div>

                {/* Right Content (Images) */}
                <div className="relative w-full max-w-[600px] lg:flex-1 h-[600px] flex items-center justify-center lg:translate-x-12 z-10 lg:scale-[1.15] ">

                    {/* Background Scribble & Main Dog Image Container - Animate First */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full h-full flex items-center justify-center z-0"
                    >
                        {/* Background Scribble */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[637px] h-[607px] max-w-none z-0">
                            <img src={rabisco} alt="" className="w-full h-full object-contain" />
                        </div>

                        {/* Main Dog Image Container */}
                        <div className="relative z-10 -rotate-2 w-[396px] h-[513px]">
                            {/* Border/Shadow Wrapper */}
                            <div className="absolute inset-0 bg-transparent border-4 border-white rounded-[24px] shadow-2xl overflow-hidden p-[4px] flex items-center justify-center">
                                <div className="relative w-full h-full overflow-hidden rounded-[20px]">
                                    <img src={heroImage} alt="Happy dog at a cafe" className="absolute top-0 left-[-16%] max-w-none w-[132%] h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Card 1 - Pet Menu (Top-Left relative to container, simplified positioning for responsive) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "backOut" }}
                        className="absolute top-[8%] left-[0%] lg:left-[-5%] rotate-3 z-50"
                    >
                        <div className="bg-white border border-slate-100 p-4 rounded-[32px] shadow-xl w-[200px] flex flex-col gap-3 animate-float-slow">
                            <div className="w-[48px] h-[48px] relative">
                                <img src={menuIcon} alt="Pet Menu" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h4 className="font-heading font-semibold text-slate-800 text-sm">Pet Menu</h4>
                                <p className="font-sans text-slate-500 text-xs">Opções deliciosas para seu pet</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Card 2 - Ratings (Bottom-Right roughly) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.9, ease: "backOut" }}
                        className="absolute bottom-[20%] right-[0%] lg:right-[-5%] -rotate-4 z-50"
                    >
                        <div className="bg-white border border-slate-100 p-4 rounded-[32px] shadow-xl w-[200px] flex flex-col gap-3 animate-float-delayed">
                            <div className="w-[48px] h-[48px] relative">
                                <img src={pawIcon} alt="Rating" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h4 className="font-heading font-semibold text-secondary text-sm">4.8 Nota</h4>
                                <p className="font-sans text-slate-500 text-xs">Avaliações reais</p>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
