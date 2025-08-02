import React from "react";
import Navigation from "../components/navigation";
import Hero from "../components/sections/hero";
import Features from "../components/sections/features";
import Pricing from "../components/sections/pricing";
import Footer from "../components/sections/footer";

export default function Home() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
