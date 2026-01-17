"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard"; // Ensure this path matches your folder structure

const projectData = [
  {
    title: "E-Commerce",
    description: "A simple and interactive e-commerce project built with React. Features Home, Shop, Product Details, Cart, and Login pages.",
    image: "/ecommerce.png",
    liveLink: "https://e-commerce-storefront-with-react.vercel.app/",
    repoLink: "https://github.com/EbramAyman10/E-commerce-Storefront-with-React",
  },
  {
    title: "Number Converter & Calculator",
    description: "Smart web tool for base conversion and arithmetic/bitwise operations with modern minimal UI.",
    image: "/calc2.png",
    liveLink: "https://abd-elrahman-taha.github.io/Number-Converter-Calculator/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/Number-Converter-Calculator",
  },
  {
    title: "Tic Tac Toe",
    description: "Interactive web Tic Tac Toe game with instant feedback, reset button, and modern minimal design.",
    image: "/tic.png",
    liveLink: "https://abd-elrahman-taha.github.io/Tic-Tac-Toe/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/Tic-Tac-Toe",
  },
  {
    title: "Calculator",
    description: "Neon Glass Calculator with essential arithmetic functionality and stylish UI.",
    image: "/calc.png",
    liveLink: "https://abd-elrahman-taha.github.io/Calculator/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/Calculator",
  },
  {
    title: "Space Website",
    description: "Interactive space-themed website showcasing planets, gallery, about, and login pages.",
    image: "/Space.png",
    liveLink: "https://abd-elrahman-taha.github.io/My-Space-Website/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/My-Space-Website",
  },
  {
    title: "Gym-Coach Website",
    description: "Modern fitness website with bold headlines, CTA buttons, and clear navigation.",
    image: "/Gym.png",
    liveLink: "https://abd-elrahman-taha.github.io/Gym-Coach-website/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/Gym-Coach-website",
  },
  {
    title: "Dell-Market Website",
    description: "User-friendly retail web app with Home, Products, Orders, Customers, and Reports pages.",
    image: "/dell.png",
    liveLink: "https://abd-elrahman-taha.github.io/Market/",
    repoLink: "https://github.com/Abd-Elrahman-Taha/Market",
  },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-20 w-full min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-[-1] bg-[url('/9f503e91-9c21-4462-ad62-b401746ef2e9.png')] bg-cover bg-center opacity-40" />
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-black/30 via-black/80 to-[#030014]" />

      <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-20">
        My Projects
      </h1>

      {/* CHANGES MADE BELOW:
          1. Changed max-w-7xl to max-w-[1800px] (or max-w-none for full width)
          2. Reduced horizontal padding (px-4)
          3. Optional: Changed grid-cols-3 to grid-cols-2 for even wider cards
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 w-full max-w-[1800px]">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.image}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            animationDelay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;