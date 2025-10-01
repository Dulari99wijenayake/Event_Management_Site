
import React from 'react';
import { Link } from 'react-router-dom';
import { useEvents } from '../hooks/useEvents';
import EventCard from '../components/EventCard';
import CountdownTimer from '../components/CountdownTimer';

const HomePage: React.FC = () => {
  const { events, loading, getNextUpcomingEvent } = useEvents();
  const featuredEvents = events.filter(event => event.isFeatured).slice(0, 3);
  const nextEvent = getNextUpcomingEvent();

  return (
    <div className="space-y-16">
      {/* Hero Section */}


      {/* Countdown Section */}


      {/* Featured Events Section */}

    </div>
  );
};

export default HomePage;
