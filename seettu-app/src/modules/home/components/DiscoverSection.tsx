import { useEffect, useRef, useState } from 'react';
import { Section, Container } from '../../../design-system/components/Container';

const steps = [
  { number: '01', title: 'Join a Group', description: 'Create or join a savings circle with people you trust. Set the contribution amount, frequency, and duration that works for your group.' },
  { number: '02', title: 'Contribute', description: 'Make your regular contributions on time. Every member chips in, building a substantial lump sum over time.' },
  { number: '03', title: 'Get Verified', description: 'Instant confirmation when your payment is received. Every transaction is immutable and tamper-evident.' },
];

export function DiscoverSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="how-it-works" className="bg-powder-blue" withContainer={false}>
      {/* Ghost text pinned BEHIND everything at z-0, low opacity, clipped by
          the section's overflow-hidden so it never collides with content. */}
      <span
        aria-hidden
        className="absolute z-0 top-8 left-1/2 -translate-x-1/2 text-[18vw] font-bold text-navy-ink/5 select-none whitespace-nowrap leading-none"
      >
        Seettu
      </span>

      <Container ref={ref} className="relative z-10 grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">
        {/* Left: step cards */}
        <div className="relative min-h-[640px] lg:min-h-[720px]">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`absolute left-0 w-[82%] overflow-hidden rounded-[22px] border-[10px] border-navy-ink bg-navy-ink p-7 text-white shadow-xl transition-all duration-700 md:p-9 ${i === 0 ? 'top-0' : i === 1 ? 'top-[29%] left-[12%]' : 'top-[58%] left-[5%]'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 120}ms`, minHeight: i === 1 ? '230px' : '210px' }}
            >
              <div className="mb-8 flex items-start justify-between">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <span className="text-sm font-bold text-accent">{step.number}</span>
              </div>
              <p className="max-w-[360px] text-base leading-relaxed text-white/65">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Right: heading + image */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold tracking-wide text-navy-ink/60 uppercase">About Us</span>
          <h2 className="text-[clamp(2.75rem,5vw,5rem)] leading-[.95] tracking-[-0.055em] font-medium text-navy-ink">
            Community savings should feel <em className="font-accent italic text-teal-deep">transparent.</em>
          </h2>
          <p className="text-muted-gray leading-relaxed max-w-md">
            Seettu digitizes traditional ROSCA savings groups. With automated tracking, transparent ledgers, and verified members, we're bringing community trust to the digital age.
          </p>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
            alt="Community savings"
            className="mt-2 h-[320px] w-full rounded-[22px] object-cover"
          />
        </div>
      </Container>
    </Section>
  );
}
