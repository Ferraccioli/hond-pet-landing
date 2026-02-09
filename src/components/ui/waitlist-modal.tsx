import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "../../context/modal-context";
import { Button } from "./button";
import { Link } from "react-router-dom";

export function WaitlistModal() {
    const { isWaitlistOpen, closeWaitlist } = useModal();

    return (
        <AnimatePresence>
            {isWaitlistOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeWaitlist}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white w-full max-w-[480px] rounded-[32px] p-8 lg:p-10 shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeWaitlist}
                            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-slate-900 leading-tight">
                                Obrigado pelo seu interesse na Hond Pet!
                            </h2>

                            <div className="space-y-4 text-lg text-slate-600 font-sans leading-relaxed">
                                <p>
                                    Nosso app não foi lançado ainda, mas estamos felizes em compartilhar que será lançado no dia <span className="font-bold text-primary italic">2 de abril de 2026</span>!
                                </p>
                                <p>
                                    Gostaria de ser avisado quando o dia chegar? Envie uma mensagem pra gente! 🐶
                                </p>
                            </div>

                            <div className="pt-4">
                                <Link to="/contact" onClick={closeWaitlist}>
                                    <Button size="lg" className="w-full text-lg h-16 font-bold shadow-xl shadow-primary/20">
                                        Entrar na waitlist
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
