
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
return (
    <>
      <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-xl overflow-hidden">
        <img className="w-full h-64 md:h-96 object-cover" src={event.imageUrl} alt={event.name} />
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">{event.name}</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-lg text-gray-600 dark:text-gray-300">
            <span className="font-semibold">📅 {formattedDate}</span>
            <span className="font-semibold">🕒 {formattedTime}</span>
            <span className="font-semibold">📍 {event.location}</span>
          </div>
          <p className="text-lg leading-relaxed whitespace-pre-line">
            {event.longDescription}
          </p>
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowRegistration(true)}
              className="bg-secondary text-white font-bold py-4 px-10 text-xl rounded-full hover:bg-green-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
            >
              Register for this Event
            </button>
          </div>
        </div>
      </div>
      {showRegistration && (
        <RegistrationForm 
          eventId={event.id} 
          eventName={event.name}
          onClose={() => setShowRegistration(false)} 
        />
      )}
    </>
  )

};

export default EventDetailPage;
