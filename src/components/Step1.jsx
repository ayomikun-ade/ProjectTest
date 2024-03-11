import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Step2 from './Step2';
import sidebarImage from '../images/OIG3rluKbJvTjjoP1anqkgdM.jpg';

function Step1() {
  const navigate = useNavigate();
  const location = useLocation();
  const [ageGroup, setAgeGroup] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showStep2, setShowStep2] = useState(false);

  const handleNext = () => {
    if (ageGroup !== '') {
      navigate('/signup/step2', { state: { from: location.pathname } });
    } else {
      setErrorMessage('Please select an age group');
    }
  };

  const handleSkip = () => {
    navigate('/signup/step2', { state: { from: location.pathname } });
  };

  return (
    <div className="container mx-auto px-4 h-screen overflow-hidden">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-4 h-[70px] px-4">
        <button onClick={() => navigate(-1)} className="text-gray-600 text-3xl">&larr;</button>
        <span className="text-gray-600">1 of 7</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row h-[calc(100vh-100px)] ">
        {/* Side Image (visible on large devices) */}
        <div className="hidden md:block md:w-1/2 bg-cover bg-center h-100">
          <img src={sidebarImage} alt="LOL" className='h-full w-full object-cover rounded-md' />
        </div>

        {/* Age Group Selection and BMI Inputs */}
        <div className="md:w-1/2 md:pl-8">
          {/* Age Group Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 montserrat-font-regular">What's your age range?</h2>
            <p className="text-gray-600 mb-4">Please select the age group that best fits you:</p>
            <div className="flex items-center flex-wrap">
              <button onClick={() => setAgeGroup('18-24')} className={`rounded-lg py-2 px-4 border ${ageGroup === '18-24' ? 'bg-blue-500 text-white' : 'border-gray-300'} mr-2`}>18-24</button>
              <button onClick={() => setAgeGroup('25-36')} className={`rounded-lg py-2 px-4 border ${ageGroup === '25-36' ? 'bg-blue-500 text-white' : 'border-gray-300'} mr-2`}>25-36</button>
              <button onClick={() => setAgeGroup('37-50+')} className={`rounded-lg py-2 px-4 border ${ageGroup === '37-50+' ? 'bg-blue-500 text-white' : 'border-gray-300'} mr-2`}>37-50+</button>
            </div>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          </div>

          {/* BMI Inputs */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 montserrat-font-regular">Interested in knowing your BMI?</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Height (cm)</label>
                <input type="number" className="border rounded-lg py-2 px-4 w-full" />
              </div>
              <div>
                <label className="block mb-2">Weight (kg)</label>
                <input type="number" className="border rounded-lg py-2 px-4 w-full" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end">
            <button onClick={handleSkip} className="bg-gray-300 text-gray-700 rounded-lg py-2 px-4 mr-4">Skip</button>
            <button onClick={handleNext} className="bg-blue-500 text-white rounded-lg py-2 px-4">Next</button>
          </div>
        </div>
      </div>

      {/* Render Step2 component if showStep2 is true */}
      {showStep2 && <Step2 />}
    </div>
  );
}

export default Step1;
