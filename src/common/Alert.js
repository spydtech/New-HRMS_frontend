import React from 'react';
import { IoClose } from 'react-icons/io5';

const Alert = ({ 
  type = 'info', 
  message, 
  onClose, 
  className = '',
  showIcon = true 
}) => {
  const alertClasses = {
    success: 'bg-green-50 text-green-800 border-green-200',
    error: 'bg-red-50 text-red-800 border-red-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    info: 'bg-blue-50 text-blue-800 border-blue-200'
  };

  const iconClasses = {
    success: 'text-green-400',
    error: 'text-red-400',
    warning: 'text-yellow-400',
    info: 'text-blue-400'
  };

  const icons = {
    success: '✓',
    error: '✗',
    warning: '⚠',
    info: 'ℹ'
  };

  return (
    <div className={`rounded-lg border p-4 mb-4 ${alertClasses[type]} ${className}`}>
      <div className="flex items-start">
        {showIcon && (
          <div className={`flex-shrink-0 mr-3 text-xl ${iconClasses[type]}`}>
            {icons[type]}
          </div>
        )}
        <div className="flex-1">
          <p className="text-sm font-medium">{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-3 flex-shrink-0 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <IoClose className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;