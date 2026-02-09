import { Star, Utensils, Map } from "lucide-react";
import mockPhones from "../../assets/mock-celulares.png";
import { FadeIn } from "../ui/fade-in";

const experienceFeatures = [
    {
        icon: Star,
        title: "Avaliações Reais",
        description: "Leia o que outros tutores acharam do ambiente e do atendimento.",
    },
    {
        icon: Utensils,
        title: "Pet Menu Exclusivo",
        description: "Veja cardápios especiais feitos exclusivamente para seu pet.",
    },
    {
        icon: Map,
        title: "Rotas Pet-Friendly",
        description: "Traçamos o melhor caminho para você e seu amigo peludo.",
    },
];

export function ExperienceSection() {
    return (
        <section className="py-24 bg-primary/5 rounded-[48px] my-32 mx-4 lg:mx-auto max-w-[1232px]">
            <div className="px-6 lg:px-24">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="flex-1 space-y-12">
                        <FadeIn direction="right">
                            <h2 className="text-4xl font-heading font-semibold text-slate-900 leading-tight">
                                A experiência completa<br />
                                na palma da sua mão
                            </h2>
                        </FadeIn>

                        <div className="space-y-10">
                            {experienceFeatures.map((item, index) => (
                                <FadeIn key={index} direction="right" delay={0.2 * (index + 1)}>
                                    <div className="flex gap-6 items-start group">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">
                                                {item.title}
                                            </h4>
                                            <p className="text-base text-slate-600 font-sans">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        <FadeIn direction="up" delay={0.8} className="pt-4">
                            <a
                                href="/about"
                                className="inline-block bg-primary hover:bg-primary/90 text-white font-bold font-sans py-4 px-10 rounded-3xl transition-colors shadow-lg shadow-primary/25"
                            >
                                Saiba mais
                            </a>
                        </FadeIn>
                    </div>

                    <div className="flex-1 relative h-[550px] w-full flex justify-center lg:justify-end">
                        <FadeIn direction="left" delay={0.4} className="h-full w-full flex justify-center lg:justify-end">
                            <img src={mockPhones} alt="App Interface on Phones" className="object-contain h-full max-w-full drop-shadow-2xl" />
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
