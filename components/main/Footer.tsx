"use client";

import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import {
    HiMail,
    HiPhone,
} from "react-icons/hi";
import {
    SiLinkedin,
    SiGithub,
} from "react-icons/si";
import { HiArrowUp } from "react-icons/hi";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
    ];

    const contactLinks = [
        {
            icon: HiMail,
            label: "b0ody66taha@gmail.com",
            href: "mailto:b0ody66taha@gmail.com",
        },
        {
            icon: HiPhone,
            label: "+20 1030246987",
            href: "tel:+201030246987",
        },
        {
            icon: SiLinkedin,
            label: "LinkedIn Profile",
            href: "https://www.linkedin.com/in/abdelrahman-taha-aa006432b/",
            external: true,
        },
        {
            icon: SiGithub,
            label: "GitHub Profile",
            href: "https://github.com/Abd-Elrahman-Taha",
            external: true,
        },
    ];

    return (
        <footer className="relative w-full text-gray-300 overflow-hidden">
            {/* Divider */}
            <div className="section-divider" />

            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <a href="#home" className="flex items-center gap-3 group w-fit">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-violet-500/25 blur-md" />
                                <Image
                                    src="/abdelrahman.jpg"
                                    alt="Abd El-Rahman Taha"
                                    width={40}
                                    height={40}
                                    className="relative w-10 h-10 rounded-full object-cover border-2 border-violet-500/40 shadow-[0_0_12px_rgba(109,40,217,0.4)]"
                                />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="font-bold text-white text-sm tracking-wide">Abd El-Rahman Taha</span>
                                <span className="text-violet-400/70 text-[10px] font-medium tracking-widest uppercase">Front-End & 3D Developer</span>
                            </div>
                        </a>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                            Building modern, interactive web experiences with React, Next.js, and Three.js.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                            {Socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={social.name}
                                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.08] hover:bg-violet-500/20 hover:border-violet-500/40 hover:shadow-[0_0_12px_rgba(109,40,217,0.3)] transition-all duration-300 group"
                                >
                                    <Image
                                        src={social.src}
                                        alt={social.name}
                                        width={15}
                                        height={15}
                                        className="opacity-60 group-hover:opacity-100 transition-opacity"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-3">
                        <div className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-2">
                            Navigation
                        </div>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 transform inline-flex"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-3">
                        <div className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-2">
                            Contact
                        </div>
                        {contactLinks.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noopener noreferrer" : undefined}
                                className="flex items-center gap-2 text-gray-400 hover:text-violet-300 text-sm transition-colors duration-200 group"
                            >
                                <item.icon className="text-violet-500/70 group-hover:text-violet-400 text-base flex-shrink-0 transition-colors" />
                                <span>{item.label}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-xs text-center sm:text-left">
                        © {new Date().getFullYear()} Abd El-Rahman Taha. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-gray-500 hover:text-violet-400 text-xs font-medium transition-colors duration-200 group"
                        aria-label="Scroll to top"
                    >
                        Back to top
                        <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white/[0.1] group-hover:border-violet-500/40 group-hover:bg-violet-500/15 transition-all duration-200">
                            <HiArrowUp className="text-xs" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;