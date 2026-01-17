"use client";

import React from "react";
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
  return (
    // تغيير triggerOnce من true إلى false
    <InView triggerOnce={false} threshold={0.2}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          // الحالة الابتدائية والحالة عند الخروج من الشاشة
          initial={{ opacity: 0, y: 50 }}
          // التغيير هنا: لو inView يبقى visible، لو لا يرجع يختفي
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: inView ? animationDelay : 0 }}
          className="group relative rounded-xl overflow-hidden shadow-lg border border-[#2A0E61] bg-[#030014]"
        >
          {/* Image with hover zoom */}
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Overlay - Appears on Hover */}
     {/* Overlay - Appears on Hover (Desktop) and is visible/tappable (Mobile) */}
<motion.div
  // Initial state: Hidden on large screens, but you can adjust mobile behavior here
  initial={{ opacity: 0 }}
  // whileHover only works well with a mouse
  whileHover={{ opacity: 1 }}
  // Use whileTap for mobile support
  whileTap={{ opacity: 1 }} 
  transition={{ duration: 0.3 }}
  className="absolute inset-0 z-20 bg-black/80 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity"
>
  <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
  <p className="text-gray-300 text-sm mb-6 line-clamp-3">{description}</p>
  
  <div className="flex gap-4">
    <a
      href={liveLink}
      target="_blank"
      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-bold rounded-lg active:scale-95"
    >
      Live Site
    </a>
    <a
      href={repoLink}
      target="_blank"
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