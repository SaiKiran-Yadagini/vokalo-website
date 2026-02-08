import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ROICalculator() {
    const [views, setViews] = useState(1000000);
    const [activeTab, setActiveTab] = useState<'conservative' | 'aggressive'>('conservative');

    // Constants
    const CPM = {
        original: 40, // ₹40 for Telugu/Tamil/etc
        hindi: 120,
        english: 350
    };

    // Calculations
    const currentRevenue = (views / 1000) * CPM.original;

    const additionalViews = {
        hindi: views * (activeTab === 'conservative' ? 0.4 : 0.8),
        english: views * (activeTab === 'conservative' ? 0.15 : 0.3)
    };

    const newRevenue = {
        hindi: (additionalViews.hindi / 1000) * CPM.hindi,
        english: (additionalViews.english / 1000) * CPM.english
    };

    const totalNewRevenue = newRevenue.hindi + newRevenue.english;
    const grandTotal = currentRevenue + totalNewRevenue;
    const increasePercent = Math.round(((grandTotal - currentRevenue) / currentRevenue) * 100);

    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

            <div className="container mx-auto px-4 relative z-10">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left: Interactive Controls */}
                    <div className="flex-1 space-y-10 w-full">
                        <div className="space-y-4">
                            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-3 text-brand-500 font-mono text-sm tracking-widest uppercase">
                                <TrendingUp className="w-4 h-4" /> ROI Calculator
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                See Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Future Revenue</span>
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Drag the slider to match your current monthly views. See how much you're leaving on the table.
                            </p>
                        </div>

                        <div className="space-y-8 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                            {/* View Slider */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <span className="text-gray-400 font-medium">Monthly Views</span>
                                    <span className="text-3xl font-bold text-white font-mono">{(views / 1000000).toFixed(1)}M</span>
                                </div>
                                <input
                                    type="range"
                                    min="100000"
                                    max="10000000"
                                    step="100000"
                                    value={views}
                                    onChange={(e) => setViews(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-brand-600 hover:accent-brand-500 transition-all"
                                />
                                <div className="flex justify-between text-xs text-gray-500 font-mono">
                                    <span>100K</span>
                                    <span>10M+</span>
                                </div>
                            </div>

                            {/* Mode Toggle */}
                            <div className="flex bg-black p-1 rounded-xl border border-white/10">
                                {['conservative', 'aggressive'].map((mode) => (
                                    <button
                                        key={mode}
                                        onClick={() => setActiveTab(mode as any)}
                                        className={cn(
                                            "flex-1 py-2 text-sm font-medium rounded-lg transition-all capitalize",
                                            activeTab === mode
                                                ? "bg-white/10 text-white shadow-sm"
                                                : "text-gray-500 hover:text-gray-300"
                                        )}
                                    >
                                        {mode} Estimate
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: The Chart Card */}
                    <div className="flex-1 w-full max-w-md mx-auto lg:max-w-none">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", bounce: 0.3 }}
                            className="bg-gradient-to-br from-brand-900/20 to-black border border-white/10 rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden shadow-2xl shadow-brand-900/10 group"
                        >
                            {/* Glow Effects */}
                            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-500/20 rounded-full blur-[100px] group-hover:bg-brand-500/30 transition-colors duration-500"></div>

                            <div className="relative z-10 space-y-10 text-center">
                                <div className="space-y-2">
                                    <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">Projected Monthly Revenue</p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-5xl sm:text-7xl font-black text-white tracking-tighter">
                                            ₹{(grandTotal).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-bold">
                                        <ArrowUpRight className="w-4 h-4" /> +{increasePercent}% Increase
                                    </div>
                                </div>

                                {/* Visual Stacked Bar */}
                                <div className="space-y-4">
                                    <div className="flex h-4 w-full rounded-full overflow-hidden bg-gray-800/50 backdrop-blur-sm">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(currentRevenue / grandTotal) * 100}%` }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            className="h-full bg-gray-600 relative group/bar"
                                        >
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-white/10">Current: ₹{currentRevenue.toLocaleString()}</span>
                                        </motion.div>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(newRevenue.hindi / grandTotal) * 100}%` }}
                                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                            className="h-full bg-brand-600 relative group/bar"
                                        >
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-white/10">Hindi: +₹{newRevenue.hindi.toLocaleString()}</span>
                                        </motion.div>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(newRevenue.english / grandTotal) * 100}%` }}
                                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                                            className="h-full bg-white relative group/bar"
                                        >
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-white/10">English: +₹{newRevenue.english.toLocaleString()}</span>
                                        </motion.div>
                                    </div>
                                    <div className="flex justify-between text-xs font-mono text-gray-500 px-1">
                                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-gray-600"></div> Current</span>
                                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-600"></div> Hindi (High Vol)</span>
                                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-white"></div> English (High CPM)</span>
                                    </div>
                                </div>

                                <Button size="lg" className="w-full bg-white text-black hover:bg-gray-200 h-14 text-lg rounded-xl font-bold shadow-lg">
                                    Start Earning This →
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
}
