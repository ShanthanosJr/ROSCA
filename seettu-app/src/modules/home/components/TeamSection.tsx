import { useEffect, useRef, useState } from 'react';

/**
 * Team Section — Style Guide §6.8
 * "Meet the organizers" module.
 * Blue background, large ghost text, staggered portrait cards.
 */

const teamMembers = [
  {
    name: 'AMAYA FERNANDO',
    role: 'Community Lead',
    image: '/images/hero-community.jpg',
    offset: 'mt-0',
  },
  {
    name: 'KASUN SILVA',
    role: 'Trust & Safety',
    image: '/images/hero-community.jpg',
    offset: 'mt-12 md:mt-24',
  },
  {
    name: 'NADEESHI PERERA',
    role: 'Organizer Support',
    image: '/images/hero-community.jpg',
    offset: 'mt-6 md:mt-12',
  },
  {
    name: 'RUWAN J.',
    role: 'Financial Operations',
    image: '/images/hero-community.jpg',
    offset: 'mt-16 md:mt-32',
  },
];

export function TeamSection() {
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
    <section id="team" className="relative overflow-hidden bg-powder-blue py-28 md:py-40">
      {/* Background ghost text */}
      <div 
        className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 select-none text-[clamp(8rem,20vw,24rem)] font-extrabold leading-none tracking-tighter text-white/20"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Organizers
      </div>

      <div ref={ref} className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-deep mb-4">
            Team
          </p>
          <h2
            className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.1] text-navy-ink"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Meet our{' '}
            <em className="text-teal-deep" style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic' }}>
              experts
            </em>
          </h2>
        </div>

        {/* 4-Column Staggered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`flex flex-col group ${member.offset} ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 150}ms`, transitionDuration: '700ms' }}
            >
              {/* Photo */}
              <div className="w-full aspect-[3/4] rounded-[32px] overflow-hidden mb-6 bg-white shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: 'grayscale(20%) sepia(10%)' }} // slightly warm editorial look
                />
              </div>

              {/* Text */}
              <div className="px-2 text-center">
                <h3
                  className="text-lg font-bold tracking-widest text-navy-ink mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {member.name}
                </h3>
                <p className="text-[15px] text-muted-gray">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
