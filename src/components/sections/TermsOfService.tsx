import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, BookOpen, Gavel, Mail } from 'lucide-react';

export function TermsOfService() {
    return (
        <section id="terms-of-service" className="py-24 bg-[#0a0404] text-[#e8d4d4] relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <div className="flex justify-center">
                            <div className="p-3 bg-[#ff1a1a]/10 rounded-2xl border border-[#ff1a1a]/20">
                                <FileText className="w-8 h-8 text-[#ff1a1a]" />
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Terms of Service</h2>
                        <p className="text-[#a3a3a3] text-sm">Last Updated: February 11, 2026 &bull; Effective Date: February 11, 2026</p>
                    </div>

                    {/* Content */}
                    <div className="space-y-10 text-[#c4b0b0] leading-relaxed">

                        <div className="space-y-4">
                            <p>
                                These Terms of Service ("Terms") govern your use of the services provided by VOXZEN AI PRIVATE LIMITED
                                ("Voxzen AI," "we," "us," or "our"), a company incorporated under the Companies Act, 2013
                                (CIN: U62011RJ2026PTC110457). By using our services, you agree to be bound by these Terms.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <BookOpen className="w-5 h-5 text-[#ff1a1a]" />
                                1. Service Description
                            </h3>
                            <p>Voxzen AI provides AI-powered YouTube channel management services, including but not limited to:</p>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>AI voice cloning using your provided voice samples</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Video dubbing and translation into Hindi, Telugu, Tamil, and English</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Script cultural adaptation and localization</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Complete YouTube channel management (uploads, SEO, thumbnails, community)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 2 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Scale className="w-5 h-5 text-[#ff1a1a]" />
                                2. User Responsibilities
                            </h3>
                            <p>By using our services, you agree to:</p>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Provide accurate and truthful information in all communications</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Own or have authorization to use the content submitted for dubbing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Consent to voice cloning through our explicit consent process</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Not use our services for any unlawful or prohibited purpose</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Comply with YouTube's Terms of Service and Community Guidelines</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <FileText className="w-5 h-5 text-[#ff1a1a]" />
                                3. Intellectual Property
                            </h3>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Your Content:</strong> You retain full ownership of your original content, voice, and brand identity. All new YouTube channels created are owned by you on your Google account.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Our Technology:</strong> Voxzen AI retains ownership of its proprietary AI models, algorithms, software, and technology platform.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Dubbed Content:</strong> Dubbed/translated content is owned by you. We retain no rights to the output content after delivery.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Scale className="w-5 h-5 text-[#ff1a1a]" />
                                4. Payment Terms
                            </h3>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Payment terms are outlined in your individual service agreement</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Monthly retainer plans are billed in advance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Revenue partnership models are subject to separate revenue-sharing agreements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>All fees are exclusive of applicable GST and taxes</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 5 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <AlertTriangle className="w-5 h-5 text-[#ff1a1a]" />
                                5. Limitation of Liability
                            </h3>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Our total liability shall not exceed the fees paid by you in the preceding 3 months</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>We are not liable for indirect, incidental, or consequential damages</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>We do not guarantee specific subscriber counts, view counts, or revenue outcomes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Service quality depends on factors including but not limited to source content quality, target language complexity, and platform algorithm changes</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 6 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <FileText className="w-5 h-5 text-[#ff1a1a]" />
                                6. Termination
                            </h3>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Either party may terminate the service with 30 days written notice</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Upon termination, you retain full ownership of all channels, content, and subscribers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Voice data is deleted within 90 days of termination upon request</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Outstanding fees remain payable upon termination</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 7 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Gavel className="w-5 h-5 text-[#ff1a1a]" />
                                7. Governing Law & Dispute Resolution
                            </h3>
                            <p>
                                These Terms are governed by the laws of India. Any disputes arising from these Terms shall be subject
                                to the exclusive jurisdiction of the courts of Jaipur, Rajasthan, India. We encourage resolution through
                                good-faith negotiation before initiating any legal proceedings.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#ff1a1a]" />
                                Questions?
                            </h3>
                            <p>
                                For questions about these Terms, contact us at{' '}
                                <a href="mailto:contact@voxzen.ai" className="text-[#ff1a1a] hover:underline">contact@voxzen.ai</a>
                            </p>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
