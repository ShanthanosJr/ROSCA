import { useEffect, useRef, useState } from 'react';

/**
 * Stats Row — Style Guide §6.6
 * Overlaps the bottom of the DiscoverSection image.
 */

const stats = [
  {
    value: '250+',
    label: 'Savings Circles',
    description: 'Active groups trusting Seettu for transparent financial management',
    bg: 'bg-[#C7DBE3]',
    textColor: 'text-[#141A22]',
    labelColor: 'text-[#141A22]/70',
  },
  {
    value: '98%',
    label: 'On-Time Rate',
    description: 'Members receive instant confirmation when payments are verified',
    bg: 'bg-white',
    textColor: 'text-[#141A22]',
    labelColor: 'text-[#8A8F98]',
  },
  {
    value: '12M+',
    label: 'Total Saved',
    description: 'Community savings tracked, verified, and secured on Seettu',
    bg: 'bg-[#141A22]',
    textColor: 'text-white',
    labelColor: 'text-white/60',
  },
];

export function StatsRow() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-20 pb-20 md:pb-32 -mt-16 md:-mt-32">
      <div
        ref={ref}
        className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24"
      >
        {/* Three stat cards — §6.6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${stat.bg} rounded-[24px] p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                border: stat.bg === 'bg-white' ? '1px solid rgba(20,26,34,0.08)' : undefined,
                transitionDelay: `${i * 150}ms`
              }}
            >
              <p
                className={`text-[clamp(3rem,6vw,4.5rem)] leading-none font-extrabold mb-4 ${stat.textColor}`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {stat.value}
              </p>
              <p className={`text-xl font-bold mb-3 ${stat.textColor}`} style={{ fontFamily: 'var(--font-display)' }}>
                {stat.label}
              </p>
              <p className={`text-sm leading-relaxed ${stat.labelColor} max-w-[250px]`}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
