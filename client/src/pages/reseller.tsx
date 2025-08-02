import React from "react";
import Navigation from "../components/navigation";
import Resale from "../components/sections/resale";
import Footer from "../components/sections/footer";

export default function ResellerPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main className="pt-16">
        <Resale />
      </main>
      <Footer />
    </div>
  );
}