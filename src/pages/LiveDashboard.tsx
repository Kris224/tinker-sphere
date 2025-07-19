import React, { useState, useEffect } from 'react';
import { Activity, Users, Calendar, TrendingUp, Zap, Globe, Heart, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const LiveDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [liveStats, setLiveStats] = useState({
    activeUsers: 142,
    ongoingEvents: 3,
    todaySignups: 28,
    weeklyGrowth: 12.5,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      // Simulate live data updates
      setLiveStats(prev => ({
        ...prev,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10 - 5),
        todaySignups: prev.todaySignups + (Math.random() > 0.8 ? 1 : 0),
      }));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Mock data for live metrics
  const campusPulse = {
    diversity: {
      engineering: 35,
      business: 25,
      arts: 20,
      science: 15,
      other: 5,
    },
    activityHeatmap: [
      { hour: '9AM', activity: 20 },
      { hour: '10AM', activity: 45 },
      { hour: '11AM', activity: 60 },
      { hour: '12PM', activity: 85 },
      { hour: '1PM', activity: 90 },
      { hour: '2PM', activity: 75 },
      { hour: '3PM', activity: 95 },
      { hour: '4PM', activity: 80 },
      { hour: '5PM', activity: 60 },
      { hour: '6PM', activity: 70 },
      { hour: '7PM', activity: 85 },
      { hour: '8PM', activity: 40 },
    ],
    sentimentScore: 8.3,
    engagementRate: 76,
  };

  const recentActivity = [
    { id: 1, user: 'Sarah M.', action: 'joined AI Workshop', time: '2 min ago', type: 'join' },
    { id: 2, user: 'Alex K.', action: 'gave feedback on Career Fair', time: '3 min ago', type: 'feedback' },
    { id: 3, user: 'Jamie L.', action: 'created new event: React Bootcamp', time: '5 min ago', type: 'create' },
    { id: 4, user: 'Morgan T.', action: 'RSVPed to Design Thinking Workshop', time: '7 min ago', type: 'rsvp' },
    { id: 5, user: 'Casey R.', action: 'joined TinkerSphere community', time: '12 min ago', type: 'signup' },
  ];

  const ongoingEvents = [
    {
      id: 1,
      name: 'React Native Workshop',
      attendees: 28,
      capacity: 30,
      location: 'CS Building',
      timeRemaining: '2h 15m',
      engagement: 92,
    },
    {
      id: 2,
      name: 'Startup Pitch Practice',
      attendees: 15,
      capacity: 20,
      location: 'Innovation Lab',
      timeRemaining: '45m',
      engagement: 87,
    },
    {
      id: 3,
      name: 'Community Social Hour',
      attendees: 42,
      capacity: 50,
      location: 'Student Center',
      timeRemaining: '1h 30m',
      engagement: 95,
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'join': return <Users className="w-4 h-4 text-success" />;
      case 'feedback': return <Heart className="w-4 h-4 text-pink-500" />;
      case 'create': return <Zap className="w-4 h-4 text-accent" />;
      case 'rsvp': return <Calendar className="w-4 h-4 text-primary" />;
      case 'signup': return <Star className="w-4 h-4 text-yellow-500" />;
      default: return <Activity className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getHeatmapColor = (activity: number) => {
    if (activity > 80) return 'bg-primary';
    if (activity > 60) return 'bg-accent';
    if (activity > 40) return 'bg-success';
    if (activity > 20) return 'bg-yellow-500';
    return 'bg-muted';
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                <Activity className="inline w-8 h-8 text-primary mr-3" />
                <span className="text-gradient">Pulse of Campus</span>
              </h1>
              <p className="text-muted-foreground">
                Real-time insights into community activity and engagement
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Last updated</p>
              <p className="text-lg font-mono">{currentTime.toLocaleTimeString()}</p>
              <Badge variant="outline" className="mt-1 animate-pulse">
                <div className="w-2 h-2 bg-success rounded-full mr-2" />
                Live
              </Badge>
            </div>
          </div>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{liveStats.activeUsers}</div>
              <p className="text-xs text-muted-foreground">online right now</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ongoing Events</CardTitle>
              <Calendar className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{liveStats.ongoingEvents}</div>
              <p className="text-xs text-muted-foreground">happening now</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Signups</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{liveStats.todaySignups}</div>
              <p className="text-xs text-muted-foreground">new members</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weekly Growth</CardTitle>
              <Globe className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">+{liveStats.weeklyGrowth}%</div>
              <p className="text-xs text-muted-foreground">vs last week</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Activity Heatmap */}
          <Card className="glass-card lg:col-span-2">
            <CardHeader>
              <CardTitle>Activity Heatmap</CardTitle>
              <CardDescription>Community engagement throughout the day</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-12 gap-2">
                {campusPulse.activityHeatmap.map((item, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className={`h-8 rounded ${getHeatmapColor(item.activity)} transition-all duration-300 hover:scale-110`}
                      title={`${item.hour}: ${item.activity}% activity`}
                    />
                    <p className="text-xs text-muted-foreground mt-1">{item.hour}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                <span>Low activity</span>
                <span>High activity</span>
              </div>
            </CardContent>
          </Card>

          {/* Campus Pulse Metrics */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Campus Pulse</CardTitle>
              <CardDescription>Real-time community health</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Sentiment Score</span>
                  <span className="text-2xl font-bold text-success">{campusPulse.sentimentScore}/10</span>
                </div>
                <Progress value={campusPulse.sentimentScore * 10} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Engagement Rate</span>
                  <span className="text-2xl font-bold text-primary">{campusPulse.engagementRate}%</span>
                </div>
                <Progress value={campusPulse.engagementRate} className="h-2" />
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3">Student Diversity</h4>
                <div className="space-y-2">
                  {Object.entries(campusPulse.diversity).map(([field, percentage]) => (
                    <div key={field} className="flex justify-between items-center">
                      <span className="text-xs capitalize">{field}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-muted rounded-full h-2">
                          <div 
                            className="h-2 bg-gradient-primary rounded-full transition-all duration-300"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-xs w-8">{percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Ongoing Events */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Events in Progress</CardTitle>
              <CardDescription>Live tracking of current events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {ongoingEvents.map((event) => (
                  <div key={event.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-foreground">{event.name}</h3>
                      <Badge variant="outline" className="ml-2">
                        {event.timeRemaining} left
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">{event.location}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Attendance: {event.attendees}/{event.capacity}</span>
                        <span>Engagement: {event.engagement}%</span>
                      </div>
                      <Progress value={(event.attendees / event.capacity) * 100} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Real-time Activity Feed */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Live Activity Feed</CardTitle>
              <CardDescription>Recent community actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 custom-scrollbar max-h-64 overflow-y-auto">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors animate-fade-in">
                    {getActivityIcon(activity.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {activity.user}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {activity.action}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LiveDashboard;