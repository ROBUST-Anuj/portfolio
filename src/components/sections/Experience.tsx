'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <SectionHeading title="Experience" subtitle="Professional experience and industry exposure" />
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {i < experiences.length - 1 && (
                <div className="absolute left-[11px] top-12 bottom-0 w-px bg-dark-600" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-accent-500/20 border-2 border-accent-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent-400" />
              </div>

              <div className="glass rounded-xl p-6 ml-4 hover:border-accent-500/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-white text-lg font-semibold">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-accent-400 font-medium">
                      <Briefcase size={14} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar size={14} />
                    {exp.duration}
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                      <span className="text-accent-400 mt-1.5 shrink-0">▹</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-accent-500/10 text-accent-400 text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
