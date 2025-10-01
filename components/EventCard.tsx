
import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
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

  return (
    <div className="bg-light-card dark:bg-dark-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      <img className="w-full h-56 object-cover" src={event.imageUrl} alt={event.name} />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-primary">{event.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2 font-semibold">
          {formattedDate} at {formattedTime}
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-4">{event.location}</p>
        <p className="mb-4">{event.description}</p>
        <Link 
          to={`/event/${event.id}`} 
          className="inline-block bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-primary-hover transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
