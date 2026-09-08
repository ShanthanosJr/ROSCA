import { useEffect, useRef, useState } from 'react';

/**
 * Discover Section — Style Guide §6.5 & §4
 * Powder blue background with left cards and right text/image.
 * Maps to: "01 Join Group, 02 Contribute, 03 Get Verified"
 */

const steps = [
  {
    number: '01',
    title: 'Join a Group',
    description: 'Create or join a savings circle with people you trust. Set the contribution amount, frequency, and duration that works for your group.',
  },
  {
    number: '02',
    title: 'Contribute',
    description: 'Make your regular contributions on time. Every member chips in, building a substantial lump sum over time.',
  },
  {
    number: '03',
    title: 'Get Verified',
    description: 'Instant confirmation when your payment is received. Every transaction is immutable and tamper-evident.',
  },
];

export function DiscoverSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden bg-[#C7DBE3]">
      
      {/* Giant Ghost Text */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 text-[clamp(10rem,25vw,30rem)] font-extrabold text-white/30 select-none pointer-events-none leading-none tracking-tighter"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Seettu
      </div>

      <div ref={ref} className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`bg-[#141A22] rounded-[24px] p-8 md:p-10 shadow-2xl transition-all duration-700 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${i * 150}ms`,
                  marginLeft: i === 1 ? '1rem' : i === 2 ? '2rem' : '0',
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-white text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                    {step.title}
                  </h3>
                  <span className="text-[#3DDC97] text-xl font-bold">{step.number}</span>
                </div>
                <p className="text-[#8A8F98] leading-relaxed text-[15px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Title and Image */}
          <div className="lg:col-span-7 flex flex-col lg:pl-12">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#3E7B8C] mb-4">
                About Us
              </p>
              <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-[#141A22] leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                We make community savings{' '}
                <em style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', color: 'rgba(20,26,34,0.7)' }}>
                  transparent
                </em>
              </h2>
              <p className="text-lg text-[#141A22]/70 leading-relaxed mb-12 max-w-xl">
                Seettu digitizes traditional ROSCA savings groups. With automated tracking, transparent ledgers, and verified members, we're bringing community trust to the digital age.
              </p>
            </div>

            {/* Huge Image */}
            <div className={`relative rounded-[32px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.15)] transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1169&auto=format&fit=crop"
                alt="Community savings app interface"
                className="w-full h-auto aspect-[4/3] md:aspect-[16/10] object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
