import React, { useState, useEffect } from 'react';
// FIX: Corrected the import from 'react-router-dom' to resolve module export errors.
import { useParams } from 'react-router-dom';
import PublicLayout from '../components/PublicLayout';
import { MOCK_SHIPMENTS } from '../constants';
import { Shipment, ShipmentStatus } from '../types';
import { getDeliveryPrediction, getWeatherAlert } from '../services/geminiService';
import Card from '../components/ui/Card';

// Helper to determine icon based on status
const StatusIcon: React.FC<{ status: ShipmentStatus }> = ({ status }) => {
    const iconClasses = "h-8 w-8 text-brand-accent";
    switch (status) {
        case ShipmentStatus.BOOKED: return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}><path d="M20 18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2Z"/><path d="m9.5 14.5 3-3-3-3"/></svg>;
        case ShipmentStatus.DISPATCHED: return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4h-8v-4l-4-4Z"/></svg>;
        case ShipmentStatus.IN_TRANSIT: return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>;
        case ShipmentStatus.DELIVERED: return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}><polyline points="20 6 9 17 4 12"/></svg>;
        default: return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClasses}><circle cx="12" cy="12" r="10"/></svg>;
    }
};


const TrackingResultPage: React.FC = () => {
  const { trackingId } = useParams<{ trackingId: string }>();
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [eta, setEta] = useState<string>('Loading prediction...');
  const [weather, setWeather] = useState<string>('Loading weather...');

  useEffect(() => {
    const foundShipment = MOCK_SHIPMENTS.find(s => s.id === trackingId) || null;
    setShipment(foundShipment);

    if (foundShipment) {
      getDeliveryPrediction(foundShipment).then(setEta);
      getWeatherAlert(foundShipment.origin, foundShipment.destination, foundShipment.currentLocation).then(setWeather);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackingId]);

  if (!shipment) {
    return (
      <PublicLayout>
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold">Shipment Not Found</h1>
          <p>The tracking ID "{trackingId}" does not match any of our records.</p>
        </div>
      </PublicLayout>
    );
  }

  const statusFlow = [ShipmentStatus.BOOKED, ShipmentStatus.DISPATCHED, ShipmentStatus.IN_TRANSIT, ShipmentStatus.AT_HUB, ShipmentStatus.OUT_FOR_DELIVERY, ShipmentStatus.DELIVERED];
  const currentStatusIndex = statusFlow.indexOf(shipment.status);

  return (
    <PublicLayout>
      <div className="container mx-auto px-6 py-12">
        <Card className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-brand-dark">Tracking ID: {shipment.id}</h1>
              <p className="text-lg text-brand-accent font-semibold">{shipment.status}</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
                <p className="text-gray-600">From: <span className="font-medium text-brand-dark">{shipment.origin}</span></p>
                <p className="text-gray-600">To: <span className="font-medium text-brand-dark">{shipment.destination}</span></p>
            </div>
          </div>
        </Card>

        {/* Status Progress Bar */}
        <Card className="mb-8">
            <h2 className="text-xl font-semibold mb-6 text-center">Shipment Progress</h2>
            <div className="flex justify-between items-center">
                {statusFlow.map((status, index) => (
                    <React.Fragment key={status}>
                        <div className="flex flex-col items-center text-center">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${index <= currentStatusIndex ? 'bg-brand-accent' : 'bg-gray-300'}`}>
                                <StatusIcon status={status} />
                            </div>
                            <p className={`mt-2 text-xs md:text-sm font-medium ${index <= currentStatusIndex ? 'text-brand-accent' : 'text-gray-500'}`}>{status}</p>
                        </div>
                        {index < statusFlow.length - 1 && (
                            <div className={`flex-1 h-1 mx-2 ${index < currentStatusIndex ? 'bg-brand-accent' : 'bg-gray-300'}`}></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipment History & AI Panels */}
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <h2 className="text-xl font-semibold mb-4 text-brand-dark">AI: Delivery Prediction</h2>
              <p className="text-gray-700">{eta}</p>
            </Card>
            <Card>
              <h2 className="text-xl font-semibold mb-4 text-brand-dark">AI: Weather Alert</h2>
              <p className="text-gray-700">{weather}</p>
            </Card>
            <Card>
              <h2 className="text-xl font-semibold mb-4 text-brand-dark">Shipment History</h2>
              <ul className="space-y-4">
                {shipment.history.map((event, index) => (
                  <li key={index} className="border-l-2 border-brand-accent pl-4">
                    <p className="font-semibold text-brand-dark">{event.status} at {event.location}</p>
                    <p className="text-sm text-gray-500">{new Date(event.timestamp).toLocaleString()}</p>
                    <p className="text-sm text-gray-600">{event.notes}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-xl font-semibold mb-4 text-brand-dark">Live Map</h2>
              <div className="bg-gray-200 h-96 rounded-md relative overflow-hidden text-white">
                {/* 
                  This is a placeholder for a live map integration.
                  In a real-world application, you would use a library like
                  Google Maps React, Leaflet, or Mapbox GL JS to display
                  the shipment's route and current location dynamically.
                  This would require an API key and additional setup.
                */}
                <img 
                    src="https://images.unsplash.com/photo-1564042121642-1e00ca385a42?q=80&w=1200&auto=format&fit=crop" 
                    alt="Map showing shipment route placeholder" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <p className="mt-2 font-semibold text-lg">Live Map Placeholder</p>
                    <p className="text-sm text-gray-300">A real map requires integration with a map service provider.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default TrackingResultPage;