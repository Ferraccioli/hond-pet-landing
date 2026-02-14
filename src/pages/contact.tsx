
import { useEffect } from "react";
import { ContactForm } from "../components/contact/contact-form";
import { PartnersSection } from "../components/contact/partners";
import patinhasPassos from "../assets/patinhas-passos.png";

export default function ContactPage() {

    // Disable Snap Scroll for this page
    useEffect(() => {
        document.documentElement.classList.add("no-snap");
        return () => {
            document.documentElement.classList.remove("no-snap");
        };
    }, []);

    return (
        <div className="bg-[#47349e] relative min-h-screen py-32 px-5 flex flex-col items-center overflow-hidden">

            {/* Background Decorations - Side Paws */}
            {/* Left Side */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[120%] pointer-events-none opacity-40 hidden xl:block z-10 w-auto">
                <img src={patinhasPassos} alt="" className="h-full w-auto object-contain object-left" />
            </div>
            {/* Right Side */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[120%] pointer-events-none opacity-40 hidden xl:block z-10 w-auto">
                <img src={patinhasPassos} alt="" className="h-full w-auto object-contain object-right" />
            </div>

            <div className="w-full max-w-[800px] relative z-20 flex flex-col gap-16">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-5xl lg:text-[64px] font-heading font-semibold text-[#e6c9ad] mb-6 leading-tight">
                        Contato e Parceiros
                    </h1>
                    <p className="text-lg text-white/80 font-sans leading-relaxed">
                        Entre em contato conosco para saber mais sobre os nossos produtos e parcerias. Envie um email para info@hondpet.com ou ligue para (11) 1234-5678. Estamos localizados na Rua dos Pets, 123 - São Paulo - SP, 12345-000.
                    </p>
                </div>

                {/* Content Column - Single Column Layout */}
                <div className="flex flex-col gap-12 w-full">

                    {/* Contact Form */}
                    <div className="w-full">
                        <ContactForm />
                    </div>

                    {/* Partners Section */}
                    <div className="w-full">
                        <PartnersSection />
                    </div>

                </div>

            </div>
        </div>
    );
}
