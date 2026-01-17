"use client";
import React from "react";
import Image from "next/image"; // استيراد مكون الصورة من نكست
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full"
        >
            <div className="md:absolute w-auto h-auto md:top-[80px] z-[5]">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-[40px] pt-[5rem] pb-3 md:p-0 font-medium text-center text-gray-200 z-50"
                        >
                            About
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                Me{" "}
                            </span>
                        </motion.div>
                    )}
                </InView>
            </div>

            {/* تم زيادة الـ mt-20 هنا لزيادة المسافة تحت كلمة About Me */}
            <div className="flex flex-col items-center justify-start relative mt-20 md:mt-[160px] lg:mt-32 z-[20] w-auto h-auto">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.5)}
                            className="flex flex-col items-center w-auto h-auto rounded-full overflow-hidden border-[6px] border-[#7042f88b] bg-gradient-to-r from-purple-500 to-cyan-500"
                        >
                            {/* استخدام مكون Image بدلاً من img العادي */}
                            <Image 
                                src="/abdelrahman.jpg" 
                                alt="profile" 
                                width={250} 
                                height={250} 
                                className="object-cover"
                            />
                        </motion.div>
                    )}
                </InView>

                {/* باقي الكود كما هو */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.5)}
                            className="Welcome-box px-[15px] py-[8px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]"
                        >
                            <h1 className="Welcome-text text-[20px] font-bold">
                                Abd El-Rahman Taha
                            </h1>
                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromBottom}
                            className="Welcome-box px-[15px] w-[90%] md:w-3/4 py-[8px] z-[20] border mb-[20px] border-[#7042f88b] opacity-[0.9]"
                        >
                            <h1 className="Welcome-text text-[16px] w-full text-justify">
                               As a passionate Frontend Developer with expertise in React, Next.js, TypeScript, HTML, and CSS, I excel in crafting seamless, high-performance web applications. My journey includes leading projects and teams where I implemented modern web technologies and delivered engaging user experiences. As a developer, I thrive on creating polished interfaces and optimized code, fostering collaboration and innovation. I&apos;m keen to connect with like-minded tech enthusiasts and visionaries to explore new opportunities and push the boundaries of frontend development.
                            </h1>
                        </motion.div>
                    )}
                </InView>
            </div>
            {/* ... الفيديو وباقي العناصر ... */}
        </section>
    );
};

export default About;