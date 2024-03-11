import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-green-500 text-6xl mb-4">
        <FontAwesomeIcon icon={faCheckCircle} />
      </div>
      <h1 className="text-3xl font-semibold mb-4">Success!</h1>
      <p className="text-gray-600 text-lg">Signup Successful.</p>
      <Link to="/" className="text-blue-500 mt-4 font-semibold underlin underline-offset-2">Go home</Link>
    </div>
  );
}

export default SuccessPage;
