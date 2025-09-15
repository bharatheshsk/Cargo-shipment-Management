
import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../../components/ui/Card';
import { MOCK_SHIPMENTS, MOCK_VEHICLES } from '../../constants';
import { ShipmentStatus, VehicleStatus } from '../../types';

const pieData = [
    { name: 'Electronics', value: 400 },
    { name: 'Apparel', value: 300 },
    { name: 'Groceries', value: 300 },
    { name: 'Industrial', value: 200 },
];
const COLORS = ['#008080', '#00C49F', '#FFBB28', '#FF8042'];

const barData = [
    { name: 'Jan', shipments: 400 },
    { name: 'Feb', shipments: 300 },
    { name: 'Mar', shipments: 500 },
    { name: 'Apr', shipments: 280 },
    { name: 'May', shipments: 450 },
    { name: 'Jun', shipments: 320 },
];

const KPICard: React.FC<{ title: string; value: string | number; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <Card className="flex items-center p-4">
        <div className="p-3 mr-4 text-brand-accent bg-teal-100 rounded-full">{icon}</div>
        <div>
            <p className="text-sm text-gray-600 font-medium">{title}</p>
            <p className="text-2xl font-semibold text-brand-dark">{value}</p>
        </div>
    </Card>
);

const AdminDashboard: React.FC = () => {
    const totalShipments = MOCK_SHIPMENTS.length;
    const activeBookings = MOCK_SHIPMENTS.filter(s => s.status !== ShipmentStatus.DELIVERED && s.status !== ShipmentStatus.CANCELLED).length;
    const fleetUsage = ((MOCK_VEHICLES.filter(v => v.status === VehicleStatus.IN_USE).length / MOCK_VEHICLES.length) * 100).toFixed(0) + '%';
    const onTimeDelivery = '98.5%';

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-brand-dark">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard title="Total Shipments" value={totalShipments} icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/></svg>} />
                <KPICard title="Active Bookings" value={activeBookings} icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/></svg>} />
                <KPICard title="On-Time Delivery" value={onTimeDelivery} icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><polyline points="20 6 9 17 4 12"/></svg>} />
                <KPICard title="Fleet Usage" value={fleetUsage} icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1-1-2-1-3-1-1 0-2 1-3 3a2.5 2.5 0 0 0 2.5 2.5Z"/></svg>} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <Card className="lg:col-span-3">
                    <h2 className="text-xl font-semibold text-brand-dark mb-4">Monthly Shipments</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={barData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="shipments" fill="#008080" />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
                <Card className="lg:col-span-2">
                    <h2 className="text-xl font-semibold text-brand-dark mb-4">Cargo Types</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie data={pieData} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value">
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </Card>
            </div>
        </div>
    );
};

export default AdminDashboard;
