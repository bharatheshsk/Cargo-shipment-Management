
import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { MOCK_STAFF } from '../../constants';

const StaffManagement: React.FC = () => {
    return (
        <Card>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-brand-dark">Manage Staff</h1>
                <Button>Add New Staff</Button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="w-full bg-brand-secondary text-left text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Role</th>
                            <th className="py-3 px-6">Last Login</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">
                        {MOCK_STAFF.map((user) => (
                            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 font-medium">{user.name}</td>
                                <td className="py-3 px-6">{user.email}</td>
                                <td className="py-3 px-6">{user.role}</td>
                                <td className="py-3 px-6">{user.lastLogin}</td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center space-x-4">
                                        <button className="text-blue-500 hover:text-blue-700">Edit</button>
                                        <button className="text-red-500 hover:text-red-700">Delete</button>
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

export default StaffManagement;
