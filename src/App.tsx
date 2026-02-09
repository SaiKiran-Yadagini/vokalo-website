import { Suspense, lazy, useEffect } from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import Lenis from 'lenis';

// Lazy load heavy sections for better performance (Core Web Vitals)
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

// Loading Component with accessibility
function SectionLoader() {
  return (
    <div
      className="py-20 flex justify-center items-center"
      role="status"
      aria-label="Loading content"
    >
      <div className="w-8 h-8 border-4 border-brand-500/20 border-t-brand-500 rounded-full animate-spin" aria-hidden="true"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

function App() {
  useEffect(() => {
    // Smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Respect user's reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      lenis.stop();
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className="bg-[#0a0404] min-h-screen text-[#e8d4d4] font-sans selection:bg-[#ff1a1a] selection:text-white overflow-x-hidden"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* Header with Navigation */}
      <header role="banner">
        <Navbar />
      </header>

      {/* Main Content */}
      <main id="main-content" role="main" itemProp="mainContentOfPage">
        {/* Hero Section - Above the fold, not lazy loaded */}
        <Hero />

        {/* Lazy-loaded sections for better Core Web Vitals */}
        <Suspense fallback={<SectionLoader />}>
          {/* Problem Section */}
          <article
            id="problem"
            aria-labelledby="problem-heading"
            itemScope
            itemType="https://schema.org/Article"
          >
            <TheProblem />
          </article>

          {/* Solution/How It Works Section */}
          <article
            id="how-it-works"
            aria-labelledby="solution-heading"
            itemScope
            itemType="https://schema.org/HowTo"
          >
            <TheSolution />
          </article>

          {/* Demos Section */}
          <article
            id="demos"
            aria-labelledby="demos-heading"
            itemScope
            itemType="https://schema.org/VideoGallery"
          >
            <Demos />
          </article>

          {/* Process Section */}
          <article
            id="process"
            aria-labelledby="process-heading"
            itemScope
            itemType="https://schema.org/HowTo"
          >
            <TheProcess />
          </article>

          {/* ROI Calculator */}
          <aside
            id="roi"
            aria-labelledby="roi-heading"
            itemScope
            itemType="https://schema.org/WebApplication"
          >
            <ROICalculator />
          </aside>

          {/* Languages Section */}
          <article
            id="languages"
            aria-labelledby="languages-heading"
          >
            <LanguageMap />
          </article>

          {/* Testimonials Section */}
          <article
            id="testimonials"
            aria-labelledby="testimonials-heading"
            itemScope
            itemType="https://schema.org/Review"
          >
            <SocialProof />
          </article>

          {/* Pricing Section */}
          <article
            id="pricing"
            aria-labelledby="pricing-heading"
            itemScope
            itemType="https://schema.org/OfferCatalog"
          >
            <Pricing />
          </article>

          {/* Why Voxzen Section */}
          <article
            id="why-us"
            aria-labelledby="why-us-heading"
          >
            <WhyVoxzen />
          </article>

          {/* Application Form Section */}
          <section
            id="apply"
            aria-labelledby="apply-heading"
            itemScope
            itemType="https://schema.org/ContactPage"
          >
            <ApplicationForm />
          </section>

          {/* FAQ Section */}
          <article
            id="faq"
            aria-labelledby="faq-heading"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            <FAQ />
          </article>

          {/* Footer */}
          <footer role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
            <Footer />
          </footer>
        </Suspense>
      </main>
    </div>
  )
}

export default App
