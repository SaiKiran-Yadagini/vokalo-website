import React from 'react';
import { cn } from '@/lib/utils';

interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'top' | 'above' | 'bottom' | 'below' | 'center';
}

const Glow = React.forwardRef<HTMLDivElement, GlowProps>(
    ({ className, variant = 'top', ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                'absolute w-full pointer-events-none',
                variant === 'top' && 'top-0',
                variant === 'above' && '-top-[128px]',
                variant === 'bottom' && 'bottom-0',
                variant === 'below' && '-bottom-[128px]',
                variant === 'center' && 'top-[50%]',
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    'absolute left-1/2 h-[300px] w-[70%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(139,0,0,.4)_0%,_rgba(139,0,0,0)_70%)] sm:h-[600px] blur-3xl',
                    variant === 'center' && '-translate-y-1/2'
                )}
            />
        </div>
    )
);

Glow.displayName = 'Glow';

export { Glow };
