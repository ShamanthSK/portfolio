'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import BorderGlow from '@/components/ui/BorderGlow';

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
    color: '#7c3aed',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Three.js'],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    color: '#2563eb',
    skills: ['Python', 'Flask', 'REST APIs', 'Node.js', 'Express'],
  },
  {
    id: 'database',
    label: 'Database',
    icon: '🗄️',
    color: '#06b6d4',
    skills: ['Firebase', 'SQLite', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'ai',
    label: 'AI & ML',
    icon: '🤖',
    color: '#7c3aed',
    skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP', 'TensorFlow'],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: '🛠️',
    color: '#2563eb',
    skills: ['Git', 'GitHub', 'VS Code', 'UiPath', 'Figma', 'Docker'],
  },
];

function SkillNode({ skill, color, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.1, y: -4 }}
    >
      <div style={{
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
        fontSize: '0.82rem',
        fontWeight: 600,
        letterSpacing: '0.03em',
        background: hovered ? `${color}25` : 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? color + '80' : 'rgba(255,255,255,0.1)'}`,
        color: hovered ? '#fff' : 'rgba(255,255,255,0.7)',
        transition: 'all 0.25s',
        boxShadow: hovered ? `0 0 20px ${color}40, 0 0 40px ${color}20` : 'none',
        cursor: 'default',
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}>
        {skill}
      </div>
    </motion.div>
  );
}

function CategorySection({ cat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <BorderGlow
        backgroundColor="rgba(8,8,18,0.9)"
        borderRadius={20}
        glowRadius={30}
        glowIntensity={1.1}
        colors={['#7c3aed', '#2563eb', '#06b6d4']}
        glowColor={cat.color === '#7c3aed' ? '270 80 70' : cat.color === '#2563eb' ? '220 90 60' : '190 90 55'}
      >
        <div style={{ padding: '1.75rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span style={{
              fontSize: '1.5rem',
              lineHeight: 1,
              padding: '0.5rem',
              background: `${cat.color}20`,
              borderRadius: '12px',
              border: `1px solid ${cat.color}40`,
            }}>
              {cat.icon}
            </span>
            <div>
              <h3 style={{
                fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.01em',
                background: `linear-gradient(135deg, #fff, ${cat.color})`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {cat.label}
              </h3>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {cat.skills.length} skills
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {cat.skills.map((skill, i) => (
              <SkillNode key={skill} skill={skill} color={cat.color} delay={inView ? i * 0.06 : 0} />
            ))}
          </div>
        </div>
      </BorderGlow>
    </motion.div>
  );
}

export default function SkillsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section-base" style={{ background: 'linear-gradient(180deg, var(--space-dark) 0%, #080814 100%)' }}>
      <div className="stars-bg" />

      {/* Central glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="orb" style={{ width: 350, height: 350, background: 'rgba(37,99,235,0.1)', top: '20%', left: '-100px', animationDelay: '1s' }} />
      <div className="orb" style={{ width: 250, height: 250, background: 'rgba(6,182,212,0.1)', bottom: '10%', right: '-80px', animationDelay: '3s' }} />

      <div className="container">
        <div ref={titleRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span className="section-label" initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
            What I Know
          </motion.span>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            Skills Galaxy
          </motion.h2>
          <motion.p className="section-subtitle" style={{ margin: '1rem auto 0' }} initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            A constellation of technologies, tools, and disciplines orbiting my engineering core.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem',
        }}>
          {SKILL_CATEGORIES.map((cat, i) => (
            <CategorySection key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
