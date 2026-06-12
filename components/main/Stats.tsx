"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiFire, HiBadgeCheck, HiGlobeAlt, HiCode } from "react-icons/hi";

const statsData = [
    {
        icon: HiCode,
        value: "15+",
        label: "Projects Shipped",
        description: "From SaaS to interactive 3D designs",
        color: "text-violet-400"
    },
    {
        icon: HiGlobeAlt,
        value: "3+",
        label: "Years in Web Tech",
        description: "Specializing in React, Next.js & WebGL",
        color: "text-indigo-400"
    },
    {
        icon: HiBadgeCheck,
        value: "DEPI",
        label: "Certified Specialist",
        description: "Professional Web Development Academy",
        color: "text-emerald-400"
    },
    {
        icon: HiFire,
        value: "100%",
        label: "Performance Focused",
        description: "High Lighthouse score optimizations",
        color: "text-amber-400"
    }
];

const Stats = () => {
    return (
        <section className="relative z-30 py-12 px-6 md:px-20 w-full max-w-[1200px] mx-auto">
            {/* Glass Container */}
            <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-violet-500/5 blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300"
                            >
                                <div className={`p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-4 ${stat.color} shadow-[0_0_15px_rgba(255,255,255,0.02)]`}>
                                    <Icon className="text-2xl" />
                                </div>
                                <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                                    {stat.value}
                                </span>
                                <span className="text-sm font-semibold text-gray-200 mt-1.5 uppercase tracking-wide">
                                    {stat.label}
                                </span>
                                <span className="text-xs text-gray-400 mt-1 leading-relaxed max-w-[180px]">
                                    {stat.description}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
