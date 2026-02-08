import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Mic, Brain, Rocket } from 'lucide-react';

export function TheProcess() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Parallax for the line
    const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

    const steps = [
        {
            week: "WEEK 1",
            icon: <Search className="w-8 h-8" />,
            title: 'THE "VĀK" AUDIT',
            description: "We don't start with AI. We start with specific deep analysis of your voice, slang, humor, and energy shifts.",
            output: 'A "Creator DNA Profile" blueprint.'
        },
        {
            week: "WEEK 2",
            icon: <Mic className="w-8 h-8" />,
            title: 'THE DIGITAL TWIN',
            description: "We build a high-fidelity voice clone. Not generic TTS. Your exact tone and emotional range.",
            output: "If it doesn't fool you, it doesn't ship."
        },
        {
            week: "WEEK 3",
            icon: <Brain className="w-8 h-8" />,
            title: 'THE CUSTOM BRAIN',
            description: "We fine-tune a custom LLM on your content library so it WRITES like you in another language.",
            output: 'Your personality, translated.'
        },
        {
            week: "WEEK 4",
            icon: <Rocket className="w-8 h-8" />,
            title: 'LAUNCH & AUTOPILOT',
            description: "We set up new channels, branding, and publish the first batch. Then, we take over daily operations.",
            output: "You create. We multiply."
        }
    ];

    return (
        <section ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden">

            {/* Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black tracking-tighter"
                    >
                        How We Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Your Empire.</span>
                    </motion.h2>
                    <p className="text-xl text-gray-400">
                        A white-glove setup process. 4 weeks to launch. Forever on autopilot.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Center Line (Desktop) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-brand-500 via-brand-600 to-brand-900 hidden md:block"
                    ></motion.div>

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-24 last:mb-0`}
                        >
                            {/* Center Dot */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0404] border border-white/10 items-center justify-center z-20 group-hover:border-brand-500 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                                <div className="w-3 h-3 rounded-full bg-white group-hover:bg-brand-500 transition-colors"></div>
                            </div>

                            {/* Content Card */}
                            <div className="w-full md:w-[calc(50%-3rem)] bg-[#0a0404] border border-white/10 p-8 rounded-3xl relative hover:border-white/20 transition-all group-hover:translate-x-2 md:group-hover:odd:-translate-x-2 md:group-hover:even:translate-x-2">
                                <div className="absolute -top-10 left-0 md:left-auto md:right-0 px-4 py-1 bg-white/5 rounded-t-xl border-t border-x border-white/10 text-xs font-mono text-brand-500 tracking-widest uppercase backdrop-blur-sm">
                                    {step.week}
                                </div>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-500">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    {step.description}
                                </p>

                                <div className="px-4 py-3 bg-brand-900/10 border-l-2 border-brand-500 rounded-r-lg text-sm text-brand-200">
                                    <span className="font-bold text-brand-500">OUTPUT:</span> {step.output}
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
