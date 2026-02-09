import { Twitter, Linkedin, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div
            className="bg-[#0a0404] border-t border-white/10 pt-20 pb-12"
            itemScope
            itemType="https://schema.org/Organization"
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-4 gap-8 sm:gap-12 mb-16">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#ff1a1a] via-[#cc0000] to-[#8b0000] rounded-lg flex items-center justify-center relative overflow-visible">
                                <svg className="w-4 h-4 text-white relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M2 2L12 20L22 2H17L12 12L7 2H2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="absolute inset-0 bg-[#ff1a1a] blur-md opacity-50" aria-hidden="true"></div>
                            </div>
                            <span className="text-xl font-bold text-white" itemProp="name">Voxzen AI</span>
                        </div>
                        <p className="text-[#a3a3a3] text-sm leading-relaxed" itemProp="description">
                            India's First AI-Powered Multilingual YouTube Channel Management Service. Clone your voice, reach global audiences.
                        </p>

                        {/* Address for Local SEO */}
                        <address
                            className="text-[#a3a3a3] text-sm not-italic space-y-2"
                            itemProp="address"
                            itemScope
                            itemType="https://schema.org/PostalAddress"
                        >
                            <p className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[#ff1a1a]" aria-hidden="true" />
                                <span itemProp="addressLocality">Jaipur</span>, <span itemProp="addressRegion">Rajasthan</span>, <span itemProp="addressCountry">India</span>
                            </p>
                        </address>

                        {/* Social Links with proper SEO attributes */}
                        <nav aria-label="Social media links" className="flex gap-4 pt-2">
                            <a
                                href="https://twitter.com/voxzenai"
                                target="_blank"
                                rel="noopener noreferrer me"
                                className="text-[#a3a3a3] hover:text-[#ff1a1a] transition-colors"
                                aria-label="Follow Voxzen AI on Twitter"
                                itemProp="sameAs"
                            >
                                <Twitter className="w-5 h-5" aria-hidden="true" />
                            </a>
                            <a
                                href="https://linkedin.com/company/voxzenai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#a3a3a3] hover:text-[#ff1a1a] transition-colors"
                                aria-label="Connect with Voxzen AI on LinkedIn"
                                itemProp="sameAs"
                            >
                                <Linkedin className="w-5 h-5" aria-hidden="true" />
                            </a>
                            <a
                                href="https://instagram.com/voxzenai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#a3a3a3] hover:text-[#ff1a1a] transition-colors"
                                aria-label="Follow Voxzen AI on Instagram"
                                itemProp="sameAs"
                            >
                                <Instagram className="w-5 h-5" aria-hidden="true" />
                            </a>
                            <a
                                href="https://youtube.com/@voxzenai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#a3a3a3] hover:text-[#ff1a1a] transition-colors"
                                aria-label="Subscribe to Voxzen AI on YouTube"
                                itemProp="sameAs"
                            >
                                <Youtube className="w-5 h-5" aria-hidden="true" />
                            </a>
                        </nav>
                    </div>

                    {/* Services Navigation */}
                    <nav aria-label="Services">
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
                        <ul className="space-y-3 text-[#a3a3a3] text-sm" role="list">
                            <li><a href="#how-it-works" className="hover:text-white transition-colors hover:translate-x-1 inline-block">AI Voice Cloning</a></li>
                            <li><a href="#how-it-works" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Script Adaptation</a></li>
                            <li><a href="#how-it-works" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Channel Management</a></li>
                            <li><a href="#how-it-works" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Thumbnail Localization</a></li>
                            <li><a href="#how-it-works" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Multilingual SEO</a></li>
                            <li><a href="#how-it-works" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Community Management</a></li>
                        </ul>
                    </nav>

                    {/* Languages */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Languages</h4>
                        <ul className="space-y-3 text-[#a3a3a3] text-sm" role="list" itemProp="knowsLanguage">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></span>
                                Telugu ↔ Hindi
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></span>
                                Hindi ↔ English
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></span>
                                Telugu ↔ English
                            </li>
                            <li className="flex items-center gap-2 text-[#666]">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full" aria-hidden="true"></span>
                                Tamil <span className="text-xs">(Coming Soon)</span>
                            </li>
                            <li className="flex items-center gap-2 text-[#666]">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full" aria-hidden="true"></span>
                                Kannada <span className="text-xs">(Coming Soon)</span>
                            </li>
                            <li className="flex items-center gap-2 text-[#666]">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full" aria-hidden="true"></span>
                                Malayalam <span className="text-xs">(Coming Soon)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <nav aria-label="Company information">
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3 text-[#a3a3a3] text-sm" role="list">
                            <li><a href="#problem" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#demos" className="hover:text-white transition-colors">Demos</a></li>
                            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#apply" className="hover:text-white transition-colors">Apply Now</a></li>
                            <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                            <li>
                                <a
                                    href="mailto:contact@voxzen.ai"
                                    className="flex items-center gap-2 pt-2 text-white hover:text-[#ff1a1a] transition-colors"
                                    itemProp="email"
                                >
                                    <Mail className="w-4 h-4 text-[#ff1a1a]" aria-hidden="true" />
                                    contact@voxzen.ai
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+919999999999"
                                    className="flex items-center gap-2 text-white hover:text-[#ff1a1a] transition-colors"
                                    itemProp="telephone"
                                >
                                    <Phone className="w-4 h-4 text-[#ff1a1a]" aria-hidden="true" />
                                    +91 99999 99999
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Bottom Bar with SEO-friendly copyright */}
                <div className="border-t border-white/5 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#a3a3a3] text-xs">
                        <p itemProp="copyrightNotice">
                            © {currentYear} <span itemProp="copyrightHolder">Voxzen AI</span>. All rights reserved.
                        </p>
                        <nav aria-label="Legal links" className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                        </nav>
                    </div>

                    {/* Hidden SEO content */}
                    <meta itemProp="url" content="https://voxzenai.in" />
                    <meta itemProp="logo" content="https://voxzenai.in/logo.png" />
                    <meta itemProp="foundingDate" content="2025" />
                </div>
            </div>
        </div>
    );
}
