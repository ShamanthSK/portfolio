'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BorderGlow from '@/components/ui/BorderGlow';

const ABOUT_CARDS = [
  {
    icon: '🧬',
    title: 'Professional Summary',
    color: '#7c3aed',
    content:
      'A passionate Software Engineer and CS & Design Graduate with expertise in building full-stack applications, AI-powered systems, and beautiful user interfaces. I bridge the gap between engineering precision and design aesthetics to create digital experiences that matter.',
  },
  {
    icon: '🎓',
    title: 'Education',
    color: '#2563eb',
    content:
      'B.E. in Computer Science & Design — combining rigorous software engineering fundamentals with human-centered design principles. Graduated with a strong foundation in algorithms, systems, AI/ML, and UI/UX design methodologies.',
  },
  {
    icon: '🚀',
    title: 'Career Goals',
    color: '#06b6d4',
    content:
      'Building at the intersection of AI, Design, and Engineering. Aiming to create systems that are not just functional — but intelligent, beautiful, and human. Open to roles in full-stack development, AI engineering, and product-focused engineering teams.',
  },
  {
    icon: '⚡',
    title: 'Technical Interests',
    color: '#7c3aed',
    content:
      'Machine Learning & Deep Learning · Generative AI · 3D Web Experiences · Real-time Systems · Human-Computer Interaction · Intelligent Automation · Computer Vision · Natural Language Processing',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

function AboutCard({ card, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      style={{ height: '100%' }}
    >
      <BorderGlow
        backgroundColor="rgba(10,10,20,0.85)"
        borderRadius={20}
        glowRadius={35}
        glowIntensity={1.2}
        colors={['#7c3aed', '#2563eb', '#06b6d4']}
        glowColor={`${card.color === '#7c3aed' ? '270 80 70' : card.color === '#2563eb' ? '220 90 60' : '190 90 55'}`}
      >
        <div style={{ padding: '2rem', minHeight: '240px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{card.icon}</span>
            <h3 style={{
              fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.01em',
              background: `linear-gradient(135deg, #fff, ${card.color})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              {card.title}
            </h3>
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.65)', flexGrow: 1 }}>
            {card.content}
          </p>
          <div style={{ height: 2, background: `linear-gradient(90deg, ${card.color}60, transparent)`, borderRadius: 1 }} />
        </div>
      </BorderGlow>
    </motion.div>
  );
}

export default function AboutSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-base" style={{ background: 'linear-gradient(180deg, var(--space-black) 0%, var(--space-dark) 100%)' }}>
      <div className="stars-bg" />
      <div className="grid-overlay" style={{ opacity: 0.4 }} />

      {/* Orbs */}
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(79,70,229,0.12)', top: '10%', right: '-200px' }} />
      <div className="orb" style={{ width: 300, height: 300, background: 'rgba(6,182,212,0.1)', bottom: '5%', left: '-100px', animationDelay: '3s' }} />

      {/* Data stream lines */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.12 }}>
        <defs>
          <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {[20, 40, 60, 80].map((y, i) => (
          <motion.line
            key={i}
            x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`}
            stroke="url(#streamGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatType: 'loop', repeatDelay: 3 }}
          />
        ))}
      </svg>

      <div className="container">
        {/* Header */}
        <div ref={titleRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Who I Am
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Identity Chamber
          </motion.h2>
          <motion.p
            className="section-subtitle"
            style={{ margin: '1rem auto 0' }}
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Holographic panels that define who I am, what I've built, and where I'm heading.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem',
        }}>
          {ABOUT_CARDS.map((card, i) => (
            <AboutCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
