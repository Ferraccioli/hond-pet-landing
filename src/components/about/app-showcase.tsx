import { Brain, Trophy, Map } from "lucide-react";
import mockApp from "../../assets/mock-celulares.png"; // Reuse existing mock or similar
import { FadeIn } from "../ui/fade-in";

const appFeatures = [
    {
        icon: Brain,
        title: "Quizes Comportamentais",
        description: "Entenda o perfil comportamental do seu pet.",
    },
    {
        icon: Trophy,
        title: "Gamificação",
        description: "Ganhe conquistas e badges explorando a cidade.",
    },
    {
        icon: Map,
        title: "Guia Local",
        description: "Encontre os melhores lugares pet friendly.",
    },
];

export function AboutAppShowcase() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    <div className="flex-1 relative flex justify-center">
                        <FadeIn direction="right">
                            {/* Background blur */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full -z-10"></div>
                            <img src={mockApp} alt="Hond Pet App" className="w-full max-w-[400px] drop-shadow-2xl" />
                        </FadeIn>
                    </div>

                    <div className="flex-1 space-y-10">
                        <FadeIn direction="left" delay={0.2}>
                            <div>
                                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">O APLICATIVO</h2>
                                <h3 className="text-4xl font-heading font-semibold text-slate-900 mb-4">
                                    O seu guia pet-friendly na palma da mão.
                                </h3>
                                <p className="text-lg text-slate-600 font-sans">
                                    Tudo o que você precisa para uma rotina pet-friendly em um só lugar.
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {appFeatures.map((feature, index) => (
                                <FadeIn key={index} direction="left" delay={0.3 + (index * 0.1)}>
                                    <div className="p-6 bg-slate-50 rounded-[24px] hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-100">
                                        <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                                            <feature.icon className="w-5 h-5" />
                                        </div>
                                        <h4 className="text-lg font-heading font-semibold text-slate-900 mb-2">{feature.title}</h4>
                                        <p className="text-sm text-slate-600 font-sans">{feature.description}</p>
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
