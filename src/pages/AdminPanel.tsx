import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Users, TrendingUp, AlertCircle, Target, Zap, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminPanel = () => {
  // Mock data for analytics
  const participationData = [
    { month: 'Jan', participants: 120, events: 8 },
    { month: 'Feb', participants: 150, events: 10 },
    { month: 'Mar', participants: 180, events: 12 },
    { month: 'Apr', participants: 140, events: 9 },
    { month: 'May', participants: 200, events: 15 },
    { month: 'Jun', participants: 220, events: 16 },
  ];

  const categoryData = [
    { name: 'Tech', value: 35, color: '#8B5CF6' },
    { name: 'Social', value: 25, color: '#06B6D4' },
    { name: 'Academic', value: 20, color: '#10B981' },
    { name: 'Sports', value: 15, color: '#F59E0B' },
    { name: 'Arts', value: 5, color: '#EF4444' },
  ];

  const engagementData = [
    { week: 'W1', engagement: 75 },
    { week: 'W2', engagement: 82 },
    { week: 'W3', engagement: 68 },
    { week: 'W4', engagement: 90 },
    { week: 'W5', engagement: 85 },
    { week: 'W6', engagement: 92 },
  ];

  const gapAnalysis = [
    { category: 'Tech Events', lastEvent: '2 weeks ago', risk: 'medium', suggestion: 'Plan a coding workshop' },
    { category: 'Social Mixers', lastEvent: '1 month ago', risk: 'high', suggestion: 'Organize a community social event' },
    { category: 'Academic Seminars', lastEvent: '3 days ago', risk: 'low', suggestion: 'Continue current pace' },
    { category: 'Sports Activities', lastEvent: '3 weeks ago', risk: 'high', suggestion: 'Schedule intramural games' },
  ];

  const recentEvents = [
    { id: 1, name: 'AI Workshop', attendees: 45, satisfaction: 4.8, date: '2024-11-15' },
    { id: 2, name: 'Social Mixer', attendees: 78, satisfaction: 4.6, date: '2024-11-12' },
    { id: 3, name: 'Career Fair', attendees: 200, satisfaction: 4.9, date: '2024-11-10' },
    { id: 4, name: 'Startup Pitch', attendees: 32, satisfaction: 4.7, date: '2024-11-08' },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-yellow-500 text-white';
      case 'low': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Admin Panel - <span className="text-gradient">TinkerSphere Analytics</span>
          </h1>
          <p className="text-muted-foreground">
            Comprehensive insights into community engagement and event performance
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Members</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,245</div>
              <p className="text-xs text-success">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Events This Month</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">16</div>
              <p className="text-xs text-success">+8% from last month</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Attendance</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <p className="text-xs text-success">+5% from last month</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Satisfaction Score</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.7</div>
              <p className="text-xs text-success">+0.2 from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="gaps">Community Gaps</TabsTrigger>
            <TabsTrigger value="events">Event History</TabsTrigger>
          </TabsList>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Participation Trends */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Participation Trends</CardTitle>
                  <CardDescription>Monthly participation and event count</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={participationData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="participants" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Event Categories */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Event Categories</CardTitle>
                  <CardDescription>Distribution of event types</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Engagement Score */}
              <Card className="glass-card lg:col-span-2">
                <CardHeader>
                  <CardTitle>Weekly Engagement Score</CardTitle>
                  <CardDescription>Community engagement levels over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={engagementData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="engagement" 
                        stroke="hsl(var(--accent))" 
                        strokeWidth={3}
                        dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Community Gap Radar */}
          <TabsContent value="gaps" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Community Gap Radar</span>
                </CardTitle>
                <CardDescription>
                  Areas where the community needs more engagement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {gapAnalysis.map((gap, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{gap.category}</h3>
                        <p className="text-sm text-muted-foreground">Last event: {gap.lastEvent}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getRiskColor(gap.risk)}>
                          {gap.risk} risk
                        </Badge>
                        <div className="text-right">
                          <p className="text-sm font-medium">{gap.suggestion}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Suggestions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-accent" />
                  <span>AI-Powered Suggestions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gradient-primary/10 border border-primary/20 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2">High Priority</h4>
                    <p className="text-sm">Consider hosting a social mixer in the next 2 weeks. Social events have the highest satisfaction scores but haven't been held recently.</p>
                  </div>
                  
                  <div className="bg-gradient-accent/10 border border-accent/20 rounded-lg p-4">
                    <h4 className="font-semibold text-accent mb-2">Medium Priority</h4>
                    <p className="text-sm">Tech workshops consistently fill up quickly. Consider increasing capacity or frequency for technical events.</p>
                  </div>
                  
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                    <h4 className="font-semibold text-success mb-2">Low Priority</h4>
                    <p className="text-sm">Academic seminars are well-paced. Continue current scheduling strategy.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Event History */}
          <TabsContent value="events" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Recent Event Performance</CardTitle>
                <CardDescription>Analysis of recent events and their success metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{event.name}</h3>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Attendees</p>
                          <p className="text-lg font-bold">{event.attendees}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Satisfaction</p>
                          <p className="text-lg font-bold text-success">{event.satisfaction}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;