import { Check, Crown, Zap, Star, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Pricing() {
  const { toast } = useToast();

  const handlePurchase = (planName: string) => {
    toast({
      title: "Redirecting to Payment",
      description: `You selected the ${planName} plan. Redirecting to secure payment gateway...`,
    });
    setTimeout(() => {
      window.open('https://buy.stripe.com/quickwin', '_blank');
    }, 2000);
  };

  const plans = [
    {
      name: "Starter",
      subtitle: "Perfect for Beginners",
      price: "$14.99",
      originalPrice: "$24.99",
      period: "/month",
      icon: Zap,
      features: [
        "Basic AI Autoplay",
        "Standard Aim Prediction",
        "5 Hours Daily Usage",
        "Mobile App Access",
        "Email Support",
        "Basic Analytics"
      ],
      buttonText: "Start Free Trial",
      buttonClass: "bg-white text-slate-900 hover:bg-gray-100",
      popular: false,
      savings: "40% OFF"
    },
    {
      name: "Professional",
      subtitle: "Most Popular Choice",
      price: "$29.99",
      originalPrice: "$49.99",
      period: "/month",
      icon: Crown,
      features: [
        "Advanced AI Autoplay",
        "Premium Aim Prediction",
        "Unlimited Daily Usage",
        "All Platform Access",
        "Priority Live Support",
        "Advanced Analytics",
        "Custom Game Profiles",
        "Tournament Mode",
        "Performance Coaching"
      ],
      buttonText: "Get Pro Access",
      buttonClass: "bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white",
      popular: true,
      savings: "40% OFF"
    },
    {
      name: "Enterprise",
      subtitle: "For Serious Players",
      price: "$59.99",
      originalPrice: "$99.99",
      period: "/month",
      icon: Rocket,
      features: [
        "Everything in Professional",
        "White-Label Reseller Rights",
        "30% Commission Rate",
        "Dedicated Account Manager",
        "Custom Branding",
        "Marketing Materials",
        "Reseller Dashboard",
        "API Access",
        "24/7 Phone Support"
      ],
      buttonText: "Start Earning",
      buttonClass: "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white",
      popular: false,
      savings: "40% OFF"
    }
  ];

  const testimonials = [
    {
      name: "Michael R.",
      plan: "Professional",
      rating: 5,
      text: "Increased my win rate from 60% to 95% in just one week!"
    },
    {
      name: "Sarah L.",
      plan: "Enterprise",
      rating: 5,
      text: "Making $3000+ monthly as a reseller. Best investment ever!"
    },
    {
      name: "David K.",
      plan: "Starter",
      rating: 5,
      text: "Perfect for casual gaming. Simple, effective, undetectable."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-6 py-3 rounded-full mb-6 font-medium">
            <Star className="h-5 w-5 mr-2" />
            Limited Time: 40% OFF All Plans
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of players who've transformed their gaming with Quick Win. 
            All plans include 7-day free trial and 30-day money-back guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div key={index} className={`relative ${plan.popular ? 'lg:scale-105 lg:-mt-4' : ''}`}>
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              {/* Savings Badge */}
              <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                {plan.savings}
              </div>

              <div className={`bg-white dark:bg-slate-800 rounded-3xl shadow-xl ${plan.popular ? 'border-2 border-primary shadow-primary/20' : 'border border-gray-200 dark:border-slate-700'} overflow-hidden h-full`}>
                <div className="p-8 text-center">
                  {/* Icon & Title */}
                  <div className={`w-16 h-16 ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gray-100 dark:bg-slate-700'} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`} />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.subtitle}</p>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-lg text-gray-500 dark:text-gray-400 line-through">{plan.originalPrice}</span>
                      <span className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                      <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">Save {((parseFloat(plan.originalPrice.slice(1)) - parseFloat(plan.price.slice(1))) / parseFloat(plan.originalPrice.slice(1)) * 100).toFixed(0)}% with annual billing</p>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={() => handlePurchase(plan.name)}
                    className={`w-full ${plan.buttonClass} py-4 rounded-xl font-semibold text-lg transition-all duration-300 mb-8 h-auto shadow-lg`}
                  >
                    {plan.buttonText}
                  </Button>

                  {/* Features */}
                  <div className="text-left">
                    <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Everything included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-3xl p-12 border border-primary/10 dark:border-primary/20 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            What Our Users Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{testimonial.plan} User</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-slate-900 dark:text-white">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="text-center bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-lg border border-gray-200 dark:border-slate-700">
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
            Risk-Free Guarantee
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Try Quick Win completely risk-free with our 7-day free trial. If you're not completely 
            satisfied within 30 days, we'll refund every penny—no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}