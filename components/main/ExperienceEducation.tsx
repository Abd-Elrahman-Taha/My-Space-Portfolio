"use client";

import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaAward, FaCheckCircle } from "react-icons/fa";
import { slideInFromLeft, slideInFromRight, slideInFromBottom } from "@/utils/motion";

const ExperienceEducation = () => {
    return (
        <section
            id="experience"
            className="relative flex flex-col items-center justify-center py-24 px-6 md:px-20 w-full overflow-hidden z-30"
        >
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-600/8 blur-[120px] pointer-events-none" />

            {/* Section Header */}
            <div className="mb-20 text-center z-10">
                <InView triggerOnce={true}>
                    {({ inView, ref }) => (
                        <motion.h2
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromBottom}
                            className="text-4xl md:text-5xl font-extrabold text-accent"
                        >
                            Journey & Experience
                        </motion.h2>
                    )}
                </InView>
                <p className="text-gray-400 mt-4 text-base md:text-lg max-w-xl mx-auto">
                    A timeline of my professional training, academic achievements, and coding milestones.
                </p>
            </div>

            {/* Two-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-[1200px] z-10">

                {/* Work Experience Column */}
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 rounded-xl bg-violet-500/12 border border-violet-500/25 text-violet-400">
                            <FaBriefcase className="text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Work Experience</h3>
                    </div>

                    <InView triggerOnce={true}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromLeft(0.3)}
                                className="experience-card-glow p-6 md:p-8 group"
                            >
                                {/* Active Indicator (purple, not green) */}
                                <div className="absolute top-6 right-6 flex items-center gap-2">
                                    <span className="text-violet-400 text-xs font-semibold uppercase tracking-widest">Active</span>
                                    <div className="relative w-2.5 h-2.5">
                                        <div className="absolute inset-0 rounded-full bg-violet-400 animate-ping opacity-75" />
                                        <div className="relative w-2.5 h-2.5 rounded-full bg-violet-400" />
                                    </div>
                                </div>

                                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-violet-400 bg-violet-400/10 rounded-full border border-violet-400/25">
                                    Internship
                                </span>

                                <h4 className="text-xl md:text-2xl font-bold text-white mt-4 group-hover:text-violet-300 transition-colors duration-300">
                                    Cross Platform Web Development Intern
                                </h4>

                                <div className="text-gray-300 font-medium text-lg mt-1">
                                    Digital Egypt Pioneers Internship (DEPI)
                                </div>

                                <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                                    <FaCalendarAlt className="text-violet-400" />
                                    <span>June 2025 – December 2025</span>
                                </div>

                                {/* Responsibilities */}
                                <div className="mt-6 flex flex-col gap-3">
                                    {[
                                        "Designed and developed responsive web interfaces using HTML, CSS, and Bootstrap",
                                        "Built dynamic and interactive web applications using JavaScript",
                                        "Developed single-page applications (SPA) using React.js",
                                        "Applied UI/UX principles to improve usability and user experience",
                                        "Collaborated in a professional team environment",
                                        "Improved communication skills through Business English training",
                                    ].map((resp, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <FaCheckCircle className="text-violet-400 mt-1 flex-shrink-0 text-sm" />
                                            <p className="text-gray-300 text-sm leading-relaxed">{resp}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </InView>
                </div>

                {/* Education Column */}
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 rounded-xl bg-indigo-500/12 border border-indigo-500/25 text-indigo-400">
                            <FaGraduationCap className="text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Education</h3>
                    </div>

                    <InView triggerOnce={true}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.3)}
                                className="education-card-glow p-6 md:p-8 group"
                            >
                                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-400/10 rounded-full border border-indigo-400/25">
                                    Bachelor&apos;s Degree
                                </span>

                                <h4 className="text-xl md:text-2xl font-bold text-white mt-4 group-hover:text-indigo-300 transition-colors duration-300">
                                    Faculty of Computers & AI
                                </h4>

                                <div className="text-gray-300 font-medium text-lg mt-1">
                                    Beni-Suef University
                                </div>

                                <div className="flex items-center gap-4 flex-wrap mt-3">
                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                        <FaCalendarAlt className="text-indigo-400" />
                                        <span>2023 – 2027</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-violet-300 text-sm font-bold bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/30">
                                        <FaAward />
                                        <span>Grade: Excellent</span>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 rounded-xl border border-indigo-500/15 bg-indigo-500/5">
                                    <div className="text-indigo-400 font-bold text-sm uppercase tracking-wider">
                                        Minor Focus
                                    </div>
                                    <div className="text-white text-base font-semibold mt-1">
                                        Information Systems (IS)
                                    </div>
                                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                        Acquiring comprehensive knowledge in algorithms, database design, system analysis, and
                                        advanced architectures to complement practical software engineering skills.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </InView>
                </div>
            </div>
        </section>
    );
};

export default ExperienceEducation;
