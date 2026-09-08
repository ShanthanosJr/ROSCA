import { Link } from 'react-router-dom';
import { Button } from '../../../design-system/components/Button';

/**
 * Hero Section — Style Guide §6.4 + mixed-type headline
 * "Track *every* contribution" + floating contribution summary card preview
 * Uses warm community photography as the emotional anchor (§7)
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col bg-navy-ink"
    >
      {/* Background image with gradient overlay — §7 */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
          alt="Community savings circle"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text legibility — §7 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,26,34,0.3) 0%, rgba(20,26,34,0.6) 50%, rgba(20,26,34,0.9) 100%)',
          }}
        />
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center mt-16">
        <div className="animate-fade-in-up flex flex-col items-center max-w-4xl">
          {/* Caption/label */}
          <p
            className="text-sm font-medium uppercase tracking-[0.2em] mb-6 text-accent"
          >
            Community Savings
          </p>

          {/* Mixed-type headline */}
          <h1 className="text-white leading-[1.1] mb-8 w-full">
            <span
              className="block text-[clamp(3rem,8vw,6rem)] font-extrabold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Track{' '}
              <em
                className="not-italic text-accent"
                style={{
                  fontFamily: 'var(--font-accent)',
                  fontStyle: 'italic',
                }}
              >
                every
              </em>
            </span>
            <span
              className="block text-[clamp(3rem,8vw,6rem)] font-extrabold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              contribution
            </span>
          </h1>
        </div>
      </div>

      {/* Absolute Bottom Elements (Left: Button, Center: Card, Right: Pagination) */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 h-[120px] md:h-[160px] flex items-end pb-8 md:pb-12">
        {/* Left: Button */}
        <div className="flex-1 flex justify-start hidden md:flex">
          <Link to="/login">
            <Button className="inline-flex items-center h-[56px] px-8 bg-white text-navy-ink hover:scale-[1.02]">
              Get Started Free
              <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Button>
          </Link>
        </div>

        {/* Center: Floating Card */}
        <div className="flex-1 flex justify-center translate-y-12 md:translate-y-24">
          <div
            className="w-full max-w-[340px] rounded-[24px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.4)] border border-white/10"
            style={{ background: 'rgba(20,26,34,0.85)', backdropFilter: 'blur(24px)' }}
          >
            {/* Card header */}
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-white text-sm font-semibold">Office Seettu</p>
                    <p className="text-muted-gray text-xs">Monthly · 8 members</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-[999px] text-[11px] font-semibold bg-accent/15 text-accent">
                  Active
                </span>
              </div>

              {/* Amount */}
              <div className="mb-4 text-left">
                <p className="text-muted-gray text-xs mb-1">Your contribution</p>
                <p className="text-white text-3xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  LKR 5,000
                </p>
              </div>

              {/* Status row */}
              <div className="flex items-center gap-2 mb-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-accent text-sm font-medium">Payment confirmed</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/10" />

            {/* Card footer */}
            <div className="p-6 pt-4 flex items-center justify-between text-left">
              <div>
                <p className="text-muted-gray text-xs mb-0.5">Next cycle</p>
                <p className="text-white text-sm font-medium">Sep 15, 2026</p>
              </div>
              <div className="text-right">
                <p className="text-muted-gray text-xs mb-0.5">Your turn</p>
                <p className="text-white text-sm font-medium">#3 of 8</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Pagination/Controls */}
        <div className="flex-1 flex justify-end hidden md:flex items-center gap-4">
          <span className="text-white/60 text-sm font-medium">01 / 03</span>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile CTA (shown only on small screens since left button is hidden) */}
      <div className="w-full flex justify-center pb-8 md:hidden relative z-20">
          <Link to="/login">
            <Button className="inline-flex items-center h-[52px] px-8 bg-white text-navy-ink">
              Get Started Free
            </Button>
          </Link>
      </div>
    </section>
  );
}
