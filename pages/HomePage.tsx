import React from "react";
import { Link } from "react-router-dom";
import { useEvents } from "../hooks/useEvents";
import EventCard from "../components/EventCard";
import CountdownTimer from "../components/CountdownTimer";

const HomePage: React.FC = () => {
  const { events, loading, getNextUpcomingEvent } = useEvents();
  const featuredEvents = events.filter((event) => event.isFeatured).slice(0, 3);
  const nextEvent = getNextUpcomingEvent();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center bg-light-card dark:bg-dark-card py-20 px-6 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">
          Discover Your Next Experience
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Explore a curated list of tech conferences, music festivals, and local
          meetups. Your next adventure awaits.
        </p>
        <Link
          to="/events"
          className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-primary-hover transition-transform transform hover:scale-105"
        >
          Browse All Events
        </Link>
      </section>

      {/* Countdown Section */}
      {nextEvent && (
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-2">Don't Miss Out!</h2>
          <p className="text-xl mb-6 text-primary">{nextEvent.name}</p>
          <CountdownTimer targetDate={nextEvent.date} />
        </section>
      )}

      {/* Featured Events Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Events</h2>
        {loading ? (
          <p className="text-center">Loading featured events...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
