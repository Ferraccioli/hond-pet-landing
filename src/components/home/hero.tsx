import { Button } from "../ui/button";
import { useModal } from "../../context/modal-context";
import heroDog from "../../assets/hero-dog.png";
import panela from "../../assets/panela.png";
import pata from "../../assets/pata.svg";
import { FadeIn } from "../ui/fade-in";

export function Hero() {
    const { openWaitlist } = useModal();
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-r from-background to-white">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <FadeIn direction="right">
                            <h1 className="text-5xl lg:text-[64px] leading-tight font-heading font-semibold text-slate-900">
                                O mundo é <span className="text-primary">pet</span><br />
                                <span className="text-primary">friendly.</span> A Hond Pet prova pra você.
                            </h1>
                        </FadeIn>

                        <FadeIn direction="right" delay={0.2}>
                            <p className="text-xl text-slate-600 font-sans max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Descubra os melhores lugares para ir com seu melhor amigo. Restaurantes, parques e experiências pensadas para vocês dois.
                            </p>
                        </FadeIn>

                        <FadeIn direction="right" delay={0.4} className="pt-4">
                            <Button
                                onClick={openWaitlist}
                                size="lg"
                                variant="outline"
                                className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg h-16 px-10 rounded-3xl"
                            >
                                Conhecer o App
                            </Button>
                        </FadeIn>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none">
                        <FadeIn direction="left" delay={0.2}>
                            {/* Blurs */}
                            <div className="absolute -top-12 -left-10 w-32 h-32 bg-yellow-200 rounded-full blur-[70px] opacity-50"></div>
                            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-200 rounded-full blur-[85px] opacity-50"></div>

                            <div className="relative flex items-center h-[500px]">
                                {/* Main Image */}
                                <div className="absolute left-0 top-0 w-[70%] h-full -rotate-2 z-10">
                                    <div className="w-full h-full bg-transparent border-4 border-white rounded-[24px] shadow-2xl overflow-hidden">
                                        <img src={heroDog} alt="Happy dog at a cafe" className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                {/* Floating Card 1 - Pet Menu */}
                                <div className="absolute top-[80px] right-[40px] z-20 rotate-3">
                                    <div className="bg-white p-4 rounded-[32px] shadow-xl border border-slate-100 w-[200px] flex gap-3 items-start">
                                        <div className="w-12 h-12 flex-shrink-0">
                                            <img src={panela} alt="Panela" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-semibold text-dark text-sm">Pet Menu</h4>
                                            <p className="font-sans text-muted text-xs leading-tight">Opções deliciosas para seu pet</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Card 2 - Avaliações */}
                                <div className="absolute bottom-[80px] right-[20px] z-20 -rotate-6">
                                    <div className="bg-white p-4 rounded-[32px] shadow-xl border border-slate-100 w-[200px] flex gap-3 items-start">
                                        <div className="w-12 h-12 flex-shrink-0">
                                            <img src={pata} alt="Pata" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-semibold text-secondary text-sm">4.8 Nota</h4>
                                            <p className="font-sans text-muted text-xs leading-tight">Avaliações reais de tutores</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
