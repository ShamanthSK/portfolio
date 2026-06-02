'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import BorderGlow from '@/components/ui/BorderGlow';

const PROJECTS = [
  {
    id: 'raildelay',
    title: 'Rail Delay Propagation Model',
    subtitle: 'Predictive Network Delay Forecasting',
    description:
      'An advanced mathematical and predictive simulation system forecasting train delay propagation across complex railway networks. Utilizes graph analytics and ML algorithms to model cascading delay patterns, optimize schedules, and enhance rail operational resilience.',
    tech: ['Python', 'Graph Networks', 'Machine Learning', 'Data Science', 'Streamlit'],
    color: '#7c3aed',
    accent: '#a78bfa',
    icon: '🚄',
    github: 'https://github.com/ShamanthSK',
    category: 'Data Science / Simulation',
  },
  {
    id: 'breast-cancer',
    title: 'Breast Cancer Detection',
    subtitle: 'Deep Learning Diagnostic System',
    description:
      'A medical AI system leveraging Convolutional Neural Networks to classify breast cancer from histopathological images with high accuracy. Built with explainability features to aid clinical decision-making.',
    tech: ['Python', 'TensorFlow', 'CNN', 'Deep Learning', 'Streamlit'],
    color: '#2563eb',
    accent: '#60a5fa',
    icon: '🔬',
    github: 'https://github.com/ShamanthSK',
    category: 'AI / Healthcare',
  },
  {
    id: 'kalakriti',
    title: 'KalaKriti',
    subtitle: 'Digital Art & Culture Platform',
    description:
      'A vibrant platform celebrating Indian art and culture, connecting artists, collectors, and enthusiasts. Features an immersive gallery experience, artist portfolios, and a marketplace for authentic digital artworks.',
    tech: ['React', 'Firebase', 'Node.js', 'CSS3', 'APIs'],
    color: '#06b6d4',
    accent: '#22d3ee',
    icon: '🎨',
    github: 'https://github.com/ShamanthSK',
    category: 'Full Stack / Culture',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Threat Prediction',
    subtitle: 'ML-Powered Threat Intelligence',
    description:
      'An advanced threat detection system that uses machine learning to predict and classify cybersecurity threats in real-time. Analyzes network traffic patterns to identify anomalies and potential attacks before they escalate.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'SQLite'],
    color: '#7c3aed',
    accent: '#c084fc',
    icon: '🛡️',
    github: 'https://github.com/ShamanthSK',
    category: 'AI / Security',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, rotateX: 10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ perspective: '1000px', height: '100%' }}
    >
      <motion.div
        animate={{ y: hovered ? -8 : [0, -6, 0], rotateY: hovered ? 2 : 0 }}
        transition={hovered ? { duration: 0.3 } : { duration: 4, repeat: Infinity, delay: index * 0.5, ease: 'easeInOut' }}
        style={{ height: '100%' }}
      >
        <BorderGlow
          backgroundColor="rgba(8,8,20,0.92)"
          borderRadius={20}
          glowRadius={45}
          glowIntensity={hovered ? 1.5 : 0.8}
          colors={['#7c3aed', '#2563eb', '#06b6d4']}
          glowColor={project.color === '#7c3aed' ? '270 80 70' : project.color === '#2563eb' ? '220 90 60' : '190 90 55'}
          animated={inView && !hovered}
        >
          <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', minHeight: '380px' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: project.accent, display: 'block', marginBottom: '0.5rem',
                }}>
                  {project.category}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '2rem', lineHeight: 1 }}>{project.icon}</span>
                  <div>
                    <h3 style={{
                      fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2,
                      background: `linear-gradient(135deg, #fff, ${project.accent})`,
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>
                      {project.title}
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.2rem' }}>{project.subtitle}</p>
                  </div>
                </div>
              </div>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${project.color}60` }}
                style={{
                  padding: '0.5rem',
                  borderRadius: '10px',
                  border: `1px solid ${hovered ? project.color + '60' : 'rgba(255,255,255,0.1)'}`,
                  background: hovered ? `${project.color}15` : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: hovered ? '#fff' : 'rgba(255,255,255,0.4)',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </motion.a>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', flexGrow: 1 }}>
              {project.description}
            </p>

            {/* Tech stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map((t) => (
                <span key={t} style={{
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  background: `${project.color}18`,
                  border: `1px solid ${project.color}35`,
                  color: project.accent,
                  letterSpacing: '0.05em',
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Bottom bar */}
            <div style={{ height: 2, background: `linear-gradient(90deg, ${project.color}80, ${project.color === '#7c3aed' ? '#06b6d4' : '#7c3aed'}40, transparent)`, borderRadius: 1 }} />
          </div>
        </BorderGlow>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section-base" style={{ background: 'linear-gradient(180deg, #080814 0%, var(--space-dark) 100%)' }}>
      <div className="stars-bg" />
      <div className="grid-overlay" style={{ opacity: 0.3 }} />

      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(124,58,237,0.1)', top: '0%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="container">
        <div ref={titleRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span className="section-label" initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
            What I've Built
          </motion.span>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            Project Showcase
          </motion.h2>
          <motion.p className="section-subtitle" style={{ margin: '1rem auto 0' }} initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            Floating chambers of innovation — each project a universe of its own.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: '1.75rem',
        }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
