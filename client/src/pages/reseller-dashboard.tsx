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
    { id: 4, name: "Sarah Wilson", email: "sarah@example.com", plan: "Pro", status: "Active", joined: "2024-01-20", commission: 29.99 }
  ]);

  const [recentSales, setRecentSales] = useState([
    { id: 1, customer: "Alex Brown", plan: "Premium", amount: 49.99, commission: 14.99, date: "2024-01-25" },
    { id: 2, customer: "Lisa Davis", plan: "Pro", amount: 29.99, commission: 8.99, date: "2024-01-24" },
    { id: 3, customer: "Tom Wilson", plan: "Basic", amount: 19.99, commission: 5.99, date: "2024-01-23" }
  ]);

  const [payouts, setPayouts] = useState([
    { id: 1, amount: 1250.50, date: "2024-01-01", status: "Paid", method: "PayPal" },
    { id: 2, amount: 980.25, date: "2024-12-01", status: "Paid", method: "Bank Transfer" },
    { id: 3, amount: 850.25, date: "2024-02-01", status: "Pending", method: "PayPal" }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Reseller Dashboard</h1>
            <p className="text-gray-300">Welcome back! Here's your performance overview.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/">
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 border border-white/20">
                <Home className="h-4 w-4 mr-2" />
                Return Home
              </Button>
            </Link>
            <Button onClick={refreshStats} className="bg-white/10 hover:bg-white/20 border border-white/20">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button 
              onClick={() => toast({ title: "Notifications", description: "No new notifications" })}
              className="bg-gradient-to-r from-primary to-secondary"
            >
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-xl border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${stats.totalEarnings.toFixed(2)}</div>
              <p className="text-xs text-gray-400">+20.1% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Monthly Earnings</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${stats.monthlyEarnings.toFixed(2)}</div>
              <p className="text-xs text-gray-400">+15.3% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Customers</CardTitle>
              <Users className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalCustomers}</div>
              <p className="text-xs text-gray-400">+{stats.newCustomers} this month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Conversion Rate</CardTitle>
              <Target className="h-4 w-4 text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.conversionRate.toFixed(1)}%</div>
              <p className="text-xs text-gray-400">+2.4% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white/10 backdrop-blur-xl border border-white/20 p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white/20">Overview</TabsTrigger>
            <TabsTrigger value="customers" className="data-[state=active]:bg-white/20">Customers</TabsTrigger>
            <TabsTrigger value="sales" className="data-[state=active]:bg-white/20">Recent Sales</TabsTrigger>
            <TabsTrigger value="payouts" className="data-[state=active]:bg-white/20">Payouts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
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
                      onClick={() => toast({ title: "Analytics", description: "Analytics dashboard opened" })}
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
                <CardContent className="grid grid-cols-2 gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="h-auto p-4 flex flex-col items-center gap-2 bg-green-600 hover:bg-green-700">
                        <UserPlus className="h-6 w-6" />
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
                    className="h-auto p-4 flex flex-col items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  >
                    <Download className="h-6 w-6" />
                    <span>Download Report</span>
                  </Button>

                  <Button 
                    onClick={() => toast({ title: "Email Campaign", description: "Email campaign builder opened" })}
                    className="h-auto p-4 flex flex-col items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  >
                    <Mail className="h-6 w-6" />
                    <span>Email Campaign</span>
                  </Button>

                  <Button 
                    onClick={() => toast({ title: "Settings", description: "Settings panel opened" })}
                    className="h-auto p-4 flex flex-col items-center gap-2 bg-orange-600 hover:bg-orange-700"
                  >
                    <Settings className="h-6 w-6" />
                    <span>Settings</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="customers" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Customer Management</CardTitle>
                <CardDescription className="text-gray-300">Manage your customer base and track their status</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <table className="w-full">
                    <thead className="sticky top-0 bg-slate-900/80 backdrop-blur-sm">
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-gray-300">Name</th>
                        <th className="text-left py-3 px-4 text-gray-300">Email</th>
                        <th className="text-left py-3 px-4 text-gray-300">Plan</th>
                        <th className="text-left py-3 px-4 text-gray-300">Status</th>
                        <th className="text-left py-3 px-4 text-gray-300">Commission</th>
                        <th className="text-left py-3 px-4 text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((customer) => (
                        <tr key={customer.id} className="border-b border-white/10">
                          <td className="py-3 px-4 text-white">{customer.name}</td>
                          <td className="py-3 px-4 text-gray-300">{customer.email}</td>
                          <td className="py-3 px-4">
                            <Badge variant={customer.plan === 'Premium' ? 'default' : 'secondary'}>
                              {customer.plan}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant={customer.status === 'Active' ? 'default' : 'destructive'}>
                              {customer.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-green-400">${customer.commission}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="bg-white/10 border-white/20"
                                onClick={() => toast({ title: "Customer Details", description: `Viewing ${customer.name}'s details` })}
                              >
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="bg-blue-600/20 border-blue-600/20 hover:bg-blue-600/40"
                                onClick={() => toast({ title: "Customer Edit", description: `Editing ${customer.name}'s account` })}
                              >
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="bg-red-600/20 border-red-600/20 hover:bg-red-600/40"
                                onClick={() => deleteCustomer(customer.id)}
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
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sales" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Recent Sales</CardTitle>
                <CardDescription className="text-gray-300">Track your latest sales and commissions</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {recentSales.map((sale) => (
                      <div key={sale.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                        <div>
                          <h4 className="font-semibold text-white">{sale.customer}</h4>
                          <p className="text-sm text-gray-300">{sale.plan} Plan • {sale.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-white">${sale.amount}</p>
                          <p className="text-sm text-green-400">+${sale.commission} commission</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payouts" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Payout History</CardTitle>
                <CardDescription className="text-gray-300">Track your earnings and payment history</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64 mb-6">
                  <div className="space-y-4">
                    {payouts.map((payout) => (
                      <div key={payout.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                        <div>
                          <h4 className="font-semibold text-white">${payout.amount}</h4>
                          <p className="text-sm text-gray-300">{payout.date} • {payout.method}</p>
                        </div>
                        <Badge variant={payout.status === 'Paid' ? 'default' : 'secondary'}>
                          {payout.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="pt-6 border-t border-white/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-white">Pending Commissions</h4>
                      <p className="text-2xl font-bold text-green-400">${stats.pendingCommissions}</p>
                    </div>
                    <Button onClick={requestPayout} className="bg-green-600 hover:bg-green-700">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Request Payout
                    </Button>
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