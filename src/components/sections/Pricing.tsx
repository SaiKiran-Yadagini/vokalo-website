import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, X, Info } from 'lucide-react';

export function Pricing() {
    const containerRef = useRef(null);

    const commonFeatures = [
        "Dedicated Account Manager",
        "Monthly Strategy Calls",
        "Performance Reporting",
        "Native SEO Optimization",
        "Community Management"
    ];

    return (
        <section ref={containerRef} className="py-32 bg-[#050505] text-white relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[#050505] opacity-90 z-0" />
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-brand-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter"
                    >
                        Invest In <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Growth</span>.
                    </motion.h2>
                    <p className="text-xl text-gray-400">
                        Hiring a team of 10 would cost you ₹5 Lakh/month. <br className="hidden md:block" /> We do it better for a fraction of the cost.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">

                    {/* Card 1: Retainer */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 hover:border-white/20 transition-all group relative overflow-hidden"
                    >
                        <h3 className="text-2xl font-bold text-gray-200 mb-2 font-mono uppercase tracking-widest">Monthly Retainer</h3>
                        <p className="text-gray-500 text-sm mb-8 h-10">Maximize your profit margins. Ideal for established channels.</p>

                        <div className="mb-8 p-6 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-white/10 transition-colors">
                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="text-5xl font-black text-white tracking-tighter">₹40k</span>
                                <span className="text-gray-500 font-medium">/ mo</span>
                            </div>
                            <p className="text-xs text-gray-500 font-mono uppercase tracking-wide">Per Language • Custom Quoted</p>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {commonFeatures.map((f, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    {f}
                                </li>
                            ))}
                            <li className="flex items-center gap-3 text-gray-500 text-sm line-through decoration-gray-600 decoration-2">
                                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10 opacity-50">
                                    <X className="w-3 h-3 text-gray-500" />
                                </div>
                                Revenue Share Rebatement
                            </li>
                        </ul>

                        <Button variant="outline" className="w-full h-14 rounded-xl text-white border-white/10 hover:bg-white/10 hover:text-white font-bold transition-all uppercase tracking-wide text-sm">
                            Choose Retainer
                        </Button>
                    </motion.div>

                    {/* Card 2: Revenue Share (Highlighted) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-brand-950/10 border border-brand-500/50 rounded-[2.5rem] p-10 relative overflow-hidden shadow-[0_0_60px_-20px_rgba(255,26,26,0.3)] md:-mt-8 md:mb-8 hover:shadow-[0_0_80px_-20px_rgba(255,26,26,0.4)] transition-shadow"
                    >
                        <div className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-widest shadow-lg">Most Popular</div>

                        <h3 className="text-2xl font-bold text-white mb-2 font-mono uppercase tracking-widest text-brand-500">Revenue Partner</h3>
                        <p className="text-gray-400 text-sm mb-8 h-10">Minimize upfront risk. We invest in your growth.</p>

                        <div className="mb-8 p-6 bg-brand-500/10 rounded-2xl border border-brand-500/20 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-brand-500/5 animate-pulse-slow"></div>
                            <div className="relative z-10">
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-5xl font-black text-white tracking-tighter">₹20k</span>
                                    <span className="text-brand-200 font-medium">/ mo</span>
                                </div>
                                <p className="text-brand-400 font-bold text-sm font-mono tracking-wide">+ 20-30% Revenue Share</p>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {commonFeatures.map((f, i) => (
                                <li key={i} className="flex items-center gap-3 text-white text-sm">
                                    <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center border border-brand-500/30">
                                        <Check className="w-3 h-3 text-brand-500" />
                                    </div>
                                    {f}
                                </li>
                            ))}
                            <li className="flex items-center gap-3 text-white text-sm font-bold bg-brand-500/10 p-3 -mx-3 rounded-lg border border-brand-500/20">
                                <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/40">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="bg-gradient-to-r from-white to-brand-200 bg-clip-text text-transparent">Zero-Risk Guarantee Included</span>
                            </li>
                        </ul>

                        <Button size="lg" className="w-full h-14 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white rounded-xl font-bold shadow-lg shadow-brand-900/50 transition-all transform hover:scale-[1.02] uppercase tracking-wide text-sm border border-brand-500/20">
                            Apply for Partnership
                        </Button>
                    </motion.div>

                </div>

                <div className="mt-16 text-center text-sm text-gray-500 flex items-center justify-center gap-2 max-w-lg mx-auto bg-white/5 py-3 px-6 rounded-full border border-white/5 backdrop-blur-sm">
                    <Info className="w-4 h-4 text-gray-400" />
                    <span>One-time Setup Fee of ₹25,000 applies to all plans.</span>
                </div>

            </div>
        </section>
    );
}
