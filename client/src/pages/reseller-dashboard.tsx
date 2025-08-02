import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Award, 
  Plus, 
  Eye,
  Download,
  Share,
  Settings,
  Bell,
  Calendar,
  BarChart3,
  Target,
  Zap,
  CreditCard,
  UserPlus,
  Mail,
  Phone,
  Globe,
  Copy,
  ExternalLink,
  RefreshCw,
  Trash2,
  Edit,
  FileText,
  Home
} from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ResellerDashboard() {
  const { toast } = useToast();

  // Scroll reset on mount
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  const [stats, setStats] = useState({
    totalEarnings: 15420.50,
    monthlyEarnings: 3250.75,
    totalCustomers: 127,
    newCustomers: 8,
    conversionRate: 12.5,
    pendingCommissions: 850.25
  });

  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", plan: "Pro", status: "Active", joined: "2024-01-15", commission: 29.99 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", plan: "Premium", status: "Active", joined: "2024-01-10", commission: 49.99 },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", plan: "Basic", status: "Expired", joined: "2024-01-05", commission: 19.99 },
    { id: 4, name: "Sarah Wilson", email: "sarah@example.com", plan: "Pro", status: "Active", joined: "2024-01-20", commission: 29.99 },
    { id: 5, name: "David Chen", email: "david@example.com", plan: "Premium", status: "Active", joined: "2024-01-22", commission: 49.99 },
    { id: 6, name: "Emma Davis", email: "emma@example.com", plan: "Basic", status: "Active", joined: "2024-01-18", commission: 19.99 },
    { id: 7, name: "Alex Rodriguez", email: "alex@example.com", plan: "Pro", status: "Active", joined: "2024-01-25", commission: 29.99 },
    { id: 8, name: "Lisa Chang", email: "lisa@example.com", plan: "Premium", status: "Active", joined: "2024-01-12", commission: 49.99 },
    { id: 9, name: "Tom Brown", email: "tom@example.com", plan: "Basic", status: "Expired", joined: "2024-01-08", commission: 19.99 },
    { id: 10, name: "Maria Garcia", email: "maria@example.com", plan: "Pro", status: "Active", joined: "2024-01-28", commission: 29.99 },
    { id: 11, name: "Robert Taylor", email: "robert@example.com", plan: "Premium", status: "Active", joined: "2024-01-30", commission: 49.99 },
    { id: 12, name: "Jessica Lee", email: "jessica@example.com", plan: "Basic", status: "Active", joined: "2024-01-14", commission: 19.99 }
  ]);

  const [recentSales, setRecentSales] = useState([
    { id: 1, customer: "Alex Brown", plan: "Premium", amount: 49.99, commission: 14.99, date: "2024-02-01" },
    { id: 2, customer: "Lisa Davis", plan: "Pro", amount: 29.99, commission: 8.99, date: "2024-01-31" },
    { id: 3, customer: "Tom Wilson", plan: "Basic", amount: 19.99, commission: 5.99, date: "2024-01-30" },
    { id: 4, customer: "Kevin Park", plan: "Premium", amount: 49.99, commission: 14.99, date: "2024-01-29" },
    { id: 5, customer: "Amanda White", plan: "Pro", amount: 29.99, commission: 8.99, date: "2024-01-28" },
    { id: 6, customer: "Steven Miller", plan: "Basic", amount: 19.99, commission: 5.99, date: "2024-01-27" },
    { id: 7, customer: "Nicole Johnson", plan: "Premium", amount: 49.99, commission: 14.99, date: "2024-01-26" },
    { id: 8, customer: "Ryan Thompson", plan: "Pro", amount: 29.99, commission: 8.99, date: "2024-01-25" },
    { id: 9, customer: "Sophie Adams", plan: "Basic", amount: 19.99, commission: 5.99, date: "2024-01-24" },
    { id: 10, customer: "Marcus Jones", plan: "Premium", amount: 49.99, commission: 14.99, date: "2024-01-23" }
  ]);

  const [payouts, setPayouts] = useState([
    { id: 1, amount: 1250.50, date: "2024-01-01", status: "Paid", method: "PayPal" },
    { id: 2, amount: 980.25, date: "2023-12-01", status: "Paid", method: "Bank Transfer" },
    { id: 3, amount: 850.25, date: "2024-02-01", status: "Pending", method: "PayPal" },
    { id: 4, amount: 675.80, date: "2023-11-01", status: "Paid", method: "PayPal" },
    { id: 5, amount: 892.45, date: "2023-10-01", status: "Paid", method: "Bank Transfer" },
    { id: 6, amount: 1156.30, date: "2023-09-01", status: "Paid", method: "PayPal" },
    { id: 7, amount: 734.55, date: "2023-08-01", status: "Paid", method: "Bank Transfer" },
    { id: 8, amount: 945.20, date: "2023-07-01", status: "Paid", method: "PayPal" }
  ]);

  const [referralLink] = useState("https://quickwin.com/ref/QW_REF_USER123");
  const [showLinkCopied, setShowLinkCopied] = useState(false);
  const [newCustomerName, setNewCustomerName] = useState("");
  const [newCustomerEmail, setNewCustomerEmail] = useState("");
  const [isAddingCustomer, setIsAddingCustomer] = useState(false);

  // Real-time updates simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalEarnings: prev.totalEarnings + (Math.random() * 10),
        monthlyEarnings: prev.monthlyEarnings + (Math.random() * 5)
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    setShowLinkCopied(true);
    toast({
      title: "Link Copied!",
      description: "Referral link copied to clipboard"
    });
    setTimeout(() => setShowLinkCopied(false), 2000);
  };

  const refreshStats = () => {
    setStats(prev => ({
      ...prev,
      totalEarnings: prev.totalEarnings + Math.random() * 100,
      newCustomers: prev.newCustomers + Math.floor(Math.random() * 3),
      conversionRate: Math.min(prev.conversionRate + Math.random() * 2, 100)
    }));
    toast({
      title: "Stats Refreshed",
      description: "Dashboard data has been updated"
    });
  };

  const addCustomer = () => {
    if (newCustomerName && newCustomerEmail) {
      const newCustomer = {
        id: customers.length + 1,
        name: newCustomerName,
        email: newCustomerEmail,
        plan: "Basic",
        status: "Active",
        joined: new Date().toISOString().split('T')[0],
        commission: 19.99
      };
      setCustomers([...customers, newCustomer]);
      setNewCustomerName("");
      setNewCustomerEmail("");
      setIsAddingCustomer(false);
      toast({
        title: "Customer Added",
        description: `${newCustomerName} has been added successfully`
      });
    }
  };

  const deleteCustomer = (id: number) => {
    setCustomers(customers.filter(customer => customer.id !== id));
    toast({
      title: "Customer Removed",
      description: "Customer has been removed from your list"
    });
  };

  const sendEmail = (customerEmail: string) => {
    toast({
      title: "Email Sent",
      description: `Email sent to ${customerEmail}`
    });
  };

  const editCustomer = (customer: any) => {
    toast({
      title: "Edit Customer",
      description: `Opening edit form for ${customer.name}`
    });
  };

  const viewCustomerDetails = (customer: any) => {
    toast({
      title: "Customer Details",
      description: `Viewing detailed information for ${customer.name}`
    });
  };

  const openEmailCampaign = () => {
    toast({
      title: "Email Campaign",
      description: "Opening email campaign builder with customer segmentation tools"
    });
  };

  const openSettings = () => {
    toast({
      title: "Settings",
      description: "Opening reseller account settings and preferences"
    });
  };

  const openAnalytics = () => {
    toast({
      title: "Analytics Dashboard",
      description: "Opening detailed analytics with charts and performance metrics"
    });
  };

  const openNotifications = () => {
    toast({
      title: "Notifications",
      description: "You have 3 new notifications about recent sales"
    });
  };

  const downloadReport = () => {
    const reportData = {
      stats,
      customers: customers.length,
      totalSales: recentSales.length,
      generatedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reseller-report.json';
    a.click();
    toast({
      title: "Report Downloaded",
      description: "Your reseller report has been downloaded"
    });
  };

  const requestPayout = () => {
    toast({
      title: "Payout Requested",
      description: `Payout request for $${stats.pendingCommissions} has been submitted`
    });
  };

  const shareLink = (platform: string) => {
    const shareUrl = `https://${platform}.com/share?url=${encodeURIComponent(referralLink)}`;
    window.open(shareUrl, '_blank');
    toast({
      title: "Link Shared",
      description: `Referral link shared on ${platform}`
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-3 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">Reseller Dashboard</h1>
            <p className="text-gray-300 text-sm sm:text-base">Welcome back! Here's your performance overview.</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <Link href="/">
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm">
                <Home className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
                <span className="hidden sm:inline">Return Home</span>
              </Button>
            </Link>
            <Button onClick={refreshStats} className="bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm">
              <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
            <Button 
              onClick={openNotifications}
              className="bg-gradient-to-r from-primary to-secondary text-xs sm:text-sm"
            >
              <Bell className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
              <span className="hidden sm:inline">Notifications</span>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <Card className="bg-white/10 backdrop-blur-xl border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 sm:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium text-gray-300">Total Earnings</CardTitle>
              <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <div className="text-lg sm:text-2xl font-bold text-white">${stats.totalEarnings.toFixed(2)}</div>
              <p className="text-xs text-gray-400 hidden sm:block">+20.1% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 sm:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium text-gray-300">Monthly Earnings</CardTitle>
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <div className="text-lg sm:text-2xl font-bold text-white">${stats.monthlyEarnings.toFixed(2)}</div>
              <p className="text-xs text-gray-400 hidden sm:block">+15.3% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 sm:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium text-gray-300">Total Customers</CardTitle>
              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400" />
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <div className="text-lg sm:text-2xl font-bold text-white">{stats.totalCustomers}</div>
              <p className="text-xs text-gray-400 hidden sm:block">+{stats.newCustomers} this month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 sm:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium text-gray-300">Conversion Rate</CardTitle>
              <Target className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400" />
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <div className="text-lg sm:text-2xl font-bold text-white">{stats.conversionRate.toFixed(1)}%</div>
              <p className="text-xs text-gray-400 hidden sm:block">+2.4% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4 sm:space-y-6">
          <TabsList className="bg-white/10 backdrop-blur-xl border border-white/20 p-1 w-full grid grid-cols-4 h-auto">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white/20 text-xs sm:text-sm p-2 sm:p-3">Overview</TabsTrigger>
            <TabsTrigger value="customers" className="data-[state=active]:bg-white/20 text-xs sm:text-sm p-2 sm:p-3">Customers</TabsTrigger>
            <TabsTrigger value="sales" className="data-[state=active]:bg-white/20 text-xs sm:text-sm p-2 sm:p-3">Sales</TabsTrigger>
            <TabsTrigger value="payouts" className="data-[state=active]:bg-white/20 text-xs sm:text-sm p-2 sm:p-3">Payouts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Referral Link Card */}
              <Card className="bg-white/10 backdrop-blur-xl border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Your Referral Link</CardTitle>
                  <CardDescription className="text-gray-300">Share this link to earn commissions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input 
                      value={referralLink} 
                      readOnly 
                      className="bg-white/5 border-white/20 text-white"
                    />
                    <Button onClick={copyReferralLink} className="px-3">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  {showLinkCopied && (
                    <p className="text-green-400 text-sm">Link copied to clipboard!</p>
                  )}
                  <div className="flex gap-2">
                    <Button onClick={() => shareLink('twitter')} className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Share className="h-4 w-4 mr-2" />
                      Share Link
                    </Button>
                    <Button 
                      onClick={openAnalytics}
                      variant="outline" 
                      className="flex-1 bg-white/10 border-white/20"
                    >
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-white/10 backdrop-blur-xl border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="h-auto p-3 sm:p-4 flex flex-col items-center gap-1 sm:gap-2 bg-green-600 hover:bg-green-700 text-xs sm:text-sm">
                        <UserPlus className="h-4 w-4 sm:h-6 sm:w-6" />
                        <span>Add Customer</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-900 border-white/20">
                      <DialogHeader>
                        <DialogTitle className="text-white">Add New Customer</DialogTitle>
                        <DialogDescription className="text-gray-300">
                          Add a new customer to your reseller account
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="customerName" className="text-white">Name</Label>
                          <Input
                            id="customerName"
                            value={newCustomerName}
                            onChange={(e) => setNewCustomerName(e.target.value)}
                            className="bg-white/5 border-white/20 text-white"
                            placeholder="Customer name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="customerEmail" className="text-white">Email</Label>
                          <Input
                            id="customerEmail"
                            value={newCustomerEmail}
                            onChange={(e) => setNewCustomerEmail(e.target.value)}
                            className="bg-white/5 border-white/20 text-white"
                            placeholder="customer@example.com"
                          />
                        </div>
                        <Button onClick={addCustomer} className="w-full bg-green-600 hover:bg-green-700">
                          Add Customer
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button 
                    onClick={downloadReport}
                    className="h-auto p-3 sm:p-4 flex flex-col items-center gap-1 sm:gap-2 bg-purple-600 hover:bg-purple-700 text-xs sm:text-sm"
                  >
                    <Download className="h-4 w-4 sm:h-6 sm:w-6" />
                    <span>Download Report</span>
                  </Button>

                  <Button 
                    onClick={openEmailCampaign}
                    className="h-auto p-3 sm:p-4 flex flex-col items-center gap-1 sm:gap-2 bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm"
                  >
                    <Mail className="h-4 w-4 sm:h-6 sm:w-6" />
                    <span>Email Campaign</span>
                  </Button>

                  <Button 
                    onClick={openSettings}
                    className="h-auto p-3 sm:p-4 flex flex-col items-center gap-1 sm:gap-2 bg-orange-600 hover:bg-orange-700 text-xs sm:text-sm"
                  >
                    <Settings className="h-4 w-4 sm:h-6 sm:w-6" />
                    <span>Settings</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="customers" className="space-y-4 sm:space-y-6">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-white text-lg sm:text-xl">Customer Management</CardTitle>
                <CardDescription className="text-gray-300 text-sm">Manage your customer base and track their status</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
                  <p className="text-sm text-gray-300">
                    {customers.length} total customers
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-xs">
                      <Download className="h-3 w-3 mr-1" />
                      Export
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs">
                      <UserPlus className="h-3 w-3 mr-1" />
                      Add Customer
                    </Button>
                  </div>
                </div>
                {/* Mobile Card View */}
                <div className="block lg:hidden">
                  <ScrollArea className="h-[400px] space-y-3">
                    {customers.map((customer) => (
                      <Card key={customer.id} className="bg-white/5 border-white/10 p-3 mb-3">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-white text-sm">{customer.name}</h4>
                            <p className="text-xs text-gray-400">{customer.email}</p>
                          </div>
                          <div className="flex gap-1">
                            <Badge variant={customer.plan === 'Premium' ? 'default' : 'secondary'} className="text-xs">
                              {customer.plan}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2">
                            <Badge variant={customer.status === 'Active' ? 'default' : 'destructive'} className="text-xs">
                              {customer.status}
                            </Badge>
                            <span className="text-green-400 text-sm font-semibold">${customer.commission}</span>
                          </div>
                          <div className="flex gap-1">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="bg-white/10 border-white/20 hover:bg-white/20 h-6 w-6 p-0"
                              onClick={() => viewCustomerDetails(customer)}
                              title="View"
                            >
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="bg-blue-600/20 border-blue-600/20 hover:bg-blue-600/40 h-6 w-6 p-0"
                              onClick={() => editCustomer(customer)}
                              title="Edit"
                            >
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="bg-red-600/20 border-red-600/20 hover:bg-red-600/40 h-6 w-6 p-0"
                              onClick={() => deleteCustomer(customer.id)}
                              title="Delete"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </ScrollArea>
                </div>
                {/* Desktop Table View */}
                <div className="hidden lg:block">
                <ScrollArea className="h-[500px] rounded-md border border-white/20 bg-black/20">
                  <table className="w-full">
                    <thead className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-white/20">
                      <tr>
                        <th className="text-left py-4 px-4 text-gray-300 font-semibold">Name</th>
                        <th className="text-left py-4 px-4 text-gray-300 font-semibold">Email</th>
                        <th className="text-left py-4 px-4 text-gray-300 font-semibold">Plan</th>
                        <th className="text-left py-4 px-4 text-gray-300 font-semibold">Status</th>
                        <th className="text-left py-4 px-4 text-gray-300 font-semibold">Commission</th>
                        <th className="text-left py-4 px-4 text-gray-300 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {customers.map((customer) => (
                        <tr key={customer.id} className="hover:bg-white/5 transition-colors">
                          <td className="py-4 px-4">
                            <div className="font-semibold text-white">{customer.name}</div>
                            <div className="text-xs text-gray-400">Joined {customer.joined}</div>
                          </td>
                          <td className="py-4 px-4 text-gray-300">{customer.email}</td>
                          <td className="py-4 px-4">
                            <Badge variant={customer.plan === 'Premium' ? 'default' : 'secondary'} className="text-xs">
                              {customer.plan}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <Badge variant={customer.status === 'Active' ? 'default' : 'destructive'} className="text-xs">
                              {customer.status}
                            </Badge>
                          </td>
                          <td className="py-4 px-4 font-semibold text-green-400">${customer.commission}</td>
                          <td className="py-4 px-4">
                            <div className="flex gap-1">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="bg-white/10 border-white/20 hover:bg-white/20 h-8 w-8 p-0"
                                onClick={() => viewCustomerDetails(customer)}
                                title="View Details"
                              >
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="bg-blue-600/20 border-blue-600/20 hover:bg-blue-600/40 h-8 w-8 p-0"
                                onClick={() => editCustomer(customer)}
                                title="Edit Customer"
                              >
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="bg-green-600/20 border-green-600/20 hover:bg-green-600/40 h-8 w-8 p-0"
                                onClick={() => sendEmail(customer.email)}
                                title="Send Email"
                              >
                                <Mail className="h-3 w-3" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="bg-red-600/20 border-red-600/20 hover:bg-red-600/40 h-8 w-8 p-0"
                                onClick={() => deleteCustomer(customer.id)}
                                title="Delete Customer"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </ScrollArea>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sales" className="space-y-4 sm:space-y-6">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-white text-lg sm:text-xl">Recent Sales</CardTitle>
                <CardDescription className="text-gray-300 text-sm">Track your latest sales and commissions</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
                  <p className="text-sm text-gray-300">
                    {recentSales.length} recent sales
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-xs">
                      <FileText className="h-3 w-3 mr-1" />
                      View All
                    </Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-xs">
                      <Download className="h-3 w-3 mr-1" />
                      Export Sales
                    </Button>
                  </div>
                </div>
                <ScrollArea className="h-[450px] rounded-md border border-white/20 bg-black/20">
                  <div className="space-y-3 p-2 sm:p-4">
                    {recentSales.map((sale) => (
                      <div key={sale.id} className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                            <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-white text-sm sm:text-base truncate">{sale.customer}</h4>
                            <p className="text-xs sm:text-sm text-gray-300">{sale.plan} Plan • {sale.date}</p>
                          </div>
                        </div>
                        <div className="text-right mx-2 sm:mx-4">
                          <p className="font-semibold text-white text-sm sm:text-base">${sale.amount}</p>
                          <p className="text-xs sm:text-sm text-green-400">+${sale.commission}</p>
                        </div>
                        <div className="flex gap-1">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="bg-white/10 border-white/20 hover:bg-white/20 h-6 w-6 sm:h-8 sm:w-8 p-0"
                            onClick={() => toast({ title: "Sale Details", description: `Viewing details for ${sale.customer}'s purchase` })}
                            title="View Sale Details"
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payouts" className="space-y-4 sm:space-y-6">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-white text-lg sm:text-xl">Payout History</CardTitle>
                <CardDescription className="text-gray-300 text-sm">Track your earnings and payment history</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
                  <p className="text-sm text-gray-300">
                    Payout history and pending commissions
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-xs">
                      <FileText className="h-3 w-3 mr-1" />
                      Tax Report
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs">
                      <Download className="h-3 w-3 mr-1" />
                      Export History
                    </Button>
                  </div>
                </div>
                <ScrollArea className="h-[300px] rounded-md border border-white/20 bg-black/20 mb-4 sm:mb-6">
                  <div className="space-y-3 p-2 sm:p-4">
                    {payouts.map((payout) => (
                      <div key={payout.id} className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-2 sm:gap-3 flex-1">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-white text-sm sm:text-base">${payout.amount}</h4>
                            <p className="text-xs sm:text-sm text-gray-300">{payout.date} • {payout.method}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Badge variant={payout.status === 'Paid' ? 'default' : 'secondary'} className="text-xs">
                            {payout.status}
                          </Badge>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="bg-white/10 border-white/20 hover:bg-white/20 h-6 w-6 sm:h-8 sm:w-8 p-0"
                            onClick={() => toast({ title: "Payout Details", description: `Viewing payout details for ${payout.date}` })}
                            title="View Payout Details"
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="pt-4 sm:pt-6 border-t border-white/20">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
                    <div>
                      <h4 className="font-semibold text-white text-base sm:text-lg">Pending Commissions</h4>
                      <p className="text-xl sm:text-2xl font-bold text-green-400">${stats.pendingCommissions}</p>
                      <p className="text-xs text-gray-400 mt-1">Available for payout</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button 
                        variant="outline" 
                        className="bg-white/10 border-white/20 text-xs sm:text-sm w-full sm:w-auto"
                        onClick={() => toast({ title: "Payout Settings", description: "Opening payout method preferences" })}
                      >
                        <Settings className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        Settings
                      </Button>
                      <Button onClick={requestPayout} className="bg-green-600 hover:bg-green-700 text-xs sm:text-sm w-full sm:w-auto">
                        <CreditCard className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        Request Payout
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}