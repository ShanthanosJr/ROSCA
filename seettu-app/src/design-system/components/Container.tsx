/**
 * Layout Primitives — place at: src/design-system/components/Container.tsx
 *
 * THIS IS THE MISSING PIECE that caused the "stacked blocks" problem.
 * Every section in the Foreal template shares the SAME max-width and
 * horizontal margin. Your components never shared this, so every
 * section had a different effective width -> jarring, unaligned page.
 *
 * Usage:
 *   <Section className="bg-white">
 *     <Container>...content...</Container>
 *   </Section>
 */
import { ReactNode, forwardRef } from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

/** Horizontal width + margin lock. Use inside every Section. */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className = '', ...props }, ref) => {
    return <div ref={ref} className={`mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16 ${className}`} {...props}>{children}</div>;
  }
);

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** Set false for full-bleed background sections (image/video backgrounds) */
  withContainer?: boolean;
  id?: string;
}

/**
 * Vertical rhythm lock. Every top-level section on the page should be
 * wrapped in <Section>, never a raw <div> or <section> with ad-hoc padding.
 * This is what turns "sections stacked awkwardly" into a continuous,
 * intentional-feeling page like Foreal's.
 */
export function Section({ children, className = '', withContainer = true, id }: SectionProps) {
  return (
    <section id={id} className={`relative w-full py-20 md:py-28 lg:py-32 overflow-hidden ${className}`}>
      {withContainer ? <Container>{children}</Container> : children}
    </section>
  );
}
