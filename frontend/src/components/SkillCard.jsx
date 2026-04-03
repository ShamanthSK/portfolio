import { motion } from 'framer-motion';

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur"
    >
      <p className="text-sm uppercase tracking-[0.28em] text-goldGlow">{skill.category}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/8 bg-black/20 px-4 py-2 text-sm text-white/80"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCard;
