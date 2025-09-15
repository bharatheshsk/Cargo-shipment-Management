
import React from 'react';
import Card from '../../components/ui/Card';
import { MOCK_INVOICES } from '../../constants';
import { InvoiceStatus } from '../../types';

const getStatusColor = (status: InvoiceStatus) => {
    switch (status) {
        case InvoiceStatus.PAID: return 'bg-green-200 text-green-700';
        case InvoiceStatus.UNPAID: return 'bg-yellow-200 text-yellow-700';
        case InvoiceStatus.OVERDUE: return 'bg-red-200 text-red-700';
        default: return 'bg-gray-200 text-gray-700';
    }
}

const AdminBilling: React.FC = () => {
    return (
        <Card>
            <h1 className="text-2xl font-bold text-brand-dark mb-4">Billing & Invoices</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="w-full bg-brand-secondary text-left text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6">Invoice ID</th>
                            <th className="py-3 px-6">Shipment ID</th>
                            <th className="py-3 px-6">Customer</th>
                            <th className="py-3 px-6">Amount</th>
                            <th className="py-3 px-6">Due Date</th>
                            <th className="py-3 px-6">Status</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">
                        {MOCK_INVOICES.map((invoice) => (
                            <tr key={invoice.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 font-medium">{invoice.id}</td>
                                <td className="py-3 px-6">{invoice.shipmentId}</td>
                                <td className="py-3 px-6">{invoice.customerName}</td>
                                <td className="py-3 px-6">${invoice.amount.toFixed(2)}</td>
                                <td className="py-3 px-6">{invoice.dueDate}</td>
                                <td className="py-3 px-6">
                                     <span className={`py-1 px-3 rounded-full text-xs ${getStatusColor(invoice.status)}`}>{invoice.status}</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center space-x-4">
                                        <button className="text-blue-500 hover:text-blue-700">View PDF</button>
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

export default AdminBilling;
