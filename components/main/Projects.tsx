"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromTop } from "@/utils/motion";

const projectData = [
  {
    title: "Apple 3D Website",
    description: "An Apple-inspired 3D e-commerce experience with interactive product showcase, 3D product visuals using Three.js, smooth scroll animations with GSAP, login/signup authentication, and cinematic UI transitions.",
    image: "/Apple.png",
    liveLink: "https://bhecommerce.netlify.app/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/Apple-E-Commerce",
    techStack: ["React.js", "Three.js", "GSAP"],
  },
  {
    title: "Blob Mixer",
    description: "Interactive blob generator/mixer web tool with dynamic visuals and creative controls.",
    image: "/Blob.png",
    liveLink: "https://blob-mixer-xi.vercel.app/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/Blob-Mixer",
    techStack: ["JavaScript", "Canvas API"],
  },{
  title: "Personal Portfolio Website",
  description: "A modern personal portfolio website showcasing projects, skills, and contact information with a clean responsive design, smooth animations, and a dedicated projects section to highlight development work.",
  image: "/portfolio2.png",
  liveLink: "https://ahmed-taha.vercel.app/",
  repoLink: "https://github.com/Abd-Elrahman-Taha/Ahmed-Portfolio",
  techStack: ["React.js", "CSS", "JavaScript"],
},
  {
    title: "Todo App",
    description: "A modern and responsive Todo application with task management, add/delete/complete functionality, LocalStorage persistence, and Light/Dark mode support.",
    image: "/todo.png",
    liveLink: "https://todo-app-three-eta-70.vercel.app/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/Todo-App",
    techStack: ["React.js", "TypeScript", "LocalStorage"],
  },
  {
    title: "Notes App",
    description: "A modern and responsive notes management web app. Features persistent storage using LocalStorage, note creation/editing/deletion, with a clean minimal UI for better productivity.",
    image: "/note1.png",
    liveLink: "https://notes-app-silk-two.vercel.app/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/Notes-App",
    techStack: ["React.js", "LocalStorage"],
  },
  {
    title: "E-Commerce Store",
    description: "A responsive e-commerce platform built with React featuring product listing, filtering, shopping cart, state management, and a clean modern UI.",
    image: "/ecommerce.png",
    liveLink: "https://e-commerce-storefront-with-react.vercel.app/",
    repoLink: "https://github.com/EbramAyman10/E-commerce-Storefront-with-React",
    techStack: ["React.js", "State Management"],
  },
  {
    title: "Old Portfolio",
    description: "A personal portfolio website showcasing projects, skills, and contact information with a clean and responsive design.",
    image: "/portfolio.png",
    liveLink: "https://abd-elrahman-taha.github.io/My-Portfolio/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/My-Portfolio",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Number Converter & Calculator",
    description: "Smart web tool for base conversion and arithmetic/bitwise operations with a modern minimal UI.",
    image: "/calc2.png",
    liveLink: "https://abd-elrahman-taha.github.io/Number-Converter-Calculator/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/Number-Converter-Calculator",
    techStack: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Tic Tac Toe",
    description: "Interactive web Tic Tac Toe game with game logic, win condition detection, instant feedback, reset functionality, and modern minimal design.",
    image: "/tic.png",
    liveLink: "https://abd-elrahman-taha.github.io/Tic-Tac-Toe/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/Tic-Tac-Toe",
    techStack: ["JavaScript"],
  },
  {
    title: "Gym-Coach Website",
    description: "Modern responsive fitness website with services, membership plans, bold headlines, CTA buttons, clear navigation, and improved usability.",
    image: "/Gym.png",
    liveLink: "https://abd-elrahman-taha.github.io/Gym-Coach-website/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/Gym-Coach-website",
    techStack: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Calculator",
    description: "Neon Glass Calculator with essential arithmetic functionality and a stylish UI.",
    image: "/calc.png",
    liveLink: "https://abd-elrahman-taha.github.io/Calculator/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/Calculator",
    techStack: ["JavaScript", "CSS"],
  },
  {
    title: "Space Website",
    description: "Interactive space-themed website showcasing planets, gallery, about, and login pages.",
    image: "/Space.png",
    liveLink: "https://abd-elrahman-taha.github.io/My-Space-Website/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/My-Space-Website",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Dell-Market Website",
    description: "User-friendly retail web app with Home, Products, Orders, Customers, and Reports pages.",
    image: "/dell.png",
    liveLink: "https://abd-elrahman-taha.github.io/Market/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/Market",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-20 w-full min-h-screen overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-[-1] bg-[url('/9f503e91-9c21-4462-ad62-b401746ef2e9.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-black/50 via-black/80 to-[#030014]" />
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="mb-14 text-center z-10 px-4">
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <motion.h2
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromTop}
              className="text-[40px] font-extrabold text-white tracking-tight"
            >
              My{" "}
              <span className="text-accent">Projects</span>
            </motion.h2>
          )}
        </InView>
        <p className="text-gray-400 text-base mt-3 max-w-lg mx-auto">
          A collection of projects built with modern web technologies, 3D graphics, and creative problem-solving.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 w-full max-w-[1400px] z-10">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.image}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            animationDelay={index * 0.08}
            techStack={project.techStack}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;