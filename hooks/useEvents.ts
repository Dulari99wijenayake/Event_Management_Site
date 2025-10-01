import { useState, useEffect } from 'react';
import { Event } from '../types';

const getFutureDate = (days: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  date.setHours(19, 0, 0, 0); // Set time to 7 PM
  return date.toISOString();
};

const mockEvents: Event[] = [
  {
    id: '1',
    name: 'React Conference 2025',
    date: getFutureDate(10),
    location: 'Virtual',
    description: 'The biggest React conference of the year. Join us online!',
    longDescription: 'Dive deep into the latest features of React, explore advanced state management techniques with hooks and context, and learn from industry experts. This conference will feature talks, workshops, and networking sessions for all skill levels.',
    imageUrl: 'https://picsum.photos/seed/reactconf/1200/800',
    isFeatured: true,
  },
  // id 2
  
  {
    id: '2',
    name: 'Tech Innovators Summit',
    date: getFutureDate(25),
    location: 'San Francisco, CA',
    description: 'A summit for the brightest minds in technology and innovation.',
    longDescription: 'Join visionaries, developers, and entrepreneurs at the Tech Innovators Summit. Discuss the future of AI, blockchain, and sustainable tech. Keynote speakers include leaders from top tech companies.',
    imageUrl: 'https://picsum.photos/seed/techsummit/1200/800',
    isFeatured: true,
  },

    //id 3

  {
    id: '4',
    name: 'Design Thinking Workshop',
    date: getFutureDate(60),
    location: 'Innovation Hub',
    description: 'A hands-on workshop on the principles of design thinking.',
    longDescription: 'Unlock your creative potential in this interactive workshop. Learn the five stages of design thinking—Empathize, Define, Ideate, Prototype, and Test—and apply them to solve real-world problems. No prior experience needed.',
    imageUrl: 'https://picsum.photos/seed/designws/1200/800',
    isFeatured: false,
  },
    {
    id: '5',
    name: 'Startup Pitch Night',
    date: getFutureDate(75),
    location: 'Co-work Space, Metro Area',
    description: 'Watch the next generation of startups pitch their ideas.',
    longDescription: 'Be in the room where it happens! Local entrepreneurs will pitch their game-changing ideas to a panel of venture capitalists and angel investors. Network with founders and find your next big investment or partnership.',
    imageUrl: 'https://picsum.photos/seed/pitchnight/1200/800',
    isFeatured: true,
  },
];

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getEventById = (id: string): Event | undefined => {
    return events.find(event => event.id === id);
  };
  
  const getNextUpcomingEvent = (): Event | undefined => {
    const sortedEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return sortedEvents[0];
  }

  return { events, loading, getEventById, getNextUpcomingEvent };
};