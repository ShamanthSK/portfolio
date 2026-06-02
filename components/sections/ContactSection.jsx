'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';
import BorderGlow from '@/components/ui/BorderGlow';

const Lanyard = dynamic(() => import('@/components/ui/Lanyard'), {
  ssr: false,
  loading: () => (
    <div style={{
      width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(124,58,237,0.05)', borderRadius: 20,
      border: '1px solid rgba(124,58,237,0.2)',
    }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid transparent', borderTopColor: '#7c3aed' }}
      />
    </div>
  ),
});

const CONTACT_INFO = [
  { icon: '📧', label: 'Email', value: 'shamanths.kumbar@gmail.com', href: 'mailto:shamanths.kumbar@gmail.com', color: '#7c3aed' },
  { icon: '📱', label: 'Phone', value: '+91 6363868655', href: 'tel:+916363868655', color: '#2563eb' },
  { icon: '📍', label: 'Location', value: 'Karnataka, India', href: null, color: '#06b6d4' },
];

const SOCIAL_LINKS = [
  {
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    handle: '@ShamanthSK',
    href: 'https://github.com/ShamanthSK',
    color: '#7c3aed',
  },
  {
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    handle: 'Shamanth S Kumbar',
    href: 'https://www.linkedin.com/in/shamanth-s-kumbar/',
    color: '#2563eb',
  },
];

function ContactInfoCard({ item }) {
  return (
    <motion.div whileHover={{ y: -3, transition: { duration: 0.2 } }}>
      <BorderGlow
        backgroundColor="rgba(8,8,20,0.88)"
        borderRadius={14}
        glowRadius={25}
        glowIntensity={1.0}
        colors={['#7c3aed', '#2563eb', '#06b6d4']}
        glowColor={item.color === '#7c3aed' ? '270 80 70' : item.color === '#2563eb' ? '220 90 60' : '190 90 55'}
      >
        <div style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{
            fontSize: '1.5rem', lineHeight: 1, padding: '0.5rem',
            background: `${item.color}18`, borderRadius: 10, border: `1px solid ${item.color}30`,
            flexShrink: 0,
          }}>
            {item.icon}
          </span>
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.25rem' }}>
              {item.label}
            </p>
            {item.href ? (
              <a href={item.href} style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = item.color; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#fff'; }}
              >
                {item.value}
              </a>
            ) : (
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>{item.value}</span>
            )}
          </div>
        </div>
      </BorderGlow>
    </motion.div>
  );
}

function SocialCard({ item }) {
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <BorderGlow
        backgroundColor="rgba(8,8,20,0.88)"
        borderRadius={14}
        glowRadius={25}
        glowIntensity={1.1}
        colors={['#7c3aed', '#2563eb', '#06b6d4']}
        glowColor={item.color === '#7c3aed' ? '270 80 70' : item.color === '#2563eb' ? '220 90 60' : '190 90 55'}
      >
        <div style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: item.color, flexShrink: 0 }}>{item.icon}</span>
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.2rem' }}>
              {item.label}
            </p>
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff' }}>{item.handle}</span>
          </div>
          <svg style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.3)' }} width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </BorderGlow>
    </motion.a>
  );
}

export default function ContactSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: '-60px' });

  // Continuous in-view check to dynamically suspend/unmount heavy WebGL lanyard physics
  const isSectionInView = useInView(sectionRef, { margin: '200px' });

  return (
    <section ref={sectionRef} id="contact" className="section-base" style={{ background: 'linear-gradient(180deg, var(--space-dark) 0%, var(--space-black) 100%)' }}>
      <div className="stars-bg" />
      <div className="grid-overlay" style={{ opacity: 0.3 }} />

      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(124,58,237,0.12)', top: '10%', right: '-200px' }} />
      <div className="orb" style={{ width: 350, height: 350, background: 'rgba(6,182,212,0.08)', bottom: '10%', left: '-100px', animationDelay: '2s' }} />

      <div className="container">
        <div ref={titleRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span className="section-label" initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
            Get In Touch
          </motion.span>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            Contact Hub
          </motion.h2>
          <motion.p className="section-subtitle" style={{ margin: '1rem auto 0' }} initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            Open to opportunities, collaborations, and exciting projects.
          </motion.p>
        </div>

        {/* Main layout */}
        <div style={{ alignItems: 'center' }} className="contact-grid">
          {/* LEFT — Lanyard */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="contact-lanyard-col"
          >
            {isSectionInView ? (
              <Lanyard />
            ) : (
              <div style={{
                width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(124,58,237,0.05)', borderRadius: 20,
                border: '1px solid rgba(124,58,237,0.2)',
              }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid transparent', borderTopColor: '#7c3aed' }}
                />
              </div>
            )}
          </motion.div>

          {/* RIGHT — Contact info + form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 60 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {/* Let's Connect heading */}
            <div style={{ marginBottom: '0.5rem' }}>
              <h3 style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, #fff, rgba(200,200,255,0.7))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Let&apos;s Connect
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Drop a message or reach out directly.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {CONTACT_INFO.map((item) => <ContactInfoCard key={item.label} item={item} />)}
            </div>

            {/* Social Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {SOCIAL_LINKS.map((item) => <SocialCard key={item.label} item={item} />)}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
        }
        .contact-lanyard-col {
          height: 500px;
          position: relative;
          width: 100%;
        }
        @media (min-width: 901px) {
          .contact-lanyard-col {
            position: sticky;
            top: 6rem;
            height: calc(100vh - 12rem);
            max-height: 700px;
            min-height: 550px;
          }
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .contact-lanyard-col {
            height: 420px;
          }
        }
      `}</style>
    </section>
  );
}
