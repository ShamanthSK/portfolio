import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import portfolioData from '../data/portfolioData';

function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-3xl"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-cyanGlow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-white/68">{description}</p>
    </motion.div>
  );
}

function TimelineBlock({ item }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-display text-2xl text-white">{item.title}</h3>
        <span className="text-sm text-cyanGlow">{item.period}</span>
      </div>
      <p className="mt-1 text-white/70">{item.institution}</p>
      <p className="mt-4 text-white/62">{item.details}</p>
    </div>
  );
}

function Home() {
  const { about, skills, projects, education, experience, achievements, contact, personal } =
    portfolioData;

  return (
    <main className="bg-mesh">
      <HeroSection />

      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid w-full gap-10 rounded-[2rem] border border-white/10 bg-white/4 p-8 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeader
            eyebrow="About"
            title="Designing intuitive interfaces with engineering depth."
            description={about.bio}
          />
          <div className="grid gap-4">
            {about.highlights.map((highlight) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                className="rounded-[2rem] border border-white/10 bg-white/6 p-6 text-white/75"
              >
                {highlight}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="w-full rounded-[2rem] border border-white/10 bg-white/4 p-8">
          <SectionHeader
            eyebrow="Skills"
            title="A balanced toolkit across code, product thinking, and AI."
            description="This stack reflects how design, development, and intelligent systems come together in practical product work."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <SkillCard key={skill.category} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="w-full rounded-[2rem] border border-white/10 bg-white/4 p-8">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work across AI, UI/UX, and full-stack development."
            description="These projects reflect an interest in solving meaningful problems through intelligent systems and clean user experiences."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="w-full rounded-[2rem] border border-white/10 bg-white/4 p-8">
          <SectionHeader
            eyebrow="Education & Experience"
            title="Learning by building, experimenting, and refining real skills."
            description="A path shaped by interface design, engineering education, and applied AI work."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {education.map((item) => (
              <TimelineBlock key={`${item.title}-${item.period}`} item={item} />
            ))}
            {experience.map((item) => (
              <TimelineBlock key={`${item.title}-${item.period}`} item={item} />
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/6 p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-goldGlow">Achievements</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {achievements.map((achievement) => (
                <div key={achievement} className="rounded-2xl bg-black/20 p-5 text-white/75">
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="w-full rounded-[2.5rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-8 sm:p-10 lg:p-14">
          <SectionHeader
            eyebrow="Contact"
            title={contact.headline}
            description={contact.subtext}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] bg-black/20 p-6">
              <p className="text-sm text-white/50">Email</p>
              <p className="mt-3 text-lg text-white">{personal.email}</p>
            </div>
            <div className="rounded-[2rem] bg-black/20 p-6">
              <p className="text-sm text-white/50">Phone</p>
              <p className="mt-3 text-lg text-white">{personal.phone}</p>
            </div>
            <div className="rounded-[2rem] bg-black/20 p-6">
              <p className="text-sm text-white/50">Location</p>
              <p className="mt-3 text-lg text-white">{personal.location}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
