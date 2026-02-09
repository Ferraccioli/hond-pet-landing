import { ContactForm } from "../components/contact/contact-form";
import { PartnersSection } from "../components/contact/partners";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-5 bg-slate-50 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-5xl font-heading font-semibold text-slate-900 mb-6">
                        Contato e Parceiros
                    </h1>
                    <p className="text-lg text-slate-600 font-sans leading-relaxed">
                        Entre em contato conosco para saber mais sobre os nossos produtos e parcerias. Envie um email para info@hondpet.com ou ligue para (11) 1234-5678. Estamos localizados na Rua dos Pets, 123 - São Paulo - SP, 12345-000.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <ContactForm />
                    <PartnersSection />
                </div>

            </div>
        </div>
    );
}
