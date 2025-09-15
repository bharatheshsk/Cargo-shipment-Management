
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import { MOCK_CUSTOMERS, MOCK_SHIPMENTS, MOCK_INVOICES } from '../../constants';
import { ShipmentStatus, InvoiceStatus } from '../../types';

const getShipmentStatusColor = (status: ShipmentStatus) => {
    switch (status) {
        case ShipmentStatus.DELIVERED: return 'bg-green-200 text-green-700';
        case ShipmentStatus.IN_TRANSIT: return 'bg-blue-200 text-blue-700';
        case ShipmentStatus.DELAYED: return 'bg-yellow-200 text-yellow-700';
        case ShipmentStatus.CANCELLED: return 'bg-red-200 text-red-700';
        default: return 'bg-gray-200 text-gray-700';
    }
};

const getInvoiceStatusColor = (status: InvoiceStatus) => {
    switch (status) {
        case InvoiceStatus.PAID: return 'bg-green-200 text-green-700';
        case InvoiceStatus.UNPAID: return 'bg-yellow-200 text-yellow-700';
        case InvoiceStatus.OVERDUE: return 'bg-red-200 text-red-700';
        default: return 'bg-gray-200 text-gray-700';
    }
};


const CustomerDetailsPage: React.FC = () => {
    const { customerId } = useParams<{ customerId: string }>();
    
    const customer = MOCK_CUSTOMERS.find(c => c.id === customerId);
    const customerShipments = customer ? MOCK_SHIPMENTS.filter(s => s.customer.name === customer.name) : [];
    const customerInvoices = customer ? MOCK_INVOICES.filter(i => i.customerName === customer.name) : [];

    if (!customer) {
        return (
            <div>
                <h1 className="text-2xl font-bold text-brand-dark mb-4">Customer Not Found</h1>
                <Link to="/admin/customers" className="text-brand-accent hover:underline">
                    &larr; Back to Customers List
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-6">
             <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-brand-dark">Customer Details</h1>
                <Link to="/admin/customers" className="text-brand-accent hover:underline">
                    &larr; Back to Customers
                </Link>
            </div>

            <Card>
                <h2 className="text-xl font-semibold text-brand-dark mb-4">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium text-gray-800">{customer.name}</p>
                    </div>
                     <div>
                        <p className="text-sm text-gray-500">Email Address</p>
                        <p className="font-medium text-gray-800">{customer.email}</p>
                    </div>
                     <div>
                        <p className="text-sm text-gray-500">User ID</p>
                        <p className="font-medium text-gray-800">{customer.id}</p>
                    </div>
                     <div>
                        <p className="text-sm text-gray-500">Last Login</p>
                        <p className="font-medium text-gray-800">{customer.lastLogin}</p>
                    </div>
                </div>
            </Card>

            <Card>
                 <h2 className="text-xl font-semibold text-brand-dark mb-4">Shipment History ({customerShipments.length})</h2>
                 <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                             <tr className="w-full bg-brand-secondary text-left text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6">Tracking ID</th>
                                <th className="py-3 px-6">Destination</th>
                                <th className="py-3 px-6">Status</th>
                                <th className="py-3 px-6">Est. Delivery</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm font-light">
                            {customerShipments.length > 0 ? customerShipments.map(shipment => (
                                <tr key={shipment.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 font-medium">{shipment.id}</td>
                                    <td className="py-3 px-6">{shipment.destination}</td>
                                    <td className="py-3 px-6">
                                        <span className={`py-1 px-3 rounded-full text-xs font-semibold ${getShipmentStatusColor(shipment.status)}`}>{shipment.status}</span>
                                    </td>
                                    <td className="py-3 px-6">{shipment.estimatedDelivery}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={4} className="text-center py-4">No shipments found for this customer.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                 </div>
            </Card>

             <Card>
                 <h2 className="text-xl font-semibold text-brand-dark mb-4">Billing History ({customerInvoices.length})</h2>
                 <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                             <tr className="w-full bg-brand-secondary text-left text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6">Invoice ID</th>
                                <th className="py-3 px-6">Amount</th>
                                <th className="py-3 px-6">Due Date</th>
                                <th className="py-3 px-6">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm font-light">
                            {customerInvoices.length > 0 ? customerInvoices.map(invoice => (
                                <tr key={invoice.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 font-medium">{invoice.id}</td>
                                    <td className="py-3 px-6">${invoice.amount.toFixed(2)}</td>
                                    <td className="py-3 px-6">{invoice.dueDate}</td>
                                    <td className="py-3 px-6">
                                        <span className={`py-1 px-3 rounded-full text-xs font-semibold ${getInvoiceStatusColor(invoice.status)}`}>{invoice.status}</span>
                                    </td>
                                </tr>
                            )) : (
                                 <tr>
                                    <td colSpan={4} className="text-center py-4">No invoices found for this customer.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                 </div>
            </Card>
        </div>
    );
};

export default CustomerDetailsPage;
