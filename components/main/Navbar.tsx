"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
    ];

    return (
        <>
            {/* Main Navbar */}
            <nav
                className={`navbar-glass w-screen md:w-full fixed top-0 left-0 z-50 ${scrolled ? "scrolled" : ""}`}
                style={{ maxWidth: "1855px", left: "50%", transform: "translateX(-50%)" }}
            >
                <div
                    className="w-full h-[72px] flex flex-row items-center justify-between px-5 md:px-10 mx-auto"
                >
                    {/* Logo / Name */}
                    <a
                        href="#home"
                        className="flex flex-row items-center gap-3 group"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-violet-500/30 blur-md group-hover:bg-violet-500/50 transition-all duration-300" />
                            <Image
                                src="/abdelrahman.jpg"
                                alt="Abd El-Rahman Taha"
                                width={42}
                                height={42}
                                className="relative w-[42px] h-[42px] rounded-full object-cover border-2 border-violet-500/40 group-hover:border-violet-400/70 transition-all duration-300 shadow-[0_0_14px_rgba(109,40,217,0.4)]"
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="font-bold text-white text-[15px] tracking-wide group-hover:text-violet-200 transition-colors duration-300">
                                Abd El-Rahman
                            </span>
                            <span className="text-violet-400/80 text-[11px] font-medium tracking-widest uppercase">
                                Developer
                            </span>
                        </div>
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center">
                        <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] rounded-full px-3 py-1.5">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="nav-link"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Socials + Mobile Toggle */}
                    <div className="flex flex-row items-center gap-4">
                        {/* Social Icons */}
                        <div className="hidden sm:flex flex-row items-center gap-3">
                            {Socials.map((social) => (
                                <a
                                    href={social.link}
                                    key={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={social.name}
                                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.08] hover:bg-violet-500/20 hover:border-violet-500/40 hover:shadow-[0_0_12px_rgba(109,40,217,0.35)] transition-all duration-300 group"
                                >
                                    <Image
                                        src={social.src}
                                        alt={social.name}
                                        width={16}
                                        height={16}
                                        className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </a>
                            ))}
                        </div>

                        {/* Hire Me CTA */}
                        <a
                            href="https://wa.me/201030246987"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center gap-2 px-4 py-2 button-primary rounded-full text-sm text-white"
                        >
                            Hire Me
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileOpen((prev) => !prev)}
                            className="flex md:hidden w-9 h-9 items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.1] hover:bg-violet-500/20 hover:border-violet-500/40 transition-all duration-300 text-white"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileOpen ? (
                                <RiCloseLine className="text-xl" />
                            ) : (
                                <RiMenuLine className="text-xl" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {mobileOpen && (
                    <div className="md:hidden border-t border-white/[0.06] bg-[#030014]/90 backdrop-blur-xl px-5 py-4 flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-violet-500/15 hover:border-violet-500/30 border border-transparent text-sm font-medium transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="mt-2 pt-3 border-t border-white/[0.06] flex items-center gap-3">
                            {Socials.map((social) => (
                                <a
                                    href={social.link}
                                    key={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={social.name}
                                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.08] hover:bg-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
                                >
                                    <Image
                                        src={social.src}
                                        alt={social.name}
                                        width={16}
                                        height={16}
                                        className="opacity-70 hover:opacity-100 transition-opacity"
                                    />
                                </a>
                            ))}
                        </div>
                        <a
                            href="https://wa.me/201030246987"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                            className="mt-2 button-primary text-center text-white text-sm font-semibold py-3 px-6 rounded-xl"
                        >
                            Hire Me
                        </a>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;