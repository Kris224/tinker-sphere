import React, { useState } from 'react';
import { Calendar, TrendingUp, Users, Clock, Filter, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EventCard from '@/components/EventCard';
import FeedbackModal from '@/components/FeedbackModal';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Mock user data
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@university.edu',
    avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face',
    eventsAttended: 12,
    upcomingEvents: 3,
    feedbackPending: 2,
  };

  // Mock events data
  const upcomingEvents = [
    {
      id: '1',
      title: 'React Native Workshop',
      description: 'Learn to build mobile apps with React Native. Hands-on workshop with practical projects.',
      date: 'Nov 25, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'CS Building Room 205',
      category: 'tech',
      attendees: 28,
      maxAttendees: 30,
      isRSVPed: true,
      isPast: false,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
    },
    {
      id: '2',
      title: 'Design Thinking Bootcamp',
      description: 'Intensive bootcamp on design thinking methodologies and user experience design.',
      date: 'Nov 30, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Innovation Lab',
      category: 'academic',
      attendees: 15,
      maxAttendees: 25,
      isRSVPed: false,
      isPast: false,
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=250&fit=crop',
    },
    {
      id: '3',
      title: 'Startup Founders Meetup',
      description: 'Network with fellow entrepreneurs and learn from successful startup founders.',
      date: 'Dec 5, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'Entrepreneurship Center',
      category: 'social',
      attendees: 45,
      maxAttendees: 60,
      isRSVPed: false,
      isPast: false,
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop',
    },
  ];

  const pastEvents = [
    {
      id: '4',
      title: 'Web Development Masterclass',
      description: 'Comprehensive workshop covering modern web development practices and frameworks.',
      date: 'Nov 15, 2024',
      time: '1:00 PM - 6:00 PM',
      location: 'Tech Hub Auditorium',
      category: 'tech',
      attendees: 50,
      maxAttendees: 50,
      isRSVPed: true,
      isPast: true,
      hasGivenFeedback: false,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
    },
    {
      id: '5',
      title: 'Career Fair 2024',
      description: 'Connect with top employers and explore career opportunities in tech.',
      date: 'Nov 10, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Student Center Ballroom',
      category: 'academic',
      attendees: 200,
      maxAttendees: 200,
      isRSVPed: true,
      isPast: true,
      hasGivenFeedback: true,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop',
    },
  ];

  const recommendedEvents = [
    {
      id: '6',
      title: 'Machine Learning Deep Dive',
      description: 'Advanced workshop on neural networks and deep learning algorithms.',
      date: 'Dec 8, 2024',
      time: '3:00 PM - 7:00 PM',
      location: 'AI Research Lab',
      category: 'tech',
      attendees: 12,
      maxAttendees: 20,
      isRSVPed: false,
      isPast: false,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
    },
  ];

  const handleRSVP = (eventId: string) => {
    console.log('RSVP for event:', eventId);
    // Handle RSVP logic
  };

  const categories = ['all', 'tech', 'academic', 'social', 'sports', 'arts'];

  const filteredUpcoming = activeFilter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === activeFilter);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Welcome back, <span className="text-gradient">{user.name}</span>!
              </h1>
              <p className="text-muted-foreground">
                Ready to discover your next amazing experience?
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <img 
                src={user.avatar} 
                alt="User avatar" 
                className="w-12 h-12 rounded-full border-2 border-primary"
              />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card rounded-xl p-6 hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Events Attended</p>
                <p className="text-2xl font-bold text-foreground">{user.eventsAttended}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Upcoming Events</p>
                <p className="text-2xl font-bold text-foreground">{user.upcomingEvents}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Feedback Pending</p>
                <p className="text-2xl font-bold text-foreground">{user.feedbackPending}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
            <TabsTrigger value="upcoming" className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Upcoming</span>
            </TabsTrigger>
            <TabsTrigger value="past" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Past Events</span>
            </TabsTrigger>
            <TabsTrigger value="recommended" className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>For You</span>
            </TabsTrigger>
          </TabsList>

          {/* Upcoming Events */}
          <TabsContent value="upcoming" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Upcoming Events</h2>
              
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={activeFilter === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveFilter(category)}
                      className={activeFilter === category ? "bg-gradient-primary" : ""}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUpcoming.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onRSVP={handleRSVP}
                />
              ))}
            </div>

            {filteredUpcoming.length === 0 && (
              <div className="text-center py-12">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No events found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or check back later for new events.
                </p>
              </div>
            )}
          </TabsContent>

          {/* Past Events */}
          <TabsContent value="past" className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Past Events</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  showFeedback={true}
                />
              ))}
            </div>
          </TabsContent>

          {/* Recommended Events */}
          <TabsContent value="recommended" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Recommended for You</h2>
              <p className="text-muted-foreground">
                Based on your interests and past attendance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedEvents.map((event) => (
                <div key={event.id} className="relative">
                  <Badge className="absolute -top-2 -right-2 z-10 bg-gradient-primary">
                    Recommended
                  </Badge>
                  <EventCard
                    event={event}
                    onRSVP={handleRSVP}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;