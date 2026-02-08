import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, ArrowRight, Zap, Clock, Users } from 'lucide-react';

export function LanguageMap() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const liveLanguages = [
        { from: 'Telugu', to: 'Hindi', audience: '600M+' },
        { from: 'Hindi', to: 'English', audience: '1.5B+' },
        { from: 'Telugu', to: 'English', audience: '1.5B+' },
        { from: 'Hindi', to: 'Telugu', audience: '85M+' },
    ];

    const comingSoon = [
        { from: 'Tamil', to: 'Hindi', audience: '600M+' },
        { from: 'Kannada', to: 'Hindi', audience: '600M+' },
        { from: 'Malayalam', to: 'Hindi', audience: '600M+' },
        { from: 'Bengali', to: 'Hindi', audience: '600M+' },
        { from: 'Marathi', to: 'Hindi', audience: '600M+' },
        { from: 'Hindi', to: 'Tamil', audience: '80M+' },
    ];

    return (
        <section ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden">

            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900/10 via-[#050505] to-[#050505] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-sm font-medium mb-4"
                    >
                        <Globe className="w-4 h-4 animate-pulse" />
                        GLOBAL EXPANSION MAP
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black tracking-tighter"
                    >
                        Every Language is a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">New Revenue Stream.</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-6xl mx-auto">

                    {/* Live Terminal */}
                    <motion.div
                        style={{ y }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-brand-900 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 overflow-hidden">

                            {/* Terminal Header */}
                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center border border-brand-500/20">
                                        <Zap className="w-6 h-6 text-brand-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">LIVE NETWORKS</h3>
                                        <p className="text-brand-500 text-xs font-mono tracking-wider flex items-center gap-2">
                                            <span className="w-2 h-2 bg-brand-500 rounded-full animate-ping"></span>
                                            OPERATIONAL 24/7
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right hidden sm:block">
                                    <div className="text-3xl font-black text-white">4.2B+</div>
                                    <div className="text-gray-500 text-xs uppercase tracking-widest">Total Reach</div>
                                </div>
                            </div>

                            {/* List */}
                            <div className="space-y-3">
                                {liveLanguages.map((lang, i) => (
                                    <div key={i} className="group/item flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-500/30 transition-all cursor-default">
                                        <div className="flex items-center gap-4">
                                            <span className="text-lg font-bold text-gray-300 group-hover/item:text-white transition-colors">{lang.from}</span>
                                            <ArrowRight className="w-4 h-4 text-brand-500" />
                                            <span className="text-lg font-bold text-white">{lang.to}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Users className="w-4 h-4" />
                                            <span className="font-mono text-brand-500">{lang.audience}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </motion.div>

                    {/* Upcoming Terminal */}
                    <motion.div
                        className="relative group mt-12 lg:mt-32"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-900 rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                        <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 overflow-hidden">

                            {/* Terminal Header */}
                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center border border-yellow-500/20">
                                        <Clock className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">DEPLOYING SOON</h3>
                                        <p className="text-yellow-500 text-xs font-mono tracking-wider flex items-center gap-2">
                                            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                            IN TRAINING
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {comingSoon.map((lang, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-gray-400">{lang.from}</span>
                                            <ArrowRight className="w-3 h-3 text-gray-600" />
                                            <span className="text-sm font-medium text-gray-300">{lang.to}</span>
                                        </div>
                                        <span className="text-xs font-mono text-gray-600">{lang.audience}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/5 text-center">
                                <p className="text-gray-500 text-sm">
                                    Don't see your language? <span className="text-white font-medium cursor-pointer hover:underline decoration-brand-500 decoration-2 underline-offset-4">Request Priority Access</span>
                                </p>
                            </div>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
