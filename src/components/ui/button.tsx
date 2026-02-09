import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "../../lib/utils"

// Since I didn't install class-variance-authority, I will implement a simpler version or install it.
// Actually, I should install it for better component management, or just use plain clsx/switch.
// Given strict "no hardcoded" rule, cva is good but adds dep.
// I'll stick to a simple implementation without cva to save deps if I didn't install it.
// Wait, I didn't install cva. I'll use clsx + tailwind-merge manually.

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link'
    size?: 'default' | 'sm' | 'lg' | 'icon'
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        const variants = {
            default: "bg-primary text-white hover:bg-primary/90 shadow-sm",
            secondary: "bg-secondary text-white hover:bg-secondary/80",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-slate-100 hover:text-slate-900",
            link: "text-primary underline-offset-4 hover:underline",
        }

        const sizes = {
            default: "h-12 px-6 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-14 rounded-3xl px-8 text-lg",
            icon: "h-10 w-10",
        }

        return (
            <Comp
                className={cn(
                    "inline-flex items-center justify-center rounded-3xl text-sm font-medium font-heading transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-sm",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
