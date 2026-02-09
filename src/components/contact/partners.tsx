import { MapPin, Phone, Store } from "lucide-react";

const partners = [
    {
        name: "Cantinho dos Borges",
        address: "R. Araguaia, 895 - Freguesia, Rio de Janeiro - RJ",
        phone: "(21) 3344-5566",
    },
    {
        name: "Bistrô Pet Amigo",
        address: "Av. Geremário Dantas, 1200 - Pechincha, RJ",
        phone: "(21) 2233-4455",
    },
    {
        name: "Hond Market Centro",
        address: "R. Sete de Setembro, 55 - Centro, RJ",
        phone: "(21) 4004-9000",
    },
];

export function PartnersSection() {
    return (
        <div className="bg-white/70 backdrop-blur-md border border-white/20 rounded-[32px] p-8 lg:p-12 shadow-xl h-full">
            <div className="flex items-center gap-3 mb-8">
                <Store className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-heading font-semibold text-slate-800">Nossos Parceiros</h2>
            </div>

            <div className="space-y-6">
                {partners.map((partner, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-[24px] bg-slate-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100 group">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Store className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-heading font-bold text-slate-800 mb-1">{partner.name}</h3>
                            <div className="flex items-center gap-2 text-slate-500 mb-1">
                                <MapPin className="w-4 h-4" />
                                <p className="text-sm font-sans">{partner.address}</p>
                            </div>
                            <div className="flex items-center gap-2 text-primary font-bold">
                                <Phone className="w-4 h-4" />
                                <p className="text-sm font-sans">{partner.phone}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
