
import Navigation from "../components/navigation";
import Footer from "../components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-3xl text-center text-white">Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="text-gray-300 space-y-6">
                  <h2 className="text-xl font-bold text-white">Information We Collect</h2>
                  <p>
                    We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
                  </p>
                  
                  <h2 className="text-xl font-bold text-white">How We Use Your Information</h2>
                  <p>
                    We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
                  </p>
                  
                  <h2 className="text-xl font-bold text-white">Information Sharing</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                  </p>
                  
                  <h2 className="text-xl font-bold text-white">Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  
                  <h2 className="text-xl font-bold text-white">Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy, please contact us at privacy@quickwin.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
