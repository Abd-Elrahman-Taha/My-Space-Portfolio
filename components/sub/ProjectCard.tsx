"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

interface Props {
  src: string;
  title: string;
  description: string;
  liveLink: string;
  repoLink: string;
  animationDelay?: number;
}

const ProjectCard = ({
  src,
  title,
  description,
  liveLink,
  repoLink,
  animationDelay = 0,
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
    <InView triggerOnce={false} threshold={0.2}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: inView ? animationDelay : 0 }}
          className="group relative rounded-xl overflow-hidden shadow-lg border border-[#2A0E61] bg-[#030014]"
        >
          {/* Image */}
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}

            /* Desktop hover unchanged */
            whileHover={!isMobile ? { opacity: 1 } : undefined}

            /* Mobile click toggle */
            animate={isMobile ? { opacity: open ? 1 : 0 } : undefined}

            onClick={() => {
              if (isMobile) setOpen((prev) => !prev);
            }}

            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-20 bg-black/80 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
            <p className="text-gray-300 text-sm mb-6 line-clamp-3">
              {description}
            </p>

            <div className="flex gap-4">
              <a
                href={liveLink}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-bold rounded-lg active:scale-95"
              >
                Live Site
              </a>
              <a
                href={repoLink}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 bg-white/10 border border-white/20 text-white text-sm font-bold rounded-lg active:bg-white/30"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </InView>
  );
};

export default ProjectCard;
