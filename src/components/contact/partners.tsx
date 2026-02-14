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
        <div className="bg-[#0ca4a5] border border-white/20 rounded-[32px] p-8 lg:p-12 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] backdrop-blur-md h-full">
            <div className="flex items-center gap-3 mb-8">
                <Store className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-heading font-semibold text-white">Nossos Parceiros</h2>
            </div>

            <div className="space-y-6">
                {partners.map((partner, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-[24px] bg-transparent border border-transparent group">
                        <div className="w-12 h-12 bg-[#ff9f41] rounded-full flex items-center justify-center shrink-0 text-white shadow-sm">
                            <Store className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-heading font-bold text-white mb-1">{partner.name}</h3>
                            <div className="flex items-center gap-2 text-white/90 mb-1">
                                <MapPin className="w-4 h-4" />
                                <p className="text-sm font-sans">{partner.address}</p>
                            </div>
                            <div className="flex items-center gap-2 text-white font-bold">
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
