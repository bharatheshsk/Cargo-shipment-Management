import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import { MOCK_SHIPMENTS } from '../../constants';
import { ShipmentStatus } from '../../types';

const getStatusColor = (status: ShipmentStatus) => {
    switch (status) {
        case ShipmentStatus.DELIVERED: return 'bg-green-200 text-green-700';
        case ShipmentStatus.IN_TRANSIT: return 'bg-blue-200 text-blue-700';
        case ShipmentStatus.OUT_FOR_DELIVERY: return 'bg-indigo-200 text-indigo-700';
        case ShipmentStatus.DISPATCHED: return 'bg-purple-200 text-purple-700';
        case ShipmentStatus.DELAYED: return 'bg-yellow-200 text-yellow-700';
        case ShipmentStatus.CANCELLED: return 'bg-red-200 text-red-700';
        default: return 'bg-gray-200 text-gray-700';
    }
};

const AdminShipments: React.FC = () => {
    const [shipments, setShipments] = useState(MOCK_SHIPMENTS);
    const [statusChanges, setStatusChanges] = useState<{ [key: string]: ShipmentStatus }>({});

    const handleStatusChange = (shipmentId: string, newStatus: ShipmentStatus) => {
        setStatusChanges(prev => ({ ...prev, [shipmentId]: newStatus }));
    };

    const handleUpdateStatus = (shipmentId: string) => {
        const newStatus = statusChanges[shipmentId];
        if (newStatus) {
            setShipments(prevShipments =>
                prevShipments.map(s =>
                    s.id === shipmentId ? { ...s, status: newStatus } : s
                )
            );
            setStatusChanges(prev => {
                const newChanges = { ...prev };
                delete newChanges[shipmentId];
                return newChanges;
            });
        }
    };

    return (
        <Card>
            <h1 className="text-2xl font-bold text-brand-dark mb-4">Manage Shipments</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="w-full bg-brand-secondary text-left text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6">Tracking ID</th>
                            <th className="py-3 px-6">Origin</th>
                            <th className="py-3 px-6">Destination</th>
                            <th className="py-3 px-6">Customer</th>
                            <th className="py-3 px-6">Status</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">
                        {shipments.map((shipment) => (
                            <tr key={shipment.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 font-medium">{shipment.id}</td>
                                <td className="py-3 px-6">{shipment.origin}</td>
                                <td className="py-3 px-6">{shipment.destination}</td>
                                <td className="py-3 px-6">{shipment.customer.name}</td>
                                <td className="py-3 px-6">
                                    <span className={`py-1 px-3 rounded-full text-xs font-semibold ${getStatusColor(shipment.status)}`}>{shipment.status}</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center space-x-2">
                                        <select
                                            value={statusChanges[shipment.id] || shipment.status}
                                            onChange={(e) => handleStatusChange(shipment.id, e.target.value as ShipmentStatus)}
                                            className="form-select block w-40 pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm rounded-md"
                                            aria-label={`Update status for ${shipment.id}`}
                                        >
                                            {Object.values(ShipmentStatus).map(status => (
                                                <option key={status} value={status}>{status}</option>
                                            ))}
                                        </select>
                                        <button
                                            onClick={() => handleUpdateStatus(shipment.id)}
                                            disabled={!statusChanges[shipment.id] || statusChanges[shipment.id] === shipment.status}
                                            className="px-3 py-1 text-xs font-medium text-white bg-brand-accent rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent disabled:bg-gray-400 disabled:cursor-not-allowed"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default AdminShipments;