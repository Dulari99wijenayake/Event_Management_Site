
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-light-card dark:bg-dark-card shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Event Horizon
        </Link>
        <ul className="flex space-x-6 items-center">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/events" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
              }
            >
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
