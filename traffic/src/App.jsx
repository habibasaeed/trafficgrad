import { useState } from "react";
import HeroSection from "./sections/HeroSection";
import Footer from "./sections/Footer";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import FeatureSection from "./sections/FeatureSection";
import Testimonial from "./sections/Testimonial";
import AdvantageSection from "./sections/AdvantageSection";
import logo from "../src/logo.png";
import HowItWorksSection from "./sections/HowItWorks";

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="font-sans text-gray-900">
      {/* ---------- Header ---------- */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Traffic logo" className="h-6 w-6" />
            <span className="font-semibold text-lg">Traffic</span>
          </a>

          {/* desktop nav */}
          <nav className="hidden gap-8 md:flex">
            {["Home", "Preview", "Review", "Features"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-md font-semibold hover:text-primary-600 transition hover:font-bold hover:text-blue-600"
              >
                {link}
              </a>
            ))}
          </nav>

          <button className="rounded-sm bg-black px-8 py-2 text-md tracking-wider text-white hover:shadow-glow transition hover:bg-slate-600">
            Download
          </button>

          {/* mobile hamburger */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-black/5"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6 stroke-2"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {navOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* mobile drawer */}
        {navOpen && (
          <div className="md:hidden px-6 pb-6">
            <nav className="flex flex-col gap-4">
              {["Home", "Preview", "Review", "Features"].map((link) => (
                <a
                  onClick={() => setNavOpen(false)}
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium hover:text-primary-600"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ---------- Sections ---------- */}
      <div className="mx-auto max-w-l md:max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <HeroSection />
        <FeatureSection />
        <AdvantageSection />
        <HowItWorksSection />
        <Testimonial />
        <FAQ />
        <CTA />
      </div>

      {/* ---------- Footer ---------- */}
      <Footer />
    </div>
  );
}
