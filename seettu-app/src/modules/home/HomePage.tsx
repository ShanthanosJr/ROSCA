import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ListingsSection } from './components/ListingsSection';
import { DiscoverSection } from './components/DiscoverSection';
import { StatsRow } from './components/StatsRow';
import { ShowreelSection } from './components/ShowreelSection';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { TeamSection } from './components/TeamSection';
import { FAQSection } from './components/FAQSection';
import { InquiryFormSection } from './components/InquiryFormSection';
import { Footer } from './components/Footer';

/**
 * HomePage — assembles all landing page sections in the Foreal editorial order.
 */
export function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ListingsSection />
        <DiscoverSection />
        <StatsRow />
        <ShowreelSection />
        <TestimonialCarousel />
        <TeamSection />
        <FAQSection />
        <InquiryFormSection />
      </main>
      <Footer />
    </div>
  );
}
