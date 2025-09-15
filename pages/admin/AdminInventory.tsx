
import React from 'react';
import Card from '../../components/ui/Card';
import { MOCK_VEHICLES } from '../../constants';
import { VehicleStatus } from '../../types';

const getStatusColor = (status: VehicleStatus) => {
    switch (status) {
        case VehicleStatus.AVAILABLE: return 'bg-green-200 text-green-700';
        case VehicleStatus.IN_USE: return 'bg-blue-200 text-blue-700';
        case VehicleStatus.MAINTENANCE: return 'bg-yellow-200 text-yellow-700';
        default: return 'bg-gray-200 text-gray-700';
    }
}

const AdminInventory: React.FC = () => {
    return (
        <Card>
            <h1 className="text-2xl font-bold text-brand-dark mb-4">Manage Inventory / Vehicles</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="w-full bg-brand-secondary text-left text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6">Type</th>
                            <th className="py-3 px-6">Registration</th>
                            <th className="py-3 px-6">Capacity (kg)</th>
                            <th className="py-3 px-6">Status</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">
                        {MOCK_VEHICLES.map((vehicle) => (
                            <tr key={vehicle.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 font-medium">{vehicle.type}</td>
                                <td className="py-3 px-6">{vehicle.registration}</td>
                                <td className="py-3 px-6">{vehicle.capacityKg.toLocaleString()}</td>
                                <td className="py-3 px-6">
                                    <span className={`py-1 px-3 rounded-full text-xs ${getStatusColor(vehicle.status)}`}>{vehicle.status}</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center space-x-4">
                                        <button className="text-blue-500 hover:text-blue-700">Edit</button>
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

export default AdminInventory;
