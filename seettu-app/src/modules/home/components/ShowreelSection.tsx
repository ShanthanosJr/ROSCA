import { useEffect, useRef, useState } from 'react';

export function ShowreelSection() {
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
    <section id="showreel" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Huge Headline */}
        <div className={`mb-16 md:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2
            className="text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[1.05] text-navy-ink max-w-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Community savings should feel{' '}
            <em className="text-accent" style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic' }}>
              secure
            </em>
          </h2>
        </div>

        {/* Video Placeholder Container */}
        <div 
          className={`relative w-full aspect-video md:aspect-[21/9] rounded-[32px] overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
            alt="People planning together securely" 
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-navy-ink/20" />

          {/* Central Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="ml-2 text-navy-ink">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
