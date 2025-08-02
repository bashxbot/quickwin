import { useState } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/sections/footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { RiLoginBoxLine } from "react-icons/ri";
import { useToast } from "../hooks/use-toast";
import { Link, useLocation } from "wouter";

export default function ResellerLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome to your reseller dashboard!",
      });
      setIsLoading(false);
      setLocation("/reseller-dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-muted min-h-screen flex items-center">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Card className="glass-effect border-white/20">
              <CardHeader className="text-center">
                <div className="text-primary mb-4">
                  <RiLoginBoxLine className="h-12 w-12 mx-auto" />
                </div>
                <CardTitle className="text-2xl font-bold">Reseller Login</CardTitle>
                <CardDescription className="text-gray-300">
                  Access your reseller dashboard to manage your sales and commissions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="glass-effect border-white/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="glass-effect border-white/20"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing In..." : "Sign In"}
                  </Button>
                </form>

                <div className="text-center space-y-4">
                  <p className="text-gray-400">
                    Don't have an account?{" "}
                    <button 
                      onClick={() => {
                        toast({
                          title: "Application Submitted",
                          description: "Your reseller application has been submitted for review."
                        });
                      }}
                      className="text-primary hover:underline"
                    >
                      Apply to become a reseller
                    </button>
                  </p>
                  <p className="text-gray-400">
                    <button 
                      onClick={() => {
                        toast({
                          title: "Reset Link Sent",
                          description: "Password reset link has been sent to your email."
                        });
                      }}
                      className="text-primary hover:underline"
                    >
                      Forgot your password?
                    </button>
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