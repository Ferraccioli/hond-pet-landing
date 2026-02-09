import { Heart, Leaf } from "lucide-react";
import { FadeIn } from "../ui/fade-in";
import dogWalk from "../../assets/dog-walk.png";
import petResting from "../../assets/pet-resting.png";

const values = [
    {
        icon: Heart,
        title: "Fomento à Sociabilidade",
        description: "Entendemos o perfil de cada animal para conexões reais.",
    },
    {
        icon: Leaf,
        title: "Inovação Sustentável",
        description: "Produtos pensados para o bem-estar e o planeta.",
    },
];

export function AboutMission() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="flex-1 space-y-10 order-2 lg:order-1">
                        <FadeIn direction="right" delay={0.2}>
                            <div className="grid grid-cols-2 gap-4">
                                <img src={dogWalk} alt="Dog Walk" className="w-auto h-[320px] object-contain rounded-[32px]" />
                                <img src={petResting} alt="Pet Resting" className="w-auto h-[320px] object-contain rounded-[32px] mt-12" />
                            </div>
                        </FadeIn>
                    </div>

                    <div className="flex-1 order-1 lg:order-2 space-y-8">
                        <FadeIn direction="left">
                            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Nossa Missão</h2>
                            <h3 className="text-3xl lg:text-4xl font-heading font-semibold text-slate-900 leading-tight">
                                Prover soluções tecnológicas e gastronômicas que permitam aos tutores de pets explorarem a cidade com confiança.
                            </h3>
                        </FadeIn>

                        <div className="space-y-8 pt-4">
                            {values.map((item, index) => (
                                <FadeIn key={index} direction="left" delay={0.2 * (index + 1)}>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-heading font-semibold text-slate-900 mb-2">{item.title}</h4>
                                            <p className="text-slate-600 font-sans">{item.description}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
