import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Demos', href: '#demos' },
        { label: 'Languages', href: '#languages' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
    ];

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-[#0a0404]/80 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/10 py-3'
                    : 'bg-transparent py-5 border-b border-transparent'
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#ff1a1a] via-[#cc0000] to-[#8b0000] rounded-xl flex items-center justify-center shadow-lg shadow-[#8b0000]/30 group-hover:scale-110 transition-transform relative overflow-visible">
                        <svg className="w-5 h-5 text-white relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L12 20L22 2H17L12 12L7 2H2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="absolute inset-0 bg-[#ff1a1a] blur-md opacity-50 group-hover:opacity-80 transition-opacity rounded-xl"></div>
                    </div>
                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-[#e8d4d4] bg-clip-text text-transparent">Voxzen AI</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-[#d4b4b4] hover:text-white transition-colors relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff1a1a] transition-all group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Button
                        asChild
                        className="bg-gradient-to-r from-[#ff1a1a] to-[#cc0000] hover:from-[#ff3333] hover:to-[#e60000] text-white shadow-lg shadow-[#8b0000]/50 border-0 rounded-full px-6"
                    >
                        <a href="#apply">Apply Now — Free Call</a>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-[#ff1a1a] to-[#cc0000] text-white text-xs px-3 h-8 rounded-full shadow-md shadow-red-900/20"
                    >
                        <a href="#apply">Apply Now</a>
                    </Button>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 origin-left"
                style={{ scaleX }}
            />

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0a0404]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden absolute top-full left-0 right-0 shadow-2xl"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-[#d4b4b4] hover:text-white py-3 text-lg font-medium border-b border-white/5 last:border-0 hover:bg-white/5 px-4 rounded-lg transition-all"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
