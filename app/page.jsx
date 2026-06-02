'use client';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';

const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), { ssr: false });
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection'), { ssr: false });
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), { ssr: false });
const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection'), { ssr: false });
const AchievementsSection = dynamic(() => import('@/components/sections/AchievementsSection'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), { ssr: false });
const OutroSection = dynamic(() => import('@/components/sections/OutroSection'), { ssr: false });

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <ProjectsSection />
      <div className="section-divider" />
      <ExperienceSection />
      <div className="section-divider" />
      <AchievementsSection />
      <div className="section-divider" />
      <ContactSection />
      <OutroSection />
    </main>
  );
}
