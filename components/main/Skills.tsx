"use client";

import {
    Backend_skill,
    DevTools,
    Frontend_skill,
    libraries,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight, slideInFromBottom } from "@/utils/motion";
import { motion } from "framer-motion";
import {
    HiCode,
    HiCog,
    HiPuzzle,
    HiShare,
    HiHeart,
} from "react-icons/hi";

const softSkills = [
    "Communication",
    "Problem-solving",
    "Teamwork",
    "Self Discipline",
    "Creativity & Innovation",
    "Adaptability",
    "Critical Thinking",
    "Leadership",
    "Continuous Learning",
];

interface SkillSectionProps {
    title: string;
    icon: React.ElementType;
    skills: { skill_name: string; Image: string; width: number; height: number }[];
    variants: any;
}

const SkillSection = ({ title, icon: Icon, skills, variants }: SkillSectionProps) => (
    <InView triggerOnce={false}>
        {({ inView, ref }) => (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                className="skill-card flex flex-col h-full"
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-violet-500/15 border border-violet-500/25">
                        <Icon className="text-violet-400 text-base" />
                    </div>
                    <span className="text-accent text-lg font-bold">{title}</span>
                </div>
                <div className="flex flex-row justify-around flex-wrap gap-5 items-center py-2">
                    {skills.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    ))}
                </div>
            </motion.div>
        )}
    </InView>
);

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-fit relative overflow-hidden py-20 px-4 md:px-10"
        >
            <SkillText />

            <div className="flex flex-col items-center justify-center w-full max-w-[1200px] gap-5">
                {/* Row 1: Frontend + Dev Tools */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <SkillSection
                        title="Frontend"
                        icon={HiCode}
                        skills={Frontend_skill}
                        variants={slideInFromLeft(0.4)}
                    />
                    <SkillSection
                        title="Dev Tools"
                        icon={HiCog}
                        skills={DevTools}
                        variants={slideInFromRight(0.4)}
                    />
                </div>

                {/* Row 2: Libraries + Open Source */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <SkillSection
                        title="Libraries & Frameworks"
                        icon={HiPuzzle}
                        skills={libraries}
                        variants={slideInFromLeft(0.5)}
                    />

                    {/* Open Source */}
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.5)}
                                className="skill-card flex flex-col h-full"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-violet-500/15 border border-violet-500/25">
                                        <HiShare className="text-violet-400 text-base" />
                                    </div>
                                    <span className="text-accent text-lg font-bold">Open Source</span>
                                </div>
                                <div className="flex flex-row justify-around flex-wrap gap-5 items-center py-2">
                                    <SkillDataProvider src="/github.svg" width={55} height={55} index={0} />
                                    <SkillDataProvider src="/hack.svg" width={200} height={45} index={1} />
                                    <SkillDataProvider src="/leetcode.svg" width={55} height={55} index={2} />
                                </div>
                            </motion.div>
                        )}
                    </InView>
                </div>

                {/* Soft Skills */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromBottom}
                            className="skill-card w-full"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-violet-500/15 border border-violet-500/25">
                                    <HiHeart className="text-violet-400 text-base" />
                                </div>
                                <span className="text-accent text-lg font-bold">Soft Skills</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {softSkills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 text-sm text-gray-300 bg-violet-500/8 border border-violet-500/20 rounded-full hover:bg-violet-500/15 hover:border-violet-500/40 hover:text-white transition-all duration-200 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </InView>
            </div>

            {/* Background video - subtle */}
            <div className="hidden md:block w-full h-full absolute top-24 pointer-events-none">
                <div className="w-full h-full z-[-10] opacity-10 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
