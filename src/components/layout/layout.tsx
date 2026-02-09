import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { ModalProvider } from "../../context/modal-context";
import { WaitlistModal } from "../ui/waitlist-modal";

export function Layout() {
    return (
        <ModalProvider>
            <div className="flex flex-col min-h-screen bg-background">
                <Header />
                <main className="flex-1">
                    <Outlet />
                </main>
                <Footer />
                <WaitlistModal />
            </div>
        </ModalProvider>
    );
}
