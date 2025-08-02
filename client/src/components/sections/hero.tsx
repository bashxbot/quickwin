import { Play, Download, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaTelegramPlane } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
import { Link } from "wouter";

export default function Hero() {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "99.9%", label: "Success Rate" },
    { value: "4.9/5", label: "User Rating" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%25239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Rated #1 Pool Assistant</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Dominate
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Every Game
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-4 max-w-2xl">
              Revolutionary AI-powered 8 Ball Pool assistant with advanced autoplay and precision aim prediction.
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Join thousands of players achieving consistent victories with our undetectable, lightning-fast gaming assistant.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={() => {
                  window.open('https://t.me/quickwinofc', '_blank');
                  // You can add analytics tracking here
                }}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg shadow-primary/25 h-auto"
              >
                <FaTelegramPlane className="mr-2 h-5 w-5" />
                Get Started Free
              </Button>
              <Link href="/reseller-login">
                <Button 
                  variant="outline" 
                  className="bg-white/5 backdrop-blur-sm px-8 py-4 rounded-xl text-white font-semibold hover:bg-white/10 transition-all duration-300 border-white/20 h-auto w-full"
                >
                  <RiLoginBoxLine className="mr-2 h-5 w-5" />
                  Reseller Portal
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:ml-8">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Quick Win AI</h3>
                      <p className="text-sm text-gray-400">Active Session</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                {/* Demo Stats */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Win Rate</span>
                    <span className="text-green-400 font-semibold">94.7%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full w-[94.7%]"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Aim Accuracy</span>
                    <span className="text-primary font-semibold">98.2%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-[98.2%]"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Games Won Today</span>
                    <span className="text-yellow-400 font-semibold">127</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <div className="flex items-center text-green-400 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Autoplay: Active • Undetected
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-secondary to-primary p-3 rounded-xl shadow-lg animate-bounce">
                <Download className="h-5 w-5 text-white" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
