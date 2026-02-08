import { Suspense, lazy, useEffect } from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import Lenis from 'lenis';

// Lazy load heavy sections
const TheProblem = lazy(() => import('./components/sections/TheProblem').then(module => ({ default: module.TheProblem })));
const TheSolution = lazy(() => import('./components/sections/TheSolution').then(module => ({ default: module.TheSolution })));
const Demos = lazy(() => import('./components/sections/Demos').then(module => ({ default: module.Demos })));
const TheProcess = lazy(() => import('./components/sections/TheProcess').then(module => ({ default: module.TheProcess })));
const ROICalculator = lazy(() => import('./components/sections/ROICalculator').then(module => ({ default: module.ROICalculator })));
const LanguageMap = lazy(() => import('./components/sections/LanguageMap').then(module => ({ default: module.LanguageMap })));
const SocialProof = lazy(() => import('./components/sections/SocialProof').then(module => ({ default: module.SocialProof })));
const Pricing = lazy(() => import('./components/sections/Pricing').then(module => ({ default: module.Pricing })));
const WhyVoxzen = lazy(() => import('./components/sections/WhyVoxzen').then(module => ({ default: module.WhyVoxzen })));
const ApplicationForm = lazy(() => import('./components/sections/ApplicationForm').then(module => ({ default: module.ApplicationForm })));
const FAQ = lazy(() => import('./components/sections/FAQ').then(module => ({ default: module.FAQ })));
const Footer = lazy(() => import('./components/sections/Footer').then(module => ({ default: module.Footer })));

// Loading Component
function SectionLoader() {
  return (
    <div className="py-20 flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-brand-500/20 border-t-brand-500 rounded-full animate-spin"></div>
    </div>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#0a0404] min-h-screen text-[#e8d4d4] font-sans selection:bg-[#ff1a1a] selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />

      <Suspense fallback={<SectionLoader />}>
        <section id="problem"><TheProblem /></section>
        <section id="how-it-works"><TheSolution /></section>
        <section id="demos"><Demos /></section>
        <section id="process"><TheProcess /></section>
        <section id="roi"><ROICalculator /></section>
        <section id="languages"><LanguageMap /></section>
        <section id="testimonials"><SocialProof /></section>
        <section id="pricing"><Pricing /></section>
        <section id="why-us"><WhyVoxzen /></section>
        <section id="apply"><ApplicationForm /></section>
        <section id="faq"><FAQ /></section>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
