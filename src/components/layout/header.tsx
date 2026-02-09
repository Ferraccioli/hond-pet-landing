import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import logo from "../../assets/logo.svg";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuLinks = [
        { name: "Home", path: "/" },
        { name: "Sobre", path: "/about" },
        { name: "Contato", path: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20">
            <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0 z-50" aria-label="Hond Pet Home" onClick={() => setIsMenuOpen(false)}>
                    <div
                        className="w-[68px] h-[44px] bg-primary transition-colors"
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
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {menuLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-slate-800 hover:text-primary font-heading font-semibold transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4 z-50">
                    <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 rounded-full shadow-lg shadow-primary/20">
                        Baixar App
                    </Button>

                    <button
                        className="p-2 text-slate-900 md:hidden outline-none"
                        onClick={toggleMenu}
                        aria-label="Alternar Menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 top-0 left-0 w-full h-screen bg-white z-40 md:hidden flex flex-col pt-24 px-6 gap-8 shadow-xl"
                    >
                        <nav className="flex flex-col gap-6">
                            {menuLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className="text-3xl font-heading font-semibold text-slate-900 hover:text-primary transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="pt-8 border-t border-slate-100"
                        >
                            <Button className="w-full h-16 text-lg bg-primary hover:bg-primary/90 rounded-2xl shadow-lg shadow-primary/20">
                                Baixar App
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
