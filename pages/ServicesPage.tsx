
import React from 'react';
import PublicLayout from '../components/PublicLayout';
import Card from '../components/ui/Card';

const services = [
  { title: "Ocean Freight", description: "Cost-effective and reliable sea transportation for large shipments." },
  { title: "Air Freight", description: "Fast and secure air cargo solutions for time-sensitive deliveries." },
  { title: "Land Transport", description: "Comprehensive road and rail logistics for domestic and cross-border shipping." },
  { title: "Warehousing", description: "Secure storage and inventory management solutions in our global facilities." },
  { title: "Customs Brokerage", description: "Hassle-free customs clearance to ensure smooth transit of your goods." },
  { title: "Supply Chain Management", description: "End-to-end logistics planning and execution to optimize your supply chain." },
];

const ServicesPage: React.FC = () => {
  return (
    <PublicLayout>
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-brand-dark text-center mb-4">Our Logistics Services</h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We offer a comprehensive suite of services to meet all your shipping and logistics needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <h2 className="text-2xl font-semibold text-brand-accent mb-3">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </PublicLayout>
  );
};

export default ServicesPage;
