import { FadeIn } from "../ui/fade-in";
import Pin from "../../assets/GPS.png";
import Book from "../../assets/book.png";
import Paw from "../../assets/paw.png";

const features = [
    {
        image: Pin,
        title: "Curadoria Georreferenciada",
        description: "Encontre bares, restaurantes e espaços culturais próximos a você que realmente amam receber pets.",
        delay: 0.2,
    },
    {
        image: Book,
        title: "Informação Qualificada",
        description: "Saiba exatamente as regras: porte permitido, áreas cobertas e se o local oferece o exclusivo Pet Menu.",
        delay: 0.4,
    },
    {
        image: Paw,
        title: "Gestão de Identidade",
        description: "Crie perfis únicos para seus pets, guardando histórico de visitas e preferencias para experiências personalizadas.",
        delay: 0.6,
    },
];

export function FeaturesSection() {
    return (
        <section className="py-32 bg-background relative">
            <div className="max-w-[1280px] mx-auto px-6">

                <div className="text-center max-w-2xl mx-auto mb-20">
                    <FadeIn direction="up">
                        <h2 className="text-4xl lg:text-[36px] font-heading font-semibold text-slate-900 mb-6">
                            Tudo o que você precisa
                        </h2>
                        <p className="text-lg text-slate-600 font-sans leading-relaxed">
                            Ajudamos você a planejar a saída perfeita, com segurança e sem surpresas desagradáveis.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FadeIn key={index} delay={feature.delay} direction="up" className="h-full">
                            <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
                                <div className="w-20 h-20 flex items-center justify-center mb-8 overflow-hidden">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-fit h-fit object-contain"
                                        onError={(e) => {
                                            // Fallback para visualização se a imagem não existir
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>
                                <h3 className="text-2xl font-heading font-semibold text-slate-900 mb-4 h-16 flex items-center">
                                    {feature.title}
                                </h3>
                                <p className="text-base text-slate-600 font-sans leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    );
}

