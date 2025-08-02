
import { Rocket, Gift, Shield, Smartphone, Bell, Calendar, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Announcements() {
  const announcements = [
    {
      icon: Rocket,
      title: "Quick Win v4.0 Launch",
      date: "January 15, 2024",
      timeAgo: "2 days ago",
      description: "Revolutionary AI engine with 50% faster performance, enhanced stealth algorithms, and new tournament mode. Experience the future of gaming assistance.",
      highlights: ["50% Performance Boost", "New Tournament Mode", "Enhanced Stealth"],
      priority: "high",
      category: "Product Update",
      image: "🚀"
    },
    {
      icon: Gift,
      title: "New Year Special: 60% Off",
      date: "January 1, 2024",
      timeAgo: "2 weeks ago",
      description: "Start 2024 with a bang! Limited-time offer on all subscription plans. Plus, refer a friend and both get an extra month free.",
      highlights: ["60% Off All Plans", "Refer & Get Free Month", "Limited Time"],
      priority: "urgent",
      category: "Promotion",
      image: "🎁"
    },
    {
      icon: Shield,
      title: "Security Enhancement Update",
      date: "December 20, 2023",
      timeAgo: "4 weeks ago",
      description: "Implemented military-grade encryption and advanced behavior randomization. Your gaming sessions are now more secure than ever.",
      highlights: ["Military-Grade Encryption", "Zero Detection Risk", "Enhanced Privacy"],
      priority: "medium",
      category: "Security",
      image: "🛡️"
    },
    {
      icon: Smartphone,
      title: "Mobile App Public Beta",
      date: "December 10, 2023",
      timeAgo: "6 weeks ago",
      description: "Our mobile app is now available for public beta testing on iOS and Android. Experience Quick Win on the go with full feature parity.",
      highlights: ["iOS & Android", "Full Features", "Public Beta"],
      priority: "medium",
      category: "Mobile",
      image: "📱"
    }
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Active Users" },
    { icon: TrendingUp, value: "99.2%", label: "Success Rate" },
    { icon: Shield, value: "100%", label: "Undetected" },
    { icon: Bell, value: "24/7", label: "Support" }
  ];

  const upcomingFeatures = [
    {
      title: "Voice Commands",
      description: "Control Quick Win with voice commands",
      eta: "Q2 2024",
      progress: 75
    },
    {
      title: "Team Tournaments",
      description: "Competitive team-based gameplay modes",
      eta: "Q1 2024",
      progress: 90
    },
    {
      title: "VR Integration",
      description: "Virtual reality pool gaming support",
      eta: "Q3 2024",
      progress: 25
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'from-red-500 to-pink-500';
      case 'high':
        return 'from-orange-500 to-yellow-500';
      case 'medium':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'high':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'medium':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <Bell className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-medium">Latest Updates</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            What's New
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay up to date with the latest features, improvements, and announcements from the Quick Win team.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold mb-1 text-slate-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Announcements */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Latest Announcements */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Recent Announcements</h3>
            <div className="space-y-6">
              {announcements.map((announcement, index) => (
                <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${getPriorityColor(announcement.priority)} rounded-xl flex items-center justify-center flex-shrink-0 text-2xl`}>
                      {announcement.image}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                          {announcement.title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityBadge(announcement.priority)}`}>
                            {announcement.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        {announcement.date} • {announcement.timeAgo}
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {announcement.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {announcement.highlights.map((highlight, highlightIndex) => (
                          <span key={highlightIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Features */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Coming Soon</h3>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-3xl p-8 border border-primary/10 dark:border-primary/20 mb-8">
              <h4 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Upcoming Features</h4>
              <div className="space-y-6">
                {upcomingFeatures.map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold text-slate-900 dark:text-white">{feature.title}</h5>
                      <span className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-slate-700 px-2 py-1 rounded">
                        {feature.eta}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${feature.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                      {feature.progress}% Complete
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
              <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Stay Updated</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get notified about new features, updates, and exclusive offers directly in your inbox.
              </p>
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 px-6 py-3 rounded-xl text-white font-semibold">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-3xl p-12 border border-primary/20">
          <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            Ready to Experience the Latest?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of players enjoying the latest Quick Win features and dominating their games.
          </p>
          <Button 
            onClick={() => window.open('https://t.me/quickwinofc', '_blank')}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
}
