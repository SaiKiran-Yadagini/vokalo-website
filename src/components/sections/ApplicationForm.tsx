import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ApplicationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        channelLink: '',
        primaryLang: 'Telugu',
        subscriberCount: '50K-100K',
        uploadFreq: '4-8',
        targetLangs: [] as string[],
        goal: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (lang: string) => {
        if (formData.targetLangs.includes(lang)) {
            setFormData({ ...formData, targetLangs: formData.targetLangs.filter(l => l !== lang) });
        } else {
            setFormData({ ...formData, targetLangs: [...formData.targetLangs, lang] });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);

        // Simulate submission 
        try {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Fake delay
            setSubmitMessage({ type: 'success', text: 'Application received! We will review your channel and contact you within 24 hours.' });
            setFormData({
                name: '', email: '', whatsapp: '', channelLink: '',
                primaryLang: 'Telugu', subscriberCount: '50K-100K',
                uploadFreq: '4-8', targetLangs: [], goal: ''
            });
        } catch (error) {
            setSubmitMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="apply" className="py-32 bg-[#050505] relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-400 text-sm font-bold mb-4"
                    >
                        LIMITED SPOTS FOR Q1 2026
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black tracking-tighter"
                    >
                        Scale Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Influence.</span>
                    </motion.h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Application for the Voxzen Partner Program. <br />
                        <span className="text-white font-medium">We only work with creators we can 10x.</span>
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_0_60px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-xl group">
                    {/* Border Gradient Animation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-transparent to-brand-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

                    <div className="relative z-10">
                        <form onSubmit={handleSubmit} className="space-y-8">

                            {/* Personal Details */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2 group/input">
                                    <label className="text-xs font-bold text-gray-500 tracking-widest uppercase ml-1 group-focus-within/input:text-brand-500 transition-colors">Your Name</label>
                                    <Input name="name" value={formData.name} onChange={handleInputChange} required className="bg-white/5 border-white/10 text-white focus:border-brand-500 h-14 rounded-xl px-4 transition-all focus:bg-white/10" placeholder="Enter your name" />
                                </div>
                                <div className="space-y-2 group/input">
                                    <label className="text-xs font-bold text-gray-500 tracking-widest uppercase ml-1 group-focus-within/input:text-brand-500 transition-colors">Email</label>
                                    <Input name="email" type="email" value={formData.email} onChange={handleInputChange} required className="bg-white/5 border-white/10 text-white focus:border-brand-500 h-14 rounded-xl px-4 transition-all focus:bg-white/10" placeholder="Enter your email" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2 group/input">
                                    <label className="text-xs font-bold text-gray-500 tracking-widest uppercase ml-1 group-focus-within/input:text-brand-500 transition-colors">WhatsApp</label>
                                    <Input name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} required className="bg-white/5 border-white/10 text-white focus:border-brand-500 h-14 rounded-xl px-4 transition-all focus:bg-white/10" placeholder="+91 XXXXX XXXXX" />
                                </div>
                                <div className="space-y-2 group/input">
                                    <label className="text-xs font-bold text-gray-500 tracking-widest uppercase ml-1 group-focus-within/input:text-brand-500 transition-colors">Channel Link</label>
                                    <Input name="channelLink" value={formData.channelLink} onChange={handleInputChange} required className="bg-white/5 border-white/10 text-white focus:border-brand-500 h-14 rounded-xl px-4 transition-all focus:bg-white/10" placeholder="youtube.com/@yourchannel" />
                                </div>
                            </div>

                            {/* Channel Stats */}
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="space-y-2 group/input">
                                    <label className="text-xs font-bold text-gray-500 tracking-widest uppercase ml-1 group-focus-within/input:text-brand-500 transition-colors">Language</label>
                                    <select name="primaryLang" value={formData.primaryLang} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl h-14 px-4 text-white focus:border-brand-500 focus:outline-none appearance-none transition-all focus:bg-white/10">
                                        {['Telugu', 'Hindi', 'Tamil', 'Kannada', 'Malayalam', 'Bengali', 'Marathi', 'Other'].map(l => <option key={l} value={l} className="bg-black">{l}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2 group/input">
                                    <label className="text-xs font-bold text-gray-500 tracking-widest uppercase ml-1 group-focus-within/input:text-brand-500 transition-colors">Subscribers</label>
                                    <select name="subscriberCount" value={formData.subscriberCount} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl h-14 px-4 text-white focus:border-brand-500 focus:outline-none appearance-none transition-all focus:bg-white/10">
                                        {['50K-100K', '100K-500K', '500K-1M', '1M-5M', '5M-10M', '10M+'].map(c => <option key={c} value={c} className="bg-black">{c}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2 group/input">
                                    <label className="text-xs font-bold text-gray-500 tracking-widest uppercase ml-1 group-focus-within/input:text-brand-500 transition-colors">Uploads/Mo</label>
                                    <select name="uploadFreq" value={formData.uploadFreq} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl h-14 px-4 text-white focus:border-brand-500 focus:outline-none appearance-none transition-all focus:bg-white/10">
                                        {['4-8', '8-15', '15-30', '30+'].map(f => <option key={f} value={f} className="bg-black">{f}</option>)}
                                    </select>
                                </div>
                            </div>

                            {/* Targets */}
                            <div className="space-y-4">
                                <label className="text-xs font-bold text-gray-500 tracking-widest uppercase ml-1">Expansion Targets</label>
                                <div className="flex flex-wrap gap-3">
                                    {['Hindi', 'English', 'Telugu', 'Tamil', 'Kannada', 'Malayalam'].map(lang => (
                                        <button
                                            type="button"
                                            key={lang}
                                            onClick={() => handleCheckboxChange(lang)}
                                            className={cn(
                                                "px-6 py-3 rounded-xl text-sm font-bold border transition-all duration-300",
                                                formData.targetLangs.includes(lang)
                                                    ? "bg-brand-600 border-brand-600 text-white shadow-[0_0_20px_rgba(255,26,26,0.4)] transform scale-105"
                                                    : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:bg-white/10"
                                            )}
                                        >
                                            {lang}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2 group/input">
                                <label className="text-xs font-bold text-gray-500 tracking-widest uppercase ml-1 group-focus-within/input:text-brand-500 transition-colors">Your 2026 Goal</label>
                                <textarea
                                    name="goal"
                                    value={formData.goal}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-brand-500 focus:outline-none min-h-[120px] resize-none transition-all focus:bg-white/10"
                                    placeholder="E.g. I want to reach 1M subscribers and start creating English content..."
                                />
                            </div>

                            <Button
                                disabled={isSubmitting}
                                className="w-full bg-white text-black hover:bg-gray-200 font-black py-8 text-xl rounded-2xl shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-[1.01] relative overflow-hidden group/btn"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {isSubmitting ? 'Sending Application...' : 'Apply For Strategy Call →'}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                            </Button>

                            {submitMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-xl flex items-center gap-3 ${submitMessage.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                                >
                                    {submitMessage.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                                    {submitMessage.text}
                                </motion.div>
                            )}

                            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500 font-mono pt-4 border-t border-white/5">
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_green]"></div> 100% Confidential</span>
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_green]"></div> No Obligation</span>
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_green]"></div> 24h Review</span>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
