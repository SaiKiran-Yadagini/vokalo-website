import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
    const faqs = [
        {
            q: "What exactly does 'full channel management' mean?",
            a: "Everything. We handle the entire lifecycle of your new language channel(s): Script adaptation (not translation — cultural rewriting), AI voice dubbing in your cloned voice, Video editing and audio sync, Thumbnail design and localization, SEO-optimized titles, descriptions, tags, Upload scheduling and publishing, Channel branding (banners, about section, playlists), Community management (replying to comments), Cross-promotion between your channels, Monthly analytics and growth reports. You create content in your language. We handle everything else. Zero effort from you."
        },
        {
            q: "How is Voxzen AI different from HeyGen, ElevenLabs, or other dubbing tools?",
            a: "Those are tools. We are a service. Tools give you a login and say 'figure it out.' You still have to write scripts, manage audio, edit videos, create thumbnails, do SEO, upload, and manage comments yourself. We do ALL of that for you. Plus, our AI is specifically trained for Indian languages — not English-first tools that added Hindi as an afterthought. And the biggest difference: we build a CUSTOM voice clone and CUSTOM LLM specifically for you. Not a generic model. Your voice. Your style. Your personality."
        },
        {
            q: "Will the dubbed videos sound robotic?",
            a: "No. That's literally our reason for existing. We spend 2 weeks building a high-fidelity emotional voice clone and training a custom LLM on YOUR content. The result sounds like YOU speaking another language — with your tone, your energy, your personality. We don't ship anything that sounds robotic. Period. Every video goes through a 3-step quality review before publishing. Listen to our demos above. If you can tell it's AI, we'll refund you."
        },
        {
            q: "What languages do you currently support?",
            a: "We're currently live with: Telugu → Hindi, Hindi → English, Telugu → English, Hindi → Telugu. Coming soon: Tamil, Kannada, Malayalam, Bengali, Marathi, and more. Don't see your language? Apply anyway and tell us what you need. We prioritize based on demand."
        },
        {
            q: "How long does the setup process take?",
            a: "3-4 weeks from signing to your first published video. Week 1: We analyze your content and build your Creator DNA Profile. Week 2: We build your voice clone and train your custom LLM. Week 3: We set up the new channel and prepare the first batch. Week 4: First videos go live. Autopilot begins. After setup, the turnaround for each new video is 24-48 hours from your original upload."
        },
        {
            q: "How much does it cost?",
            a: "It depends on your channel size, upload frequency, and number of target languages. We offer two models: 1. Monthly Retainer: A fixed fee starting from ₹40,000/month per language. 2. Revenue Partnership: A reduced fee + a percentage of the new channel's revenue. Apply for a free strategy call and we'll give you a custom quote with detailed ROI projections. Most creators see positive ROI within 2-3 months."
        },
        {
            q: "Do I own the new channels?",
            a: "Yes. 100%. Non-negotiable. The channels are created on YOUR Google account. The subscribers are yours. The revenue goes to your bank. The content is yours. The voice clone data is yours. If you ever stop working with us, you keep EVERYTHING. We don't hold anything hostage."
        },
        {
            q: "What if the dubbed content doesn't perform well?",
            a: "Two things: First — we're selective about who we work with. If your original content has strong engagement, the dubbed version will too. Quality content translates across languages. Second — we don't just dub and forget. We analyze performance monthly and optimize: thumbnails, titles, descriptions, posting times. We treat your channel like our own business. If something isn't working, we fix it. That's what management means."
        },
        {
            q: "What's the minimum subscriber count to apply?",
            a: "We generally work with creators who have 50K+ subscribers. This ensures there's enough content library for us to build a quality voice clone and LLM, and enough audience momentum for the new channel to grow. If you're below 50K but have exceptionally high engagement or a unique niche, apply anyway. We evaluate case by case."
        },
        {
            q: "What's included in the free strategy call?",
            a: "It's a 30-minute call where we: Analyze your channel's multilingual potential, Show you projected revenue in each target language, Explain exactly how we'd build your pipeline, Answer all your questions, Give you a custom quote. There's zero obligation. No pressure. No sales tricks. If we're not a fit, we'll tell you honestly. We'd rather say no to a bad fit than deliver bad results."
        },
        {
            q: "Can I approve videos before they go live?",
            a: "Yes. You can choose your approval level: Option 1: Full Approval — Every video is sent to you for review before publishing. Option 2: Spot Check — We publish on schedule, and you review periodically. Option 3: Full Autopilot — We handle everything. Most creators start with Option 1 and switch to Option 3 within 2-3 months once they trust the quality."
        }
    ];

    return (
        <Section className="bg-[#0a0404]">
            <div className="text-center mb-16 space-y-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl font-black tracking-tight"
                >
                    Got Questions? <span className="text-[#ff1a1a]">We've Got Answers.</span>
                </motion.h2>
            </div>

            <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 bg-[#1a0f0f] rounded-xl px-4 py-2 hover:border-[#ff1a1a]/30 transition-colors">
                            <AccordionTrigger className="text-lg font-medium text-white hover:no-underline hover:text-[#ff1a1a] text-left">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#d4b4b4] leading-relaxed text-base pt-2">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </Section>
    );
}
