import { FaTelegramPlane, FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";
import { Mail, Phone, MapPin, Shield, Award, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
  ];

  const businessLinks = [
    { href: "/reseller", label: "Reseller Program" },
    { href: "/reseller-login", label: "Reseller Login" },
    { href: "/announcements", label: "News & Updates" },
    { href: "/faq", label: "FAQ" },
  ];

  const supportLinks = [
    { href: "mailto:support@quickwin.com", label: "Email Support", icon: Mail },
    { href: "https://t.me/quickwinofc", label: "Telegram", icon: FaTelegramPlane },
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/refund", label: "Refund Policy" },
  ];

  const socialLinks = [
    { href: "https://t.me/quickwinofc", icon: FaTelegramPlane, label: "Telegram", color: "hover:text-blue-400" },
    { href: "https://discord.gg/quickwin", icon: FaDiscord, label: "Discord", color: "hover:text-indigo-400" },
    { href: "https:/t.me/quickwinofc", icon: FaTwitter, label: "Twitter", color: "hover:text-sky-400" },
    { href: "https://t.me/quickwinofc", icon: FaYoutube, label: "YouTube", color: "hover:text-red-400" },
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Active Users" },
    { icon: Shield, value: "100%", label: "Undetected" },
    { icon: Award, value: "4.9/5", label: "User Rating" }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                  Quick Win
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  The world's most advanced 8 Ball Pool assistant, trusted by over 50,000 players worldwide. 
                  Experience undetectable AI-powered autoplay and precision aim prediction.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>

                <div className="flex space-x-6">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    onClick={() => window.open('https://t.me/quickwin_official', '_blank')}
                  >
                    <FaTelegramPlane className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    onClick={() => window.open('https://discord.gg/huVNUZUtTH', '_blank')}
                  >
                    <FaDiscord className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    onClick={() => window.open('https://twitter.com/quickwinofc', '_blank')}
                  >
                    <FaTwitter className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    onClick={() => window.open('https://t.me/quickwinofc', '_blank')}
                  >
                    <FaYoutube className="h-5 w-5" />
                  </Button>
                </div>

              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <span onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-1 inline-block">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-white font-semibold mb-6 text-lg mt-8">Business</h4>
              <ul className="space-y-3">
                {businessLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <span onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-1 inline-block">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Contact */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 mb-8">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('mailto:') || link.href.startsWith('https://') ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('https://') ? "_blank" : undefined}
                        rel={link.href.startsWith('https://') ? "noopener noreferrer" : undefined}
                        className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.icon && <link.icon className="h-4 w-4 mr-2" />}
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href}>
                        <span onClick={handleLinkClick} className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                          {link.icon && <link.icon className="h-4 w-4 mr-2" />}
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h5 className="text-white font-semibold mb-4">24/7 Support</h5>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Mail className="h-4 w-4 mr-3 text-primary" />
                    support@quickwin.com
                  </div>
                  <div className="flex items-center text-gray-300">
                    <FaTelegramPlane className="h-4 w-4 mr-3 text-primary" />
                    @quickwin_official
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-3 text-primary" />
                    Global Support Team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm text-center lg:text-left">
                <p>© {currentYear} Quick Win. All rights reserved.</p>
                <p className="mt-1">Designed and developed with ❤️ for gamers worldwide.</p>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Award className="h-4 w-4 text-yellow-400" />
                  <span>Trusted Platform</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span>50K+ Users</span>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="/terms">
                  <span className="hover:text-white transition-colors duration-300 cursor-pointer">Terms</span>
                </Link>
                <Link href="/privacy">
                  <span className="hover:text-white transition-colors duration-300 cursor-pointer">Privacy</span>
                </Link>
                <Link href="/cookies">
                  <span className="hover:text-white transition-colors duration-300 cursor-pointer">Cookies</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
