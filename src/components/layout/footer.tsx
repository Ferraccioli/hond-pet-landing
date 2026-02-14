import { Link } from "react-router-dom";
import { useModal } from "../../context/modal-context";
import logo from "../../assets/logo.svg";
// Import social icons if available, else usage placeholders or Lucide
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import linkedin from "../../assets/linkedin.svg";
import apple from "../../assets/apple.svg";
import googlePlay from "../../assets/google-play.svg";

export function Footer() {
    const { openWaitlist } = useModal();
    return (
        <footer className="bg-dark text-white pt-16 pb-16 border-t border-slate-100 snap-start">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-4">
                        <div
                            className="w-[68px] h-[44px] bg-white"
                            style={{
                                maskImage: `url(${logo})`,
                                WebkitMaskImage: `url(${logo})`,
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center'
                            }}
                        />
                        <div className="font-heading font-semibold text-lg">
                            Conectando tutores a lugares incríveis.
                        </div>
                        <p className="text-slate-400 font-sans max-w-sm">
                            Nossa missão é tornar a vida urbana mais amigável para você e seu melhor amigo.
                        </p>

                        <div className="flex gap-4 pt-2">
                            <a href="#" className="bg-slate-100/100 p-2 rounded-full hover:bg-slate-100/80 transition-colors">
                                <img src={facebook} alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="#" className="bg-slate-100/100 p-2 rounded-full hover:bg-slate-100/80 transition-colors">
                                <img src={instagram} alt="Instagram" className="w-6 h-6" />
                            </a>
                            <a href="#" className="bg-slate-100/100 p-2 rounded-full hover:bg-slate-100/80 transition-colors">
                                <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
                            </a>
                            <a href="#" className="bg-slate-100/100 p-2 rounded-full hover:bg-slate-100/80 transition-colors">
                                <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-white text-lg mb-6">Links Rápidos</h4>
                        <ul className="space-y-4 font-sans text-slate-300">
                            <li><Link to="/about" className="hover:text-white transition-colors">Sobre Nós</Link></li>
                            <li><Link to="/about#pet-menu" className="hover:text-white transition-colors">Pet Menu</Link></li>
                            <li><Link to="/about#viagens" className="hover:text-white transition-colors">Viagens</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Seja um Parceiro</Link></li>
                        </ul>
                    </div>

                    {/* Download App */}
                    <div>
                        <h4 className="font-heading font-semibold text-white text-lg mb-6">Baixe o App</h4>
                        <div className="space-y-4">
                            <button
                                onClick={(e) => { e.preventDefault(); openWaitlist(); }}
                                className="bg-white text-slate-900 p-3 rounded-full flex items-center gap-3 w-full hover:bg-slate-100 transition-colors"
                            >
                                <img src={apple} alt="Apple" className="w-7 h-7" />
                                <div className="flex flex-col leading-none text-left">
                                    <span className="text-[10px] uppercase font-sans">Baixar na</span>
                                    <span className="font-bold font-sans text-base">App Store</span>
                                </div>
                            </button>
                            <button
                                onClick={(e) => { e.preventDefault(); openWaitlist(); }}
                                className="bg-white text-slate-900 p-3 rounded-full flex items-center gap-3 w-full hover:bg-slate-100 transition-colors"
                            >
                                <img src={googlePlay} alt="Google Play" className="w-7 h-7" />
                                <div className="flex flex-col leading-none text-left">
                                    <span className="text-[10px] uppercase font-sans">Baixar na</span>
                                    <span className="font-bold font-sans text-base">Google Play</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm font-sans">
                    © 2024 Hond Pet. Todos os direitos reservados. Feito com ❤️ para todos os pets.
                </div>
            </div>
        </footer>
    );
}
