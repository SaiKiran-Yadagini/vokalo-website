import { Twitter, Linkedin, Instagram, Youtube, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#0a0404] border-t border-white/10 pt-20 pb-12">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-4 gap-8 sm:gap-12 mb-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#ff1a1a] via-[#cc0000] to-[#8b0000] rounded-lg flex items-center justify-center relative overflow-visible">
                                <svg className="w-4 h-4 text-white relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2L12 20L22 2H17L12 12L7 2H2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="absolute inset-0 bg-[#ff1a1a] blur-md opacity-50"></div>
                            </div>
                            <span className="text-xl font-bold text-white">Voxzen AI</span>
                        </div>
                        <p className="text-[#a3a3a3] text-sm leading-relaxed">
                            India's First AI-Powered Multilingual YouTube Channel Management Service.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://twitter.com/voxzenai" className="text-[#a3a3a3] hover:text-[#ff1a1a] transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="https://linkedin.com/company/voxzenai" className="text-[#a3a3a3] hover:text-[#ff1a1a] transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="https://instagram.com/voxzenai" className="text-[#a3a3a3] hover:text-[#ff1a1a] transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="https://youtube.com/@voxzenai" className="text-[#a3a3a3] hover:text-[#ff1a1a] transition-colors"><Youtube className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">SERVICES</h4>
                        <ul className="space-y-3 text-[#a3a3a3] text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">AI Voice Cloning</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Script Adaptation</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Channel Management</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Thumbnail Localization</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Multilingual SEO</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Community Management</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">LANGUAGES</h4>
                        <ul className="space-y-3 text-[#a3a3a3] text-sm">
                            <li>Telugu ↔ Hindi</li>
                            <li>Hindi ↔ English</li>
                            <li>Telugu ↔ English</li>
                            <li>Tamil (Coming Soon)</li>
                            <li>Kannada (Coming Soon)</li>
                            <li>Malayalam (Coming Soon)</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">COMPANY</h4>
                        <ul className="space-y-3 text-[#a3a3a3] text-sm">
                            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#demos" className="hover:text-white transition-colors">Demos</a></li>
                            <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#apply" className="hover:text-white transition-colors">Apply</a></li>
                            <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li className="flex items-center gap-2 pt-2 text-white"><Mail className="w-4 h-4 text-[#ff1a1a]" /> contact@voxzen.ai</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-[#a3a3a3] text-xs">
                    <p>© 2025 Voxzen AI. All rights reserved.</p>

                </div>
            </div>
        </footer>
    );
}
