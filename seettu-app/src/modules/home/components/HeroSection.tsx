import { Link } from 'react-router-dom';
import { Container } from '../../../design-system/components/Container';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[760px] h-[min(960px,100svh)] w-full overflow-hidden bg-teal-deep">
      <img
        src="/images/hero-community.jpg"
        alt="People gathered around a table"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy-ink/55 via-teal-deep/10 to-navy-ink/60" />

      <Container className="relative z-20 h-full flex flex-col text-white pt-28 pb-8">
        <div className="flex items-center justify-between border-b border-white/35 pb-5 text-sm md:text-base">
          <p className="max-w-[210px] leading-snug">A trusted way to save with your people</p>
          <p className="hidden md:block">Since 2026</p>
        </div>

        <h1 className="mt-auto max-w-[1300px] text-[clamp(3.8rem,10vw,10rem)] font-medium leading-[.84] tracking-[-0.07em]">
          Save <em className="font-accent font-normal tracking-[-0.04em]">together.</em><br />
          Grow <span className="text-powder-blue">forward.</span>
        </h1>

        <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <Link to="/register" className="inline-flex w-fit items-center rounded-[12px] bg-white px-7 py-4 text-lg font-medium text-navy-ink transition-transform hover:-translate-y-1">
            Start a savings circle <span className="ml-8 text-xl">↗</span>
          </Link>
          <p className="max-w-[310px] text-base leading-relaxed text-white/80 md:text-right">
            Join trusted groups, keep every contribution visible, and reach your goals one cycle at a time.
          </p>
        </div>
      </Container>

    </section>
  );
}
