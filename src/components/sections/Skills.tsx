'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Layout, Brain, Database, Container } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/skills';

const iconMap: Record<string, React.ElementType> = {
  Code2, Server, Layout, Brain, Database, Container,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-dark-900/30">
      <div className="section-container">
        <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with to build production-grade software" />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-xl p-6 hover:border-accent-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-accent-500/10 group-hover:bg-accent-500/20 transition-colors">
                    <IconComponent className="text-accent-400" size={20} />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg bg-dark-900/80 text-gray-300 text-sm hover:bg-accent-500/10 hover:text-accent-400 transition-all duration-200 cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
