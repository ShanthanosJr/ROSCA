import { Link } from 'react-router-dom';
import { Container } from '../../../design-system/components/Container';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[760px] h-[min(920px,100svh)] w-full overflow-hidden bg-teal-deep">
      <img
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2200&auto=format&fit=crop"
        alt="Friends gathering around a table"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy-ink/55 via-navy-ink/10 to-navy-ink/60" />

      <Container className="relative z-20 h-full flex flex-col text-white pt-28 pb-8">
        <div className="flex items-center justify-between border-b border-white/35 pb-5 text-sm md:text-base">
          <p className="max-w-[190px] leading-snug">A simpler way to save together</p>
          <p className="hidden md:block">Since 2026</p>
        </div>

        <h1 className="mt-auto max-w-[1200px] text-[clamp(3.25rem,9vw,9rem)] leading-[.86] tracking-[-0.06em] font-semibold">
          Save <em className="font-accent font-medium tracking-[-0.04em]">together.</em><br />
          Move <span className="text-powder-blue">forward.</span>
        </h1>

        <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <Link to="/register" className="inline-flex w-fit items-center rounded-[10px] bg-white px-7 py-4 font-semibold text-navy-ink transition-transform hover:-translate-y-1">
            Start a savings circle <span className="ml-6 text-xl">↗</span>
          </Link>
          <p className="max-w-[290px] text-sm leading-relaxed text-white/80 md:text-right">
            Join trusted groups, keep every contribution visible, and reach your goals one cycle at a time.
          </p>
        </div>
      </Container>

    </section>
  );
}
