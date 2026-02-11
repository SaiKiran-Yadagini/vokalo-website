import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/sections/Navbar';
import { Home } from './pages/Home';
import Lenis from 'lenis';

// Lazy load Legal Pages
const PrivacyPolicy = lazy(() => import('./components/sections/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./components/sections/TermsOfService').then(module => ({ default: module.TermsOfService })));
const CookiePolicy = lazy(() => import('./components/sections/CookiePolicy').then(module => ({ default: module.CookiePolicy })));
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

function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Smooth scrolling with Lenis
    // Smooth scrolling with Lenis - Optimized for all devices including Mac
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
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
        {children}
      </main>

      <Suspense fallback={<SectionLoader />}>
        {/* Footer */}
        <footer role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
          <Footer />
        </footer>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<SectionLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
