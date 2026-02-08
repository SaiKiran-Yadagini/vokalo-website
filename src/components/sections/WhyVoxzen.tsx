import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import { Check, X, AlertTriangle } from 'lucide-react';

export function WhyVoxzen() {
    const comparisonData = [
        { feature: "Custom Voice Clone", voxzen: true, heygen: "Generic", eleven: "Basic", freelancer: false },
        { feature: "Custom LLM", voxzen: true, heygen: false, eleven: false, freelancer: false },
        { feature: "Cultural Adaptation", voxzen: true, heygen: false, eleven: false, freelancer: "Maybe" },
        { feature: "Indian Languages", voxzen: "Native", heygen: "Poor", eleven: "Poor", freelancer: "Basic" },
        { feature: "Channel Management", voxzen: "Full", heygen: false, eleven: false, freelancer: false },
        { feature: "Thumbnail Design", voxzen: true, heygen: false, eleven: false, freelancer: false },
        { feature: "SEO Optimization", voxzen: true, heygen: false, eleven: false, freelancer: false },
        { feature: "Upload Management", voxzen: true, heygen: false, eleven: false, freelancer: false },
        { feature: "Community Mgmt", voxzen: true, heygen: false, eleven: false, freelancer: false },
        { feature: "Video Editing", voxzen: true, heygen: false, eleven: false, freelancer: "Extra" },
        { feature: "Analytics/Reports", voxzen: true, heygen: false, eleven: false, freelancer: false },
        { feature: "India-First", voxzen: true, heygen: "US", eleven: "US", freelancer: "Varies" },
        { feature: "Creator Owns All", voxzen: "100%", heygen: "N/A", eleven: "N/A", freelancer: "Varies" },
    ];

    const renderCell = (value: string | boolean) => {
        if (value === true) return <Check className="w-5 h-5 text-[#ff1a1a] mx-auto" />;
        if (value === false) return <X className="w-5 h-5 text-[#a3a3a3] mx-auto" />;
        if (value === "Generic" || value === "Basic" || value === "Poor" || value === "Maybe" || value === "US" || value === "Varies" || value === "Extra") return <span className="text-yellow-500 font-bold text-xs flex items-center justify-center gap-1"><AlertTriangle className="w-3 h-3" /> {value}</span>;
        return <span className="font-bold text-white text-xs">{value}</span>;
    };

    return (
        <Section className="bg-[#0a0404]">
            <div className="text-center mb-16 space-y-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl font-black tracking-tight"
                >
                    Why Voxzen AI?<br />
                    <span className="text-[#ff1a1a]">Because No One Else Does This. Period.</span>
                </motion.h2>
            </div>

            <div className="overflow-x-auto mb-20 max-w-6xl mx-auto rounded-3xl border border-white/10 shadow-lg bg-[#1a0f0f]">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#2a1515] text-white">
                            <th className="p-4 sm:p-6 text-sm sm:text-base font-bold text-left border-b border-white/10">Feature</th>
                            <th className="p-4 sm:p-6 text-sm sm:text-base font-bold text-center border-b border-white/10 bg-[#ff1a1a]/10 border-x border-[#ff1a1a]/20 text-[#ff1a1a]">Voxzen AI</th>
                            <th className="p-4 sm:p-6 text-sm sm:text-base font-bold text-center border-b border-white/10 text-[#a3a3a3]">HeyGen</th>
                            <th className="p-4 sm:p-6 text-sm sm:text-base font-bold text-center border-b border-white/10 text-[#a3a3a3]">ElevenLb</th>
                            <th className="p-4 sm:p-6 text-sm sm:text-base font-bold text-center border-b border-white/10 text-[#a3a3a3]">Freelancer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.map((row, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors group">
                                <td className="p-4 border-b border-white/5 text-[#d4b4b4] font-medium text-sm">{row.feature}</td>
                                <td className="p-4 border-b border-white/5 border-x border-[#ff1a1a]/10 bg-[#ff1a1a]/5 group-hover:bg-[#ff1a1a]/10 transition-colors text-center">
                                    {renderCell(row.voxzen)}
                                </td>
                                <td className="p-4 border-b border-white/5 text-center">{renderCell(row.heygen)}</td>
                                <td className="p-4 border-b border-white/5 text-center">{renderCell(row.eleven)}</td>
                                <td className="p-4 border-b border-white/5 text-center">{renderCell(row.freelancer)}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className="p-4 text-transparent font-medium text-sm">Summary</td>
                            <td className="p-4 border-x border-[#ff1a1a]/10 bg-[#ff1a1a]/5 text-center font-bold text-[#ff1a1a] text-sm">FULL SERVICE</td>
                            <td className="p-4 text-center font-bold text-[#a3a3a3] text-sm">TOOL ONLY</td>
                            <td className="p-4 text-center font-bold text-[#a3a3a3] text-sm">TOOL ONLY</td>
                            <td className="p-4 text-center font-bold text-yellow-500 text-sm">PARTIAL</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-[#1a0f0f] border border-white/10 rounded-2xl p-8 hover:border-[#ff1a1a]/50 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-4">🇮🇳 INDIA-FIRST. INDIA-ONLY. INDIA-OBSESSED.</h3>
                    <p className="text-[#a3a3a3] text-sm leading-relaxed">
                        We're not a Silicon Valley tool that added Hindi as an afterthought. We're built BY Indian AI engineers FOR Indian creators. We understand Telugu slang. We understand Hindi wordplay.
                    </p>
                </div>
                <div className="bg-[#1a0f0f] border border-white/10 rounded-2xl p-8 hover:border-[#ff1a1a]/50 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-4">🎯 SERVICE, NOT SOFTWARE</h3>
                    <p className="text-[#a3a3a3] text-sm leading-relaxed">
                        HeyGen gives you a login. ElevenLabs gives you an API. We give you a TEAM. A dedicated account manager, AI engineers, native writers, and a publishing team.
                    </p>
                </div>
                <div className="bg-[#1a0f0f] border border-white/10 rounded-2xl p-8 hover:border-[#ff1a1a]/50 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-4">🔐 YOU OWN EVERYTHING. ALWAYS.</h3>
                    <p className="text-[#a3a3a3] text-sm leading-relaxed">
                        Your channels are on YOUR Google account. Your subscribers are YOURS. Your revenue is YOURS. We don't hold your brand hostage. Ever.
                    </p>
                </div>
            </div>
        </Section>
    );
}
