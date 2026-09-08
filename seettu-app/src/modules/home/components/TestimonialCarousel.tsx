import { useRef, useState, useEffect } from 'react';

/**
 * Testimonial Carousel — Style Guide §6.7
 * Horizontal scroll carousel of member/organizer success stories
 * Mix of text cards and full-image cards as per Framer design
 */

const testimonials = [
  {
    type: 'text',
    quote: 'Before Seettu, I never knew if my payment was actually recorded. Now I get instant confirmation and can see the complete history. It changed everything for our office group.',
    name: 'Nadeeshi Perera',
    role: 'Member · Office Seettu',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
  },
  {
    type: 'image',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    quote: 'No more spreadsheets, no more arguments about who paid what.',
    name: 'Kasun Fernando',
    role: 'Organizer',
  },
  {
    type: 'text',
    quote: 'The offline feature is a game-changer. I record payments even when we meet in areas with poor signal, and it syncs perfectly later.',
    name: 'Amaya Silva',
    role: 'Member · Neighborhood Seettu',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
  },
  {
    type: 'text',
    quote: 'Trust was always the biggest issue with our seettu. The verified records gave everyone peace of mind — disputes dropped to zero since we started using the app.',
    name: 'Ruwan Jayawardena',
    role: 'Organizer · Traders\' Group',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
  },
  {
    type: 'image',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    quote: 'I can finally see my turn order and plan ahead.',
    name: 'Dilini W.',
    role: 'Member',
  },
];

export function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[0] as HTMLElement;
    if (!card) return;
    const scrollAmount = card.offsetWidth + 24; 
    const newScroll = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    scrollRef.current.scrollTo({ left: newScroll, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[0] as HTMLElement;
    if (!card) return;
    const idx = Math.round(scrollRef.current.scrollLeft / (card.offsetWidth + 24));
    setActiveIndex(idx);
  };

  return (
    <section className="py-24 md:py-32 bg-[#F4F3F1]">
      <div ref={sectionRef} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header with navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A8F98] mb-4">
              Success Stories
            </p>
            <h2
              className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.1] text-[#141A22] max-w-2xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Trusted by communities across the{' '}
              <em style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', color: '#3DDC97' }}>
                country
              </em>
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-[rgba(20,26,34,0.12)] flex items-center justify-center bg-transparent hover:bg-[#141A22] hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer text-[#141A22]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full bg-[#141A22] flex items-center justify-center text-white cursor-pointer hover:bg-[#3DDC97] hover:scale-105 transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className={`flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 scrollbar-hide ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-12'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, idx) => (
            t.type === 'text' ? (
              <div
                key={idx}
                className="flex-shrink-0 w-[340px] md:w-[420px] rounded-[32px] p-8 md:p-10 snap-start bg-white shadow-sm border border-[rgba(20,26,34,0.04)] flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2"
                style={{ minHeight: '480px' }}
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    {/* SVG Quote mark */}
                    <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                      <path d="M11 14H6V9H11V14ZM23 14H18V9H23V14Z" fill="#3DDC97" fillOpacity="0.2"/>
                      <path d="M11 14C11 17 9 19 6 19M23 14C23 17 21 19 18 19" stroke="#3DDC97" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {/* Top Right Avatar */}
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                  </div>
                  <p className="text-[19px] leading-relaxed text-[#141A22] font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-8">
                  <p className="text-base font-bold text-[#141A22]">{t.name}</p>
                  <p className="text-[13px] text-[#8A8F98] mt-1">{t.role}</p>
                </div>
              </div>
            ) : (
              <div
                key={idx}
                className="flex-shrink-0 w-[340px] md:w-[420px] rounded-[32px] overflow-hidden snap-start relative group cursor-pointer transition-transform duration-500 hover:-translate-y-2"
                style={{ minHeight: '480px' }}
              >
                <img src={t.image} alt={t.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141A22]/90 via-[#141A22]/20 to-transparent p-8 md:p-10 flex flex-col justify-end">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                     </div>
                  </div>
                  <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xl leading-relaxed text-white font-medium mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                      "{t.quote}"
                    </p>
                    <p className="text-base font-bold text-white">{t.name}</p>
                    <p className="text-[13px] text-white/70 mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Dot pagination */}
        <div className="flex justify-center gap-3 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`h-2.5 rounded-full transition-all duration-300 border-none cursor-pointer ${
                idx === activeIndex ? 'bg-[#141A22] w-8' : 'bg-[#141A22]/20 w-2.5 hover:bg-[#141A22]/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => {
                if (!scrollRef.current) return;
                const card = scrollRef.current.children[0] as HTMLElement;
                if (!card) return;
                scrollRef.current.scrollTo({ left: idx * (card.offsetWidth + 24), behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
