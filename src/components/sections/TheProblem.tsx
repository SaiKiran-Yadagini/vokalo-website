import { useRef } from 'react';
import { motion } from 'framer-motion';
import { VolumeX, DollarSign, Bot, XCircle } from 'lucide-react';

export function TheProblem() {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="relative py-32 bg-[#0a0404] text-white overflow-hidden">

            {/* Background Mesh */}
            <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0a0404] to-[#0a0404] opacity-40 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="mb-24 text-center max-w-4xl mx-auto space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter"
                    >
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Language Tax</span> Is Costing You Crores.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 font-light"
                    >
                        You're creating world-class content. But language barriers are strictly locking out 90% of your potential revenue.
                    </motion.p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

                    {/* Card 1: Reach Constraint (Large) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-500/20 rounded-full blur-[100px] group-hover:bg-brand-500/30 transition-colors duration-500"></div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                                <VolumeX className="w-7 h-7 text-brand-500" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">600 Million People Can't Find You</h3>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                                You're a Telugu creator making incredible content. But 600 million Hindi speakers will never discover you. 1.5 billion English speakers don't even know you exist. That's not a language gap. <span className="text-white font-semibold">That's a revenue canyon.</span>
                            </p>
                        </div>

                        {/* Visual representation of reach */}
                        <div className="mt-8 flex gap-2 h-4 w-full rounded-full overflow-hidden bg-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '10%' }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="bg-brand-500 h-full"
                            />
                            <div className="flex-1 bg-gray-800 h-full relative">
                                <span className="absolute inset-0 flex items-center justify-center text-[10px] text-gray-500 font-mono tracking-widest">MISSED AUDIENCE (90%)</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: CPM Gap (Tall) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:row-span-2 bg-black border border-white/10 rounded-3xl p-10 flex flex-col relative overflow-hidden group"
                    >
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>

                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                            <DollarSign className="w-7 h-7 text-green-400" />
                        </div>

                        <h3 className="text-3xl font-bold mb-6">The Massive CPM Gap</h3>

                        <div className="flex-1 space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-gray-400">
                                    <span>English (Global)</span>
                                    <span className="text-green-400 font-mono">₹600 CPM</span>
                                </div>
                                <div className="w-full bg-white/5 rounded-full h-2">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1, delay: 0.2 }} className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-gray-400">
                                    <span>English (India)</span>
                                    <span className="text-white font-mono">₹300 CPM</span>
                                </div>
                                <div className="w-full bg-white/5 rounded-full h-2">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: '50%' }} transition={{ duration: 1, delay: 0.4 }} className="bg-white h-full rounded-full" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-gray-400">
                                    <span>Hindi</span>
                                    <span className="text-gray-400 font-mono">₹150 CPM</span>
                                </div>
                                <div className="w-full bg-white/5 rounded-full h-2">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: '25%' }} transition={{ duration: 1, delay: 0.6 }} className="bg-gray-500 h-full rounded-full" />
                                </div>
                            </div>

                            <div className="space-y-2 opacity-60">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Telugu</span>
                                    <span className="text-gray-600 font-mono">₹50 CPM</span>
                                </div>
                                <div className="w-full bg-white/5 rounded-full h-2">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: '10%' }} transition={{ duration: 1, delay: 0.8 }} className="bg-gray-700 h-full rounded-full" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-gray-400 text-sm">
                                Same video. Same effort. <br />
                                <span className="text-green-400 font-bold text-lg">10X Revenue Difference.</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: Bad Tools (Standard) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 bg-gray-900 border border-white/10 rounded-3xl p-10 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden"
                    >
                        <div className="flex-1 z-10">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                                <Bot className="w-7 h-7 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">DIY Tools Sound Terrible.</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Robotic voices. "Bookish" translations that kill your humor. Zero help with thumbnails or SEO. <br />
                                <span className="text-white font-medium block mt-2">Tools were built for Silicon Valley, not Hyderabad. You need a team, not a login.</span>
                            </p>
                        </div>

                        <div className="w-full md:w-1/3 bg-black/50 rounded-2xl p-4 border border-white/5 space-y-3">
                            <div className="flex items-center gap-3 text-red-400 text-sm opacity-60">
                                <XCircle className="w-4 h-4" /> Robotic Voice
                            </div>
                            <div className="flex items-center gap-3 text-red-400 text-sm opacity-60">
                                <XCircle className="w-4 h-4" /> Wrong Slang
                            </div>
                            <div className="flex items-center gap-3 text-red-400 text-sm opacity-60">
                                <XCircle className="w-4 h-4" /> Zero SEO
                            </div>
                            <div className="flex items-center gap-3 text-red-400 text-sm opacity-60">
                                <XCircle className="w-4 h-4" /> Manual Uploads
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
