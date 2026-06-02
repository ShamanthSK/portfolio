'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BorderGlow from '@/components/ui/BorderGlow';

const TIMELINE = [
  {
    year: '2022',
    title: 'B.E. Computer Science & Design',
    org: 'University',
    type: 'Education',
    desc: 'Pursuing a degree that uniquely combines Computer Science engineering with Human-centered Design — covering algorithms, AI/ML, UI/UX, HCI, and systems programming.',
    color: '#2563eb',
    icon: '🎓',
    side: 'left',
  },
  {
    year: '2023',
    title: 'NPTEL Cloud Computing (IIT Kanpur)',
    org: 'NPTEL / IIT Kanpur',
    type: 'Certification',
    desc: 'Completed elite certification covering cloud orchestration, virtualization, storage infrastructure, and high-availability distributed systems.',
    color: '#7c3aed',
    icon: '☁️',
    side: 'right',
  },
  {
    year: '2023',
    title: 'Deloitte Job Simulations',
    org: 'Deloitte / Forage',
    type: 'Job Simulation',
    desc: 'Completed immersive simulations in Cybersecurity analysis, Technology migration consulting, and Data analytics, resolving complex simulated client challenges.',
    color: '#06b6d4',
    icon: '🛡️',
    side: 'left',
  },
  {
    year: '2024',
    title: 'Software Engineering & Design Skills',
    org: 'Skill Specialization',
    type: 'Skills Mastery',
    desc: 'Mastered full-stack frameworks (Next.js, Node.js), human-centered UI/UX design, real-time sync systems (KalaKriti platform), and automated process architectures (UiPath RPA).',
    color: '#2563eb',
    icon: '⚡',
    side: 'right',
  },
  {
    year: '2024',
    title: 'Software Engineer Intern',
    org: 'Tech Company',
    type: 'Internship',
    desc: 'Developed full-stack features using React and Python Flask, integrated REST APIs, and collaborated in an Agile environment to ship production-ready code.',
    color: '#7c3aed',
    icon: '💼',
    side: 'left',
  },
  {
    year: '2025 — Present',
    title: 'Research & Innovation',
    org: 'Academic Publications',
    type: 'Publications',
    desc: 'Published peer-reviewed papers on collaborative web systems (KalaKriti in JFMR) and deep-learning diagnostics (Breast Cancer Detection in JPREMS). Designing production-grade cloud and AI architectures.',
    color: '#06b6d4',
    icon: '🚀',
    side: 'right',
  },
];

function TimelineCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="timeline-card-container">
      {/* Left side */}
      <div className="timeline-left-col">
        {item.side === 'left' ? (
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
          >
            <BorderGlow
              backgroundColor="rgba(8,8,20,0.9)"
              borderRadius={16}
              glowRadius={30}
              glowIntensity={1.1}
              colors={['#7c3aed', '#2563eb', '#06b6d4']}
              glowColor={item.color === '#7c3aed' ? '270 80 70' : item.color === '#2563eb' ? '220 90 60' : '190 90 55'}
            >
              <TimelineCardContent item={item} />
            </BorderGlow>
          </motion.div>
        ) : null}
      </div>

      {/* Center node */}
      <div className="timeline-node-col">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
          className="timeline-node-circle"
          style={{
            width: 48, height: 48, borderRadius: '50%',
            background: `linear-gradient(135deg, ${item.color}, ${item.color}99)`,
            border: `3px solid ${item.color}50`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.25rem', zIndex: 1, position: 'relative',
            boxShadow: `0 0 20px ${item.color}50, 0 0 40px ${item.color}25`,
            flexShrink: 0,
          }}
        >
          {item.icon}
        </motion.div>
        <div
          className="timeline-line"
          style={{
            position: 'absolute',
            top: 48, bottom: -32,
            width: 2,
            background: `linear-gradient(180deg, ${item.color}60, rgba(255,255,255,0.05))`,
            left: '50%', transform: 'translateX(-50%)',
          }}
        />
      </div>

      {/* Right side */}
      <div className="timeline-right-col">
        {item.side === 'right' ? (
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
          >
            <BorderGlow
              backgroundColor="rgba(8,8,20,0.9)"
              borderRadius={16}
              glowRadius={30}
              glowIntensity={1.1}
              colors={['#7c3aed', '#2563eb', '#06b6d4']}
              glowColor={item.color === '#7c3aed' ? '270 80 70' : item.color === '#2563eb' ? '220 90 60' : '190 90 55'}
            >
              <TimelineCardContent item={item} />
            </BorderGlow>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}

function TimelineCardContent({ item }) {
  return (
    <div style={{ padding: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span style={{
          fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '0.25rem 0.6rem', borderRadius: '9999px',
          background: `${item.color}20`, border: `1px solid ${item.color}40`, color: item.color,
        }}>
          {item.type}
        </span>
        <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>{item.year}</span>
      </div>
      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem', lineHeight: 1.3 }}>{item.title}</h3>
      <p style={{ fontSize: '0.8rem', color: item.color, fontWeight: 600, marginBottom: '0.75rem' }}>{item.org}</p>
      <p style={{ fontSize: '0.83rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)' }}>{item.desc}</p>
    </div>
  );
}

export default function ExperienceSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-base" style={{ background: 'linear-gradient(180deg, var(--space-dark) 0%, #060610 100%)' }}>
      <div className="stars-bg" />

      <div className="orb" style={{ width: 400, height: 400, background: 'rgba(124,58,237,0.1)', top: '30%', right: '-150px', animationDelay: '2s' }} />

      <div className="container">
        <div ref={titleRef} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.span className="section-label" initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
            My Journey
          </motion.span>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            Experience Timeline
          </motion.h2>
          <motion.p className="section-subtitle" style={{ margin: '1rem auto 0' }} initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            A futuristic timeline of experiences, certifications, and milestones floating in space.
          </motion.p>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {TIMELINE.map((item, i) => (
            <TimelineCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Mobile timeline responsive style overrides */}
      <style>{`
        .timeline-card-container {
          display: grid;
          grid-template-columns: 1fr 60px 1fr;
          align-items: start;
          gap: 0;
          position: relative;
        }

        .timeline-left-col {
          padding-right: 2rem;
          padding-bottom: 2rem;
        }

        .timeline-right-col {
          padding-left: 2rem;
          padding-bottom: 2rem;
        }

        .timeline-node-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        @media (max-width: 768px) {
          .timeline-card-container {
            grid-template-columns: 48px 1fr !important;
            gap: 1rem !important;
            margin-bottom: 1.5rem !important;
          }

          .timeline-left-col,
          .timeline-right-col {
            grid-column: 2 !important;
            grid-row: 1 !important;
            padding: 0 0 1.5rem 0 !important;
          }

          .timeline-node-col {
            grid-column: 1 !important;
            grid-row: 1 !important;
          }

          .timeline-node-circle {
            width: 36px !important;
            height: 36px !important;
            font-size: 1rem !important;
          }

          .timeline-line {
            top: 36px !important;
            bottom: -1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
