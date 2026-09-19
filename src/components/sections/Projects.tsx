'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight, X, ArrowRight, Layers } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/Icons';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects, type Project } from '@/data/projects';

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="glass rounded-xl overflow-hidden group cursor-pointer hover:border-accent-500/40 transition-all duration-300"
      onClick={onClick}
    >
      {/* Category badge */}
      <div className="p-6 pb-0">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 text-xs font-medium">
          <Layers size={12} />
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-accent-400/80 text-sm font-medium mt-1">{project.subtitle}</p>
          </div>
          <ChevronRight className="text-gray-600 group-hover:text-accent-400 group-hover:translate-x-1 transition-all mt-1" size={20} />
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 6).map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-md bg-dark-900/80 text-gray-400 text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="px-2.5 py-1 rounded-md bg-dark-900/80 text-gray-500 text-xs">
              +{project.technologies.length - 6} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-dark-700/50">
          <span className="text-gray-500 text-xs">{project.duration}</span>
          <span className="text-accent-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            View Details <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm" />
      
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl my-8 glass rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-dark-700/50">
          <div className="flex items-start justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 text-xs font-medium mb-3">
                <Layers size={12} />
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h2>
              <p className="text-accent-400 font-medium mt-1">{project.subtitle}</p>
              <p className="text-gray-500 text-sm mt-2">{project.duration}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-dark-700 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Overview */}
          <div>
            <h3 className="text-white font-semibold mb-2">Overview</h3>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Problem & Solution */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-dark-900/60">
              <h4 className="text-red-400/80 text-sm font-semibold uppercase tracking-wider mb-2">Problem</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-4 rounded-xl bg-dark-900/60">
              <h4 className="text-green-400/80 text-sm font-semibold uppercase tracking-wider mb-2">Solution</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Architecture */}
          {project.architecture && (
            <div>
              <h3 className="text-white font-semibold mb-4">Technical Architecture</h3>
              <div className="flex flex-col gap-2">
                {project.architecture.map((node, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center text-accent-400 text-xs font-bold">
                        {i + 1}
                      </div>
                      {i < project.architecture!.length - 1 && (
                        <div className="w-px h-4 bg-dark-600 my-1" />
                      )}
                    </div>
                    <div className="flex-1 p-3 rounded-lg bg-dark-900/60 hover:bg-dark-700/60 transition-colors">
                      <span className="text-white text-sm font-medium">{node.label}</span>
                      {node.description && (
                        <span className="text-gray-500 text-sm ml-2">— {node.description}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          <div>
            <h3 className="text-white font-semibold mb-3">Key Engineering Highlights</h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-400 mt-0.5 shrink-0">▹</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white font-semibold mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-accent-500/10 text-accent-400 text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-dark-700/50">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass hover:bg-dark-700 text-white text-sm font-medium transition-colors"
              >
                <GitHubIcon size={16} />
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent-500 hover:bg-accent-600 text-white text-sm font-medium transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-dark-900/30">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications showcasing my engineering approach and technical depth"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => p.featured).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
