/**
 * Footer — Style Guide §6.11
 * Dark background, massive ghost text, 3-column layout.
 */
export function Footer() {
  return (
    <footer className="relative bg-navy-ink pt-24 md:pt-32 pb-8 overflow-hidden">
      
      {/* Massive ghost text background */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 text-[clamp(8rem,25vw,30rem)] font-extrabold text-white/[0.03] select-none pointer-events-none leading-none tracking-tighter"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Seettu
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Top 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-8" style={{ fontFamily: 'var(--font-display)' }}>Menu</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Explore Groups', 'How It Works', 'Features', 'Success Stories', 'FAQ', 'Contact Us'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Address / Contact */}
          <div className="lg:col-span-4">
             <h4 className="text-white font-bold text-lg mb-8" style={{ fontFamily: 'var(--font-display)' }}>Contact</h4>
             
             <div className="mb-8">
               <p className="text-white/60 text-sm leading-relaxed max-w-[200px] mb-2">
                 123 Unity Road,<br />
                 Colombo 03,<br />
                 Sri Lanka
               </p>
               <a href="#" className="text-accent text-sm font-medium hover:underline">Get Directions</a>
             </div>

             <div className="mb-8">
               <p className="text-white/60 text-sm leading-relaxed">
                 <a href="mailto:hello@seettu.lk" className="hover:text-white transition-colors">hello@seettu.lk</a><br />
                 <a href="tel:+94112345678" className="hover:text-white transition-colors">+94 11 234 5678</a>
               </p>
             </div>

             <div>
                <ul className="flex items-center gap-6">
                  {['Instagram', 'LinkedIn', 'Twitter'].map(social => (
                    <li key={social}>
                      <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                        {social}
                      </a>
                    </li>
                  ))}
                </ul>
             </div>
          </div>

          {/* Column 3: Reminders / Newsletter */}
          <div className="lg:col-span-5 lg:pl-12">
            <h4 className="text-white font-bold text-lg mb-8" style={{ fontFamily: 'var(--font-display)' }}>Never Miss a Cycle</h4>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
              Enable email reminders for upcoming payment due dates and turn alerts.
            </p>

            <form className="relative flex items-center border-b border-white/20 pb-3 group" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full bg-transparent text-white placeholder-white/40 text-[15px] focus:outline-none"
              />
              <button 
                type="submit" 
                className="absolute right-0 text-white/40 group-focus-within:text-accent hover:text-accent transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[10px] flex items-center justify-center bg-gradient-to-br from-accent to-[#2BC480]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <span className="text-white text-sm font-medium opacity-90">© 2026 Seettu Platform. All rights reserved.</span>
          </div>

          <div className="text-white/40 text-sm">
            Designed to build trust.
          </div>
        </div>

      </div>
    </footer>
  );
}
