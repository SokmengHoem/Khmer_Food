import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md mx-auto grid gap-6 text-center">
        <div className="grid gap-4">
          <div className="mx-auto">
            <svg className="w-20 h-20 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 10.001 20.001A10 10 0 0012 2zm-.293 5.293l1.414 1.414L12 10.828l-1.12-1.12 1.414-1.414L12 7.172zm0 7.414l1.414 1.414L12 15.828l-1.12-1.12 1.414-1.414L12 14.586zm0-3.414l1.414 1.414L12 12.414l-1.12-1.12 1.414-1.414L12 11.172z"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-blue-600">404</h1>
          <p className="text-gray-600">Page Not Found</p>
          <p className="text-gray-500">We're sorry, the page you requested could not be found. Please go back to the homepage.</p>
        </div>
        <div>
          <Link to="/" className="inline-block bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-200 hover:text-black hover:bg-slate-50 hover:font-bold">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};
