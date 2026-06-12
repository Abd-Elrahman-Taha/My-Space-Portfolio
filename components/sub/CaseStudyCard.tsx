"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { HiExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import GlowingButton from "./GlowingButton";

interface CaseStudyCardProps {
    title: string;
    description: string;
    image: string;
    liveLink: string;
    repoLink: string;
    techStack: string[];
    challenge: string;
    impact: string;
    index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
    title,
    description,
    image,
    liveLink,
    repoLink,
    techStack,
    challenge,
    impact,
    index,
}) => {
    // Alternating rows layout on desktop
    const isEven = index % 2 === 0;

    return (
        <InView triggerOnce={true} threshold={0.1}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="glass-panel rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 hover:border-violet-500/30 hover:shadow-[0_20px_50px_rgba(139,92,246,0.12)] transition-all duration-500"
                >
                    {/* Media Block (5 Cols on large screens) */}
                    <div className={`lg:col-span-5 relative h-56 sm:h-72 lg:h-full min-h-[240px] rounded-2xl overflow-hidden border border-white/[0.05] group ${isEven ? "lg:order-1" : "lg:order-12"}`}>
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Content Block (7 Cols on large screens) */}
                    <div className={`lg:col-span-7 flex flex-col justify-between gap-6 ${isEven ? "lg:order-12" : "lg:order-1"}`}>
                        <div className="flex flex-col gap-4">
                            {/* Headline & Tech Stack */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight hover:text-violet-200 transition-colors">
                                    {title}
                                </h3>
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                    {techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 font-semibold"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Summary description */}
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                {description}
                            </p>

                            {/* Challenge and Impact (Mini Case Study) */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 pt-4 border-t border-white/[0.05]">
                                <div className="flex items-start gap-2.5">
                                    <FaExclamationCircle className="text-violet-400 mt-1 flex-shrink-0 text-sm" />
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200">The Challenge</h4>
                                        <p className="text-gray-400 text-xs mt-1 leading-relaxed">{challenge}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0 text-sm" />
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200">Solution &amp; Impact</h4>
                                        <p className="text-gray-400 text-xs mt-1 leading-relaxed">{impact}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action triggers */}
                        <div className="flex items-center gap-3 pt-2">
                            <GlowingButton
                                href={liveLink}
                                variant="primary"
                                external
                                icon={HiExternalLink}
                                className="px-4 py-2.5 text-xs sm:text-sm font-bold flex-grow sm:flex-grow-0"
                            >
                                Live Experience
                            </GlowingButton>
                            <GlowingButton
                                href={repoLink}
                                variant="secondary"
                                external
                                icon={SiGithub}
                                className="px-4 py-2.5 text-xs sm:text-sm font-bold flex-grow sm:flex-grow-0"
                            >
                                View Codebase
                            </GlowingButton>
                        </div>
                    </div>
                </motion.div>
            )}
        </InView>
    );
};

export default CaseStudyCard;
