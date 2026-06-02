'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';

const ColorBends = dynamic(() => import('@/components/ui/ColorBends'), { ssr: false });

const HERO_COLORS = ['#3b0764', '#4f46e5', '#1e40af', '#0891b2', '#7c3aed', '#06b6d4'];

const SKILLS_ORBIT = ['React', 'Python', 'AI/ML', 'Three.js', 'Design', 'Node.js'];

function ParticleField() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const W = canvas.width = canvas.offsetWidth;
    const H = canvas.height = canvas.offsetHeight;
    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.7 + 0.1,
      color: ['#7c3aed', '#2563eb', '#06b6d4', '#ffffff'][Math.floor(Math.random() * 4)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} />;
}

const letterVariants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
  visible: (i) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.05 + 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { margin: '200px' });

  const name = 'SHAMANTH S KUMBAR';
  const letters = name.split('');

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--space-black)',
      }}
    >
      {/* ColorBends WebGL background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {mounted && isSectionInView && (
          <ColorBends
            colors={HERO_COLORS}
            speed={0.12}
            scale={1.2}
            frequency={0.8}
            warpStrength={1.2}
            mouseInfluence={0.6}
            parallax={0.3}
            intensity={0.9}
            bandWidth={5}
            iterations={2}
            noise={0.05}
            transparent={false}
          />
        )}
      </div>

      {/* Dark overlay for readability */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(5,5,8,0.65) 0%, rgba(5,5,8,0.45) 50%, rgba(5,5,8,0.85) 100%)',
      }} />

      {/* Grid overlay */}
      <div className="grid-overlay" style={{ zIndex: 1 }} />

      {/* Particle field */}
      {mounted && isSectionInView && <ParticleField />}

      {/* Ambient orbs */}
      <div className="orb" style={{ width: 600, height: 600, background: 'rgba(124,58,237,0.2)', top: '-200px', left: '-200px', zIndex: 1 }} />
      <div className="orb" style={{ width: 400, height: 400, background: 'rgba(6,182,212,0.15)', bottom: '-100px', right: '-100px', zIndex: 1, animationDelay: '2s' }} />

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1.5rem', maxWidth: '900px' }}>

        {/* Tag line above name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1.25rem', borderRadius: '9999px',
            background: 'rgba(124,58,237,0.15)',
            border: '1px solid rgba(124,58,237,0.35)',
            marginBottom: '2rem',
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#06b6d4', display: 'inline-block', animation: 'pulse-glow 2s infinite' }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase' }}>
            Available for Opportunities
          </span>
        </motion.div>

        {/* Name — letter by letter */}
        <h1 style={{
          fontSize: 'clamp(1.5rem, 4.8vw, 4.8rem)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          overflow: 'visible',
          display: 'block'
        }}>
          {letters.map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              style={{
                display: 'inline-block',
                background: char === ' ' ? 'transparent' : 'linear-gradient(135deg, #ffffff 0%, rgba(200,200,255,0.85) 100%)',
                WebkitBackgroundClip: char === ' ' ? 'unset' : 'text',
                WebkitTextFillColor: char === ' ' ? 'transparent' : 'transparent',
                backgroundClip: char === ' ' ? 'unset' : 'text',
                minWidth: char === ' ' ? '0.3em' : undefined,
                textShadow: 'none',
              }}
            >
              {char === ' ' ? '\u00a0' : char}
            </motion.span>
          ))}
        </h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '1rem' }}
        >
          <span style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: 500,
            background: 'linear-gradient(90deg, #7c3aed, #2563eb, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.02em',
          }}>
            Software Engineer &nbsp;·&nbsp; CS & Design Graduate
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto 3rem',
          }}
        >
          Building Intelligent Digital Experiences Through Design, Development, and AI
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(124,58,237,0.6)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            View Projects
          </motion.button>



          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </motion.button>
        </motion.div>

        {/* Orbiting skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          style={{ marginTop: '4rem', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {SKILLS_ORBIT.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.2 + i * 0.1 }}
              style={{
                padding: '0.35rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 500,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.05em',
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 24, height: 38, borderRadius: 12, border: '1.5px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'center', paddingTop: 6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(124,58,237,0.9)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
