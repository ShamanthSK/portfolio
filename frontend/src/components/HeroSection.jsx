import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Orb from './Orb';
import portfolioData from '../data/portfolioData';

function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full overflow-hidden px-0 pb-0 pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex min-h-[calc(100vh-5rem)] w-full flex-col bg-[linear-gradient(180deg,#090313_0%,#070211_100%)] px-5 pb-8 pt-8 sm:px-8 lg:px-12"
      >
        <div className="relative flex flex-1 w-full items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div style={{ width: '100%', height: '100%', minHeight: '640px', position: 'relative' }}>
              <Orb
                hoverIntensity={2}
                rotateOnHover
                hue={0}
                forceHoverState={false}
                backgroundColor="#000000"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_22%,rgba(7,2,17,0.78)_62%,rgba(7,2,17,0.96)_100%)]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center px-4 py-10 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/88 backdrop-blur">
              <Sparkles size={14} />
              UI/UX + AI Portfolio
            </span>

            <h1 className="mt-8 max-w-[760px] font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Designing useful interfaces with intelligence and clarity.
            </h1>

            <p className="mt-5 max-w-[700px] text-base leading-8 text-white/68 sm:text-lg">
              {personal.intro}
            </p>

            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-cyanGlow/80">
              {personal.title}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-base font-semibold text-[#090313] transition duration-300 hover:scale-[1.02]"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-10 py-4 text-base font-semibold text-white/88 backdrop-blur transition duration-300 hover:border-white/25 hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 text-sm text-white/75">
              {personal.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="pointer-events-auto rounded-full border border-white/10 bg-white/5 px-5 py-2.5 transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/35 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>

            <div className="mt-12 grid w-full max-w-[760px] gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-left backdrop-blur-xl">
                <p className="text-sm text-white/45">Building</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Intuitive UI and UX systems
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-left backdrop-blur-xl">
                <p className="text-sm text-white/45">Exploring</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Python, AI, and deep learning workflows
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
