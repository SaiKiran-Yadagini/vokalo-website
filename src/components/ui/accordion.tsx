import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionContextValue {
  openItem: string | null;
  setOpenItem: (value: string | null) => void;
  collapsible?: boolean;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(
  null,
);

interface AccordionItemContextValue {
  value: string;
}

const AccordionItemContext =
  React.createContext<AccordionItemContextValue | null>(null);

export interface AccordionProps {
  type?: 'single';
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Accordion({
  type = 'single', // kept for API compatibility, currently only 'single' is used
  collapsible,
  className,
  children,
}: AccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  const value: AccordionContextValue = {
    openItem,
    setOpenItem,
    collapsible,
  };

  return (
    <AccordionContext.Provider value={value}>
      <div className={cn(className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function AccordionItem({
  value,
  className,
  children,
}: AccordionItemProps) {
  const accordion = React.useContext(AccordionContext);
  
  if (!accordion) {
    throw new Error('AccordionItem must be used within Accordion');
  }
  
  const isOpen = accordion.openItem === value;

  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div
        data-state={isOpen ? 'open' : 'closed'}
        className={cn(
          'border overflow-hidden bg-transparent transition-all duration-300',
          isOpen && 'border-[#ff1a1a]/50 shadow-lg shadow-[#8b0000]/10',
          className,
        )}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function AccordionTrigger({
  children,
  className,
  ...props
}: AccordionTriggerProps) {
  const accordion = React.useContext(AccordionContext);
  const item = React.useContext(AccordionItemContext);

  if (!accordion || !item) {
    throw new Error('AccordionTrigger must be used within AccordionItem');
  }

  const { openItem, setOpenItem, collapsible } = accordion;
  const isOpen = openItem === item.value;

  const handleClick = () => {
    if (isOpen) {
      // If item is open, close it only if collapsible is true
      if (collapsible) {
        setOpenItem(null);
      }
      // If collapsible is false, do nothing (item stays open)
    } else {
      // If item is closed, open it
      setOpenItem(item.value);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      id={`accordion-trigger-${item.value}`}
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${item.value}`}
      className={cn(
        'flex w-full items-center justify-between gap-4 py-4 sm:py-5 md:py-6 text-left transition-all duration-200 group',
        'hover:text-[#ff1a1a] focus:outline-none focus:ring-2 focus:ring-[#ff1a1a]/50 focus:ring-offset-2 focus:ring-offset-transparent',
        isOpen && 'text-[#ff1a1a]',
        className,
      )}
      {...props}
    >
      <span className="flex-1 pr-4 text-left">{children}</span>
      <ChevronDown
        className={cn(
          'w-5 h-5 flex-shrink-0 text-[#d4b4b4] transition-all duration-300 ease-in-out',
          'group-hover:text-[#ff1a1a]',
          isOpen && 'rotate-180 text-[#ff1a1a]',
        )}
        aria-hidden="true"
      />
    </button>
  );
}

export interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  const accordion = React.useContext(AccordionContext);
  const item = React.useContext(AccordionItemContext);

  if (!accordion || !item) {
    throw new Error('AccordionContent must be used within AccordionItem');
  }

  const { openItem } = accordion;
  const isOpen = openItem === item.value;

  return (
    <div
      id={`accordion-content-${item.value}`}
      role="region"
      aria-labelledby={`accordion-trigger-${item.value}`}
      className={cn(
        'overflow-hidden',
        isOpen 
          ? 'max-h-[1000px] opacity-100 transition-all duration-300 ease-in-out' 
          : 'max-h-0 opacity-0 pointer-events-none transition-all duration-300 ease-in-out',
        className,
      )}
    >
      <div 
        className={cn(
          'transition-all duration-300',
          isOpen ? 'pb-4 sm:pb-5 md:pb-6 pt-0' : 'pb-0 pt-0'
        )}
      >
        {children}
      </div>
    </div>
  );
}

