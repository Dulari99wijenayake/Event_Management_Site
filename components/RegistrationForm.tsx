
import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Registration } from '../types';

interface RegistrationFormProps {
  eventId: string;
  eventName: string;
  onClose: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ eventId, eventName, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrations, setRegistrations] = useLocalStorage<Registration[]>(`registrations-${eventId}`, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    const newRegistration: Registration = {
      name,
      email,
      registeredAt: new Date().toISOString(),
    };
    
    setRegistrations([...registrations, newRegistration]);
    setIsSubmitted(true);
    setError('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-light-card dark:bg-dark-card rounded-lg p-8 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold hover:text-primary">&times;</button>
        
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-secondary mb-4">Registration Successful!</h2>
            <p className="mb-4">Thank you, {name}, for registering for {eventName}.</p>
            <p>A confirmation has been sent to {email}.</p>
            <button onClick={onClose} className="mt-6 bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-primary-hover transition-colors">Close</button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-2">Register for</h2>
            <h3 className="text-xl text-primary mb-6">{eventName}</h3>
            {error && <p className="bg-red-500/20 text-red-500 p-3 rounded-md mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent focus:ring-2 focus:ring-primary focus:outline-none"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent focus:ring-2 focus:ring-primary focus:outline-none"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-4 rounded-full hover:bg-primary-hover transition-colors">
                Register Now
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
