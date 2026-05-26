"use client";

import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromTop, slideInFromLeft } from "@/utils/motion";

const SkillText = () => {
    return (
        <div className="w-full h-auto pt-16 flex flex-col items-center justify-center text-center">
            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className="text-[40px] font-extrabold text-white z-50 tracking-tight"
                    >
                        My{" "}
                        <span className="text-accent">Skills</span>
                    </motion.div>
                )}
            </InView>

            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.p
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromLeft(0.5)}
                        className="text-gray-400 text-base mb-10 mt-3 max-w-md"
                    >
                        Technologies and tools I use to build modern web experiences
                    </motion.p>
                )}
            </InView>
        </div>
    );
};

export default SkillText;