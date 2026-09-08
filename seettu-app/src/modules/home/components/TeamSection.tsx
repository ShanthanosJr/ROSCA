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
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    offset: 'mt-0',
  },
  {
    name: 'KASUN SILVA',
    role: 'Trust & Safety',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    offset: 'mt-12 md:mt-24',
  },
  {
    name: 'NADEESHI PERERA',
    role: 'Organizer Support',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop',
    offset: 'mt-6 md:mt-12',
  },
  {
    name: 'RUWAN J.',
    role: 'Financial Operations',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
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
    <section id="team" className="relative py-24 md:py-32 overflow-hidden bg-powder-blue/30">
      {/* Background ghost text */}
      <div 
        className="absolute top-20 left-1/2 -translate-x-1/2 text-[clamp(8rem,20vw,24rem)] font-extrabold text-teal-deep/5 select-none pointer-events-none leading-none tracking-tighter"
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
