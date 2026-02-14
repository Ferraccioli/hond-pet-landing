import { motion } from "framer-motion";
import gps from "../../assets/GPS.png"; // Ensure exact casing
import book from "../../assets/book.png";
import paw from "../../assets/paw.png";
import pata from "../../assets/features-pata.png";
import ossos from "../../assets/features-ossos.png";
import bolinhas from "../../assets/features-bolinhas.png";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export function FeaturesSection() {
    return (
        <section className="bg-background min-h-screen snap-start flex flex-col justify-center py-20 lg:py-32 relative overflow-hidden -mt-8 z-20">
            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 relative z-20">
                    <h2 className="font-heading font-semibold text-4xl lg:text-[40px] text-dark mb-4">
                        Tudo o que você <span className="text-secondary">precisa</span>
                    </h2>
                    <p className="font-sans text-lg text-muted">
                        Ajudamos você a planejar a saída perfeita, com segurança e sem surpresas desagradáveis.
                    </p>
                </div>

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    {/* Card 1 - Dark Blue */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -5 }}
                        className="bg-[#0a014f] border border-slate-200 p-10 rounded-[32px] shadow-xl flex flex-col gap-6 relative overflow-hidden group"
                    >
                        <div className="w-20 h-20 relative z-10">
                            <img src={gps} alt="GPS Icon" className="w-full h-full object-contain" />
                        </div>
                        <div className="z-10 relative">
                            <h3 className="font-heading font-semibold text-2xl text-white mb-4 leading-tight">
                                Curadoria <br /> Georreferenciada
                            </h3>
                            <p className="font-sans text-white/80 text-base leading-relaxed">
                                Encontre bares, restaurantes e espaços culturais próximos a você que realmente amam receber pets.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2 - White */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -5 }}
                        className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-xl flex flex-col gap-6 relative overflow-hidden group"
                    >
                        <div className="w-20 h-20 relative z-10">
                            <img src={book} alt="Book Icon" className="w-full h-full object-contain" />
                        </div>
                        <div className="z-10 relative">
                            <h3 className="font-heading font-semibold text-2xl text-dark mb-4 leading-tight">
                                Informação <br /> Qualificada
                            </h3>
                            <p className="font-sans text-muted text-base leading-relaxed">
                                Saiba exatamente as regras: porte permitido, áreas cobertas e se o local oferece o exclusivo Pet Menu.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3 - White */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -5 }}
                        className="bg-white border border-slate-200 p-10 rounded-[32px] shadow-xl flex flex-col gap-6 relative overflow-hidden group"
                    >
                        <div className="w-20 h-20 relative z-10 flex items-center justify-center">
                            <img src={paw} alt="Identity Icon" className="w-full h-full object-contain opacity-80" />
                        </div>
                        <div className="z-10 relative">
                            <h3 className="font-heading font-semibold text-2xl text-dark mb-4 leading-tight">
                                Gestão de <br /> Identidade
                            </h3>
                            <p className="font-sans text-muted text-base leading-relaxed">
                                Crie perfis únicos para seus pets, guardando histórico de visitas e preferências para experiências personalizadas.
                            </p>
                        </div>
                    </motion.div>

                </motion.div>

            </div>

            {/* Decorative Elements (Pata, Ossos, Bolinhas) - Absolute Background */}

            {/* Pata Esquerda - Posição Baseada no Figma (aprox x=117, y=594) */}
            <div className="absolute top-[60%] left-[-5%] lg:left-[5%] w-[154px] h-[154px] z-0 pointer-events-none opacity-80">
                <img src={pata} alt="" className="w-full h-full object-contain" />
            </div>

            {/* Pata Direita topo - (aprox x=1747, y=123) */}
            <div className="absolute top-[10%] right-[-5%] lg:right-[5%] w-[154px] h-[154px] z-0 pointer-events-none opacity-80 rotate-180">
                <img src={pata} alt="" className="w-full h-full object-contain" />
            </div>

            {/* Ossos Esquerda Topo - (aprox x=194, y=152) */}
            <div className="absolute top-[15%] left-[-2%] lg:left-[10%] w-[174px] h-[117px] z-0 pointer-events-none opacity-80">
                <img src={ossos} alt="" className="w-full h-full object-contain" />
            </div>

            {/* Bolinhas Direita Baixo - (aprox x=1685, y=517) */}
            <div className="absolute bottom-[10%] right-0 lg:right-[10%] w-[95px] h-[205px] z-0 pointer-events-none opacity-80">
                <img src={bolinhas} alt="" className="w-full h-full object-contain" />
            </div>

        </section>
    );
}
