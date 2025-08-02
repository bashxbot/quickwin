import React, { useState } from "react";
import Navigation from "../components/navigation";
import About from "../components/sections/about";
import Features from "../components/sections/features";
import Pricing from "../components/sections/pricing";
import Resale from "../components/sections/resale";
import Announcements from "../components/sections/announcements";
import FAQ from "../components/sections/faq";
import Footer from "../components/sections/footer";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const sections = [
  { id: "about", label: "About", component: About },
  { id: "features", label: "Features", component: Features },
  { id: "pricing", label: "Pricing", component: Pricing },
  { id: "reseller", label: "Reseller", component: Resale },
  { id: "announcements", label: "News", component: Announcements },
  { id: "faq", label: "FAQ", component: FAQ },
];

export default function FAQPage() {
  const [activeSection, setActiveSection] = useState("faq");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || FAQ;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Sticky Section Navigation */}
      <div className="sticky top-16 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center py-4 space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeSection === section.id
                    ? "bg-primary text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden py-3">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="outline"
              className="w-full justify-between bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <span>{sections.find(s => s.id === activeSection)?.label}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </Button>

            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 py-2">
                <div className="max-w-7xl mx-auto px-4 space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        activeSection === section.id
                          ? "bg-primary text-white"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <main className="pt-0">
        <ActiveComponent />
      </main>
      <Footer />
    </div>
  );
}