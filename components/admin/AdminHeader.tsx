
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

const AdminHeader: React.FC = () => {
  const { logout } = useAuth();

  return (
    <header className="bg-brand-primary shadow-sm z-10">
      <div className="flex items-center justify-end h-16 px-6">
        <div className="flex items-center space-x-4">
           <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-gray-500"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span className="text-brand-dark font-medium">Admin</span>
          </div>
          <button
            onClick={logout}
            className="flex items-center space-x-2 text-red-500 hover:text-red-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
