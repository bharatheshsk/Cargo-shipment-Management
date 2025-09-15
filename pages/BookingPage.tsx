import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import PublicLayout from '../components/PublicLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const BookingPage: React.FC = () => {
    const [bookingDetails, setBookingDetails] = useState({
        cargoType: '',
        weight: '',
        volume: '',
        origin: '',
        destination: '',
        instructions: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [trackingId, setTrackingId] = useState('');
    const [price, setPrice] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBookingDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Generate a mock tracking ID and price
        const newTrackingId = `TRK${Math.floor(100000000 + Math.random() * 900000000)}`;
        setTrackingId(newTrackingId);
        const calculatedPrice = (parseFloat(bookingDetails.weight) || 0) * 2.5 + (parseFloat(bookingDetails.volume) || 0) * 100;
        setPrice(calculatedPrice);
        setSubmitted(true);
    };

    return (
        <PublicLayout>
            <div className="container mx-auto px-6 py-12">
                <Card className="max-w-4xl mx-auto">
                    {!submitted ? (
                        <>
                            <h1 className="text-3xl font-bold text-brand-dark text-center mb-6">Book a New Shipment</h1>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input label="Cargo Type" name="cargoType" value={bookingDetails.cargoType} onChange={handleChange} placeholder="e.g., Electronics" required />
                                    <Input label="Weight (kg)" name="weight" type="number" value={bookingDetails.weight} onChange={handleChange} placeholder="e.g., 500" required />
                                    <Input label="Volume (m³)" name="volume" type="number" value={bookingDetails.volume} onChange={handleChange} placeholder="e.g., 2" required />
                                    <Input label="Origin" name="origin" value={bookingDetails.origin} onChange={handleChange} placeholder="e.g., New York, USA" required />
                                    <Input label="Destination" name="destination" value={bookingDetails.destination} onChange={handleChange} placeholder="e.g., London, UK" required />
                                </div>
                                <div>
                                    <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">Special Instructions</label>
                                    <textarea id="instructions" name="instructions" value={bookingDetails.instructions} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent" placeholder="e.g., Fragile, handle with care."></textarea>
                                </div>
                                <div className="text-center">
                                    <Button type="submit" className="w-full md:w-auto">Confirm Booking</Button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="text-center p-8">
                            <h2 className="text-3xl font-bold text-green-600 mb-4">Booking Confirmed!</h2>
                            <p className="text-gray-700 mb-2">Your shipment has been successfully booked.</p>
                            <p className="text-gray-700 mb-6">Estimated Price: <span className="font-bold text-brand-dark">${price.toFixed(2)}</span></p>
                            <div className="bg-brand-secondary p-4 rounded-md inline-block mb-6">
                                <p className="text-lg">Your Tracking ID is:</p>
                                <p className="text-2xl font-bold text-brand-accent tracking-widest">{trackingId}</p>
                            </div>
                            <div className="flex justify-center my-4">
                               <QRCodeSVG value={trackingId} size={128} />
                            </div>
                            <p className="text-sm text-gray-500">Scan this QR code or use the ID to track your shipment.</p>
                            <Button onClick={() => setSubmitted(false)} className="mt-8">Book Another Shipment</Button>
                        </div>
                    )}
                </Card>
            </div>
        </PublicLayout>
    );
};

export default BookingPage;