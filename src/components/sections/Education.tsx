'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ChevronDown, BookOpen } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { educationData } from '@/data/education';

export default function Education() {
  const [showCoursework, setShowCoursework] = useState(false);

  return (
    <section id="education" className="py-24">
      <div className="section-container">
        <SectionHeading title="Education" subtitle="Academic background and relevant coursework" />
        
        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-accent-500/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-500/10 shrink-0">
                  <GraduationCap className="text-accent-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-white text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-gray-400 text-sm">{edu.institution}</p>
                      {edu.board && (
                        <p className="text-gray-500 text-xs mt-0.5">University: {edu.board}</p>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-accent-400 font-bold text-lg">{edu.grade}</div>
                      <div className="text-gray-500 text-xs">{edu.gradeLabel}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{edu.duration}</div>
                    </div>
                  </div>

                  {edu.coursework && (
                    <div className="mt-4">
                      <button
                        onClick={() => setShowCoursework(!showCoursework)}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent-400 transition-colors"
                      >
                        <BookOpen size={14} />
                        Relevant Coursework
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${showCoursework ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {showCoursework && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-wrap gap-2 mt-3">
                              {edu.coursework.map((course) => (
                                <span
                                  key={course}
                                  className="px-2.5 py-1 rounded-md bg-dark-900/80 text-gray-400 text-xs"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
