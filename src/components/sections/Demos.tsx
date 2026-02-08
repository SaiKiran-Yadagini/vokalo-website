import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Headphones } from 'lucide-react';

interface DemoProps {
    niche: string;
    originalLang: string;
    dubbedLang: string;
    originalId: string;
    dubbedId: string;
    color: string;
}

const demos: DemoProps[] = [
    { niche: "AI Generated Web Series", originalLang: "Telugu", dubbedLang: "Hindi", originalId: "ftFjN73oUUU", dubbedId: "GqH9_rhefYQ", color: "from-green-500 to-emerald-700" },
    { niche: "Finance & Legal", originalLang: "Hindi", dubbedLang: "English", originalId: "xGjdLbt3JUw", dubbedId: "mYVffmOU9mk", color: "from-blue-500 to-indigo-700" },
    { niche: "Global News", originalLang: "Telugu", dubbedLang: "Hindi", originalId: "nyoj1Jo8yHQ", dubbedId: "msdTCFkVqAc", color: "from-orange-500 to-red-700" },
];

export function Demos() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [playingVideo, setPlayingVideo] = useState<{ index: number; type: 'original' | 'dubbed' } | null>(null);

    return (
        <section ref={containerRef} className="py-32 bg-[#050505] overflow-hidden relative border-t border-white/5">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[#050505] opacity-90 z-0" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-4 mb-16 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-400 text-sm font-semibold mb-6"
                >
                    <Headphones className="w-4 h-4" />
                    AUDIO FIDELITY: 99.8%
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
                >
                    Don't Trust Words. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Trust Your Ears.</span>
                </motion.h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Real creator voices. Real emotion. Real results.
                    <span className="block mt-2 text-white font-medium">Listen to the difference.</span>
                </p>
            </div>

            {/* Horizontal Scroll Carousel */}
            <div className="relative w-full overflow-x-auto pb-12 pt-4 px-4 md:px-0 no-scrollbar snap-x snap-mandatory">
                <div className="flex gap-6 md:gap-10 w-max px-4 md:px-[max(1rem,calc((100vw-80rem)/2))]">
                    {demos.map((demo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="min-w-[90vw] md:min-w-[600px] snap-center group relative"
                        >
                            {/* Card Container */}
                            <div className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-6 md:p-8 backdrop-blur-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] hover:border-white/20 transition-all duration-500 overflow-hidden">

                                {/* Header badge */}
                                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${demo.color}`}></div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="bg-white/5 border border-white/5 rounded-full px-4 py-1.5 text-xs font-bold text-gray-300 uppercase tracking-widest">
                                        {demo.niche}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
                                        <span>{demo.originalLang}</span>
                                        <span className="text-white/20">→</span>
                                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${demo.color} font-bold`}>{demo.dubbedLang}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full relative z-10">
                                    {/* Left: Original */}
                                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/50 group/video bg-gradient-to-br from-gray-800 to-gray-900 border border-white/5">
                                        {playingVideo?.index === i && playingVideo?.type === 'original' ? (
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube.com/embed/${demo.originalId}?autoplay=1&start=0&end=60`}
                                                title="Original Video"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div
                                                className="w-full h-full cursor-pointer relative"
                                                onClick={() => setPlayingVideo({ index: i, type: 'original' })}
                                            >
                                                <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-bold text-white border border-white/10 tracking-wider">ORIGINAL</div>
                                                {/* Play Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover/video:opacity-100 transition-opacity z-20">
                                                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover/video:scale-110 transition-transform">
                                                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                                                    </div>
                                                </div>
                                                {/* Video/Thumbnail Placeholder */}
                                                <img
                                                    src={`https://img.youtube.com/vi/${demo.originalId !== 'PLACEHOLDER' ? demo.originalId : demo.originalId}/mqdefault.jpg`}
                                                    alt="Original"
                                                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Right: Dubbed */}
                                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/50 group/video shadow-2xl border border-white/10">
                                        {playingVideo?.index === i && playingVideo?.type === 'dubbed' && demo.dubbedId !== 'PLACEHOLDER' ? (
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube.com/embed/${demo.dubbedId}?autoplay=1&end=60`}
                                                title="Dubbed Video"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div
                                                className="w-full h-full cursor-pointer relative"
                                                onClick={() => demo.dubbedId !== 'PLACEHOLDER' && setPlayingVideo({ index: i, type: 'dubbed' })}
                                            >
                                                <div className={`absolute top-3 left-3 z-10 bg-gradient-to-r ${demo.color} px-2 py-1 rounded-md text-[10px] font-bold text-white shadow-lg tracking-wider`}>VOXZEN AI</div>
                                                {/* Play Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover/video:opacity-100 transition-opacity z-20">
                                                    <div className={`w-14 h-14 bg-gradient-to-r ${demo.color} rounded-full flex items-center justify-center shadow-lg transform group-hover/video:scale-110 transition-transform`}>
                                                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                                                    </div>
                                                </div>
                                                {/* Video/Thumbnail Placeholder */}
                                                <img
                                                    src={`https://img.youtube.com/vi/${demo.dubbedId !== 'PLACEHOLDER' ? demo.dubbedId : demo.originalId}/mqdefault.jpg`}
                                                    alt="Dubbed"
                                                    className="w-full h-full object-cover opacity-80"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="text-center text-sm text-gray-600 font-mono">
                ← SWIPE TO LISTEN →
            </div>

        </section>
    );
}
