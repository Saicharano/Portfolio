"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Code2 } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailtoLink = `mailto:bollenasaicharan@gmail.com?subject=${encodeURIComponent(
      subject as string
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-32 relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column - Info */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Let's build the <br />
                <span className="text-glow-blue text-neon-blue">future</span> together.
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-md">
                I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-blue">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg">bollenasaicharan@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-purple">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg">Hyderabad, Telangana</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Saicharano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-blue hover:box-glow-blue transition-all duration-300"
                  title="GitHub Profile"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href="https://leetcode.com/u/sunnysai_46/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-purple hover:shadow-[0_0_15px_rgba(188,19,254,0.4)] transition-all duration-300"
                  title="LeetCode Profile"
                >
                  <Code2 size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2">
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 md:p-10"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:box-glow-blue transition-all duration-300 placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:shadow-[0_0_15px_rgba(188,19,254,0.4)] transition-all duration-300 placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm text-gray-400 ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:box-glow-blue transition-all duration-300 placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm text-gray-400 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:shadow-[0_0_15px_rgba(188,19,254,0.4)] transition-all duration-300 placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-black bg-white hover:bg-neon-blue hover:box-glow-blue transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
}
