
import React from 'react';
import Card from '../../components/ui/Card';
import { MOCK_CUSTOMERS } from '../../constants';
import { Link } from 'react-router-dom';

const AdminCustomers: React.FC = () => {
    return (
        <Card>
            <h1 className="text-2xl font-bold text-brand-dark mb-4">Manage Customers</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="w-full bg-brand-secondary text-left text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Last Login</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">
                        {MOCK_CUSTOMERS.map((user) => (
                            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 font-medium">{user.name}</td>
                                <td className="py-3 px-6">{user.email}</td>
                                <td className="py-3 px-6">{user.lastLogin}</td>
                                <td className="py-3 px-6 text-center">
                                    <Link 
                                        to={`/admin/customers/${user.id}`} 
                                        className="text-brand-accent hover:text-teal-700 font-semibold"
                                    >
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default AdminCustomers;