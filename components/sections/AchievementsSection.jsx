'use client';
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import BorderGlow from '@/components/ui/BorderGlow';

const ACHIEVEMENTS = [
  {
    id: 'kalakriti-pub',
    category: 'Publication',
    title: 'KalaKriti: A Collaborative Platform for Creatives',
    org: 'JFMR Journal',
    year: '2025',
    icon: '🎨',
    color: '#7c3aed',
    desc: 'Published research paper presenting KalaKriti, a secure real-time collaborative workspace for digital creators using advanced conflict resolution and low-latency canvas syncing.',
    badge: 'Research Paper',
  },
  {
    id: 'breast-cancer-pub',
    category: 'Publication',
    title: 'Breast Cancer Detection System Using Deep Learning',
    org: 'JPREMS Journal',
    year: 'Dec 2024',
    icon: '🔬',
    color: '#2563eb',
    desc: 'Published paper detailing an advanced Deep Learning framework optimized for early breast cancer diagnosis, achieving high specificity and computational efficiency.',
    badge: 'Research Paper',
  },
  {
    id: 'nptel-cloud',
    category: 'Certification',
    title: 'NPTEL Cloud Computing (IIT Kanpur)',
    org: 'IIT Kanpur / NPTEL',
    year: '2024',
    icon: '☁️',
    color: '#06b6d4',
    desc: 'Completed prestigious cloud computing certification covering distributed system design, virtualization, resource scheduling, and microservices orchestrations.',
    badge: 'Elite Gold',
  },
  {
    id: 'deloitte-cyber',
    category: 'Job Simulation',
    title: 'Deloitte Cyber Job Simulation',
    org: 'Deloitte / Forage',
    year: '2024',
    icon: '🛡️',
    color: '#7c3aed',
    desc: 'Completed hands-on simulation of cybersecurity analyst duties, including threat monitoring, network forensics, vulnerability assessment, and risk mitigation.',
    badge: 'Professional',
  },
  {
    id: 'deloitte-analytics',
    category: 'Job Simulation',
    title: 'Deloitte Data Analytics Job Simulation',
    org: 'Deloitte / Forage',
    year: '2023',
    icon: '📊',
    color: '#2563eb',
    desc: 'Completed professional simulation focusing on data engineering, dashboard designing, predictive analysis, and presenting data insights for business stakeholders.',
    badge: 'Professional',
  },
  {
    id: 'deloitte-tech',
    category: 'Job Simulation',
    title: 'Deloitte Technology Job Simulation',
    org: 'Deloitte / Forage',
    year: '2023',
    icon: '💻',
    color: '#06b6d4',
    desc: 'Simulated IT consulting, legacy application modernization, cloud architecture design, and enterprise software engineering workflows at Deloitte.',
    badge: 'Professional',
  },
];

function AchievementCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => setExpanded(!expanded)}
      style={{ cursor: 'pointer', height: '100%' }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <BorderGlow
        backgroundColor="rgba(8,8,20,0.92)"
        borderRadius={18}
        glowRadius={35}
        glowIntensity={1.0}
        colors={['#7c3aed', '#2563eb', '#06b6d4']}
        glowColor={item.color === '#7c3aed' ? '270 80 70' : item.color === '#2563eb' ? '220 90 60' : '190 90 55'}
      >
        <div style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
          {/* Crystal sparkle bg */}
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: 120, height: 120,
            background: `radial-gradient(circle at 100% 0%, ${item.color}20 0%, transparent 70%)`,
            pointerEvents: 'none',
          }} />

          {/* Category badge */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <span style={{
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '0.25rem 0.6rem', borderRadius: '9999px',
              background: `${item.color}20`, border: `1px solid ${item.color}40`, color: item.color,
            }}>
              {item.category}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>{item.year}</span>
          </div>

          {/* Icon + Title */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{
              fontSize: '2rem', lineHeight: 1, flexShrink: 0,
              animation: 'float-slow 4s ease-in-out infinite',
              animationDelay: `${index * 0.3}s`,
            }}>
              {item.icon}
            </span>
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: '0.25rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.78rem', color: item.color, fontWeight: 600 }}>{item.org}</p>
            </div>
          </div>

          {/* Expandable description */}
          <AnimatePresence>
            {expanded && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ fontSize: '0.82rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', overflow: 'hidden' }}
              >
                {item.desc}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Expand hint */}
          <div style={{
            marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem',
            fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)',
          }}>
            <motion.svg
              width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              animate={{ rotate: expanded ? 180 : 0 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </motion.svg>
            {expanded ? 'Click to collapse' : 'Click to expand'}
          </div>

          {/* Bottom accent line */}
          <div style={{ height: 2, background: `linear-gradient(90deg, ${item.color}70, transparent)`, borderRadius: 1, marginTop: '0.75rem' }} />
        </div>
      </BorderGlow>
    </motion.div>
  );
}

export default function AchievementsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="section-base" style={{ background: 'linear-gradient(180deg, #060610 0%, var(--space-dark) 100%)' }}>
      <div className="stars-bg" />
      <div className="grid-overlay" style={{ opacity: 0.25 }} />

      <div className="orb" style={{ width: 600, height: 600, background: 'rgba(6,182,212,0.08)', top: '20%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="container">
        <div ref={titleRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span className="section-label" initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
            Recognition & Growth
          </motion.span>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            Crystal Vault
          </motion.h2>
          <motion.p className="section-subtitle" style={{ margin: '1rem auto 0' }} initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            A collection of certifications, achievements, and milestones crystallized in time. Click any card to expand.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '1.5rem',
        }}>
          {ACHIEVEMENTS.map((item, i) => (
            <AchievementCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
