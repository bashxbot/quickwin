
import Navigation from "../components/navigation";
import Footer from "../components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-3xl text-center text-white">Terms of Service</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="text-gray-300 space-y-6">
                  <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using Quick Win, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                  
                  <h2 className="text-xl font-bold text-white">2. Use License</h2>
                  <p>
                    Permission is granted to temporarily download one copy of Quick Win per device for personal, non-commercial transitory viewing only.
                  </p>
                  
                  <h2 className="text-xl font-bold text-white">3. Disclaimer</h2>
                  <p>
                    The materials on Quick Win are provided on an 'as is' basis. Quick Win makes no warranties, expressed or implied.
                  </p>
                  
                  <h2 className="text-xl font-bold text-white">4. Limitations</h2>
                  <p>
                    In no event shall Quick Win or its suppliers be liable for any damages arising out of the use or inability to use Quick Win.
                  </p>
                  
                  <h2 className="text-xl font-bold text-white">5. Contact Information</h2>
                  <p>
                    If you have any questions about these Terms of Service, please contact us at support@quickwin.com
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
