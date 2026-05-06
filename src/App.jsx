import React, { Suspense, lazy, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";

const About = lazy(() => import("./components/about/About"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Achievements = lazy(() =>
  import("./components/achievements/Achievements")
);
const Contact = lazy(() => import("./components/contact/Contact"));
const WebSolutions = lazy(() => import("./components/web/WebSolutions"));
const Footer = lazy(() => import("./components/layout/Footer"));

const SectionFallback = () => (
  <div className="min-h-[40vh] w-full" aria-hidden="true" />
);

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <HelmetProvider>
      {/* ✅ SEO TAGS */}
      <Helmet>
        <title>
          Tanmay Bora | AI Engineer & Full Stack Developer Portfolio
        </title>

        <meta
          name="description"
          content="Tanmay Bora - AI Engineer and Full Stack Developer. Specializing in Robotics, AI, and scalable intelligent applications."
        />

        <meta
          name="keywords"
          content="Tanmay Bora, AI Engineer, Full Stack Developer, Robotics, Machine Learning, React, Python, Portfolio, Pune, India"
        />

        <meta name="author" content="Tanmay Bora" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a0a0f" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tanmaybora.vercel.app/" />
        <meta
          property="og:title"
          content="Tanmay Bora | AI Engineer & Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Building intelligent systems and scalable applications."
        />
        <meta
          property="og:image"
          content="https://tanmaybora.vercel.app/tanmay_bora.jpeg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://tanmaybora.vercel.app/" />
        <meta
          name="twitter:title"
          content="Tanmay Bora | AI Engineer & Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="AI Engineer and Full Stack Developer portfolio."
        />
        <meta
          name="twitter:image"
          content="https://tanmaybora.vercel.app/tanmay_bora.jpeg"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://tanmaybora.vercel.app/" />


        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Helmet>

      {/* APP UI (UNCHANGED) */}
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Projects />
          <WebSolutions />
          <Achievements />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;