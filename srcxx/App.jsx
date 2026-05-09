import React, { Suspense, lazy, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./index.css";

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
    <>
      {/* ✅ SEO TAGS */}
      <Helmet>
        <title>
          Tanmay Bora | AI Builder & Robotics Engineer | Product Builder
        </title>

        <meta
          name="description"
          content="Portfolio of Tanmay Bora, AI Engineer at VIT Pune and Robotics Specialist. Lead Developer for AIR 3 Robocon Team, Patent Holder, and builder of scalable intelligent systems."
        />

        <meta
          name="keywords"
          content="Tanmay Bora, AI Builder, Robotics Engineer, AI Engineer, Full Stack Developer, Robotics, Machine Learning, ROS, YOLO, PyTorch, Portfolio, Pune, India"
        />

        <meta name="author" content="Tanmay Bora" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a0a0f" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tanmaybora.vercel.app/" />
        <meta
          property="og:title"
          content="Tanmay Bora | AI Builder & Robotics Engineer"
        />
        <meta
          property="og:description"
          content="Building the future of AI and Robotics. Exploring autonomous systems and scalable products."
        />
        <meta
          property="og:image"
          content="https://tanmaybora.vercel.app/tanmay_bora.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://tanmaybora.vercel.app/" />
        <meta
          name="twitter:title"
          content="Tanmay Bora | AI Builder & Robotics Engineer"
        />
        <meta
          name="twitter:description"
          content="AI Engineer & Robotics Specialist portfolio. Building intelligent systems."
        />
        <meta
          name="twitter:image"
          content="https://tanmaybora.vercel.app/tanmay_bora.webp"
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
      <div className="min-h-screen relative">
        {/* Side Tint Borders */}
        <div className="fixed left-0 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-purple-500/40 to-transparent z-[60] pointer-events-none hidden sm:block" />
        <div className="fixed right-0 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-blue-500/40 to-transparent z-[60] pointer-events-none hidden sm:block" />
        
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
    </>
  );
}

export default App;