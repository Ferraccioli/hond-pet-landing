import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Se houver um hash, tenta encontrar o elemento e rolar até ele
            // Um pequeno timeout ajuda a garantir que o elemento foi renderizado
            const timeoutId = setTimeout(() => {
                const element = document.getElementById(hash.replace("#", ""));
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
            return () => clearTimeout(timeoutId);
        } else {
            // Caso contrário, rola para o topo
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}
