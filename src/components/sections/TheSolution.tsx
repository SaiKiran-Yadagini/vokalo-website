import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mic, StickyNote, Video as VideoIcon, Image, Search, Calendar, Palette, MessagesSquare as Message, BarChart, Brain, Share2, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

export function TheSolution() {
    const containerRef = useRef(null);

    const services = [
        { icon: <Mic />, title: "AI VOICE CLONE", desc: "Your emotional range. Your tone. Not robotic." },
        { icon: <StickyNote />, title: "SCRIPT ADAPTATION", desc: "Jokes landed. References localized. Humor intact." },
        { icon: <VideoIcon />, title: "LIP-SYNC EDITING", desc: "Audio synced. Timing corrected. Seamless." },
        { icon: <Image />, title: "THUMBNAIL LOCALIZATION", desc: "Translated text. Cultural tweaks. High CTR." },
        { icon: <Search />, title: "NATIVE SEO", desc: "How locals actually search. Not translated keywords." },
        { icon: <Calendar />, title: "UPLOAD MANAGEMENT", desc: "We publish. You don't touch Studio." },
        { icon: <Palette />, title: "CHANNEL BRANDING", desc: "Banners, about section, playlists setup." },
        { icon: <Message />, title: "COMMUNITY REPLIES", desc: "We reply to comments in the local language." },
        { icon: <BarChart />, title: "GROWTH REPORTS", desc: "Monthly views, revenue, & strategy calls." },
        { icon: <Brain />, title: "CONTENT STRATEGY", desc: "We pick which videos will go viral in Hindi." },
        { icon: <Share2 />, title: "CROSS PROMOTION", desc: "Driving traffic between your channels." },
        { icon: <ShieldCheck />, title: "QUALITY ASSURANCE", desc: "3-step human review before publishing." }
    ];

    return (
        <section ref={containerRef} className="py-32 bg-[#0a0404] text-white relative overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter"
                    >
                        We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Revenue Machines</span>.
                    </motion.h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Stop thinking about "dubbing." This is full-stack international expansion.
                        <span className="block mt-2 text-white font-medium">Zero effort from you.</span>
                    </p>
                </div>

                {/* The Pipeline Visualization */}
                <div className="mb-32 relative">
                    {/* Connecting Line */}
                    {/* Connecting Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block">
                        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-brand-500 to-transparent animate-glow-move"></div>
                    </div>

                    <div className="flex flex-col gap-16 relative z-10">

                        {/* Step 1: Input */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mx-auto bg-[#0a0404] border border-white/10 rounded-2xl p-6 w-full max-w-md text-center relative z-20 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                        >
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block">INPUT</span>
                            <h3 className="text-2xl font-bold text-white mb-1">Your Original Video</h3>
                            <p className="text-gray-400 text-sm">Telugu / Hindi / Any Language</p>
                        </motion.div>

                        {/* Engine */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="mx-auto bg-gradient-to-b from-brand-900/20 to-black border border-brand-500/30 rounded-3xl p-10 w-full max-w-2xl text-center relative overflow-hidden backdrop-blur-xl group"
                        >
                            <div className="absolute inset-0 bg-brand-500/5 animate-pulse-slow"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,26,26,0.4)]">
                                    <Zap className="w-8 h-8 text-white fill-white" />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-2 tracking-tight">VOXZEN AI ENGINE</h3>
                                <div className="flex flex-wrap justify-center gap-2 mt-4">
                                    <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">VOICE CLONING</span>
                                    <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">CULTURAL ADAPTATION</span>
                                    <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">LIP SYNC</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 3: Output */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto w-full">
                            {['HINDI CHANNEL', 'ENGLISH CHANNEL', 'TAMIL CHANNEL'].map((channel, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i === 0 ? -20 : i === 2 ? 20 : 0 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="bg-[#0a0404] border border-white/10 rounded-2xl p-6 text-center hover:border-brand-500/30 transition-colors group"
                                >
                                    <div className="w-2 h-2 rounded-full bg-green-500 mx-auto mb-3 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                    <h4 className="font-bold text-white mb-1 group-hover:text-brand-500 transition-colors">{channel}</h4>
                                    <span className="text-xs text-gray-500">Fully Managed</span>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 * i }}
                            className="bg-[#0a0404] border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-colors group cursor-default"
                        >
                            <div className="text-brand-500 mb-4 opacity-70 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300 origin-left">
                                {service.icon}
                            </div>
                            <h4 className="font-bold text-white text-sm mb-2 group-hover:pl-1 transition-all">{service.title}</h4>
                            <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="text-xl font-medium text-white hover:text-brand-500 transition-colors flex items-center gap-2 mx-auto group">
                        View Full Details <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
}
