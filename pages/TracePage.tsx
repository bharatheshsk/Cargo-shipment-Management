
import React from 'react';
// FIX: Corrected the import from 'react-router-dom' to resolve module export errors.
import { useNavigate } from 'react-router-dom';
import PublicLayout from '../components/PublicLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const TracePage: React.FC = () => {
    const [trackingId, setTrackingId] = React.useState('');
    const navigate = useNavigate();

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
        if (trackingId.trim()) {
            navigate(`/track/${trackingId.trim()}`);
        }
    };

  return (
    <PublicLayout>
      <div className="container mx-auto px-6 py-20 flex justify-center items-center" style={{ minHeight: 'calc(100vh - 200px)'}}>
        <div className="w-full max-w-2xl bg-brand-primary p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-brand-dark text-center mb-2">Track Your Shipment</h1>
          <p className="text-gray-600 text-center mb-8">Enter your tracking ID to get real-time status updates.</p>
          <form onSubmit={handleTrack} className="flex flex-col md:flex-row items-center gap-4">
            <Input 
              type="text" 
              placeholder="e.g., TRK123456789"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" className="w-full md:w-auto">
              Track Now
            </Button>
          </form>
        </div>
      </div>
    </PublicLayout>
  );
};

export default TracePage;