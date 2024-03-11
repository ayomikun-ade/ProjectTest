import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

// Import Tailwind CSS here
import 'tailwindcss/tailwind.css'; // or the path to your tailwind.css file

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-yellow-500 text-6xl mb-4">
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </div>
      <h1 className="text-3xl font-semibold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 text-lg">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 mt-4 underline">Go Home</Link>
    </div>
  );
}

export default PageNotFound;
