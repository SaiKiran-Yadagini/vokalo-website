import React, { useState, useEffect, useRef } from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';

import { 

  Play, // Used in JSX on line 1057

  CheckCircle, 

  Star, 

  Mail,

  Sparkles,

  Zap,

  Shield,

  Clock,

  ArrowRight,

  ArrowUp,

  ChevronDown,

  ChevronUp,

  Mic,

  Brain,

  Gauge

} from 'lucide-react';

// Ensure Play is recognized as used (it's used in JSX on line 1057)
void Play;

import {

  Accordion,

  AccordionContent,

  AccordionItem,

  AccordionTrigger,

} from '@/components/ui/accordion';

// Glow Component

const Glow = React.forwardRef<

  HTMLDivElement,

  React.HTMLAttributes<HTMLDivElement> & { variant?: 'top' | 'above' | 'bottom' | 'below' | 'center' }

>(({ className, variant = 'top', ...props }, ref) => (

  <div

    ref={ref}

    className={cn(

      'absolute w-full pointer-events-none',

      variant === 'top' && 'top-0',

      variant === 'above' && '-top-[128px]',

      variant === 'bottom' && 'bottom-0',

      variant === 'below' && '-bottom-[128px]',

      variant === 'center' && 'top-[50%]',

      className

    )}

    {...props}

  >

    <div

      className={cn(

        'absolute left-1/2 h-[300px] w-[70%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(139,0,0,.4)_0%,_rgba(139,0,0,0)_70%)] sm:h-[600px] blur-3xl',

        variant === 'center' && '-translate-y-1/2'

      )}

    />

  </div>

));

Glow.displayName = 'Glow';

// Mockup Component

const Mockup = React.forwardRef<

  HTMLDivElement,

  React.HTMLAttributes<HTMLDivElement> & { type?: 'mobile' | 'responsive' }

>(({ className, type = 'responsive', ...props }, ref) => (

  <div

    ref={ref}

    className={cn(

      'flex relative z-10 overflow-hidden shadow-2xl border',

      type === 'mobile' ? 'rounded-[48px] max-w-[350px]' : 'rounded-2xl',

      className

    )}

    {...props}

  />

));

Mockup.displayName = 'Mockup';

// Main Component

function VakaloAIWebsite() {

  const [formData, setFormData] = useState({

    name: '',

    email: '',

    channelLink: '',

    subscriberCount: ''

  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const playerRef = useRef<any>(null);
  const timeCheckIntervalRef = useRef<number | null>(null);
  const messageTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          setShowScrollTop(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isDropdownOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.custom-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    // Use capture phase for better performance
    document.addEventListener('mousedown', handleClickOutside, true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    // Constants for video control
    const VIDEO_MAX_TIME = 72; // 1:12 in seconds
    const TIME_CHECK_INTERVAL = 100; // Check every 100ms

    // Check if YouTube API script already exists
    const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
    
    function initializePlayer() {
      if (!(window as any).YT || !(window as any).YT.Player) {
        return;
      }

      const iframe = document.getElementById('original-video-iframe');
      if (!iframe) {
        return;
      }

      try {
        playerRef.current = new (window as any).YT.Player('original-video-iframe', {
          events: {
            onStateChange: (event: any) => {
              if (event.data === (window as any).YT.PlayerState.PLAYING) {
                // Check if video has reached max time
                timeCheckIntervalRef.current = setInterval(() => {
                  if (playerRef.current) {
                    try {
                      const currentTime = playerRef.current.getCurrentTime();
                      if (currentTime >= VIDEO_MAX_TIME) {
                        playerRef.current.pauseVideo();
                        if (timeCheckIntervalRef.current) {
                          clearInterval(timeCheckIntervalRef.current);
                          timeCheckIntervalRef.current = null;
                        }
                      }
                    } catch (e) {
                      // Player not ready yet
                    }
                  }
                }, TIME_CHECK_INTERVAL);
              } else {
                if (timeCheckIntervalRef.current) {
                  clearInterval(timeCheckIntervalRef.current);
                  timeCheckIntervalRef.current = null;
                }
              }
            }
          }
        });
      } catch (e) {
        // Failed to initialize player
      }
    }

    if ((window as any).YT && (window as any).YT.Player) {
      initializePlayer();
    } else if (!existingScript) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.async = true;
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      (window as any).onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    } else {
      // Script exists but API not ready yet, wait for it
      if ((window as any).onYouTubeIframeAPIReady) {
        const originalCallback = (window as any).onYouTubeIframeAPIReady;
        (window as any).onYouTubeIframeAPIReady = () => {
          originalCallback();
          initializePlayer();
        };
      } else {
        (window as any).onYouTubeIframeAPIReady = initializePlayer;
      }
    }

    return () => {
      if (timeCheckIntervalRef.current) {
        clearInterval(timeCheckIntervalRef.current);
        timeCheckIntervalRef.current = null;
      }
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // Ignore destroy errors
        }
        playerRef.current = null;
      }
    };
  }, []);

  const scrollToTop = () => {

    window.scrollTo({ top: 0, behavior: 'smooth' });

  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // URL validation regex
  const urlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(null);

    // Clear any existing timeout
    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current);
      messageTimeoutRef.current = null;
    }

    // Validate and sanitize form fields
    const name = formData.name.trim();
    const email = formData.email.trim();
    const channelLink = formData.channelLink.trim();

    if (!name) {
      setSubmitMessage({ type: 'error', text: 'Please enter your name' });
      return;
    }
    if (name.length > 100) {
      setSubmitMessage({ type: 'error', text: 'Name is too long (max 100 characters)' });
      return;
    }
    
    if (!email) {
      setSubmitMessage({ type: 'error', text: 'Please enter your email' });
      return;
    }
    if (!emailRegex.test(email)) {
      setSubmitMessage({ type: 'error', text: 'Please enter a valid email address' });
      return;
    }
    
    if (!channelLink) {
      setSubmitMessage({ type: 'error', text: 'Please enter your YouTube channel link' });
      return;
    }
    if (!urlRegex.test(channelLink)) {
      setSubmitMessage({ type: 'error', text: 'Please enter a valid YouTube channel URL' });
      return;
    }
    
    if (!formData.subscriberCount) {
      setSubmitMessage({ type: 'error', text: 'Please select your subscriber count' });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Create FormData with Google Form entry IDs (using sanitized values)
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('entry.755533365', name);
      formDataToSubmit.append('entry.1902050098', email);
      formDataToSubmit.append('entry.2065371267', channelLink);
      formDataToSubmit.append('entry.1898441062', formData.subscriberCount);

      // Submit to Google Forms using fetch (no redirect)
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSeI6QZRilxn2GwKF-ajOHDM5aUqlHi_0foYW23UBPMjTunYBw/formResponse',
        {
          method: 'POST',
          mode: 'no-cors', // Required for Google Forms (CORS policy)
          body: formDataToSubmit
        }
      );

      // With no-cors mode, we can't read the response, but if no error, assume success
      setSubmitMessage({ 
        type: 'success', 
        text: 'Thank you! Your application has been submitted successfully. We will review it and get back to you within 24 hours.' 
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        channelLink: '',
        subscriberCount: ''
      });

      // Clear message after 10 seconds
      if (messageTimeoutRef.current) {
        clearTimeout(messageTimeoutRef.current);
      }
      messageTimeoutRef.current = setTimeout(() => {
        setSubmitMessage(null);
        messageTimeoutRef.current = null;
      }, 10000);

    } catch (error) {
      setSubmitMessage({ 
        type: 'error', 
        text: 'There was an error submitting your form. Please try again or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (messageTimeoutRef.current) {
        clearTimeout(messageTimeoutRef.current);
      }
      if (timeCheckIntervalRef.current) {
        clearInterval(timeCheckIntervalRef.current);
      }
    };
  }, []);

  return (

    <div className="min-h-screen bg-gradient-to-b from-[#0a0404] via-[#1a0f0f] to-[#0a0404] text-[#e8d4d4]">

      {/* Fixed Header/Navbar */}

      <motion.header

        initial={{ y: -100 }}

        animate={{ y: 0 }}

        transition={{ duration: 0.3 }}

        className={cn(

          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',

          isScrolled

            ? 'backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/10'

            : 'backdrop-blur-md border-b border-white/5'

        )}

      >

        <div className="container mx-auto max-w-7xl px-4 py-3 sm:py-4 flex justify-between items-center">

          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 group">

            <div className="w-10 h-10 bg-gradient-to-br from-[#ff1a1a] via-[#cc0000] to-[#8b0000] rounded-xl flex items-center justify-center shadow-lg shadow-[#8b0000]/30 group-hover:scale-110 transition-transform relative overflow-visible">

              <svg className="w-5 h-5 text-white relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Main V letter */}
                <path d="M2 2L12 20L22 2H17L12 12L7 2H2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Sparkle effects */}
                <circle cx="6" cy="4" r="0.8" fill="white" opacity="0.9" className="animate-ping" style={{animationDelay: '0s', animationDuration: '2s'}}/>
                <circle cx="18" cy="4" r="0.8" fill="white" opacity="0.9" className="animate-ping" style={{animationDelay: '0.7s', animationDuration: '2s'}}/>
                <circle cx="12" cy="18" r="0.6" fill="white" opacity="0.8" className="animate-ping" style={{animationDelay: '1.4s', animationDuration: '2s'}}/>
              </svg>

            </div>

            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-[#e8d4d4] bg-clip-text text-transparent">Vakalo AI</h2>

          </a>

          <Button

            asChild

            size="lg"

            className="bg-gradient-to-r from-[#ff1a1a] to-[#cc0000] hover:from-[#ff3333] hover:to-[#e60000] text-white shadow-lg shadow-[#8b0000]/50 border-0 text-sm sm:text-base px-4 sm:px-6"

          >

            <a href="#apply">Apply for Free Call</a>

          </Button>

        </div>

      </motion.header>

      {/* Hero Section */}

      <section className="relative text-[#e8d4d4] pt-20 pb-12 px-4 sm:pt-24 md:pt-28 md:pb-16 lg:pb-20 overflow-hidden min-h-screen flex flex-col">

        <div className="relative mx-auto max-w-7xl w-full flex flex-col gap-6 sm:gap-8 lg:gap-16 flex-1 justify-center">

          <div className="relative z-10 flex flex-col items-center gap-6 text-center lg:gap-10">

            {/* Social Proof Badge */}

            <motion.div

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#2a1515]/80 to-[#1a0f0f]/80 backdrop-blur-xl border border-[#ff1a1a]/30 rounded-full shadow-lg"

            >

              <Star className="w-4 h-4 text-[#ff1a1a] fill-[#ff1a1a]" />

              <span className="text-sm font-medium bg-gradient-to-r from-white to-[#e8d4d4] bg-clip-text text-transparent">The AI Dubbing Service for India's Elite Creators</span>

            </motion.div>

            {/* Heading */}

            <motion.h1

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ delay: 0.1 }}

              className={cn(

                'inline-block',

                'bg-gradient-to-b from-white via-[#f5f5f5] to-[#d4b4b4]',

                'bg-clip-text text-transparent',

                'text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl',

                'leading-[1.05] sm:leading-[1.05]',

                'drop-shadow-2xl'

              )}

            >

              Stop Sounding Robotic.<br />Start Sounding Real.

            </motion.h1>

            {/* Description */}

            <motion.p

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ delay: 0.2 }}

              className={cn(

                'max-w-[700px]',

                'text-lg sm:text-xl md:text-2xl',

                'text-[#d4b4b4]/90',

                'font-medium leading-relaxed'

              )}

            >

              We build a 100% Personalized AI Pipeline <span className="text-[#ff1a1a] font-bold">for you</span>. We clone your voice, learn your slang, and deliver a custom-built AI engine that sounds exactly like you.

            </motion.p>

            {/* CTA */}

            <motion.div

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ delay: 0.3 }}

              className="relative z-10 flex flex-wrap justify-center gap-4 mt-4"

            >

              <Button

                asChild

                size="lg"

                className="bg-gradient-to-r from-[#ff1a1a] to-[#cc0000] hover:from-[#ff3333] hover:to-[#e60000] text-white shadow-2xl shadow-[#8b0000]/50 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-xl sm:rounded-2xl border-0 group"

              >

                <a href="#apply" className="flex items-center gap-2">

                  Apply for a Free Strategy Call

                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />

                </a>

              </Button>

            </motion.div>

            {/* Demo Video Comparison */}

            <motion.div

              initial={{ opacity: 0, y: 30 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ delay: 0.4 }}

              className="relative w-full pt-16 sm:pt-20 lg:pt-24 px-2 sm:px-4 lg:px-8 max-w-6xl mx-auto"

            >

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">

                <div className="relative group">

                  <div className="absolute -top-8 sm:-top-10 left-2 sm:left-4 z-20 bg-[#2a1515]/90 backdrop-blur-xl px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-[#8b0000]/30 shadow-lg">

                    <span className="text-xs sm:text-sm font-semibold text-[#d4b4b4]">Original Video</span>

                  </div>

                  <Mockup className="border-[#8b0000]/20 bg-[#1a0f0f] group-hover:scale-[1.02] transition-transform duration-300">

                    <div className="w-full aspect-video bg-gradient-to-br from-[#2a1515] to-[#1a0f0f] relative overflow-hidden">

                      <iframe

                        id="original-video-iframe"

                        className="absolute inset-0 w-full h-full"

                        src="https://www.youtube.com/embed/dyfNhopahck?start=3&rel=0&modestbranding=1&enablejsapi=1"

                        title="Original Video"

                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

                        allowFullScreen

                        loading="lazy"

                        referrerPolicy="no-referrer-when-downgrade"

                      ></iframe>

                    </div>

                  </Mockup>

                </div>

                <div className="relative group">

                  <div className="absolute -top-8 sm:-top-10 left-2 sm:left-4 z-20 bg-gradient-to-r from-[#ff1a1a] to-[#cc0000] px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-2xl shadow-[#8b0000]/50">

                    <span className="text-xs sm:text-sm font-semibold text-white">Vakalo AI: Realistic & Conversational - Telugu Dub</span>

                  </div>

                  <Mockup className="border-[#ff1a1a]/50 shadow-[0_0_50px_rgba(255,26,26,0.3)] group-hover:scale-[1.02] group-hover:shadow-[0_0_70px_rgba(255,26,26,0.4)] transition-all duration-300">

                    <div className="w-full aspect-video bg-gradient-to-br from-[#2a1515] to-[#1a0f0f] relative overflow-hidden">

                      <iframe

                        className="absolute inset-0 w-full h-full"

                        src="https://www.youtube.com/embed/_jCd3Vq3bFI?rel=0&modestbranding=1"

                        title="Vakalo AI: Realistic & Conversational - Telugu Dub"

                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

                        allowFullScreen

                        loading="lazy"

                        referrerPolicy="no-referrer-when-downgrade"

                      ></iframe>

                    </div>

                  </Mockup>

                </div>

              </div>

            </motion.div>

            {/* Testimonial */}

            <motion.div

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ delay: 0.6 }}

              className="mt-10 sm:mt-12 p-6 sm:p-8 bg-gradient-to-br from-[#2a1515]/70 to-[#1a0f0f]/70 backdrop-blur-xl border border-[#8b0000]/30 rounded-2xl sm:rounded-3xl max-w-2xl shadow-2xl mx-auto w-full"

            >

              <p className="text-lg sm:text-xl italic text-white mb-3 sm:mb-4 font-medium leading-relaxed">"Well done, looks unreal 🔥, curious to know more about it."</p>

              <p className="text-sm sm:text-base text-[#d4b4b4] font-medium">- Sharad Sisodiya</p>

            </motion.div>

          </div>

        </div>

        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <Glow variant="center" />

          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff1a1a]/10 rounded-full blur-[120px]"></div>

          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b0000]/10 rounded-full blur-[120px]"></div>

        </div>

      </section>

      {/* Pain Point Section */}

      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#0a0404] to-[#1a0f0f] relative">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b000008_1px,transparent_1px),linear-gradient(to_bottom,#8b000008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="container mx-auto max-w-7xl relative z-10">

          <motion.h2

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-6 sm:mb-8 bg-gradient-to-b from-white to-[#d4b4b4] bg-clip-text text-transparent leading-tight px-4"

          >

            Your Voice is Your Brand.<br />Don't Let a Robot Destroy It.

          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20">

            {[

              {

                icon: Shield,

                title: 'You Lose Your Brand',

                desc: 'Robotic voices erase your personality and make your brand look cheap. Your audience trust is broken.'

              },

              {

                icon: Zap,

                title: 'You Lose Your Nuance',

                desc: '"Bookish" translations miss your humor, your timing, and your unique style. The real you gets lost.'

              },

              {

                icon: Sparkles,

                title: 'Global Tools Don\'t Get India',

                desc: 'HeyGen & ElevenLabs are built for English. We are an India-first service built by AI engineers who understand Telugu, Hindi, and Tamil.'

              }

            ].map((item, i) => (

              <motion.div

                key={i}

                initial={{ opacity: 0, y: 30 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{ delay: i * 0.1 }}

                className="group p-6 sm:p-8 bg-gradient-to-br from-[#2a1515]/40 to-[#1a0f0f]/40 backdrop-blur-sm border border-[#8b0000]/20 rounded-2xl sm:rounded-3xl hover:border-[#ff1a1a]/50 transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,26,26,0.15)]"

              >

                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ff1a1a]/20 to-[#8b0000]/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">

                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#ff1a1a]" />

                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{item.title}</h3>

                <p className="text-base sm:text-lg text-[#d4b4b4] leading-relaxed">{item.desc}</p>

              </motion.div>

            ))}

          </div>

          <div className="text-center mt-12 sm:mt-16">

            <Button

              asChild

              size="lg"

              className="bg-gradient-to-r from-[#ff1a1a] to-[#cc0000] hover:from-[#ff3333] hover:to-[#e60000] text-white shadow-2xl shadow-[#8b0000]/50 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-xl sm:rounded-2xl border-0"

            >

              <a href="#apply">Apply for a Free Strategy Call</a>

            </Button>

          </div>

        </div>

      </section>

      {/* Solution Section */}

      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#1a0f0f] to-[#0a0404] relative overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 bg-[#ff1a1a]/5 rounded-full blur-[150px]"></div>

        </div>

        <div className="container mx-auto max-w-7xl relative z-10">

          <motion.div

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            className="text-center mb-16"

          >

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-b from-white to-[#d4b4b4] bg-clip-text text-transparent leading-tight">

              This Isn't a SaaS.<br />It's a "Done-for-You" AI Asset.

            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-[#d4b4b4]/90 max-w-4xl mx-auto leading-relaxed px-4">

              You don't just 'get access' to a tool. We are your personal AI engineering team. Our process is a white-glove service to build your <span className="text-[#ff1a1a] font-bold">own</span> proprietary dubbing engine.

            </p>

          </motion.div>

          

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20">

            {[

              {

                icon: Brain,

                title: 'The "Vak" Analysis',

                desc: 'We study your content to capture your unique persona, slang, and speech patterns.'

              },

              {

                icon: Mic,

                title: 'The Voice Clone',

                desc: 'We build a high-fidelity, emotional clone of your voice.'

              },

              {

                icon: Sparkles,

                title: 'The Custom LLM',

                desc: 'We train an Unsloth-powered LLM on your content so it writes in your style.'

              },

              {

                icon: Gauge,

                title: 'The Pipeline Delivery',

                desc: 'We deliver a simple, one-click dashboard that is your custom-built engine.'

              }

            ].map((item, i) => (

              <motion.div

                key={i}

                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}

                whileInView={{ opacity: 1, x: 0 }}

                viewport={{ once: true }}

                transition={{ delay: i * 0.1 }}

                className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 bg-gradient-to-br from-[#2a1515]/40 to-[#1a0f0f]/40 backdrop-blur-sm border border-[#8b0000]/20 rounded-2xl sm:rounded-3xl hover:border-[#ff1a1a]/50 transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,26,26,0.15)]"

              >

                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#ff1a1a]/20 to-[#8b0000]/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">

                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#ff1a1a]" />

                </div>

                <div className="flex-1">

                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{item.title}</h3>

                  <p className="text-base sm:text-lg text-[#d4b4b4] leading-relaxed">{item.desc}</p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Showroom Section - COMMENTED OUT - Can be restored when needed */}
      {/* 
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#0a0404] to-[#1a0f0f] relative">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b000008_1px,transparent_1px),linear-gradient(to_bottom,#8b000008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="container mx-auto max-w-7xl relative z-10">

          <motion.h2

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-12 sm:mb-16 md:mb-20 bg-gradient-to-b from-white to-[#d4b4b4] bg-clip-text text-transparent leading-tight px-4"

          >

            Hear the Vakalo AI Difference

          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

            {[

              { title: 'Tech Creator in Telugu', subtitle: 'Tech Burner Demo' },

              { title: 'Educator in Tamil', subtitle: 'Ankur Warikoo Demo' },

              { title: 'Finance Expert in Hindi', subtitle: 'Rachana Ranade Demo' }

            ].map((demo, i) => (

              <motion.div

                key={i}

                initial={{ opacity: 0, y: 30 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{ delay: i * 0.1 }}

                className="group bg-gradient-to-br from-[#2a1515]/40 to-[#1a0f0f]/40 backdrop-blur-sm border border-[#8b0000]/20 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-[#ff1a1a]/50 transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,26,26,0.15)]"

              >

                <div className="aspect-video bg-gradient-to-br from-[#2a1515] to-[#1a0f0f] flex items-center justify-center relative overflow-hidden">

                  <div className="absolute inset-0 bg-[#ff1a1a]/5 group-hover:bg-[#ff1a1a]/10 transition-colors"></div>

                  <div className="relative">

                    <div className="absolute inset-0 bg-[#ff1a1a]/20 rounded-full blur-3xl group-hover:blur-2xl group-hover:bg-[#ff1a1a]/30 transition-all"></div>

                    <Play className="w-16 h-16 sm:w-20 sm:h-20 text-[#ff1a1a] relative z-10 group-hover:scale-110 transition-transform" />

                  </div>

                </div>

                <div className="p-6 sm:p-8">

                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{demo.title}</h3>

                  <p className="text-base sm:text-lg text-[#d4b4b4]">{demo.subtitle}</p>

                </div>

              </motion.div>

            ))}

          </div>

          <div className="text-center mt-12 sm:mt-16">

            <Button

              asChild

              size="lg"

              className="bg-gradient-to-r from-[#ff1a1a] to-[#cc0000] hover:from-[#ff3333] hover:to-[#e60000] text-white shadow-2xl shadow-[#8b0000]/50 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-xl sm:rounded-2xl border-0"

            >

              <a href="#apply">Apply for a Free Strategy Call</a>

            </Button>

          </div>

        </div>

      </section>
      */}

      {/* Application Form Section */}

      <section id="apply" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#1a0f0f] to-[#0a0404] relative overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 bg-[#ff1a1a]/5 rounded-full blur-[150px]"></div>

        </div>

        <div className="container mx-auto max-w-4xl relative z-10">

          <motion.div

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            className="text-center mb-16"

          >

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-b from-white to-[#d4b4b4] bg-clip-text text-transparent leading-tight">

              We Are Accepting 10 New<br />Creators This Quarter

            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-[#d4b4b4]/90 max-w-3xl mx-auto leading-relaxed px-4">

              Building a personalized AI pipeline is an intensive, white-glove service. We can only take on a limited number of clients to ensure 100% quality. Apply to see if you qualify for one of our open build-slots.

            </p>

          </motion.div>

          <motion.form

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            onSubmit={handleSubmit}

            className="bg-gradient-to-br from-[#2a1515]/60 to-[#1a0f0f]/60 backdrop-blur-xl border border-[#8b0000]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8 shadow-2xl"

          >

            <div>

              <label htmlFor="name" className="block text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-white">

                Name *

              </label>

              <Input

                id="name"

                name="name"

                type="text"

                required

                value={formData.name}

                onChange={handleInputChange}

                className="bg-[#1a0f0f]/80 border-[#8b0000]/30 text-white placeholder:text-[#d4b4b4]/40 focus:border-[#ff1a1a] focus:ring-[#ff1a1a]/20 h-12 sm:h-14 text-base sm:text-lg rounded-xl sm:rounded-2xl"

              />

            </div>

            <div>

              <label htmlFor="email" className="block text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-white">

                Email *

              </label>

              <Input

                id="email"

                name="email"

                type="email"

                required

                value={formData.email}

                onChange={handleInputChange}

                className="bg-[#1a0f0f]/80 border-[#8b0000]/30 text-white placeholder:text-[#d4b4b4]/40 focus:border-[#ff1a1a] focus:ring-[#ff1a1a]/20 h-12 sm:h-14 text-base sm:text-lg rounded-xl sm:rounded-2xl"

              />

            </div>

            <div>

              <label htmlFor="channelLink" className="block text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-white">

                Link to Your YouTube Channel *

              </label>

              <Input

                id="channelLink"

                name="channelLink"

                type="url"

                required

                value={formData.channelLink}

                onChange={handleInputChange}

                className="bg-[#1a0f0f]/80 border-[#8b0000]/30 text-white placeholder:text-[#d4b4b4]/40 focus:border-[#ff1a1a] focus:ring-[#ff1a1a]/20 h-12 sm:h-14 text-base sm:text-lg rounded-xl sm:rounded-2xl"

              />

            </div>

            <div className="custom-dropdown relative">

              <label htmlFor="subscriberCount" className="block text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-white">

                Your Current Subscriber Count *

              </label>

              <div className="relative">

                <button

                  type="button"

                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}

                  className={cn(

                    "w-full bg-[#1a0f0f]/80 border rounded-xl sm:rounded-2xl px-4 sm:px-6 h-12 sm:h-14 text-base sm:text-lg focus:border-[#ff1a1a] focus:ring-[#ff1a1a]/20 cursor-pointer transition-all duration-200 hover:border-[#8b0000]/50 flex items-center justify-between",

                    formData.subscriberCount ? "text-white border-[#8b0000]/30" : "text-[#d4b4b4]/40 border-[#8b0000]/50",

                    isDropdownOpen && "border-[#ff1a1a]"

                  )}

                >

                  <span>{formData.subscriberCount || 'Select range'}</span>

                  {isDropdownOpen ? (

                    <ChevronUp className="w-5 h-5 text-[#d4b4b4] flex-shrink-0" />

                  ) : (

                    <ChevronDown className="w-5 h-5 text-[#d4b4b4] flex-shrink-0" />

                  )}

                </button>

                {isDropdownOpen && (

                  <div className="absolute z-50 w-full mt-2 bg-[#1a0f0f] border border-[#8b0000]/30 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/50">

                    {[

                      { value: '< 50,000', label: '< 50,000' },

                      { value: '50K - 250K', label: '50K - 250K' },

                      { value: '250K - 1M', label: '250K - 1M' },

                      { value: '1M+', label: '1M+' }

                    ].map((option) => (

                      <button

                        key={option.value}

                        type="button"

                        onClick={() => {

                          setFormData({ ...formData, subscriberCount: option.value });

                          setIsDropdownOpen(false);

                        }}

                        className={cn(

                          "w-full px-4 sm:px-6 py-3 sm:py-4 text-left text-base sm:text-lg transition-all duration-200",

                          formData.subscriberCount === option.value

                            ? "bg-[#2a1515] text-[#ff1a1a] font-medium"

                            : "bg-[#1a0f0f] text-white hover:bg-[#2a1515] hover:text-[#ff1a1a]"

                        )}

                      >

                        {option.label}

                      </button>

                    ))}

                  </div>

                )}

              </div>

              <input

                type="hidden"

                name="subscriberCount"

                value={formData.subscriberCount || ''}

                required

              />

            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div
                className={cn(
                  "p-4 sm:p-5 rounded-xl sm:rounded-2xl text-center text-sm sm:text-base font-medium",
                  submitMessage.type === 'success'
                    ? "bg-green-900/30 border border-green-500/50 text-green-200"
                    : "bg-red-900/30 border border-red-500/50 text-red-200"
                )}
              >
                {submitMessage.text}
              </div>
            )}

            <Button

              type="submit"

              size="lg"

              disabled={isSubmitting}

              className="w-full bg-gradient-to-r from-[#ff1a1a] to-[#cc0000] hover:from-[#ff3333] hover:to-[#e60000] text-white shadow-2xl shadow-[#8b0000]/50 text-lg sm:text-xl py-6 sm:py-8 rounded-xl sm:rounded-2xl border-0 font-bold disabled:opacity-50 disabled:cursor-not-allowed"

            >

              {isSubmitting ? 'Submitting...' : 'Apply for My Free Strategy Call'}

            </Button>

            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center text-sm sm:text-base text-[#d4b4b4] pt-4 sm:pt-6">

              <div className="flex items-center gap-2">

                <CheckCircle className="w-5 h-5 text-[#ff1a1a]" />

                <span>100% Confidential</span>

              </div>

              <div className="flex items-center gap-2">

                <CheckCircle className="w-5 h-5 text-[#ff1a1a]" />

                <span>No-Obligation</span>

              </div>

              <div className="flex items-center gap-2">

                <Clock className="w-5 h-5 text-[#ff1a1a]" />

                <span>24-hour review</span>

              </div>

            </div>

          </motion.form>

        </div>

      </section>

      {/* FAQ Section */}

      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#0a0404] to-[#1a0f0f]">

        <div className="container mx-auto max-w-4xl">

          <motion.h2

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-12 sm:mb-16 bg-gradient-to-b from-white to-[#d4b4b4] bg-clip-text text-transparent px-4"

          >

            Frequently Asked Questions

          </motion.h2>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">

            {[

              {

                q: 'How is Vakalo AI different from other dubbing tools?',

                a: "We don't provide a generic tool. We build a custom AI pipeline specifically for you, trained on your content, voice, and style. It's a white-glove service, not a SaaS product."

              },

              {

                q: 'What languages do you support?',

                a: 'We support 12 languages in India including Hindi, Telugu, Tamil, and more. Additionally, we can dub content into multiple international languages such as Spanish, English, and many others. Our custom AI pipeline ensures authentic, conversational translations that capture local nuances and cultural context for any language.'

              },

              {

                q: 'How long does the setup process take?',

                a: 'The initial setup and training typically takes 2-3 weeks. This includes voice cloning, LLM training on your content, and pipeline customization to ensure perfect results.'

              },

              {

                q: "What's included in the free strategy call?",

                a: "We'll review your channel, discuss your expansion goals, demonstrate our technology, and create a custom roadmap for your multilingual content strategy. No obligation required."

              }

            ].map((faq, i) => (

              <motion.div

                key={`faq-${i}`}

                initial={{ opacity: 0, y: 20 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{ delay: i * 0.1 }}

                className="w-full"

              >

                <AccordionItem

                  value={`item-${i}`}

                  className="group bg-gradient-to-br from-[#2a1515]/50 to-[#1a0f0f]/50 backdrop-blur-sm border border-[#8b0000]/30 rounded-xl sm:rounded-2xl transition-all duration-300 hover:border-[#8b0000]/50 hover:shadow-lg hover:shadow-[#8b0000]/10 w-full"

                >

                  <AccordionTrigger className="text-white text-base sm:text-lg font-semibold px-4 sm:px-6 md:px-8 w-full">

                    {faq.q}

                  </AccordionTrigger>

                  <AccordionContent className="text-[#d4b4b4] text-sm sm:text-base leading-relaxed px-4 sm:px-6 md:px-8">

                    {faq.a}

                  </AccordionContent>

                </AccordionItem>

              </motion.div>

            ))}

          </Accordion>

        </div>

      </section>

      {/* Footer */}

      <footer className="relative py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0a0404] via-[#0f0606] to-[#0a0404] border-t border-[#8b0000]/30 overflow-hidden">

        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff1a1a] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#cc0000] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">

          <div className="flex flex-col items-center space-y-8 sm:space-y-10">

            {/* Logo and Brand */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ff1a1a] via-[#cc0000] to-[#8b0000] rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl shadow-[#8b0000]/40 relative overflow-visible transition-transform hover:scale-105 duration-300">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L12 20L22 2H17L12 12L7 2H2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-[#f5e5e5] to-[#e8d4d4] bg-clip-text text-transparent tracking-tight">
                Vakalo AI
              </h2>
            </div>

            {/* Contact Email */}
            <div className="flex flex-col items-center gap-3">
              <a 
                href="mailto:contact@vakalo.advoot.com" 
                className="group flex items-center gap-3 px-6 py-3 bg-[#1a0f0f]/50 backdrop-blur-sm border border-[#8b0000]/30 rounded-xl hover:border-[#ff1a1a]/50 hover:bg-[#1a0f0f]/70 transition-all duration-300 hover:scale-105"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff1a1a]/20 to-[#cc0000]/20 flex items-center justify-center group-hover:from-[#ff1a1a]/30 group-hover:to-[#cc0000]/30 transition-all duration-300">
                  <Mail className="w-5 h-5 text-[#ff1a1a] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-[#d4b4b4] group-hover:text-white text-base sm:text-lg font-medium transition-colors duration-300">
                  contact@vakalo.advoot.com
                </span>
              </a>
            </div>

            {/* Copyright */}
            <div className="pt-4 border-t border-[#8b0000]/20 w-full max-w-md">
              <p className="text-[#8b6b6b] text-sm sm:text-base text-center">
                © 2025 Vakalo AI. All rights reserved.
              </p>
            </div>

          </div>

        </div>

      </footer>

      {/* Scroll to Top Button */}

      {showScrollTop && (

        <motion.button

          initial={{ opacity: 0, scale: 0 }}

          animate={{ opacity: 1, scale: 1 }}

          exit={{ opacity: 0, scale: 0 }}

          onClick={scrollToTop}

          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#ff1a1a] to-[#cc0000] rounded-full flex items-center justify-center shadow-2xl shadow-[#8b0000]/50 hover:shadow-[#8b0000]/70 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-[#8b0000]/30"

          aria-label="Scroll to top"

        >

          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />

        </motion.button>

      )}

    </div>

  );

}

export default VakaloAIWebsite;

