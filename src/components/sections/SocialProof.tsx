import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function SocialProof() {
    const containerRef = useRef(null);

    const testimonials = [
        {
            text: "The translation quality is insane. It captures my exact humor and sarcasm, which I thought was impossible for AI.",
            author: "Praveen Kumar",
            role: "Tech Reviewer, 1.2M Subs",
            bg: "from-blue-900/20 to-black"
        },
        {
            text: "My Hindi channel went from 0 to 100k subscribers in 3 months. I literally did nothing except upload my usual Telugu videos.",
            author: "Sravani Kitchen",
            role: "Cooking, 850K Subs",
            bg: "from-brand-900/20 to-black"
        },
        {
            text: "Voxzen handles everything. Thumbnails, tags, community posts. It's like having a team of 10 people for the price of one intern.",
            author: "Creative Thinks",
            role: "Edutainment, 2.5M Subs",
            bg: "from-purple-900/20 to-black"
        }
    ];

    return (
        <section ref={containerRef} className="py-32 bg-[#0a0404] text-white relative overflow-hidden">

            {/* Decorative Lines */}
            <div className="absolute inset-x-0  top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute inset-x-0  bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black tracking-tighter"
                    >
                        Creators <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Love Us.</span>
                    </motion.h2>
                    <div className="flex items-center justify-center gap-2 text-yellow-500">
                        <Star className="fill-current w-5 h-5" />
                        <Star className="fill-current w-5 h-5" />
                        <Star className="fill-current w-5 h-5" />
                        <Star className="fill-current w-5 h-5" />
                        <Star className="fill-current w-5 h-5" />
                    </div>
                </div>

                {/* Masonry Grid of Testimonials */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`bg-gradient-to-br ${t.bg} border border-white/10 rounded-3xl p-8 relative overflow-hidden hover:border-white/20 transition-all group`}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-9xl font-serif text-white leading-none">"</span>
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light mb-8">
                                    {t.text}
                                </p>
                                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10"></div>
                                    <div>
                                        <h4 className="font-bold text-white">{t.author}</h4>
                                        <p className="text-xs text-gray-500 font-mono uppercase">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Big Numbers */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'Creators', val: '15+' },
                        { label: 'Accuracy', val: '99%' },
                        { label: 'Views', val: '10M+' },
                        { label: 'Growth', val: '3x' },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="text-center p-8 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-sm"
                        >
                            <div className="text-4xl md:text-6xl font-black text-white mb-2">{item.val}</div>
                            <div className="text-gray-500 font-mono text-sm uppercase tracking-widest">{item.label}</div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
