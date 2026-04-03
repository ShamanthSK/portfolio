import { motion } from 'framer-motion';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyanGlow/30 hover:bg-white/8"
    >
      <div className="flex items-center gap-4">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyanGlow">
          {project.year}
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl text-white">{project.title}</h3>
      <p className="mt-4 text-white/68">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-black/25 px-3 py-2 text-xs font-medium text-white/70"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
