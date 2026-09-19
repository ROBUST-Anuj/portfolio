'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Code2, Mail, FileDown, Sparkles } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/Icons';
import { personalInfo } from '@/data/personal';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-600/10 via-dark-950 to-cyan-500/5" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle text-sm text-accent-400 mb-6"
            >
              <Sparkles size={14} />
              {personalInfo.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              {personalInfo.name}
              <span className="gradient-text">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl text-accent-400 font-medium mb-6"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent-500/25"
              >
                View Projects
              </a>
              <a
                href={personalInfo.resumePath}
                download
                className="flex items-center gap-2 px-6 py-3 rounded-lg glass hover:bg-dark-700 text-white font-medium transition-all duration-200"
              >
                <FileDown size={18} />
                Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg glass hover:bg-dark-700 text-white font-medium transition-all duration-200"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg glass-subtle hover:bg-dark-700 text-gray-400 hover:text-accent-400 transition-all duration-200" aria-label="GitHub">
                <GitHubIcon size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg glass-subtle hover:bg-dark-700 text-gray-400 hover:text-accent-400 transition-all duration-200" aria-label="LinkedIn">
                <LinkedInIcon size={20} />
              </a>
              <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg glass-subtle hover:bg-dark-700 text-gray-400 hover:text-accent-400 transition-all duration-200" aria-label="LeetCode">
                <Code2 size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2.5 rounded-lg glass-subtle hover:bg-dark-700 text-gray-400 hover:text-accent-400 transition-all duration-200" aria-label="Email">
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right: Profile photo + system diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center gap-8"
          >
            {/* Profile photo */}
            <div className="relative">
              {/* Gradient glow behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-500/20 via-cyan-500/10 to-accent-500/20 rounded-full blur-2xl" />
              
              {/* Gradient border ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-br from-accent-500 via-cyan-500 to-accent-500">
                <div className="rounded-full overflow-hidden bg-dark-800 w-56 h-56">
                  <Image
                    src="/profile.jpeg"
                    alt="Anuj Parashar"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-2 -right-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium text-green-400 border border-green-500/30"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available
              </motion.div>
            </div>

            {/* Compact system architecture card */}
            <div className="w-full max-w-sm glass rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="ml-2 text-gray-500 text-xs font-mono">tech-stack.ts</span>
              </div>
              
              {[
                { label: 'AI / ML', desc: 'TensorFlow · CV · LLMs', barColor: '#818cf8' },
                { label: 'Backend', desc: 'Django · FastAPI · REST', barColor: '#22d3ee' },
                { label: 'Data', desc: 'PostgreSQL · Redis · Celery', barColor: '#4ade80' },
                { label: 'DevOps', desc: 'Docker · Nginx · AWS', barColor: '#facc15' },
                { label: 'Frontend', desc: 'Next.js · React · Tailwind', barColor: '#f472b6' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-dark-900/60 hover:bg-dark-700/60 transition-colors group"
                >
                  <div className="w-1.5 h-6 rounded-full shrink-0" style={{ backgroundColor: item.barColor }} />
                  <div className="min-w-0">
                    <div className="text-white text-xs font-medium group-hover:text-accent-400 transition-colors">{item.label}</div>
                    <div className="text-gray-500 text-[11px] font-mono truncate">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="text-gray-600" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
