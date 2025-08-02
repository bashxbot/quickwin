
import React, { useState } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/sections/footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { RiUserAddLine } from "react-icons/ri";
import { useToast } from "../hooks/use-toast";
import { Link, useLocation } from "wouter";

export default function SignUpPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    plan: "",
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const plans = [
    { value: "basic", label: "Basic Plan - $19.99/month", price: 19.99 },
    { value: "pro", label: "Pro Plan - $29.99/month", price: 29.99 },
    { value: "premium", label: "Premium Plan - $49.99/month", price: 49.99 }
  ];

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions",
        variant: "destructive"
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    if (!formData.plan) {
      toast({
        title: "Plan Required",
        description: "Please select a subscription plan",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulate signup process
    setTimeout(() => {
      toast({
        title: "Account Created Successfully!",
        description: `Welcome ${formData.fullName}! Your ${formData.plan} plan is active.`,
      });
      setIsLoading(false);
      setLocation("/");
    }, 2000);
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen flex items-center">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Card className="glass-effect border-white/20">
              <CardHeader className="text-center">
                <div className="text-primary mb-4">
                  <RiUserAddLine className="h-12 w-12 mx-auto" />
                </div>
                <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
                <CardDescription className="text-gray-300">
                  Join thousands of users already using Quick Win
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSignUp} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input 
                      id="fullName" 
                      type="text" 
                      value={formData.fullName}
                      onChange={(e) => updateFormData("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      className="glass-effect border-white/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
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
                      value={formData.password}
                      onChange={(e) => updateFormData("password", e.target.value)}
                      placeholder="Create a strong password"
                      className="glass-effect border-white/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input 
                      id="confirmPassword" 
                      type="password" 
                      value={formData.confirmPassword}
                      onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                      placeholder="Confirm your password"
                      className="glass-effect border-white/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="plan">Choose Plan</Label>
                    <Select onValueChange={(value) => updateFormData("plan", value)}>
                      <SelectTrigger className="glass-effect border-white/20">
                        <SelectValue placeholder="Select a subscription plan" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-white/20">
                        {plans.map((plan) => (
                          <SelectItem key={plan.value} value={plan.value}>
                            {plan.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => updateFormData("agreeToTerms", checked as boolean)}
                      className="border-white/20"
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-300">
                      I agree to the{" "}
                      <button 
                        type="button"
                        onClick={() => window.open('https://quickwin.com/terms', '_blank')}
                        className="text-primary hover:underline"
                      >
                        Terms of Service
                      </button>
                      {" "}and{" "}
                      <button 
                        type="button"
                        onClick={() => window.open('https://quickwin.com/privacy', '_blank')}
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </button>
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>

                <div className="text-center">
                  <p className="text-gray-400">
                    Already have an account?{" "}
                    <Link href="/reseller-login">
                      <button className="text-primary hover:underline">
                        Sign in here
                      </button>
                    </Link>
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
