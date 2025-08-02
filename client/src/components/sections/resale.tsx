import { TrendingUp, DollarSign, Users, Award, BarChart3, Handshake, Star, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Resale() {
  const benefits = [
    {
      icon: DollarSign,
      title: "High Commission Rates",
      description: "Earn up to 30% commission on every sale with our industry-leading commission structure. No caps, no limits.",
      amount: "Up to 30%",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Recurring Revenue",
      description: "Build a sustainable income stream with monthly recurring commissions from your customer base.",
      amount: "Monthly",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Get personal assistance from our reseller success team and access to exclusive training materials.",
      amount: "24/7",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const earnings = [
    { customers: "10", monthly: "$899", yearly: "$10,788" },
    { customers: "25", monthly: "$2,247", yearly: "$26,964" },
    { customers: "50", monthly: "$4,495", yearly: "$53,940" },
    { customers: "100", monthly: "$8,990", yearly: "$107,880" }
  ];

  const features = [
    "Custom branded sales pages",
    "Real-time analytics dashboard",
    "Marketing material library",
    "Lead generation tools",
    "Payment processing included",
    "Multi-language support"
  ];

  const successStories = [
    {
      name: "Jennifer M.",
      revenue: "$15,000",
      period: "Last Month",
      customers: 67,
      quote: "Went from $0 to $15k monthly in just 6 months!"
    },
    {
      name: "Carlos R.",
      revenue: "$8,500",
      period: "Last Month",
      customers: 42,
      quote: "Perfect side business. Minimal effort, maximum returns."
    },
    {
      name: "Lisa K.",
      revenue: "$22,000",
      period: "Last Month",
      customers: 98,
      quote: "Replaced my full-time job income and more!"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3 mb-6">
            <DollarSign className="h-5 w-5 text-green-400 mr-2" />
            <span className="text-green-400 font-medium">Earn $10,000+ Monthly</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Become a Reseller
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our elite reseller program and build a lucrative business selling the world's 
            most advanced gaming assistant. No experience required.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl" 
                   style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>

              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{benefit.amount}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Earnings Calculator */}
        <div id="earnings-calculator" className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white">Your Earning Potential</h3>
            <p className="text-gray-300 text-lg">See how much you could earn based on customer base size</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {earnings.map((earning, index) => (
              <div key={index} className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">{earning.customers}</div>
                <div className="text-sm text-gray-400 mb-4">Customers</div>
                <div className="space-y-2">
                  <div>
                    <div className="text-2xl font-bold text-white">{earning.monthly}</div>
                    <div className="text-sm text-gray-300">Per Month</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-300">{earning.yearly}</div>
                    <div className="text-xs text-gray-400">Per Year</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400">* Based on average customer retention and 30% commission rate</p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* What You Get */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-white">What You Get</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl">
              <h4 className="text-lg font-semibold mb-3 text-white">Getting Started is Easy</h4>
              <ol className="space-y-2 text-gray-300">
                <li>1. Apply for the reseller program</li>
                <li>2. Get approved and access your dashboard</li>
                <li>3. Start promoting with our materials</li>
                <li>4. Earn commissions on every sale</li>
              </ol>
            </div>
          </div>

          {/* Success Stories */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-white">Success Stories</h3>
            <div className="space-y-6">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-white">{story.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{story.customers} customers</span>
                        <span>•</span>
                        <span>{story.period}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">{story.revenue}</div>
                      <div className="text-xs text-gray-400">Revenue</div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{story.quote}"</p>
                  <div className="flex text-yellow-400 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
          <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-8">
            <Handshake className="h-12 w-12 text-white" />
          </div>
          <h3 className="text-3xl font-bold mb-6 text-white">Ready to Start Earning?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful resellers who are building profitable businesses with Quick Win. 
            Apply now and start earning commissions today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reseller-login">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 px-8 py-4 rounded-xl text-white font-semibold shadow-lg h-auto text-lg">
                <Award className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300 border-white/20 h-auto text-lg"
              onClick={() => window.open('https://t.me/quickwinofc', '_blank')}
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            No upfront costs • Instant approval • Start earning immediately
          </p>
        </div>
      </div>
    </section>
  );
}
