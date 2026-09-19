'use client';

import { motion } from 'framer-motion';
import { Trophy, Code2, Award, Medal, Users } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { achievements, responsibilities } from '@/data/achievements';

const iconMap: Record<string, React.ElementType> = {
  Trophy, Code2, Award, Medal,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-dark-900/30">
      <div className="section-container">
        <SectionHeading title="Achievements & Leadership" subtitle="Certifications, competitive coding, and campus involvement" />
        
        {/* Achievements grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {achievements.map((item, i) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-xl p-5 flex items-start gap-4 hover:border-accent-500/30 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-accent-500/10 shrink-0">
                  <IconComponent className="text-accent-400" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded text-xs bg-dark-900/80 text-gray-500">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Positions of responsibility */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
            <Users className="text-accent-400" size={20} />
            Positions of Responsibility
          </h3>
          <div className="space-y-4">
            {responsibilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-xl p-5 hover:border-accent-500/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h4 className="text-white font-medium">{item.title}</h4>
                  <span className="text-gray-500 text-sm">{item.duration}</span>
                </div>
                <p className="text-gray-500 text-sm">{item.organization}</p>
                <p className="text-gray-400 text-sm mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
