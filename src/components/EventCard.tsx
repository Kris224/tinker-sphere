import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import FeedbackModal from './FeedbackModal';

interface EventCardProps {
  event: {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    category: string;
    attendees: number;
    maxAttendees: number;
    isRSVPed: boolean;
    isPast: boolean;
    hasGivenFeedback?: boolean;
    image?: string;
  };
  showFeedback?: boolean;
  onRSVP?: (eventId: string) => void;
}

const EventCard = ({ event, showFeedback = false, onRSVP }: EventCardProps) => {
  const {
    id,
    title,
    description,
    date,
    time,
    location,
    category,
    attendees,
    maxAttendees,
    isRSVPed,
    isPast,
    hasGivenFeedback,
    image,
  } = event;

  const categoryColors = {
    tech: 'bg-accent text-accent-foreground',
    social: 'bg-success text-success-foreground',
    academic: 'bg-primary text-primary-foreground',
    sports: 'bg-destructive text-destructive-foreground',
    arts: 'bg-secondary text-secondary-foreground',
  };

  return (
    <div className="glass-card rounded-xl p-6 hover-lift group">
      {/* Event Image */}
      {image && (
        <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Event Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
            {title}
          </h3>
          <Badge className={categoryColors[category as keyof typeof categoryColors] || categoryColors.tech}>
            {category}
          </Badge>
        </div>
      </div>

      {/* Event Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2 text-primary" />
          <span>{date}</span>
          <Clock className="w-4 h-4 ml-4 mr-2 text-primary" />
          <span>{time}</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2 text-primary" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="w-4 h-4 mr-2 text-primary" />
          <span>{attendees}/{maxAttendees} attendees</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {description}
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-muted rounded-full h-2 mb-4">
        <div
          className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${(attendees / maxAttendees) * 100}%` }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        {!isPast ? (
          <Button
            onClick={() => onRSVP?.(id)}
            variant={isRSVPed ? "secondary" : "default"}
            size="sm"
            className={!isRSVPed ? "bg-gradient-primary hover:opacity-90" : ""}
          >
            {isRSVPed ? 'RSVP\'d' : 'Join Event'}
          </Button>
        ) : (
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">Past Event</Badge>
            {showFeedback && !hasGivenFeedback && (
              <FeedbackModal eventId={id} eventTitle={title} />
            )}
            {hasGivenFeedback && (
              <Badge className="bg-success text-success-foreground">
                Feedback Given
              </Badge>
            )}
          </div>
        )}
        
        <span className="text-xs text-muted-foreground">
          {attendees < maxAttendees ? 
            `${maxAttendees - attendees} spots left` : 
            'Fully booked'
          }
        </span>
      </div>
    </div>
  );
};

export default EventCard;