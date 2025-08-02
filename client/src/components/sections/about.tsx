
import { Target, Shield, Zap, Trophy, Users, Star } from "lucide-react";

export default function About() {
  const achievements = [
    { icon: Users, value: "50,000+", label: "Happy Players" },
    { icon: Trophy, value: "2M+", label: "Games Won" },
    { icon: Star, value: "4.9/5", label: "User Rating" },
    { icon: Shield, value: "100%", label: "Undetected" }
  ];

  const features = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-powered aim prediction with 98%+ accuracy"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute perfect shots in milliseconds"
    },
    {
      icon: Shield,
      title: "Completely Safe",
      description: "Advanced stealth technology keeps you protected"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Target className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Revolutionizing Pool Gaming
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Quick Win isn't just another gaming tool—it's the future of competitive 8 Ball Pool. 
            Our cutting-edge AI technology has transformed how players approach the game.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Our Story</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  Born from the passion of professional pool players and AI researchers, Quick Win 
                  represents years of development in machine learning and game mechanics analysis.
                </p>
                <p className="text-lg leading-relaxed">
                  What started as a small project to help casual players has evolved into the most 
                  sophisticated pool assistant available today, trusted by thousands worldwide.
                </p>
                <p className="text-lg leading-relaxed">
                  We believe everyone deserves to experience the thrill of consistent victories, 
                  regardless of their skill level or experience.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-3xl p-8 border border-primary/10 dark:border-primary/20">
              <h4 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">
                Trusted Worldwide
              </h4>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="mt-8 p-6 bg-white dark:bg-slate-800 rounded-2xl border-l-4 border-primary">
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                  "Quick Win transformed my gameplay completely. From struggling to win matches 
                  to dominating every game—it's incredible!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Alex Chen</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Pro Player</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-secondary to-primary rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full opacity-10 blur-xl"></div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-3xl p-12 border border-primary/10 dark:border-primary/20">
          <h3 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Our Mission</h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To democratize competitive gaming by providing every player with access to professional-level 
            AI assistance, ensuring fair play through undetectable technology and fostering a community 
            where skill and strategy triumph together.
          </p>
        </div>
      </div>
    </section>
  );
}
