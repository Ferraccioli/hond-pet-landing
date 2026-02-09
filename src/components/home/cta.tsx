import apple from "../../assets/apple.svg";
import googlePlay from "../../assets/google-play.svg";

export function CTASection() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-[896px] mx-auto px-6 text-center">
                <h2 className="text-5xl font-heading font-semibold text-slate-900 mb-12 leading-tight">
                    Pronto para transformar a rotina<br />
                    do seu pet? 🐶
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="#" className="bg-dark text-white hover:bg-slate-800 transition-colors px-10 py-5 rounded-full flex items-center gap-4 min-w-[240px] justify-center">
                        <img src={apple} alt="Apple Store" className="w-6 h-6 invert brightness-0" />
                        <span className="font-bold font-sans text-lg">App Store</span>
                    </a>

                    <a href="#" className="bg-primary text-white hover:bg-primary/90 transition-colors px-10 py-5 rounded-full flex items-center gap-4 min-w-[240px] justify-center shadow-lg shadow-primary/25">
                        <img src={googlePlay} alt="Google Play" className="w-6 h-6 brightness-0 invert" />
                        <span className="font-bold font-sans text-lg">Google Play</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
