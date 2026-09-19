'use client';

import { motion } from 'framer-motion';
import { Mail, Code2, ArrowUpRight, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/Icons';
import SectionHeading from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/personal';

export default function Contact() {
  const contactLinks = [
    {
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-red-500/20 to-orange-500/20',
      iconType: 'mail' as const,
    },
    {
      label: 'GitHub',
      value: 'ROBUST-Anuj',
      href: personalInfo.github,
      color: 'from-gray-500/20 to-gray-600/20',
      iconType: 'github' as const,
    },
    {
      label: 'LinkedIn',
      value: 'Anuj Parashar',
      href: personalInfo.linkedin,
      color: 'from-blue-500/20 to-blue-600/20',
      iconType: 'linkedin' as const,
    },
    {
      label: 'LeetCode',
      value: 'ROBUST_Anuj',
      href: personalInfo.leetcode,
      color: 'from-amber-500/20 to-yellow-500/20',
      iconType: 'leetcode' as const,
    },
  ];

  function renderIcon(iconType: string) {
    switch (iconType) {
      case 'mail': return <Mail className="text-white" size={20} />;
      case 'github': return <GitHubIcon size={20} className="text-white" />;
      case 'linkedin': return <LinkedInIcon size={20} className="text-white" />;
      case 'leetcode': return <Code2 className="text-white" size={20} />;
      default: return <Mail className="text-white" size={20} />;
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <SectionHeading title="Get In Touch" subtitle="Interested in working together? Let's connect." />
        
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I&apos;m currently open to software engineering and AI/ML opportunities. Whether you have a role that fits, a project to discuss, or just want to say hello — I&apos;d love to hear from you.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-medium text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-500/25"
            >
              <Send size={20} />
              Say Hello
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="glass rounded-xl p-5 flex items-center gap-4 hover:border-accent-500/30 transition-colors group"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color}`}>
                  {renderIcon(link.iconType)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-500 text-xs uppercase tracking-wider">{link.label}</div>
                  <div className="text-white text-sm font-medium truncate">{link.value}</div>
                </div>
                <ArrowUpRight className="text-gray-600 group-hover:text-accent-400 transition-colors shrink-0" size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
