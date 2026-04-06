import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-0 py-4">
      <nav
        className={`mx-4 flex w-[calc(100%-2rem)] items-center justify-between rounded-[1.75rem] border px-4 py-3 transition duration-300 sm:mx-6 sm:w-[calc(100%-3rem)] sm:px-5 lg:mx-8 lg:w-[calc(100%-4rem)] lg:px-6 ${
          scrolled
            ? 'border-white/10 bg-[rgba(9,19,29,0.42)] shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-2xl'
            : 'border-white/10 bg-[rgba(9,19,29,0.26)] backdrop-blur-2xl'
        }`}
      >
        <Link to="/" className="rounded-full pr-4 text-white transition duration-300 hover:opacity-95">
          <span className="font-display text-lg font-bold tracking-wide text-white">
            Shamanth S. Kumbar
          </span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 ${
                location.pathname === link.to
                  ? 'bg-white text-[#09131d] shadow-[0_8px_24px_rgba(255,255,255,0.16)]'
                  : 'text-white/70 hover:bg-white/8 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-2xl border border-white/10 bg-white/5 p-2.5 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mt-3 rounded-[1.75rem] border border-white/10 bg-[#071521]/95 p-3 shadow-soft backdrop-blur-2xl md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block rounded-2xl px-4 py-3 text-sm font-medium transition duration-300 ${
                location.pathname === link.to
                  ? 'bg-white text-[#09131d]'
                  : 'text-white/85 hover:bg-white/8 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
