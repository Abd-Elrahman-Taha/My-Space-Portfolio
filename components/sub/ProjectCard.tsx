"use client";

import React from "react";
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
  return (
    <InView triggerOnce={true} threshold={0.15}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5, delay: inView ? animationDelay : 0, ease: "easeOut" }}
          className="project-card-glow group flex flex-col h-full"
        >
          {/* Image Wrapper */}
          <div className="relative h-52 w-full overflow-hidden flex-shrink-0">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay gradient at bottom of image */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#030014] to-transparent" />
          </div>

          {/* Card Body */}
          <div className="p-5 flex flex-col flex-grow justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-extrabold text-lg tracking-tight group-hover:text-violet-200 transition-colors duration-300">
                {title}
              </h3>
              
              {/* Tech Stack */}
              {techStack.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-1">
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

              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                {description}
              </p>
            </div>

            {/* Action Buttons (Always Visible) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold rounded-xl button-solid-purple active:scale-95 transition-all duration-200"
              >
                <HiExternalLink className="text-sm" />
                Live Demo
              </a>
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold rounded-xl button-outline-purple active:scale-95 transition-all duration-200"
              >
                <SiGithub className="text-sm" />
                Code Source
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </InView>
  );
};

export default ProjectCard;
