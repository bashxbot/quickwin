import React from "react";
import Navigation from "../components/navigation";
import FAQ from "../components/sections/faq";
import Footer from "../components/sections/footer";

export default function FAQPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main className="pt-16">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}