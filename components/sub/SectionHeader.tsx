import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

interface SectionHeaderProps {
    title: string;
    highlight?: string;
    subtitle?: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    highlight,
    subtitle,
    className = "",
}) => {
    return (
        <div className={`w-full flex flex-col items-center justify-center text-center px-4 mb-16 ${className}`}>
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInFromTop}
                className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
                {title}{" "}
                {highlight && (
                    <span className="text-gradient-purple-blue block sm:inline mt-1 sm:mt-0">
                        {highlight}
                    </span>
                )}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-gray-400 text-sm md:text-base mt-4 max-w-xl leading-relaxed"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

export default SectionHeader;
