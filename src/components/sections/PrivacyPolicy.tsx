import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, Globe, Mail } from 'lucide-react';

export function PrivacyPolicy() {
    return (
        <section id="privacy-policy" className="py-24 bg-[#080303] text-[#e8d4d4] relative">
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
                                <Shield className="w-8 h-8 text-[#ff1a1a]" />
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Privacy Policy</h2>
                        <p className="text-[#a3a3a3] text-sm">Last Updated: February 11, 2026 &bull; Effective Date: February 11, 2026</p>
                    </div>

                    {/* Content */}
                    <div className="space-y-10 text-[#c4b0b0] leading-relaxed">

                        <div className="space-y-4">
                            <p>
                                VOXZEN AI PRIVATE LIMITED ("Voxzen AI," "we," "us," or "our"), a company incorporated under the laws of India
                                (CIN: U62011RJ2026PTC110457), with its registered office at Jagatpura, Jaipur, Rajasthan, is committed to
                                protecting your privacy and personal data in compliance with the Digital Personal Data Protection (DPDP) Act, 2023
                                and other applicable Indian laws.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Database className="w-5 h-5 text-[#ff1a1a]" />
                                1. Information We Collect
                            </h3>
                            <p>We collect the following categories of personal data:</p>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Contact Information:</strong> Name, email address, phone number, and YouTube channel URL provided through our application form.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Voice Data:</strong> Voice samples and recordings used for AI voice cloning. This is classified as biometric-adjacent data and is handled with the highest level of security and explicit consent.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Channel Data:</strong> YouTube channel analytics, video content metadata, subscriber information, and performance metrics shared for channel management purposes.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Usage Data:</strong> Browser type, IP address, pages visited, referring URLs, and interaction data collected automatically via cookies and analytics tools.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 2 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Eye className="w-5 h-5 text-[#ff1a1a]" />
                                2. How We Use Your Data
                            </h3>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>To provide AI voice cloning and dubbing services as contracted</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>To manage and optimize your multilingual YouTube channels</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>To communicate with you regarding services, updates, and support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>To improve our AI models and service quality (with your explicit consent)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>To comply with legal and regulatory obligations under Indian law</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Lock className="w-5 h-5 text-[#ff1a1a]" />
                                3. Voice Data & Biometric Information
                            </h3>
                            <p>
                                We understand that voice data is sensitive. Your voice samples are:
                            </p>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Collected only with your <strong className="text-white">explicit written consent</strong></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Used exclusively for creating your personalized voice clone</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Stored with enterprise-grade encryption (AES-256) at rest and TLS in transit</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Never shared with third parties without your consent</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Deleted upon termination of services upon your request</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Globe className="w-5 h-5 text-[#ff1a1a]" />
                                4. Data Sharing & Third Parties
                            </h3>
                            <p>We may share your data with:</p>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Cloud Infrastructure Providers:</strong> For secure data storage and processing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">AI/ML Service Providers:</strong> For text-to-speech processing (data anonymized where possible)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Analytics Services:</strong> Google Analytics for website usage insights (anonymized)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Legal Authorities:</strong> When required by law or to protect our rights</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 5 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <UserCheck className="w-5 h-5 text-[#ff1a1a]" />
                                5. Your Rights (DPDP Act 2023)
                            </h3>
                            <p>Under the Digital Personal Data Protection Act, 2023, you have the right to:</p>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Access:</strong> Request information about your personal data we hold</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Correction:</strong> Request correction of inaccurate personal data</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Erasure:</strong> Request deletion of your data, including voice clones</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Grievance Redressal:</strong> File complaints with our Data Protection Officer</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Withdraw Consent:</strong> Withdraw previously given consent at any time</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 6 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Lock className="w-5 h-5 text-[#ff1a1a]" />
                                6. Data Retention
                            </h3>
                            <p>
                                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy.
                                Voice data is retained for the duration of our service agreement and deleted within 90 days of service
                                termination unless otherwise requested. Usage data is retained for a maximum of 26 months.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Shield className="w-5 h-5 text-[#ff1a1a]" />
                                7. Data Security
                            </h3>
                            <p>
                                We implement industry-standard security measures including SSL/TLS encryption, AES-256 encryption at rest,
                                access controls, regular security audits, and employee training. However, no method of electronic
                                transmission or storage is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#ff1a1a]" />
                                Contact Us
                            </h3>
                            <p>
                                For any privacy-related concerns or to exercise your rights under the DPDP Act, contact our Data Protection Officer:
                            </p>
                            <p>
                                <strong className="text-white">Email:</strong>{' '}
                                <a href="mailto:contact@voxzen.ai" className="text-[#ff1a1a] hover:underline">contact@voxzen.ai</a>
                            </p>
                            <p>
                                <strong className="text-white">Address:</strong> VOXZEN AI PRIVATE LIMITED, Jagatpura, Jaipur, Rajasthan, India
                            </p>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
