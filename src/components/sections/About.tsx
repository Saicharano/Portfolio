"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Layers, Cpu } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Cards stagger animation
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    {
      icon: <Layers className="text-neon-blue mb-4" size={40} />,
      title: "Web Development",
      description: "Building full-stack web applications and Web Services with clean architecture and modern frameworks.",
    },
    {
      icon: <Cpu className="text-neon-purple mb-4" size={40} />,
      title: "AI & Machine Learning",
      description: "Developing intelligent systems using LLMs, Neural Networks, Machine Learning, and LLMOps.",
    },
    {
      icon: <Code2 className="text-gray-300 mb-4" size={40} />,
      title: "Core Programming",
      description: "Strong foundation in C, C++, Java, and Data Structures, focused on writing efficient and optimized code.",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <h2 ref={headingRef} className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Driven by <span className="text-glow-purple text-neon-purple">curiosity</span>.
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-6">
            Currently pursuing my B.Tech in Computer Science at CMR Engineering College (2024 - 2028). 
            I am highly motivated to understand how things work at a fundamental level and constantly push myself 
            to become better than I was yesterday.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-neon-blue">LLM Engineering</span>
            <span className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-neon-purple">Python</span>
            <span className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300">Data Structures</span>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-500">
              {skill.icon}
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-glow-blue transition-colors duration-300">{skill.title}</h3>
              <p className="text-gray-400 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
