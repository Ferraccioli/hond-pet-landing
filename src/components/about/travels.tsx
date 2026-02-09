import dogTravel from "../../assets/dog-travel.png";

interface TravelItemProps {
    title: string;
    description: string;
}

function TravelItem({ title, description }: TravelItemProps) {
    return (
        <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 pt-1">
                <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                </div>
            </div>
            <div className="space-y-1">
                <h4 className="text-lg font-heading font-semibold text-dark leading-tight">
                    {title}
                </h4>
                <p className="text-sm text-muted leading-relaxed max-w-[470px]">
                    {description}
                </p>
            </div>
        </div>
    );
}

export function Travels() {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    {/* Conteúdo Esquerdo */}
                    <div className="flex-1 space-y-8">
                        <div className="space-y-4">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">
                                VIAGENS
                            </span>
                            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-dark leading-[1.2]">
                                A viagem dos sonhos,<br />para todas as patas.
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                                Descubra restaurantes, hotéis e entretenimentos onde todos são bem-vindos! Toda vez, uma nova possibilidade.
                            </p>
                        </div>

                        <div className="space-y-6 pt-2">
                            <TravelItem
                                title="Completo"
                                description="Encontre tudo que precisa durante a sua viagem e deixe salvo. Não gaste tempo pensando aonde ir, saiba exatamente o que espera por vocês."
                            />
                            <TravelItem
                                title="Confiável"
                                description="Conte com a avaliação de outros cãopanheiros, e deixe a sua também. Ajude outros pets a desfrutarem de mais experiências incríveis!"
                            />
                            <TravelItem
                                title="Contínuo"
                                description="Todo dia surge uma nova forma de viver com o seu cãopanheiro. Os mesmos destinos podem trazer novas experiências, não deixe de explorar!"
                            />
                        </div>
                    </div>

                    {/* Imagem Direita */}
                    <div className="flex-1 relative">
                        {/* Efeito de Blur atrás da imagem */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[32px] rounded-full -z-10" />

                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                            <img
                                src={dogTravel}
                                alt="Viagens Pet Friendly"
                                className="w-full aspect-square object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
