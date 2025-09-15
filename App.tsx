
import React from 'react';
// FIX: Corrected the import from 'react-router-dom' to resolve module export errors.
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Import Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TracePage from './pages/TracePage';
import TrackingResultPage from './pages/TrackingResultPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminShipments from './pages/admin/AdminShipments';
import AdminCustomers from './pages/admin/AdminCustomers';
import AdminInventory from './pages/admin/AdminInventory';
import AdminBilling from './pages/admin/AdminBilling';
import BookingPage from './pages/BookingPage';
import StaffManagement from './pages/admin/StaffManagement';
import CustomerDetailsPage from './pages/admin/CustomerDetailsPage';

// Protected Route Wrapper
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin" />;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/track" element={<TracePage />} />
          <Route path="/track/:trackingId" element={<TrackingResultPage />} />
          <Route path="/book" element={<BookingPage />} />
          
          {/* Admin Login */}
          <Route path="/admin" element={<AdminLoginPage />} />

          {/* Protected Admin Routes */}
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminLayout><AdminDashboard /></AdminLayout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/shipments" 
            element={
              <ProtectedRoute>
                <AdminLayout><AdminShipments /></AdminLayout>
              </ProtectedRoute>
            } 
          />
           <Route 
            path="/admin/staff" 
            element={
              <ProtectedRoute>
                <AdminLayout><StaffManagement /></AdminLayout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/customers" 
            element={
              <ProtectedRoute>
                <AdminLayout><AdminCustomers /></AdminLayout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/customers/:customerId" 
            element={
              <ProtectedRoute>
                <AdminLayout><CustomerDetailsPage /></AdminLayout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/inventory" 
            element={
              <ProtectedRoute>
                <AdminLayout><AdminInventory /></AdminLayout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/billing" 
            element={
              <ProtectedRoute>
                <AdminLayout><AdminBilling /></AdminLayout>
              </ProtectedRoute>
            } 
          />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
};

export default App;