
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input
        id={id}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent"
        {...props}
      />
    </div>
  );
};

export default Input;
