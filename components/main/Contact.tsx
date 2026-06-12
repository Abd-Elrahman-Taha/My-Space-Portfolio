"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { InView } from "react-intersection-observer";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiCheckCircle } from "react-icons/hi";
import { FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";
import SectionHeader from "../sub/SectionHeader";
import GlowingButton from "../sub/GlowingButton";

const Contact = () => {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formState.name || !formState.email || !formState.message) return;

        setStatus("sending");
        // Simulate email sending API behavior
        setTimeout(() => {
            setStatus("success");
            setFormState({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <section
            id="contact"
            className="relative flex flex-col items-center justify-center py-20 px-6 md:px-16 w-full max-w-[1200px] mx-auto z-30"
        >
            {/* Background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[140px] pointer-events-none" />

            <SectionHeader
                title="Let&apos;s Build"
                highlight="Together"
                subtitle="Have an interesting project, remote role, or contract? Reach out and let&apos;s discuss the details."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch w-full mt-4">
                
                {/* Left Column: Direct info (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col gap-6 w-full">
                    
                    {/* Availability Card */}
                    <InView triggerOnce={true} threshold={0.1}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromLeft(0.25)}
                                className="glass-panel rounded-2xl p-8 flex flex-col gap-4"
                            >
                                <span className="text-[10px] w-fit px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold uppercase tracking-wider">
                                    Freelance &amp; Remote
                                </span>
                                <h3 className="text-xl font-extrabold text-white tracking-tight">
                                    Project Availability
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    I am currently open to consulting projects, technical contract sprints, and full-time remote developer roles.
                                </p>
                            </motion.div>
                        )}
                    </InView>

                    {/* Contacts Directory */}
                    <InView triggerOnce={true} threshold={0.1}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromLeft(0.4)}
                                className="glass-panel rounded-2xl p-8 flex flex-col gap-5"
                            >
                                {[
                                    { icon: HiOutlineMail, label: "Direct Email", value: "b0ody66taha@gmail.com", href: "mailto:b0ody66taha@gmail.com" },
                                    { icon: HiOutlinePhone, label: "Phone & WhatsApp", value: "+20 1030246987", href: "https://wa.me/201030246987" },
                                    { icon: HiOutlineLocationMarker, label: "Location", value: "Egypt (Remote-Ready)", href: "#" }
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <a
                                            key={i}
                                            href={item.href}
                                            className="flex items-center gap-4 group p-1.5 rounded-xl hover:bg-white/[0.01] transition-colors"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-violet-400 group-hover:bg-violet-600/10 group-hover:border-violet-500/40 transition-all duration-300">
                                                <Icon className="text-lg" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                                                    {item.label}
                                                </span>
                                                <span className="text-white text-sm font-semibold mt-0.5 group-hover:text-violet-200 transition-colors">
                                                    {item.value}
                                                </span>
                                            </div>
                                        </a>
                                    );
                                })}

                                <div className="h-px w-full bg-white/[0.05] my-2" />

                                <div className="flex items-center gap-3">
                                    {[
                                        { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/abdelrahman-taha-aa006432b/", name: "LinkedIn" },
                                        { icon: FaGithub, href: "https://github.com/Abd-Elrahman-Taha", name: "GitHub" }
                                    ].map((soc, idx) => (
                                        <a
                                            key={idx}
                                            href={soc.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={soc.name}
                                            className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-violet-500/15 hover:border-violet-500/40 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
                                        >
                                            <soc.icon className="text-sm" />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </InView>
                </div>

                {/* Right Column: Contact Form (7 Cols) */}
                <div className="lg:col-span-7 flex w-full">
                    <InView triggerOnce={true} threshold={0.1}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.3)}
                                className="glass-panel rounded-2xl p-8 flex flex-col justify-between w-full h-full"
                            >
                                {status === "success" ? (
                                    <div className="flex flex-col items-center justify-center text-center h-full gap-4 py-10">
                                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                            <HiCheckCircle className="text-4xl" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white tracking-tight">Transmission Success!</h3>
                                        <p className="text-gray-400 text-sm max-w-[280px]">
                                            Thank you for reaching out. I have received your message and will respond within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full justify-between">
                                        <div className="flex flex-col gap-5">
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="John Doe"
                                                    className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-violet-500 focus:bg-white/[0.04] focus:ring-1 focus:ring-violet-500 text-white text-sm outline-none transition-all duration-300"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="john@example.com"
                                                    className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-violet-500 focus:bg-white/[0.04] focus:ring-1 focus:ring-violet-500 text-white text-sm outline-none transition-all duration-300"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                                    Your Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formState.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={5}
                                                    placeholder="Tell me about your project context or open role..."
                                                    className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-violet-500 focus:bg-white/[0.04] focus:ring-1 focus:ring-violet-500 text-white text-sm outline-none resize-none transition-all duration-300"
                                                />
                                            </div>
                                        </div>

                                        <GlowingButton
                                            disabled={status === "sending"}
                                            variant="primary"
                                            icon={FaPaperPlane}
                                            className="w-full mt-4"
                                        >
                                            {status === "sending" ? "Transmitting..." : "Send Message"}
                                        </GlowingButton>
                                    </form>
                                )}
                            </motion.div>
                        )}
                    </InView>
                </div>
            </div>
        </section>
    );
};

export default Contact;
