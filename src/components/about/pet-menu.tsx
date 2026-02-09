import { motion } from "framer-motion";
import dogEating from "../../assets/dog-eating.png";

interface MenuItemProps {
    title: string;
    description: string;
    align?: 'left' | 'right';
}

function MenuItem({ title, description, align = 'left' }: MenuItemProps) {
    const isRight = align === 'right';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`flex gap-6 max-w-[400px] mx-auto lg:max-w-none lg:mx-0 ${isRight ? 'lg:flex-row-reverse lg:text-right flex-row text-left' : 'flex-row text-left'}`}
        >
            <div className="flex-shrink-0 pt-1">
                <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                </div>
            </div>
            <div className="space-y-2">
                <h3 className="text-xl font-heading font-semibold text-slate-900 leading-tight">
                    {title}
                </h3>
                <p className={`text-muted leading-relaxed max-w-[334px] ${isRight ? 'lg:ml-auto' : ''}`}>
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

export function PetMenu() {
    return (
        <section className="bg-background py-32 px-6">
            <div className="max-w-[1280px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4 mb-20"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">
                        PET MENU
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-semibold text-dark max-w-2xl mx-auto">
                        Petiscos especiais para seu cãopanheiro
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        Snacks exclusivos formulados por especialistas para que seu pet tenha uma experiência gourmet em qualquer lugar.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
                    {/* Coluna Esquerda */}
                    <div className="space-y-12 order-2 lg:order-1">
                        <MenuItem
                            title="Saudável"
                            description="Diferente dos petiscos ultraprocessados, nosso aperitivo é 100% natural, projetado para estimular o prazer sensorial. Nosso processo garante frescor e preserva os nutrientes sem conservantes."
                        />
                        <MenuItem
                            title="Seguro"
                            description="Com registro no MAPA, garantimos a segurança de um produto fiscalizado. O pet recebe um aperitivo leve e com baixo risco de alergias."
                        />
                    </div>

                    {/* Imagem Central */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative order-1 lg:order-2 flex justify-center"
                    >
                        <div className="bg-white/0 border-[12px] border-background rounded-[40px] p-3 shadow-2xl max-w-full">
                            <img
                                src={dogEating}
                                alt="Pet Snack Gourmet"
                                className="w-[357px] h-[357px] object-cover rounded-[32px]"
                            />
                        </div>
                    </motion.div>

                    {/* Coluna Direita */}
                    <div className="space-y-12 order-3">
                        <MenuItem
                            title="Sociável"
                            description="Você pode visitar os melhores restaurantes sabendo que seu cão não está apenas 'esperando', mas aproveitando um serviço integrado, aliviando a ansiedade de ficar sozinho em casa."
                            align="right"
                        />
                        <MenuItem
                            title="Nutritivo"
                            description="Aprovado por veterinários nutricionistas parceiros."
                            align="right"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
