
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useEvents } from '../hooks/useEvents';
import { Event } from '../types';
import RegistrationForm from '../components/RegistrationForm';

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getEventById } = useEvents();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    if(id) {
        const foundEvent = getEventById(id);
        // In a real app, you'd fetch this from an API
        // For now, we rely on the hook which might need a moment to "load"
        if(foundEvent) {
             setEvent(foundEvent);
             setLoading(false);
        } else {
            // A simple retry mechanism in case the hook data isn't ready
            const timer = setTimeout(() => {
                 const retryEvent = getEventById(id);
                 if(retryEvent) setEvent(retryEvent);
                 setLoading(false);
            }, 600); // after the hook's simulated delay
            return () => clearTimeout(timer);
        }
    }
  }, [id, getEventById]);

  if (loading) {
    return <p className="text-center text-xl mt-10">Loading event details...</p>;
  }

  if (!event) {
    return <p className="text-center text-xl mt-10 text-red-500">Event not found.</p>;
  }
  
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = eventDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
  });

// add return

};

export default EventDetailPage;
