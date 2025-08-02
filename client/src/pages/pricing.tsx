import React from "react";
import Navigation from "../components/navigation";
import Pricing from "../components/sections/pricing";
import Footer from "../components/sections/footer";

export default function PricingPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main className="pt-16">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}