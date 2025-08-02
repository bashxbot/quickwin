import React from "react";
import Navigation from "../components/navigation";
import About from "../components/sections/about";
import Footer from "../components/sections/footer";

export default function AboutPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  );
}