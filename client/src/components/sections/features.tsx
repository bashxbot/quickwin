
import { Bot, Crosshair, Shield, Zap, Brain, Target, Gauge, Lock } from "lucide-react";

export default function Features() {
  const mainFeatures = [
    {
      icon: Bot,
      title: "AI Autoplay System",
      description: "Advanced neural networks trained on millions of professional games execute perfect shots with human-like precision and timing.",
      gradient: "from-blue-500 to-cyan-500",
      stats: "99.2% Win Rate"
    },
    {
      icon: Crosshair,
      title: "Precision Aim Assist",
      description: "Real-time physics simulation calculates optimal trajectories, spin, and force for every shot scenario with pixel-perfect accuracy.",
      gradient: "from-purple-500 to-pink-500",
      stats: "0.1° Accuracy"
    },
    {
      icon: Shield,
      title: "Stealth Technology",
      description: "Military-grade encryption and behavior randomization makes detection impossible while maintaining natural gameplay patterns.",
      gradient: "from-green-500 to-emerald-500",
      stats: "100% Undetected"
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Optimized algorithms process game states in under 10ms, delivering instantaneous responses without any lag or delay.",
      gradient: "from-yellow-500 to-orange-500",
      stats: "<10ms Response"
    }
  ];

  const additionalFeatures = [
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "Continuously improves based on your playing style and preferences"
    },
    {
      icon: Target,
      title: "Multi-Game Support",
      description: "Works with all popular 8 Ball Pool platforms and tournaments"
    },
    {
      icon: Gauge,
      title: "Performance Analytics",
      description: "Detailed statistics and insights to track your improvement"
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "End-to-end encryption protects your account and data"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <Zap className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-medium">Next-Gen Technology</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the most advanced gaming assistant ever created, packed with cutting-edge features 
            designed to give you the ultimate competitive advantage.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" 
                   style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>
              
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      <span className="text-sm font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                        {feature.stats}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Everything You Need to Dominate
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">{feature.title}</h4>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white">Why Choose Quick Win?</h3>
            <p className="text-gray-300 text-lg">See how we compare to traditional gaming methods</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
              <h4 className="text-lg font-semibold mb-3 text-red-400">Manual Play</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>❌ Inconsistent performance</li>
                <li>❌ Requires years of practice</li>
                <li>❌ Human error prone</li>
                <li>❌ Limited win rate</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl">
              <h4 className="text-lg font-semibold mb-3 text-yellow-400">Basic Tools</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>⚠️ Limited features</li>
                <li>⚠️ Easy to detect</li>
                <li>⚠️ Poor accuracy</li>
                <li>⚠️ No support</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl">
              <h4 className="text-lg font-semibold mb-3 text-green-400">Quick Win</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>✅ 99%+ win rate</li>
                <li>✅ Completely undetectable</li>
                <li>✅ Instant results</li>
                <li>✅ 24/7 support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
