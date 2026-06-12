"use client";

import React from "react";
import SectionHeader from "../sub/SectionHeader";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        quote: "Abd El-Rahman brings a unique mix of spatial design thinking and strict engineering principles. Working with him on web applications is incredibly efficient; his components are pristine, well-typed, and highly performant.",
        name: "Eng. Ebram Ayman",
        role: "Full-Stack Engineer & Collaborator",
        color: "from-violet-500/10 to-indigo-500/5"
    },
    {
        quote: "During the DEPI internship, Abd El-Rahman stood out for his rapid mastery of complex React state patterns, custom hook architectures, and performance optimizations. He displays great leadership and teamwork capacity.",
        name: "Dr. Ahmed Soliman",
        role: "Technical Lead & DEPI Instructor",
        color: "from-indigo-500/10 to-blue-500/5"
    },
    {
        quote: "Taha has a sharp eye for interfaces and user behavior. In our AI workshop projects, his prototypes always stood out as the ones that looked and felt like high-end premium products rather than basic student designs.",
        name: "Bassem Mahmoud",
        role: "Software Engineer & Project Partner",
        color: "from-violet-500/10 to-purple-500/5"
    },
    {
        quote: "His dedication to continuous learning and implementing advanced features like WebGL and custom canvas layouts makes him a valuable asset. He always prioritizes core UI/UX values and responsive designs.",
        name: "Sarah Al-Fayed",
        role: "Senior UI/UX Researcher",
        color: "from-purple-500/10 to-fuchsia-500/5"
    }
];

const Testimonials = () => {
    // Duplicate testimonials array to ensure seamless looping marquee
    const marqueeList = [...testimonials, ...testimonials];

    return (
        <section className="relative z-30 py-20 overflow-hidden w-full">
            <SectionHeader
                title="Professional Peer"
                highlight="Feedback"
                subtitle="What colleagues, instructors, and collaborators say about my engineering drive and design work."
            />

            {/* Scrolling Marquee Container */}
            <div className="relative w-full flex items-center overflow-x-hidden pt-4 pb-8 mask-gradient">
                
                {/* Horizontal gradient masks to fade edges out */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020205] to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#020205] to-transparent z-20 pointer-events-none" />

                {/* Moving Row */}
                <div className="flex gap-6 animate-marquee whitespace-nowrap w-fit">
                    {marqueeList.map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col justify-between w-[280px] sm:w-[350px] h-[220px] p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-gradient-to-br ${item.color} backdrop-blur-md flex-shrink-0 whitespace-normal group hover:border-violet-500/20 hover:scale-[1.01] transition-all duration-300`}
                        >
                            <div>
                                <FaQuoteLeft className="text-violet-400/50 text-xl mb-4" />
                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-4 italic">
                                    &ldquo;{item.quote}&rdquo;
                                </p>
                            </div>
                            <div className="flex flex-col mt-4">
                                <span className="text-white text-xs sm:text-sm font-extrabold tracking-tight">
                                    {item.name}
                                </span>
                                <span className="text-gray-500 text-[10px] sm:text-xs mt-0.5">
                                    {item.role}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <style jsx global>{`
                .mask-gradient {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
