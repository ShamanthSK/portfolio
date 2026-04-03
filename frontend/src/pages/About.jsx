import portfolioData from '../data/portfolioData';

function About() {
  const { personal, about, achievements } = portfolioData;

  return (
    <main className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="w-full rounded-[2.5rem] border border-white/10 bg-white/6 p-8 backdrop-blur sm:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-cyanGlow">About Me</p>
        <h1 className="mt-4 font-display text-5xl text-white">{personal.name}</h1>
        <p className="mt-4 text-lg leading-8 text-white/72">{about.bio}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {achievements.map((achievement) => (
            <div key={achievement} className="rounded-[1.75rem] bg-black/20 p-5 text-white/75">
              {achievement}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default About;
