import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import certificates from '../data/certificates';

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut', staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function CertificatePreview({ certificate }) {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#071521] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-500 group-hover:border-cyanGlow/25">
      <div className="aspect-[16/10] w-full">
        {imageLoaded ? (
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate thumbnail`}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            onError={() => setImageLoaded(false)}
          />
        ) : (
          <div className="flex h-full w-full flex-col justify-between bg-[radial-gradient(circle_at_18%_10%,rgba(110,231,249,0.14),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(255,209,102,0.1),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-5">
            <div className="flex items-center justify-between">
              <Award className="text-cyanGlow" size={24} />
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                {certificate.year}
              </span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-goldGlow">
                Certificate
              </p>
              <p className="mt-2 font-display text-xl leading-tight text-white">
                {certificate.title}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06131f]/60 via-transparent to-white/5" />
    </div>
  );
}

function CertificationCard({ certificate }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group relative h-full overflow-hidden rounded-[1.75rem] bg-white/10 p-px"
    >
      <div className="absolute inset-0 opacity-0 blur-2xl transition duration-700 group-hover:opacity-70">
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_0%,rgba(110,231,249,0.22),transparent_46%)]" />
      </div>

      <div className="relative flex h-full min-h-[29rem] flex-col rounded-[1.7rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition duration-500 ease-out group-hover:border-cyanGlow/25 group-hover:bg-white/8 group-hover:shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:p-5">
        <CertificatePreview certificate={certificate} />

        <div className="flex flex-1 flex-col pt-5">
          <div className="flex min-h-[2rem] flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyanGlow">
              {certificate.year}
            </span>
            <span className="text-sm text-white/55">{certificate.issuer}</span>
          </div>

          <h3
            className="mt-4 min-h-[4.25rem] overflow-hidden font-display text-xl leading-tight text-white sm:text-2xl"
          >
            {certificate.title}
          </h3>

          <div className="mt-5 flex min-h-[4.5rem] flex-wrap content-start gap-2">
            {certificate.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs font-medium text-white/72"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <a
              href={certificate.pdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white px-4 py-3 text-sm font-bold text-[#07131f] shadow-[0_14px_30px_rgba(255,255,255,0.1)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-cyanGlow hover:shadow-[0_18px_38px_rgba(110,231,249,0.18)] sm:w-auto"
            >
              View Certificate
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Certifications() {
  const previewCount = 4;
  const featuredCertificates = certificates.slice(0, previewCount);
  const remainingCertificates = certificates.slice(previewCount);
  const hiddenCount = certificates.length - previewCount;

  return (
    <section id="certifications" className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/4 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.18)] backdrop-blur sm:p-8 lg:p-10"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanGlow/70 to-transparent" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyanGlow/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-16 h-72 w-72 rounded-full bg-tealGlow/8 blur-3xl" />

        <div className="relative max-w-4xl">
          <div className="max-w-4xl">
            <motion.p
              variants={cardVariants}
              className="text-sm uppercase tracking-[0.3em] text-cyanGlow"
            >
              Credentials
            </motion.p>
            <motion.h2
              variants={cardVariants}
              className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl"
            >
              Certifications & Achievements
            </motion.h2>
            <motion.p variants={cardVariants} className="mt-4 text-lg leading-8 text-white/68">
              Industry certifications, hackathons, and technical achievements showcasing
              expertise in AI, cloud, and full-stack development.
            </motion.p>
            <motion.p variants={cardVariants} className="mt-5 text-sm font-semibold text-cyanGlow">
              Showing {previewCount} featured certificates. Use Show More to view all{' '}
              {certificates.length}.
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={sectionVariants}
          className="relative mt-12 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {featuredCertificates.map((certificate) => (
            <CertificationCard key={certificate.title} certificate={certificate} />
          ))}
        </motion.div>

        <details className="group/details relative mt-10">
          <summary className="mx-auto inline-flex w-full cursor-pointer list-none items-center justify-center gap-2 rounded-2xl border border-cyanGlow/25 bg-cyanGlow/10 px-5 py-3 text-center text-sm font-bold text-cyanGlow shadow-[0_0_32px_rgba(110,231,249,0.1)] transition duration-300 ease-out hover:-translate-y-1 hover:border-cyanGlow/50 hover:bg-cyanGlow/15 hover:shadow-[0_0_42px_rgba(110,231,249,0.18)] group-open/details:mb-10 sm:w-auto">
            <ChevronDown
              size={17}
              className="transition duration-300 group-open/details:hidden"
            />
            <ChevronUp
              size={17}
              className="hidden transition duration-300 group-open/details:block"
            />
            <span className="group-open/details:hidden">
              Show More Certificates ({hiddenCount} more)
            </span>
            <span className="hidden group-open/details:inline">
              Show Fewer Certificates
            </span>
          </summary>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative mt-10 flex items-center gap-4"
          >
            <div className="h-px flex-1 bg-white/10" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
              More Certificates
            </p>
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={sectionVariants}
            className="relative mt-6 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {remainingCertificates.map((certificate) => (
              <CertificationCard key={certificate.title} certificate={certificate} />
            ))}
          </motion.div>
        </details>

        <motion.div
          variants={cardVariants}
          className="relative mt-6 text-center text-sm font-semibold text-white/45"
        >
          {certificates.length} certificates available
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Certifications;
