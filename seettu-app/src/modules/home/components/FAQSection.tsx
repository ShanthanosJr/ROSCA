import { useState, useRef, useEffect } from 'react';

/**
 * FAQ Section — Style Guide §6.9
 * Accordion with diagonal arrow that rotates on expand
 * Left column: label + heading + avatar-stack/arrow combo
 * Right column: stacked white rounded-rect rows
 */

const faqs = [
  {
    question: 'What is a seettu (ROSCA)?',
    answer:
      'A seettu (also called a ROSCA — Rotating Savings and Credit Association) is a traditional community savings system where a group of trusted members contribute a fixed amount regularly. Each cycle, one member receives the full pool. It\'s a time-tested way to save collectively.',
  },
  {
    question: 'How does Seettu ensure my payment is verified?',
    answer:
      'Every payment is recorded with a timestamp, method, and the recorder\'s identity. Records are append-only and tamper-evident — once confirmed, they cannot be edited or deleted. You receive instant confirmation the moment your payment is recorded.',
  },
  {
    question: 'Can I use Seettu without internet?',
    answer:
      'Yes. Seettu is built offline-first. You can record payments, check your dashboard, and view your history even without an internet connection. Everything syncs automatically when connectivity is restored.',
  },
  {
    question: 'How is the turn order decided?',
    answer:
      'Turn order can be set in three ways: fixed (predetermined sequence), lottery (random draw each cycle), or organizer-decided. The full turn order is visible to all members at all times for complete transparency.',
  },
  {
    question: 'Is Seettu free to use?',
    answer:
      'Seettu is completely free for members and organizers. We believe transparent savings should be accessible to everyone. There are no hidden fees, no premium tiers — just a better way to manage your savings circle.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    <section id="faq" className="py-20 md:py-32 bg-[#F4F3F1]">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className={`grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          {/* Left column — §6.9 */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8A8F98] mb-3">
              FAQ
            </p>
            <h2
              className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-[#141A22] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Frequently{' '}
              <em style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', color: '#3DDC97' }}>
                asked
              </em>{' '}
              questions
            </h2>
            <p className="text-[#8A8F98] text-sm leading-relaxed mb-8">
              Everything you need to know about using Seettu for your savings circle. Can't find what you're looking for? Reach out to us.
            </p>

            {/* Avatar stack + circular arrow CTA — §5, §6.9 */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['KF', 'NP', 'AS'].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full bg-[#141A22] text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#F4F3F1]"
                    style={{ zIndex: 3 - i }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-sm text-[#141A22] font-medium">Still have questions?</span>
              <a
                href="#contact"
                className="w-8 h-8 rounded-full bg-[#141A22] text-white flex items-center justify-center no-underline hover:bg-[#3DDC97] transition-colors duration-200"
                aria-label="Contact us"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column — Accordion rows — §6.9 */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-[20px] overflow-hidden border border-[rgba(20,26,34,0.06)] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(20,26,34,0.06)]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 bg-transparent border-none cursor-pointer text-left"
                >
                  <span className="text-[15px] font-semibold text-[#141A22] pr-4">{faq.question}</span>
                  {/* Diagonal arrow — §5: rotates on expand */}
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#F4F3F1] flex items-center justify-center transition-all duration-300 ${
                      openIndex === i ? 'rotate-180 bg-[#3DDC97]/15' : ''
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke={openIndex === i ? '#3DDC97' : '#141A22'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3l8 8M11 3v8H3" />
                    </svg>
                  </span>
                </button>

                {/* Answer — smooth height animation */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openIndex === i ? '300px' : '0',
                    opacity: openIndex === i ? 1 : 0,
                  }}
                >
                  <div className="px-7 pb-6">
                    <div className="h-px bg-[rgba(20,26,34,0.06)] mb-4" />
                    <p className="text-sm text-[#8A8F98] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
