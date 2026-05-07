import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-hidden relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Sai Charan Bollana. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with Next.js, Framer Motion, and Three.js</p>
      </footer>
    </main>
  );
}
