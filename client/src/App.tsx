import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import FeaturesPage from "@/pages/features";
import PricingPage from "@/pages/pricing";
import ResellerPage from "@/pages/reseller";
import FAQPage from "@/pages/faq";
import ResellerLoginPage from "@/pages/reseller-login";
import ResellerDashboard from "@/pages/reseller-dashboard";
import SignUpPage from "@/pages/signup";
import TermsPage from "@/pages/terms";
import PrivacyPage from "@/pages/privacy";
import CookiesPage from "@/pages/cookies";
import RefundPage from "@/pages/refund";
import AnnouncementsPage from "@/pages/announcements";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/features" component={FeaturesPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/reseller" component={ResellerPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/reseller-login" component={ResellerLoginPage} />
      <Route path="/reseller-dashboard" component={ResellerDashboard} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/cookies" component={CookiesPage} />
      <Route path="/refund" component={RefundPage} />
      <Route path="/announcements" component={AnnouncementsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
