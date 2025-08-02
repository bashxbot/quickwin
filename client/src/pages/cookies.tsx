
import Navigation from "../components/navigation";
import Footer from "../components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-3xl text-center text-white">Cookie Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="text-gray-300 space-y-6">
                  <h2 className="text-xl font-bold text-white">What Are Cookies</h2>
                  <p>
                    Cookies are small text files that are stored on your computer or mobile device when you visit our website.
                  </p>
                  
                  <h2 className="text-xl font-bold text-white">How We Use Cookies</h2>
                  <p>
                    We use cookies to improve your browsing experience, analyze website traffic, and personalize content.
                  </p>
                  
                  <h2 className="text-xl font-bold text-white">Types of Cookies We Use</h2>
                  <ul className="list-disc pl-6">
                    <li>Essential cookies for website functionality</li>
                    <li>Performance cookies to analyze usage</li>
                    <li>Functional cookies to remember preferences</li>
                  </ul>
                  
                  <h2 className="text-xl font-bold text-white">Managing Cookies</h2>
                  <p>
                    You can control and delete cookies through your browser settings. Please note that disabling cookies may affect website functionality.
                  </p>
                  
                  <h2 className="text-xl font-bold text-white">Contact Information</h2>
                  <p>
                    If you have questions about our use of cookies, please contact us at support@quickwin.com
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
