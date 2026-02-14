import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "../ui/button";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Nome deve ter pelo menos 2 caracteres.",
    }),
    email: z.string().email({
        message: "Email inválido.",
    }),
    phone: z.string().min(10, {
        message: "Telefone inválido.",
    }),
    message: z.string().min(10, {
        message: "Mensagem deve ter pelo menos 10 caracteres.",
    }),
});

import { toast } from "sonner";
import { supabase } from "../../lib/supabase";

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const { error } = await supabase
                .from('messages')
                .insert([
                    {
                        name: values.name,
                        email: values.email,
                        phone: values.phone,
                        message: values.message,
                    },
                ]);

            if (error) throw error;

            toast.success("Mensagem enviada com sucesso!");
            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Erro ao enviar mensagem. Tente novamente.");
        }
    }

    return (
        <div className="bg-[#0ca4a5] border border-white/20 rounded-[32px] p-8 lg:p-12 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] backdrop-blur-md">
            <div className="flex items-center gap-3 mb-8">
                <Send className="w-6 h-6 text-white rotate-[-45deg]" />
                <h2 className="text-2xl font-heading font-semibold text-white">Envie uma mensagem</h2>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <div className="space-y-2">
                    <label className="text-sm font-bold text-white uppercase tracking-wide">Nome</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            {...form.register("name")}
                            placeholder="Seu nome completo"
                            className="w-full pl-12 pr-4 py-4 rounded-[24px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-white text-slate-600 placeholder:text-slate-400"
                        />
                    </div>
                    {form.formState.errors.name && <p className="text-red-500 text-sm ml-2">{form.formState.errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-white uppercase tracking-wide">E-mail</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                {...form.register("email")}
                                placeholder="seu@email.com"
                                className="w-full pl-12 pr-4 py-4 rounded-[24px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-white text-slate-600 placeholder:text-slate-400"
                            />
                        </div>
                        {form.formState.errors.email && <p className="text-red-500 text-sm ml-2">{form.formState.errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-white uppercase tracking-wide">Telefone</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                {...form.register("phone")}
                                placeholder="(21) 99999-9999"
                                className="w-full pl-12 pr-4 py-4 rounded-[24px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-white text-slate-600 placeholder:text-slate-400"
                            />
                        </div>
                        {form.formState.errors.phone && <p className="text-red-500 text-sm ml-2">{form.formState.errors.phone.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-white uppercase tracking-wide">Mensagem</label>
                    <div className="relative">
                        <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-slate-400" />
                        <textarea
                            {...form.register("message")}
                            placeholder="Como podemos ajudar?"
                            rows={4}
                            className="w-full pl-12 pr-4 py-4 rounded-[24px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-white text-slate-600 placeholder:text-slate-400 resize-none"
                        />
                    </div>
                    {form.formState.errors.message && <p className="text-red-500 text-sm ml-2">{form.formState.errors.message.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full h-14 rounded-[24px] bg-[#ff9f41] text-white text-lg font-bold shadow-lg hover:bg-[#ff9f41]/90 hover:shadow-xl transition-all border-none">
                    Enviar Mensagem
                    <Send className="ml-2 w-5 h-5" />
                </Button>

            </form>
        </div>
    );
}
