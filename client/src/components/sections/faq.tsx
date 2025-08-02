
import { useState } from "react";
import { ChevronDown, Search, MessageCircle, Shield, Zap, CreditCard, Users, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const categories = [
    {
      name: "Security & Safety",
      icon: Shield,
      color: "from-green-500 to-emerald-600",
      faqs: [
        {
          question: "Is Quick Win completely safe to use? Will I get banned?",
          answer: "Quick Win uses military-grade encryption and advanced behavior randomization technology that makes it completely undetectable by any anti-cheat system. Our proprietary algorithms mimic natural human gameplay patterns, reaction times, and decision-making processes. We've maintained a 100% safety record across over 50,000 active users since our launch. Our development team includes former anti-cheat researchers who ensure we stay ahead of any detection methods."
        },
        {
          question: "How does your anti-detection technology work?",
          answer: "Our anti-detection system operates on multiple layers: behavioral pattern randomization, human-like timing variations, encrypted communication protocols, and adaptive learning algorithms. The system continuously evolves its behavior patterns to avoid creating detectable signatures. Additionally, all communications are encrypted end-to-end, and the software operates at the kernel level with advanced stealth capabilities."
        },
        {
          question: "What happens if detection methods improve?",
          answer: "We have a dedicated security team that monitors anti-cheat developments 24/7. Our software receives automatic security updates that are pushed silently to all users. We maintain relationships with cybersecurity researchers and have a bug bounty program that helps us identify potential vulnerabilities before they become issues. If any detection risk is identified, all users are immediately protected with automatic updates."
        }
      ]
    },
    {
      name: "Features & Performance",
      icon: Zap,
      color: "from-blue-500 to-cyan-600",
      faqs: [
        {
          question: "How does the autoplay feature work exactly?",
          answer: "Our autoplay system uses advanced computer vision and machine learning algorithms trained on millions of professional games. It analyzes the game state in real-time, considers ball positions, table angles, and optimal strategies to execute shots with 99%+ accuracy. The system can adapt to different game modes, rule variations, and playing styles. It includes customizable settings for aggression level, shot selection, and timing to match your preferred playing style."
        },
        {
          question: "What platforms and devices are supported?",
          answer: "Quick Win supports Windows (7/8/10/11), macOS (10.14+), Android (8.0+), and iOS (13.0+). We also offer a web-based version that works on any modern browser. The software is optimized for popular 8 Ball Pool platforms including Miniclip, Facebook Gameroom, mobile apps, and tournament platforms. Cross-platform synchronization ensures your settings and statistics are available across all devices."
        },
        {
          question: "Can I customize the AI behavior and settings?",
          answer: "Absolutely! Quick Win offers extensive customization options including shot selection preferences, timing variations, aggression levels, and risk tolerance. You can create multiple profiles for different playing styles, set up tournament-specific configurations, and even train the AI on your personal playing patterns. Advanced users can access detailed parameter controls for fine-tuning performance."
        }
      ]
    },
    {
      name: "Billing & Subscriptions",
      icon: CreditCard,
      color: "from-purple-500 to-pink-600",
      faqs: [
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, you can cancel your subscription at any time with no questions asked and no cancellation fees. Your access will continue until the end of your current billing period, and you won't be charged for the next cycle. We also offer a 7-day free trial for new users and a 30-day money-back guarantee if you're not completely satisfied with the service."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, cryptocurrency (Bitcoin, Ethereum, USDT), bank transfers, and various regional payment methods. All payments are processed through secure, encrypted channels with PCI DSS compliance. Subscription renewals are automatic, but you can change your payment method or cancel at any time."
        },
        {
          question: "Do you offer refunds and what's your refund policy?",
          answer: "We offer a 30-day money-back guarantee for all new subscriptions. If you're not completely satisfied within the first 30 days, we'll refund your full payment, no questions asked. For existing customers experiencing technical issues, we provide prorated refunds on a case-by-case basis. Refunds are typically processed within 3-5 business days to your original payment method."
        }
      ]
    },
    {
      name: "Reseller Program",
      icon: Users,
      color: "from-orange-500 to-red-600",
      faqs: [
        {
          question: "How do I become a reseller and what are the requirements?",
          answer: "To become a reseller, simply apply through our reseller portal with basic information about your marketing experience or customer network. We look for individuals with social media presence, gaming communities, or sales experience, but it's not strictly required. Once approved, you'll receive access to our reseller dashboard, marketing materials, training resources, and personalized referral links. The approval process typically takes 24-48 hours."
        },
        {
          question: "What commission rates do you offer and how are payments made?",
          answer: "We offer industry-leading commission rates up to 30% on all sales, with higher rates available for top performers. Commissions are calculated on net revenue and include both initial sales and recurring subscription payments. Payments are made monthly via PayPal, bank transfer, or cryptocurrency, with a minimum payout threshold of $100. You can track your earnings and performance in real-time through your reseller dashboard."
        },
        {
          question: "What marketing support and materials do you provide?",
          answer: "Resellers receive comprehensive marketing support including professional banner ads, video testimonials, social media content, email templates, and landing page designs. We provide detailed analytics, conversion tracking, and A/B testing tools. Our reseller success team offers personalized coaching, marketing strategy sessions, and access to exclusive webinars and training materials."
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  const allFAQs = categories.flatMap(category => category.faqs);
  const totalFAQs = allFAQs.length;

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <HelpCircle className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-medium">Got Questions?</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Quick Win, our features, pricing, and policies.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search frequently asked questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-lg"
          />
        </div>

        {/* Stats */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-slate-700">
            <span className="text-gray-600 dark:text-gray-300 mr-2">
              {searchTerm ? `Found ${filteredCategories.reduce((acc, cat) => acc + cat.faqs.length, 0)} results` : `${totalFAQs} questions answered`}
            </span>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-white/80">{category.faqs.length} questions</p>
                  </div>
                </div>
              </div>

              {/* FAQ Items */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex; // Unique index across categories
                    return (
                      <div key={faqIndex} className="border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                        <button
                          className="w-full text-left p-6 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-300 focus:outline-none"
                          onClick={() => toggleFAQ(globalIndex)}
                        >
                          <div className="flex justify-between items-start">
                            <h4 className="text-lg font-semibold text-slate-900 dark:text-white pr-8 leading-relaxed">
                              {faq.question}
                            </h4>
                            <ChevronDown 
                              className={cn(
                                "h-6 w-6 text-gray-400 transition-transform duration-300 flex-shrink-0",
                                openFAQ === globalIndex ? "rotate-180" : ""
                              )}
                            />
                          </div>
                        </button>
                        {openFAQ === globalIndex && (
                          <div className="px-6 pb-6">
                            <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {searchTerm && filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">No results found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We couldn't find any questions matching "{searchTerm}". Try different keywords or browse our categories.
            </p>
            <Button 
              onClick={() => setSearchTerm("")}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl"
            >
              Clear Search
            </Button>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-3xl p-12 text-center border border-primary/20">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            Still have questions?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you 24/7 with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://t.me/quickwin_official', '_blank')}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 px-8 py-4 rounded-xl text-white font-semibold shadow-lg text-lg h-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Support
            </Button>
            <Button 
              variant="outline"
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-8 py-4 rounded-xl text-slate-900 dark:text-white font-semibold hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 border-gray-300 dark:border-slate-600 h-auto text-lg"
              onClick={() => window.open('mailto:support@quickwin.com', '_blank')}
            >
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
