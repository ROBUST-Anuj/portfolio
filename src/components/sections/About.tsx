'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, GraduationCap, Briefcase, Code2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/personal';

export default function About() {
  const highlights = [
    { icon: GraduationCap, label: 'B.Tech IT', value: 'SGSITS, Indore' },
    { icon: MapPin, label: 'Location', value: 'Indore, India' },
    { icon: Briefcase, label: 'Focus', value: 'AI/ML + Backend' },
    { icon: Code2, label: 'Experience', value: 'Intern + Projects' },
  ];

  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <SectionHeading title="About Me" subtitle="A snapshot of who I am and what drives my engineering work" />
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="glass rounded-xl p-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Photo in about - visible on mobile/tablet since hero photo is hidden there */}
                <div className="shrink-0 mx-auto sm:mx-0">
                  <div className="p-0.5 rounded-2xl bg-gradient-to-br from-accent-500/60 to-cyan-500/60">
                    <div className="rounded-2xl overflow-hidden bg-dark-800 w-28 h-28">
                      <Image
                        src="/profile.jpeg"
                        alt="Anuj Parashar"
                        width={112}
                        height={112}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {personalInfo.about}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                className="glass rounded-xl p-4 flex items-center gap-4 hover:border-accent-500/30 transition-colors"
              >
                <div className="p-2 rounded-lg bg-accent-500/10">
                  <item.icon className="text-accent-400" size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                  <div className="text-white text-sm font-medium">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
