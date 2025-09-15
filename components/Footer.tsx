
import React from 'react';
// FIX: Corrected the import from 'react-router-dom' to resolve module export errors.
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cargo<span className="text-brand-accent">Tracker</span></h3>
            <p className="text-gray-400">Your reliable partner in global logistics. We deliver with care and precision.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link></li>
              <li><Link to="/track" className="hover:text-brand-accent transition-colors">Track Shipment</Link></li>
              <li><Link to="/book" className="hover:text-brand-accent transition-colors">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@cargotracker.com</li>
              <li>Phone: +1 (234) 567-890</li>
              <li>Address: 123 Logistics Ave, Global City</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-accent transition-colors">Facebook</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Twitter</a>
              <a href="#" className="hover:text-brand-accent transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} CargoTracker. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;