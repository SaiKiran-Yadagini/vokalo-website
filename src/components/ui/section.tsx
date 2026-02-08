import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    containerClassName?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, containerClassName, children, ...props }, ref) => (
        <section
            ref={ref}
            className={cn(
                'relative overflow-hidden py-20 sm:py-24 md:py-32 bg-[#0a0404] text-[#e8d4d4]',
                className
            )}
            {...props}
        >
            <div className={cn('container mx-auto px-4 sm:px-6 relative z-10', containerClassName)}>
                {children}
            </div>
        </section>
    )
);

Section.displayName = 'Section';

export { Section };
