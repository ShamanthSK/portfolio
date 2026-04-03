import portfolioData from '../data/portfolioData';

function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-white/8 px-4 py-8 text-white/55 sm:px-6 lg:px-8">
      <div className="flex w-full flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>Designed to showcase engineering, design, and AI-driven work.</p>
        <p>{personal.email}</p>
      </div>
    </footer>
  );
}

export default Footer;
