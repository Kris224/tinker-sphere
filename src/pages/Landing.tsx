import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, BarChart3, Sparkles, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import heroImage from '@/assets/hero-image.jpg';

const Landing = () => {
  // Mock data for trending events
  const trendingEvents = [
    {
      id: '1',
      title: 'AI & Machine Learning Workshop',
      description: 'Hands-on workshop covering the fundamentals of AI and machine learning with practical projects.',
      date: 'Nov 25, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Tech Hub - Room 301',
      category: 'tech',
      attendees: 45,
      maxAttendees: 50,
      isRSVPed: false,
      isPast: false,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
    },
    {
      id: '2', 
      title: 'Community Social Mixer',
      description: 'Join us for an evening of networking, games, and good vibes with fellow students.',
      date: 'Nov 28, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'Student Center Lounge',
      category: 'social',
      attendees: 32,
      maxAttendees: 80,
      isRSVPed: true,
      isPast: false,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop',
    },
    {
      id: '3',
      title: 'Startup Pitch Competition',
      description: 'Present your startup ideas to industry professionals and compete for funding opportunities.',
      date: 'Dec 2, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Innovation Center',
      category: 'academic',
      attendees: 28,
      maxAttendees: 40,
      isRSVPed: false,
      isPast: false,
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop',
    },
  ];

  const handleRSVP = (eventId: string) => {
    console.log('RSVP for event:', eventId);
    // Handle RSVP logic
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden hero-bg">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Students collaborating"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to{' '}
              <span className="text-gradient animate-pulse-glow">TinkerSphere</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The modern platform for student club management, event discovery, and community engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 hover-glow">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore Events
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="glass-card">
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float" />
        <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-success/30 rounded-full animate-float" style={{animationDelay: '2s'}} />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need for{' '}
              <span className="text-gradient">vibrant communities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From event discovery to analytics, TinkerSphere provides all the tools to build and manage thriving student communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-8 hover-lift">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Event Discovery</h3>
              <p className="text-muted-foreground">
                AI-powered recommendations help students find events that match their interests and goals.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 hover-lift">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Building</h3>
              <p className="text-muted-foreground">
                Foster connections and build lasting relationships within your student community.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 hover-lift">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Analytics</h3>
              <p className="text-muted-foreground">
                Get insights into engagement patterns and optimize your events for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Events Section */}
      <section className="py-20 px-4 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                <Zap className="w-8 h-8 text-primary inline mr-3" />
                Trending Events
              </h2>
              <p className="text-muted-foreground">
                Discover what's happening in your community
              </p>
            </div>
            <Link to="/dashboard">
              <Button variant="outline" className="hover-glow">
                View All Events
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onRSVP={handleRSVP}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-2xl p-12">
            <Target className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to join the community?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with like-minded students, discover amazing events, and make the most of your college experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/live">
                <Button size="lg" variant="outline" className="glass-card">
                  Explore Live Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;