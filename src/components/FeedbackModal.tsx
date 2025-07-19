import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare } from 'lucide-react';

interface FeedbackModalProps {
  eventId: string;
  eventTitle: string;
  trigger?: React.ReactNode;
}

const FeedbackModal = ({ eventId, eventTitle, trigger }: FeedbackModalProps) => {
  const [selectedEmoji, setSelectedEmoji] = useState<string>('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emojis = [
    { emoji: '😍', label: 'Loved it!' },
    { emoji: '😊', label: 'Great' },
    { emoji: '😐', label: 'Okay' },
    { emoji: '😕', label: 'Not great' },
    { emoji: '😤', label: 'Disappointed' },
  ];

  const handleSubmit = async () => {
    if (!selectedEmoji) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setSelectedEmoji('');
    setFeedback('');
    setIsSubmitting(false);
    
    // Close modal logic would go here
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm">
            <MessageSquare className="w-4 h-4 mr-2" />
            Give Feedback
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md glass-card">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gradient">
            How was "{eventTitle}"?
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Emoji Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Rate your experience
            </label>
            <div className="flex justify-center space-x-4">
              {emojis.map(({ emoji, label }) => (
                <button
                  key={emoji}
                  onClick={() => setSelectedEmoji(emoji)}
                  className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${
                    selectedEmoji === emoji
                      ? 'bg-primary text-primary-foreground shadow-primary'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                  title={label}
                >
                  <span className="text-2xl">{emoji}</span>
                </button>
              ))}
            </div>
            {selectedEmoji && (
              <p className="text-center text-sm text-muted-foreground animate-fade-in">
                {emojis.find(e => e.emoji === selectedEmoji)?.label}
              </p>
            )}
          </div>

          {/* Text Feedback */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Additional thoughts (optional)
            </label>
            <Textarea
              placeholder="Tell us more about your experience..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={!selectedEmoji || isSubmitting}
            className="w-full bg-gradient-primary hover:opacity-90"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackModal;