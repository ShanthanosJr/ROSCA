import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Features', href: '#groups' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(20,26,34,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 no-underline">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #3DDC97 0%, #2BC480 100%)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <span
            className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-[#141A22]' : 'text-white'
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Seettu
          </span>
        </a>

        {/* Desktop nav links — §6.1: center-aligned, evenly spaced */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium no-underline transition-colors duration-200 hover:opacity-80 ${
                scrolled ? 'text-[#141A22]' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA — §6.1: sole primary CTA in the nav, pill button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className={`inline-flex items-center h-11 px-6 rounded-[999px] text-sm font-semibold no-underline transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${
              scrolled
                ? 'bg-[#141A22] text-white'
                : 'bg-white text-[#141A22]'
            }`}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-5 h-0.5 rounded transition-all duration-200 ${
                scrolled ? 'bg-[#141A22]' : 'bg-white'
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[rgba(20,26,34,0.08)] animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-[#141A22] no-underline hover:text-[#3DDC97] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center h-11 px-6 rounded-[999px] bg-[#141A22] text-white text-sm font-semibold no-underline"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
