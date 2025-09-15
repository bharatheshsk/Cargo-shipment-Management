
import React from 'react';
// FIX: Corrected the import from 'react-router-dom' to resolve module export errors.
import { Link } from 'react-router-dom';
import PublicLayout from '../components/PublicLayout';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center text-white" 
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 py-32 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Global Logistics, Simplified</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">Reliable, efficient, and transparent cargo tracking at your fingertips.</p>
          <div className="flex justify-center space-x-4">
            <Link to="/track">
              <Button>Trace Your Shipment</Button>
            </Link>
            <Link to="/book">
              <Button variant="secondary">Book a Shipment</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-brand-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Who We Are</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            CargoTracker is a leading provider of logistics solutions, connecting businesses and people across the globe. With state-of-the-art technology and a commitment to customer satisfaction, we ensure your cargo reaches its destination safely and on time.
          </p>
          <Link to="/about">
            <Button variant="secondary">Learn More</Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-brand-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">Monitor your shipment's journey with live updates and map visualization from start to finish.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Secure Cargo Handling</h3>
              <p className="text-gray-600">We prioritize the safety of your goods with professional handling and secure facilities.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Global Network</h3>
              <p className="text-gray-600">Our extensive network of partners ensures seamless delivery to any corner of the world.</p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default HomePage;