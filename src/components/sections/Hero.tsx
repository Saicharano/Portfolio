"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";

function AnimatedSphere() {
  const sphereRef = useRef<any>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#00f3ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10 backdrop-blur-md"
        >
          <span className="text-neon-blue text-sm font-medium tracking-wider uppercase">
            Computer Science Student & Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-tight"
        >
          Sai Charan <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple text-glow-blue">
            Bollana
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          I just want to know how things work and strive to become better than I was yesterday. Passionate about Web Development, AI, and building intelligent systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent text-white border border-white/20 hover:border-neon-purple hover:text-neon-purple hover:shadow-[0_0_15px_rgba(188,19,254,0.4)] font-bold rounded-full transition-all duration-300 w-full sm:w-auto glass"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
