
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
      {nextEvent && (
         <section className="text-center">
            <h2 className="text-3xl font-bold mb-2">Don't Miss Out!</h2>
            <p className="text-xl mb-6 text-primary">{nextEvent.name}</p>
            <CountdownTimer targetDate={nextEvent.date} />
        </section>
      )}


      {/* Featured Events Section */}

    </div>
  );
};

export default HomePage;
