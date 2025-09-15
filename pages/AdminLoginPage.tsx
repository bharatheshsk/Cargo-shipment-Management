
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const AdminLoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = login(username, password);
    if (!success) {
      setError('Invalid username or password. (Hint: admin/admin)');
    }
  };

  return (
    <div className="min-h-screen bg-brand-secondary flex items-center justify-center">
      <div className="w-full max-w-md bg-brand-primary p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-brand-dark">Admin Login</h1>
          <p className="text-gray-500">Welcome to the CargoTracker Dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input 
            label="Username" 
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input 
            label="Password" 
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
