import portfolioData from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <main className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="w-full rounded-[2.5rem] border border-white/10 bg-white/4 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-cyanGlow">Projects</p>
        <h1 className="mt-4 font-display text-5xl text-white">
          Product-focused builds across AI, web, and experience design.
        </h1>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
