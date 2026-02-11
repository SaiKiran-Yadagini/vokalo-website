import { motion } from 'framer-motion';
import { Cookie, Settings, BarChart3, Shield, Mail } from 'lucide-react';

export function CookiePolicy() {
    return (
        <section id="cookie-policy" className="py-24 bg-[#080303] text-[#e8d4d4] relative">
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
                                <Cookie className="w-8 h-8 text-[#ff1a1a]" />
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Cookie Policy</h2>
                        <p className="text-[#a3a3a3] text-sm">Last Updated: February 11, 2026</p>
                    </div>

                    {/* Content */}
                    <div className="space-y-10 text-[#c4b0b0] leading-relaxed">

                        <div className="space-y-4">
                            <p>
                                This Cookie Policy explains how VOXZEN AI PRIVATE LIMITED ("Voxzen AI") uses cookies and similar
                                tracking technologies on our website voxzenai.in. By continuing to use our website, you consent to
                                our use of cookies as described in this policy.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Cookie className="w-5 h-5 text-[#ff1a1a]" />
                                1. What Are Cookies?
                            </h3>
                            <p>
                                Cookies are small text files stored on your device when you visit a website. They help the website
                                remember your preferences, understand how you interact with the site, and improve your experience.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Settings className="w-5 h-5 text-[#ff1a1a]" />
                                2. Types of Cookies We Use
                            </h3>

                            {/* Cookie Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left py-3 px-4 text-white font-bold text-sm">Type</th>
                                            <th className="text-left py-3 px-4 text-white font-bold text-sm">Purpose</th>
                                            <th className="text-left py-3 px-4 text-white font-bold text-sm">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4 text-white font-medium">Essential</td>
                                            <td className="py-3 px-4">Required for the website to function. Cannot be disabled.</td>
                                            <td className="py-3 px-4">Session</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4 text-white font-medium">Analytics</td>
                                            <td className="py-3 px-4">Help us understand how visitors interact with our website (Google Analytics).</td>
                                            <td className="py-3 px-4">Up to 2 years</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4 text-white font-medium">Performance</td>
                                            <td className="py-3 px-4">Monitor site speed and performance to improve user experience.</td>
                                            <td className="py-3 px-4">Session</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3 px-4 text-white font-medium">Functional</td>
                                            <td className="py-3 px-4">Remember your preferences (theme, language) for a better experience.</td>
                                            <td className="py-3 px-4">1 year</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <BarChart3 className="w-5 h-5 text-[#ff1a1a]" />
                                3. Third-Party Cookies
                            </h3>
                            <p>We use cookies from the following third-party services:</p>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Google Analytics:</strong> For website traffic analysis and usage patterns</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">YouTube (Embedded Videos):</strong> For displaying demo videos on our site</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span><strong className="text-white">Google Fonts:</strong> For loading typography assets</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Shield className="w-5 h-5 text-[#ff1a1a]" />
                                4. Managing Cookies
                            </h3>
                            <p>You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>View and delete existing cookies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Block all cookies or specific types</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Set preferences for cookie acceptance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#ff1a1a] rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Opt out of Google Analytics tracking at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#ff1a1a] hover:underline">tools.google.com/dlpage/gaoptout</a></span>
                                </li>
                            </ul>
                            <p className="text-sm text-[#a3a3a3]">
                                Note: Disabling essential cookies may affect the functionality of the website.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#ff1a1a]" />
                                Questions?
                            </h3>
                            <p>
                                For questions about our cookie usage, contact us at{' '}
                                <a href="mailto:contact@voxzen.ai" className="text-[#ff1a1a] hover:underline">contact@voxzen.ai</a>
                            </p>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
