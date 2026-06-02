'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import BorderGlow from '@/components/ui/BorderGlow';

export default function OutroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const isSectionInView = useInView(ref, { margin: '200px' });
  const unicornRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    // Load Unicorn Studio script from the user's provided version (v2.2.1)
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `!function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.1/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();`;
    document.body.appendChild(script);
    return () => {
      try { document.body.removeChild(script); } catch (e) {}
    };
  }, []);

  // Re-initialize Unicorn Studio dynamically when scrolled back into view
  useEffect(() => {
    if (isSectionInView && typeof window !== 'undefined' && window.UnicornStudio && typeof window.UnicornStudio.init === 'function') {
      try {
        window.UnicornStudio.init();
      } catch (err) {
        console.warn('Unicorn Studio initialization deferred:', err);
      }
    }
  }, [isSectionInView]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormValues({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSent(false);
        setIsOpen(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section
      ref={ref}
      id="outro"
      onClick={() => setIsOpen(true)}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--space-black)',
        cursor: 'pointer',
      }}
    >
      {/* Unicorn Studio background - clickable */}
      <div
        ref={unicornRef}
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0.85,
        }}
      >
        {isSectionInView ? (
          <div
            data-us-project="0rSTHxhvwt97tCE55hlL"
            style={{ width: '100%', height: '100%', minHeight: '100vh' }}
          />
        ) : null}
      </div>

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(5,5,8,0.7) 0%, rgba(5,5,8,0.3) 40%, rgba(5,5,8,0.3) 60%, rgba(5,5,8,0.95) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Ambient glowing orbs */}
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
        top: '50%', left: '30%', transform: 'translate(-50%, -50%)',
        zIndex: 1, pointerEvents: 'none', animation: 'pulse-glow 6s ease-in-out infinite',
      }} />

      {/* Content / Tagline & Credit at the bottom */}
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        textAlign: 'center',
        width: '100%',
        maxWidth: '600px',
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        pointerEvents: 'none',
      }}>
        {/* Minimal tagline hint */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 0.5 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontSize: '0.78rem',
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '0.25rem',
            textShadow: '0 2px 8px rgba(0,0,0,0.6)',
          }}
        >
          Click anywhere to Send a Message
        </motion.p>

        {/* Final footer credit */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)',
            margin: 0,
          }}
        >
          Let&apos;s Build the Future Together · Shamanth S Kumbar · 2026
        </motion.p>
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(5, 5, 12, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: 100000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '480px',
                position: 'relative',
                pointerEvents: 'auto',
              }}
            >
              <BorderGlow
                backgroundColor="rgba(8, 8, 20, 0.95)"
                borderRadius={24}
                glowRadius={30}
                glowIntensity={1.3}
                colors={['#7c3aed', '#2563eb', '#06b6d4']}
              >
                <div style={{ padding: '2.5rem', position: 'relative' }}>
                  {/* Close Icon */}
                  <button
                    onClick={() => setIsOpen(false)}
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: '1.5rem',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#fff',
                      fontSize: '1.1rem',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    ✕
                  </button>

                  {sent ? (
                    // Success State
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{ textAlign: 'center', padding: '1.5rem 0' }}
                    >
                      <div style={{
                        width: '64px', height: '64px', borderRadius: '50%',
                        background: 'rgba(6, 182, 212, 0.1)', border: '2px solid #06b6d4',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 1.5rem', fontSize: '2rem', color: '#06b6d4'
                      }}>
                        ✓
                      </div>
                      <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.75rem', fontFamily: 'var(--font-display)', color: '#fff' }}>
                        Message Sent!
                      </h3>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                        Thanks for the ping, Shamanth will get back to you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    // Message Form
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.25rem', fontFamily: 'var(--font-display)', color: '#fff' }}>
                          Send a Message
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>
                          Drop a note or question to connect directly.
                        </p>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <label style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formValues.name}
                          onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '10px',
                            padding: '0.75rem 1rem',
                            color: '#fff',
                            fontSize: '0.9rem',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#7c3aed'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                        />
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <label style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formValues.email}
                          onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '10px',
                            padding: '0.75rem 1rem',
                            color: '#fff',
                            fontSize: '0.9rem',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                        />
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <label style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                          Your Message
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formValues.message}
                          onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '10px',
                            padding: '0.75rem 1rem',
                            color: '#fff',
                            fontSize: '0.9rem',
                            outline: 'none',
                            resize: 'none',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#06b6d4'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={sending}
                        style={{
                          marginTop: '0.5rem',
                          padding: '0.9rem',
                          borderRadius: '10px',
                          background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                          color: '#fff',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          boxShadow: '0 4px 20px rgba(124,58,237,0.3)',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-1px)';
                          e.currentTarget.style.boxShadow = '0 6px 24px rgba(124,58,237,0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.3)';
                        }}
                      >
                        {sending ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </BorderGlow>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
