import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Glow } from '@/components/ui/glow';
import { ArrowRight, Play, Star, CheckCircle } from 'lucide-react';

export function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div ref={containerRef} className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0404] pt-24 sm:pt-28">

            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/20 via-[#0a0404] to-[#0a0404] z-0" />
            <div className="absolute inset-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 z-0 pointer-events-none" />

            <Glow className="opacity-40" />

            {/* Main Content Wrapper - Takes available space */}
            <div className="flex-grow flex flex-col justify-center w-full z-10 px-4 pb-12">
                <motion.div
                    style={{ y, opacity }}
                    className="container mx-auto flex flex-col items-center text-center gap-6 sm:gap-8 max-w-5xl will-change-transform"
                >

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(255,26,26,0.3)] hover:border-brand-500/50 transition-colors cursor-default"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                        </span>
                        <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200 uppercase">INDIA'S FIRST AI YOUTUBE CHANNEL MANAGEMENT SERVICE</span>
                    </motion.div>

                    {/* H1 Headline */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "anticipate" }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[1.1] sm:leading-[1.1]"
                    >
                        <span className="block bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent pb-2">
                            You Make One Video.
                        </span>
                        <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent pb-4">
                            We Make It Speak <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600 underline decoration-brand-500/30 decoration-4 underline-offset-8">Every Language.</span>
                        </span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl leading-relaxed font-light space-y-2"
                    >
                        <span className="block">Your voice. Your style. Your channels.</span>
                        <span className="block text-white font-medium">Hindi. Telugu. Tamil. English. And more.</span>
                        <span className="block text-brand-400 font-medium">Fully managed by us. Zero effort from you.</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col items-center gap-4 mt-6 sm:mt-8"
                    >
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Button
                                asChild
                                size="lg"
                                className="h-14 sm:h-16 px-8 sm:px-10 text-lg bg-brand-600 hover:bg-brand-700 text-white rounded-2xl shadow-[0_0_40px_-5px_rgba(239,15,15,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(239,15,15,0.6)] border-t border-white/20 relative overflow-hidden group"
                            >
                                <a href="#apply" className="flex items-center gap-3 font-semibold relative z-10">
                                    🚀 Book a Free Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>

                            <Button
                                asChild
                                variant="ghost"
                                size="lg"
                                className="h-14 sm:h-16 px-6 sm:px-8 text-lg text-gray-300 hover:text-white hover:bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 transition-all flex items-center gap-3"
                            >
                                <a href="#demos">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                                        <Play className="w-3 h-3 fill-white ml-0.5" />
                                    </div>
                                    Watch Demos
                                </a>
                            </Button>
                        </div>

                        <p className="text-sm text-gray-500 font-medium">
                            Free. No commitment. See what's possible.
                        </p>

                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm text-gray-500 font-medium"
                    >
                        <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-500" /> 100% Confidential</span>
                        <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-700"></span>
                        <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-500" /> No Obligation</span>
                        <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-700"></span>
                        <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-500" /> Reviewed in 24h</span>
                    </motion.div>

                </motion.div>
            </div>

            {/* Scrolling Trust Strip - Natural Flow (Not Absolute) */}
            <div className="w-full border-t border-white/5 bg-black/50 backdrop-blur-sm py-6 overflow-hidden shrink-0 z-20">
                <div className="flex w-max animate-scroll gap-12 sm:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-12 sm:gap-24 items-center">
                            <span className="text-xl font-bold text-gray-400 flex items-center gap-2"><Star className="w-5 h-5" /> 15+ Top Creators</span>
                            <span className="text-xl font-bold text-gray-400 flex items-center gap-2"><Star className="w-5 h-5" /> 10M+ Views Generated</span>
                            <span className="text-xl font-bold text-gray-400 flex items-center gap-2"><Star className="w-5 h-5" /> Native India-First AI</span>
                            <span className="text-xl font-bold text-gray-400 flex items-center gap-2"><Star className="w-5 h-5" /> 100% Ownership</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
