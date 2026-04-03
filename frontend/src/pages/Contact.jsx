import portfolioData from '../data/portfolioData';

function Contact() {
  const { personal, contact } = portfolioData;

  return (
    <main className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/6 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyanGlow">Contact</p>
          <h1 className="mt-4 font-display text-5xl text-white">{contact.headline}</h1>
          <p className="mt-4 text-lg leading-8 text-white/72">{contact.subtext}</p>
        </div>

        <div className="rounded-[2.5rem] border border-white/10 bg-white/6 p-8">
          <div className="grid gap-5">
            <div className="rounded-[1.75rem] bg-black/20 p-5">
              <p className="text-sm text-white/50">Email</p>
              <p className="mt-2 text-lg text-white">{personal.email}</p>
            </div>
            <div className="rounded-[1.75rem] bg-black/20 p-5">
              <p className="text-sm text-white/50">Phone</p>
              <p className="mt-2 text-lg text-white">{personal.phone}</p>
            </div>
            <div className="rounded-[1.75rem] bg-black/20 p-5">
              <p className="text-sm text-white/50">Location</p>
              <p className="mt-2 text-lg text-white">{personal.location}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
