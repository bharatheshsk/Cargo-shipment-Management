
import React from 'react';
// FIX: Corrected the import from 'react-router-dom' to resolve module export errors.
import { Link, useLocation } from 'react-router-dom';
import { Truck } from 'lucide-react';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <Link 
            to={to} 
            className={`text-brand-dark hover:text-brand-accent transition-colors ${isActive ? 'font-bold text-brand-accent' : ''}`}
        >
            {children}
        </Link>
    );
}

const Navbar: React.FC = () => {
  return (
    <header className="bg-brand-primary shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent h-8 w-8"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4h-8v-4l-4-4Z"/><path d="M17 18h-2v-5h2v5Z"/><path d="M12 18h-7v-4h7v4Z"/><circle cx="7.5" cy="10.5" r=".5"/><circle cx="16.5" cy="10.5" r=".5"/></svg>
          <span className="text-2xl font-bold text-brand-dark">Cargo<span className="text-brand-accent">Tracker</span></span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink to="/services">SERVICES</NavLink>
          <NavLink to="/track">TRACE & TRACK</NavLink>
          <NavLink to="/book">BOOK SHIPMENT</NavLink>
        </div>
        <Link to="/admin">
          <button className="hidden md:block bg-brand-accent text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors">
            ADMIN LOGIN
          </button>
        </Link>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;