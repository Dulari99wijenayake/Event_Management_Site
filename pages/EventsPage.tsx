
import React from 'react';
import { useEvents } from '../hooks/useEvents';
import EventCard from '../components/EventCard';

const EventsPage: React.FC = () => {
  const { events, loading } = useEvents();


};

export default EventsPage;
