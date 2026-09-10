import { useRef, useState, useEffect } from 'react';

/**
 * Inquiry Form Section — Style Guide §6.10
 * Replaces CTASection. Full width architectural background image.
 * Centered floating split-panel box (left blue, right white with form).
 * Massive text at the bottom.
 */
export function InquiryFormSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="contact" className="relative flex min-h-[980px] items-center overflow-hidden bg-teal-deep py-28 md:py-40">
      
      {/* Full Width Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-community.jpg"
          alt="Community meeting"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-navy-ink/40" />
      </div>

      {/* Main Content - Floating Box */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 w-full">
        <div className={`mx-auto max-w-5xl overflow-hidden rounded-[30px] border-[8px] border-white shadow-2xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Panel: Blue background with text */}
            <div className="bg-teal-dark p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
              <span 
                className="absolute -top-12 -left-10 text-[180px] font-extrabold leading-none text-white/5 pointer-events-none select-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Trust
              </span>
              
              <div className="relative z-10">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6">
                  Get in touch
                </p>
                <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.1] text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Manage{' '}
                  <em className="text-accent" style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic' }}>
                    your
                  </em>{' '}
                  community
                </h2>
                <p className="text-white/70 text-[15px] leading-relaxed max-w-sm">
                  Whether you're organizing a large neighborhood fund or a small family circle, we're here to help you get started.
                </p>
              </div>
            </div>

            {/* Right Panel: White background with form */}
            <div className="bg-white p-10 md:p-16 flex flex-col justify-center">
              <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                {/* Form fields (underline style) */}
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="name" className="text-xs font-bold text-navy-ink uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-navy-ink/20 pb-3 text-[15px] text-navy-ink placeholder-muted-gray focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="email" className="text-xs font-bold text-navy-ink uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-navy-ink/20 pb-3 text-[15px] text-navy-ink placeholder-muted-gray focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="phone" className="text-xs font-bold text-navy-ink uppercase tracking-wider">Phone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder="+94 77 123 4567"
                    className="w-full bg-transparent border-b border-navy-ink/20 pb-3 text-[15px] text-navy-ink placeholder-muted-gray focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="message" className="text-xs font-bold text-navy-ink uppercase tracking-wider">Message</label>
                  <textarea 
                    id="message"
                    placeholder="How can we help?"
                    rows={2}
                    className="w-full bg-transparent border-b border-navy-ink/20 pb-3 text-[15px] text-navy-ink placeholder-muted-gray focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full h-14 mt-4 rounded-[999px] bg-navy-ink text-white text-[15px] font-bold hover:bg-accent transition-colors duration-300"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>

      {/* Massive bottom text overlaying image */}
      <div 
        className={`absolute bottom-0 left-0 right-0 text-center pointer-events-none transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 
          className="text-[clamp(3rem,7vw,7rem)] font-extrabold leading-[0.86] text-white/90"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Let's build trust together
        </h2>
      </div>

    </section>
  );
}
