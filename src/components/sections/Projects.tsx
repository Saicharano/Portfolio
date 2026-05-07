"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Resume Analyser",
    category: "Full-Stack Web App",
    description: "Built a full-stack web application using Next.js and FastAPI that analyzes resumes against job descriptions using LLMs (Groq + LangChain). It extracts skills, identifies gaps, computes a match score, and provides improvement suggestions through an interactive UI.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2000&auto=format&fit=crop", // Resume/data placeholder
    tags: ["Next.js", "FastAPI", "Groq", "LangChain"],
    color: "neon-blue"
  },
  {
    id: 2,
    title: "Cold Email Generator",
    category: "AI & Automation",
    description: "An AI-powered application that automatically turns job postings into personalized, professional cold emails. Scrapes job descriptions, extracts role requirements, and generates tailored outreach emails matching portfolio projects using vector similarity search.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2000&auto=format&fit=crop", // Email/communication placeholder
    tags: ["Streamlit", "LangChain", "ChromaDB", "LLaMA 3.1"],
    color: "neon-purple"
  },
  {
    id: 3,
    title: "Smart Timetable App",
    category: "Productivity Application",
    description: "An intelligent and user-friendly application designed to help students, teachers, and professionals efficiently organize their daily, weekly, and monthly schedules.",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=2000&auto=format&fit=crop", // Calendar/time placeholder
    tags: ["Scheduling", "Productivity", "UI/UX"],
    color: "neon-blue"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple text-glow-blue">Works</span>.
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              A collection of projects showcasing my focus on interactive design and robust engineering.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-neon-blue hover:text-white transition-colors duration-300 font-medium pb-2 border-b border-neon-blue hover:border-white">
            View Archive <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center group`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 overflow-hidden rounded-2xl glass border-white/5 relative">
                <div className={`absolute inset-0 bg-${project.color}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay`}></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative h-[400px] sm:h-[500px] w-full"
                >
                  {/* Since we don't have next/image setup with domains, using standard img */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="mb-4 text-sm font-bold tracking-widest text-gray-500 uppercase">
                  {project.category}
                </div>
                <h3 className={`text-4xl font-bold mb-6 group-hover:text-${project.color} group-hover:text-glow-${project.color.split("-")[1]} transition-colors duration-500`}>
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className={`inline-flex items-center w-max gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-${project.color} hover:shadow-[0_0_20px_var(--${project.color})] transition-all duration-300`}
                >
                  Explore Case Study
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
