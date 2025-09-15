
import React from 'react';
// FIX: Corrected the import from 'react-router-dom' to resolve module export errors.
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg> },
  { name: 'Shipments', path: '/admin/shipments', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4h-8v-4l-4-4Z"/><path d="M17 18h-2v-5h2v5Z"/><path d="M12 18h-7v-4h7v4Z"/><circle cx="7.5" cy="10.5" r=".5"/><circle cx="16.5" cy="10.5" r=".5"/></svg> },
  { name: 'Staff', path: '/admin/staff', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>},
  { name: 'Customers', path: '/admin/customers', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { name: 'Inventory', path: '/admin/inventory', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1-1-2-1-3-1-1 0-2 1-3 3a2.5 2.5 0 0 0 2.5 2.5Z"/><path d="M22 12h-4l-3-9L9 12H2"/><path d="m15 15-1 6-1-6"/></svg> },
  { name: 'Billing', path: '/admin/billing', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M12 9v4l2 2"/><path d="M15 2v5h5"/></svg> },
];

const SidebarNavLink: React.FC<{ to: string; icon: React.ReactNode; children: React.ReactNode }> = ({ to, icon, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <Link 
            to={to} 
            className={`flex items-center px-4 py-3 text-gray-200 hover:bg-teal-700 transition-colors rounded-md ${isActive ? 'bg-brand-accent font-bold' : ''}`}
        >
            {icon}
            <span className="ml-3">{children}</span>
        </Link>
    );
}

const AdminSidebar: React.FC = () => {
  return (
    <div className="w-64 bg-brand-dark text-white flex flex-col">
      <div className="h-16 flex items-center justify-center px-6 border-b border-gray-700">
        <h1 className="text-xl font-bold">Cargo<span className="text-brand-accent">Tracker</span></h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map(item => (
            <SidebarNavLink key={item.path} to={item.path} icon={item.icon}>{item.name}</SidebarNavLink>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;