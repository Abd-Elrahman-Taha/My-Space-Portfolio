import React from "react";
import { IconType } from "react-icons";

interface GlowingButtonProps {
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "accent";
    children: React.ReactNode;
    className?: string;
    icon?: IconType;
    external?: boolean;
    disabled?: boolean;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({
    href,
    onClick,
    variant = "primary",
    children,
    className = "",
    icon: Icon,
    external = false,
    disabled = false,
}) => {
    const baseClasses = "relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98] cursor-pointer select-none overflow-hidden z-10";
    
    const variantClasses = {
        primary: "text-white bg-violet-600 border border-violet-500/50 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:border-violet-400/70",
        secondary: "text-gray-300 bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white hover:border-white/[0.15] hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]",
        accent: "text-white bg-indigo-600 border border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:border-indigo-400/70"
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;

    const content = (
        <>
            {/* Subtle sweep highlight on hover */}
            <div className="absolute inset-0 w-[120%] h-full -left-[120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[120%] pointer-events-none" />
            
            {Icon && <Icon className="text-base flex-shrink-0" />}
            <span>{children}</span>
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={`group ${combinedClasses}`}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`group ${combinedClasses}`}
        >
            {content}
        </button>
    );
};

export default GlowingButton;
