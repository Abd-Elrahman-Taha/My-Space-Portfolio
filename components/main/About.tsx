"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";
import {
    HiMail,
    HiPhone,
    HiLocationMarker,
    HiExternalLink,
} from "react-icons/hi";
import {
    SiLinkedin,
    SiGithub,
} from "react-icons/si";
import { BsPersonFill } from "react-icons/bs";

const contactItems = [
    {
        icon: HiMail,
        label: "Email",
        value: "b0ody66taha@gmail.com",
        href: "mailto:b0ody66taha@gmail.com",
        iconColor: "text-violet-400",
    },
    {
        icon: HiPhone,
        label: "Phone",
        value: "+20 1030246987",
        href: "tel:+201030246987",
        iconColor: "text-violet-400",
    },
    {
        icon: SiLinkedin,
        label: "LinkedIn",
        value: "abdelrahman-taha",
        href: "https://www.linkedin.com/in/abdelrahman-taha-aa006432b/",
        iconColor: "text-violet-400",
        external: true,
    },
    {
        icon: SiGithub,
        label: "GitHub",
        value: "Abd-Elrahman-Taha",
        href: "https://github.com/Abd-Elrahman-Taha",
        iconColor: "text-violet-400",
        external: true,
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col relative items-center justify-center min-h-screen w-full py-24 px-5 md:px-16"
        >
            {/* Ambient Glow */}
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none" />

            {/* Section Title */}
            <div className="w-auto h-auto z-[5] mb-12 text-center">
                <InView triggerOnce={true}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-[40px] font-extrabold text-center text-white z-50 tracking-tight"
                        >
                            About{" "}
                            <span className="text-accent">Me</span>
                        </motion.div>
                    )}
                </InView>
                <InView triggerOnce={true}>
                    {({ inView, ref }) => (
                        <motion.p
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-gray-400 text-base mt-3 max-w-md mx-auto"
                        >
                            A passionate developer building modern and immersive web experiences.
                        </motion.p>
                    )}
                </InView>
            </div>

            {/* Main Content Grid */}
            <div className="flex flex-col lg:flex-row items-start justify-center gap-10 w-full max-w-[1100px] z-20">

                {/* Profile Card */}
                <InView triggerOnce={true}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.4)}
                            className="flex flex-col items-center w-full lg:w-[340px] flex-shrink-0"
                        >
                            {/* Avatar */}
                            <div className="relative mb-5">
                                <div className="absolute inset-0 rounded-full bg-violet-500/25 blur-2xl scale-110" />
                                <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden border-[3px] border-violet-500/50 shadow-[0_0_40px_rgba(109,40,217,0.4)]">
                                    <img
                                        src="/abdelrahman.jpg"
                                        alt="Abd El-Rahman Taha"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Name & Title */}
                            <h2 className="text-2xl font-extrabold text-white text-center tracking-tight">
                                Abd El-Rahman Taha
                            </h2>
                            <p className="text-violet-400 text-sm font-medium mt-1 text-center">
                                Front-End &amp; 3D Web Developer
                            </p>

                            {/* Languages */}
                            <div className="mt-5 w-full glass-card p-4">
                                <div className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">
                                    Languages
                                </div>
                                <div className="flex flex-col gap-2">
                                    {[
                                        { lang: "Arabic", level: "Native", pct: 100 },
                                        { lang: "English", level: "B2", pct: 72 },
                                        { lang: "German", level: "A2", pct: 25 },
                                    ].map((item) => (
                                        <div key={item.lang} className="flex flex-col gap-1">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-300 font-medium">{item.lang}</span>
                                                <span className="text-violet-400 text-xs font-bold">{item.level}</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                                                <div
                                                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-500"
                                                    style={{ width: `${item.pct}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </InView>

                {/* Right Column */}
                <div className="flex flex-col gap-6 w-full">
                    {/* Bio */}
                    <InView triggerOnce={true}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.4)}
                                className="glass-card p-6"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <BsPersonFill className="text-violet-400 text-lg" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
                                        Profile
                                    </span>
                                </div>
                                <p className="text-gray-300 text-[15px] leading-relaxed">
                                    Front-End &amp; 3D Web Developer focused on creating modern, interactive web
                                    experiences using React, Next.js, and Three.js. Skilled in building responsive,
                                    performance-optimized applications with strong UI/UX principles and smooth
                                    animations using GSAP and modern web technologies.
                                </p>
                            </motion.div>
                        )}
                    </InView>

                    {/* Contact Links */}
                    <InView triggerOnce={true}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.55)}
                                className="glass-card p-6"
                            >
                                <div className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-4">
                                    Contact &amp; Links
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {contactItems.map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.href}
                                            target={item.external ? "_blank" : undefined}
                                            rel={item.external ? "noopener noreferrer" : undefined}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:bg-violet-500/10 hover:border-violet-500/30 hover:shadow-[0_0_16px_rgba(109,40,217,0.2)] transition-all duration-300 group"
                                        >
                                            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-violet-500/10 border border-violet-500/20 flex-shrink-0">
                                                <item.icon className={`${item.iconColor} text-base`} />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                                                    {item.label}
                                                </div>
                                                <div className="text-gray-300 text-xs font-medium group-hover:text-violet-200 transition-colors truncate">
                                                    {item.value}
                                                </div>
                                            </div>
                                            {item.external && (
                                                <HiExternalLink className="text-gray-600 group-hover:text-violet-400 ml-auto flex-shrink-0 transition-colors text-sm" />
                                            )}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </InView>

                    {/* Certificates */}
                    <InView triggerOnce={true}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromBottom}
                                className="glass-card p-6"
                            >
                                <div className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-4">
                                    Certificates &amp; Achievements
                                </div>
                                <div className="flex flex-col gap-3">
                                    {[
                                        {
                                            title: "DEPI Internship Certificate",
                                            sub: "Cross Platform Web Development · 2025",
                                        },
                                        {
                                            title: "Web Design Workshop",
                                            sub: "Faculty of Computers & AI, Beni-Suef University · 2024",
                                        },
                                        {
                                            title: "Web Design Workshop",
                                            sub: "Tasabuq Company · 2024",
                                        },
                                    ].map((cert, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-violet-500 mt-1.5 flex-shrink-0 shadow-[0_0_6px_rgba(139,92,246,0.7)]" />
                                            <div>
                                                <div className="text-gray-200 text-sm font-semibold">{cert.title}</div>
                                                <div className="text-gray-500 text-xs mt-0.5">{cert.sub}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </InView>
                </div>
            </div>

            {/* Quote */}
            <div className="absolute z-[20] bottom-6 left-0 right-0 text-center">
                <div className="cursive text-[18px] text-gray-500 tracking-wide">
                    Shaping Tomorrow with Code and Creativity
                </div>
            </div>
        </section>
    );
};

export default About;