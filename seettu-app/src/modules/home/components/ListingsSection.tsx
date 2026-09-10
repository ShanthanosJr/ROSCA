import { useState } from 'react';
import { Button } from '../../../design-system/components/Button';
import { Badge } from '../../../design-system/components/Badge';

/**
 * Listings Section (Groups) — Style Guide §6.4 property-card pattern
 * Displays active Seettu circles in a 3-column grid.
 */

const GROUPS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1170&auto=format&fit=crop',
    title: 'Office Seettu 2026',
    location: 'Colombo 03',
    frequency: 'MONTHLY',
    status: 'OPEN',
    members: 12,
    duration: '12 Months',
    contribution: 'LKR 10,000',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1170&auto=format&fit=crop',
    title: 'Family & Friends Fund',
    location: 'Dehiwala',
    frequency: 'WEEKLY',
    status: 'IN PROGRESS',
    members: 10,
    duration: '10 Weeks',
    contribution: 'LKR 2,000',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop',
    title: 'Entrepreneurs Circle',
    location: 'Nugegoda',
    frequency: 'MONTHLY',
    status: 'OPEN',
    members: 5,
    duration: '5 Months',
    contribution: 'LKR 50,000',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1170&auto=format&fit=crop',
    title: 'Tech Startup Syndicate',
    location: 'Rajagiriya',
    frequency: 'MONTHLY',
    status: 'OPEN',
    members: 8,
    duration: '8 Months',
    contribution: 'LKR 25,000',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1170&auto=format&fit=crop',
    title: 'Neighborhood Trust',
    location: 'Mount Lavinia',
    frequency: 'BI-WEEKLY',
    status: 'IN PROGRESS',
    members: 24,
    duration: '12 Months',
    contribution: 'LKR 5,000',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop',
    title: 'Alumni Network Pool',
    location: 'Colombo 07',
    frequency: 'MONTHLY',
    status: 'OPEN',
    members: 20,
    duration: '20 Months',
    contribution: 'LKR 15,000',
  },
];

export function ListingsSection() {
  const [filter, setFilter] = useState<'ALL' | 'OPEN' | 'IN PROGRESS'>('ALL');

  const filteredGroups = GROUPS.filter(g => filter === 'ALL' || g.status === filter);

  return (
    <section id="groups" className="bg-off-white py-24 md:py-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-gray mb-3">
              Groups
            </p>
            <h2
              className="text-[clamp(2.75rem,6vw,5.5rem)] font-medium leading-[.95] tracking-[-0.055em] text-navy-ink"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Explore active savings{' '}
              <em className="text-accent" style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic' }}>
                circles
              </em>
            </h2>
          </div>

          <div className="mt-8 inline-flex rounded-[999px] border border-[rgba(20,26,34,0.10)] bg-white p-1 shadow-sm">
            {['ALL', 'OPEN', 'IN PROGRESS'].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t as any)}
                className={`px-6 py-2.5 rounded-[999px] text-[13px] font-bold tracking-wide transition-all duration-200 ${
                  filter === t
                    ? 'bg-navy-ink text-white shadow-md'
                    : 'bg-transparent text-muted-gray hover:text-navy-ink'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGroups.map((group, i) => (
            <div
              key={group.id}
              className="overflow-hidden rounded-[18px] border border-[rgba(20,26,34,0.08)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(20,26,34,0.10)] animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image Header with Tags */}
              <div className="relative aspect-[1.2] overflow-hidden bg-[#E2E8F0]">
                <img
                  src={group.image}
                  alt={group.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge className="bg-mustard-tag text-white px-3 py-1.5">
                    {group.frequency}
                  </Badge>
                  <Badge className="bg-white text-navy-ink px-3 py-1.5">
                    {group.status}
                  </Badge>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8">
                <h3
                  className="text-2xl font-bold text-navy-ink mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {group.title}
                </h3>
                
                {/* Location Line */}
                <div className="flex items-center text-muted-gray mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium">{group.location}</span>
                </div>

                <div className="h-px bg-[rgba(20,26,34,0.06)] w-full mb-6" />

                {/* Metadata Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2 text-navy-ink">
                      <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className="text-[13px] font-semibold">{group.members}</span>
                    </div>
                    <div className="flex items-center gap-2 text-navy-ink">
                      <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[13px] font-semibold">{group.duration}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-[15px] font-bold text-navy-ink">{group.contribution}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <Button variant="secondary" className="inline-flex items-center h-[52px] px-8 text-[15px] transition-transform hover:scale-[1.02]">
            View All Groups
          </Button>
        </div>
      </div>
    </section>
  );
}
