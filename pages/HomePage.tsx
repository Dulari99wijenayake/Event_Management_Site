import React from 'react';
import { Link } from 'react-router-dom';
import { useEvents } from '../hooks/useEvents';
import EventCard from '../components/EventCard';
import CountdownTimer from '../components/CountdownTimer';

const HomePage: React.FC = () => {
  const { events, loading } = useEvents();

  // Find the next upcoming event for the countdown
  const nextEvent = events
    .filter(event => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 px-4 text-center rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Event Horizon!</h1>
        <p className="text-xl mb-6">
          Discover, register, and participate in amazing events happening near you.
        </p>
        <Link
          // to="/create-event"
          className="bg-white text-primary font-bold py-3 px-6 rounded-full shadow hover:bg-gray-100 transition-colors duration-300"
        >
          Create Event
        </Link>
      </section>

      {/* Countdown Section */}
      {nextEvent && (
        <section className="flex flex-col items-center py-10 text-center">
          <h2 className="text-3xl font-bold mb-2">Don't Miss Out!</h2>
          <p className="text-xl mb-4 text-primary">{nextEvent.name}</p>
          <CountdownTimer targetDate={nextEvent.date} />
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {nextEvent.location} &mdash; {new Date(nextEvent.date).toLocaleString()}
          </p>
        </section>
      )}

      {/* All Events Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-primary">All Events</h2>
        {loading ? (
          <p>Loading events...</p>
        ) : events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;