
import Navigation from "../components/navigation";
import Footer from "../components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-3xl text-center text-white">Refund Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="text-gray-300 space-y-6">
                  <h2 className="text-xl font-bold text-white">30-Day Money Back Guarantee</h2>
                  <p>
                    We offer a 30-day money-back guarantee for all new subscribers. If you're not satisfied with Quick Win within 30 days of purchase, we'll refund your payment.
                  </p>
                  
                  <h2 className="text-xl font-bold text-white">How to Request a Refund</h2>
                  <p>
                    To request a refund, please contact our support team at support@quickwin.com with your order details and reason for the refund request.
                  </p>
                  
                  <h2 className="text-xl font-bold text-white">Processing Time</h2>
                  <p>
                    Refunds are typically processed within 3-5 business days and will be credited to your original payment method.
                  </p>
                  
                  <h2 className="text-xl font-bold text-white">Exceptions</h2>
                  <p>
                    Refunds may not be available for accounts that have violated our Terms of Service or engaged in fraudulent activity.
                  </p>
                  
                  <h2 className="text-xl font-bold text-white">Contact Support</h2>
                  <p>
                    For any questions about our refund policy, please reach out to our support team at support@quickwin.com
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
