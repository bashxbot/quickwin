import Navigation from "../components/navigation";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Features from "../components/sections/features";
import Pricing from "../components/sections/pricing";
import Resale from "../components/sections/resale";
import Announcements from "../components/sections/announcements";
import FAQ from "../components/sections/faq";
import Footer from "../components/sections/footer";

export default function Home() {
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
