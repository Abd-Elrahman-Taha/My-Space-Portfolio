"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { HiExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

interface Props {
  src: string;
  title: string;
  description: string;
  liveLink: string;
  repoLink: string;
  animationDelay?: number;
  techStack?: string[];
}

const ProjectCard = ({
  src,
  title,
  description,
  liveLink,
  repoLink,
  animationDelay = 0,
  techStack = [],
}: Props) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(
      typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0)
    );
  }, []);

  return (
    <InView triggerOnce={true} threshold={0.15}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5, delay: inView ? animationDelay : 0, ease: "easeOut" }}
          className="group relative rounded-2xl overflow-hidden border border-violet-500/15 bg-[#030014]/70 backdrop-blur-sm hover:border-violet-500/35 transition-all duration-400 hover:shadow-[0_0_40px_rgba(109,40,217,0.15)] flex flex-col"
        >
          {/* Image */}
          <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-108"
            />
            {/* Overlay gradient at bottom of image */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#030014] to-transparent" />

            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={!isMobile ? { opacity: 1 } : undefined}
              animate={isMobile ? { opacity: open ? 1 : 0 } : undefined}
              onClick={() => {
                if (isMobile) setOpen((prev) => !prev);
              }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 z-20 bg-[#030014]/88 backdrop-blur-sm flex flex-col justify-center items-center p-6 text-center opacity-0"
            >
              <h2 className="text-xl font-bold text-white mb-2 tracking-tight">{title}</h2>
              <p className="text-gray-300 text-sm mb-6 line-clamp-4 leading-relaxed">
                {description}
              </p>

              <div className="flex gap-3">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 button-solid-purple text-white text-sm font-bold rounded-lg active:scale-95"
                >
                  <HiExternalLink className="text-base" />
                  Live Site
                </a>
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 button-outline-purple text-sm font-bold rounded-lg active:scale-95"
                >
                  <SiGithub className="text-base" />
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>

          {/* Card Footer */}
          <div className="p-4 flex flex-col gap-2">
            <h3 className="text-white font-bold text-base tracking-tight group-hover:text-violet-200 transition-colors duration-300">
              {title}
            </h3>
            {techStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </InView>
  );
};

export default ProjectCard;
