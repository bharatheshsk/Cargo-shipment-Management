
import React from 'react';
import PublicLayout from '../components/PublicLayout';

const AboutPage: React.FC = () => {
  return (
    <PublicLayout>
      <div className="bg-brand-primary">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-brand-dark text-center mb-4">About CargoTracker</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Pioneering the future of logistics with technology and a commitment to excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div >
              <img src="https://picsum.photos/800/600?random=1" alt="Our Team" className="rounded-lg shadow-lg"/>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                Our mission is to provide seamless, transparent, and reliable logistics services that empower businesses to thrive in a global marketplace. We leverage cutting-edge technology to offer real-time tracking, predictive analytics, and efficient management of the entire supply chain.
              </p>
              <h2 className="text-2xl font-semibold text-brand-dark mb-4">Our Vision</h2>
              <p className="text-gray-700">
                We envision a world where shipping and logistics are no longer a challenge but a streamlined, predictable, and integral part of business success. We strive to be the most customer-centric logistics company, setting new standards for quality and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default AboutPage;
