
import heroPetMusic from "../../assets/hero-pet-music.png";
import { FadeIn } from "../ui/fade-in";

export function AboutHero() {
    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="flex-1 space-y-8">
                        <FadeIn direction="right">
                            <h1 className="text-4xl lg:text-[56px] leading-tight font-heading font-semibold text-slate-900">
                                Eliminando barreiras entre <span className="text-primary">você</span> e seu <span className="text-primary">pet</span>.
                            </h1>
                        </FadeIn>

                        <FadeIn direction="right" delay={0.2}>
                            <p className="text-xl text-slate-600 font-sans leading-relaxed">
                                Acreditamos que sair de casa com seu melhor amigo deve ser uma experiência fluida, sem atritos e cheia de boas memórias.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="flex-1 relative">
                        <FadeIn direction="left" delay={0.3}>
                            <div className="relative z-10 rounded-[32px] overflow-hidden border-8 border-white shadow-2xl">
                                <img src={heroPetMusic} alt="Pet e dono" className="w-full h-[500px] object-cover" />
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
