import React from "react";
import Navigation from "../components/navigation";
import Features from "../components/sections/features";
import Footer from "../components/sections/footer";

export default function FeaturesPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main className="pt-16">
        <Features />
      </main>
      <Footer />
    </div>
  );
}