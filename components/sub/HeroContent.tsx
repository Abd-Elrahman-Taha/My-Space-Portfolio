"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { HiArrowRight, HiCode, HiLightningBolt } from "react-icons/hi";
import { FaCube } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const badges = [
    { icon: HiCode, label: "Frontend Developer" },
    { icon: FaCube, label: "3D Web Developer" },
    { icon: HiLightningBolt, label: "React & Next.js" },
];

const HeroContent = () => {
    return (
        <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 md:gap-0 md:px-20 px-5 mt-40 w-full z-20"
                >
                    {/* Left Content */}
                    <div className="h-full w-full md:w-3/6 flex flex-col gap-5 justify-center text-start">

                        {/* Badges Row */}
                        <div className="hidden md:flex flex-row items-center gap-3 flex-wrap">
                            {badges.map((badge, i) => (
                                <InView key={i} triggerOnce={false}>
                                    {({ inView, ref }) => (
                                        <motion.div
                                            ref={ref}
                                            initial="hidden"
                                            animate={inView ? "visible" : "hidden"}
                                            variants={slideInFromTop}
                                            className="Welcome-box py-[7px] px-[12px] border border-[#7042f861] opacity-[0.92] flex items-center gap-2"
                                        >
                                            <badge.icon className="text-violet-400 h-4 w-4 flex-shrink-0" />
                                            <span className="Welcome-text text-[12px] font-medium whitespace-nowrap">
                                                {badge.label}
                                            </span>
                                        </motion.div>
                                    )}
                                </InView>
                            ))}
                        </div>

                        {/* Headline */}
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="flex flex-col gap-2 mt-4"
                                >
                                    <p className="text-violet-400/80 text-base font-semibold tracking-widest uppercase mb-1">
                                        Hi, I&apos;m Abd El-Rahman 👋
                                    </p>
                                    <h1 className="md:text-5xl text-4xl font-extrabold leading-tight text-white max-w-[580px]">
                                        Front-End{" "}
                                        <span className="text-accent">&amp;</span>
                                        {" "}3D Web{" "}
                                        <span className="text-accent">Developer</span>
                                    </h1>
                                    <p className="text-gray-400 text-sm font-medium tracking-wide mt-1">
                                        React · Next.js · Three.js · GSAP
                                    </p>
                                </motion.div>
                            )}
                        </InView>

                        {/* Summary */}
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.p
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.8)}
                                    className="text-gray-400 text-[15px] leading-relaxed max-w-[540px] z-30 my-2"
                                >
                                    Front-End &amp; 3D Web Developer focused on creating modern, interactive
                                    web experiences using{" "}
                                    <span className="text-violet-300 font-medium">React</span>,{" "}
                                    <span className="text-violet-300 font-medium">Next.js</span>, and{" "}
                                    <span className="text-violet-300 font-medium">Three.js</span>.
                                    Skilled in building responsive, performance-optimized applications
                                    with strong UI/UX principles and smooth animations using GSAP.
                                </motion.p>
                            )}
                        </InView>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-3 md:flex-row md:items-center mt-2">
                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.a
                                        ref={ref}
                                        href="#about"
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromLeft(1)}
                                        className="py-3 px-7 flex items-center gap-2 justify-center text-white cursor-pointer rounded-xl max-w-[200px] z-40 text-sm font-semibold border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(109,40,217,0.35)] transition-all duration-300"
                                    >
                                        Explore Portfolio
                                        <HiArrowRight className="text-base" />
                                    </motion.a>
                                )}
                            </InView>

                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.a
                                        ref={ref}
                                        href="https://wa.me/201030246987"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromLeft(1.1)}
                                        className="py-3 px-7 flex items-center gap-2 justify-center text-white cursor-pointer rounded-xl max-w-[200px] z-40 text-sm font-semibold border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(109,40,217,0.35)] transition-all duration-300"
                                    >
                                        <SiWhatsapp className="text-base text-green-400" />
                                        Hire Me
                                    </motion.a>
                                )}
                            </InView>
                        </div>

                        {/* Stats Row */}
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(1.2)}
                                    className="flex items-center gap-6 mt-4 pt-5 border-t border-white/[0.06]"
                                >
                                    {[
                                        { value: "10+", label: "Projects" },
                                        { value: "3+", label: "Years Learning" },
                                        { value: "DEPI", label: "Certified" },
                                    ].map((stat, i) => (
                                        <div key={i} className="flex flex-col">
                                            <span className="text-xl font-extrabold text-white leading-tight">
                                                {stat.value}
                                            </span>
                                            <span className="text-xs text-gray-500 font-medium tracking-wide">
                                                {stat.label}
                                            </span>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </InView>
                    </div>

                    {/* Right Illustration */}
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.8)}
                                className="w-full md:w-3/6 h-full flex justify-center items-center z-40"
                            >
                                <Image
                                    src="/mainIconsdark.svg"
                                    alt="Tech Stack Icons"
                                    height={600}
                                    width={600}
                                    className="drop-shadow-[0_0_60px_rgba(109,40,217,0.25)]"
                                />
                            </motion.div>
                        )}
                    </InView>
                </motion.div>
            )}
        </InView>
    );
};

export default HeroContent;