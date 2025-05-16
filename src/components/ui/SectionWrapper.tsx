import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
}

export function SectionWrapper({ children, className, id, title, subtitle }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-12 md:py-20", className)}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
