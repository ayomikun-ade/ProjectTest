import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import initialOptions from '../data/dislikesOptions';
import sidebarImage from '../images/pexels-pixabay-414262.jpg';

const Step2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [customOption, setCustomOption] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Load initial options and copy to options state
    setOptions(initialOptions);
  }, []);

  const handleOptionClick = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleCustomOptionAdd = () => {
    const trimmedOption = customOption.trim();
    if (trimmedOption !== '') {
      if (options.includes(trimmedOption)) {
        setSelectedOptions([...selectedOptions, trimmedOption]);
      } else {
        setOptions([...options, trimmedOption]);
        setSelectedOptions([...selectedOptions, trimmedOption]);
      }
      setCustomOption('');
      setShowCustomInput(false);
    }
  };

  const handleCustomInputChange = (e) => {
    setCustomOption(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCustomOptionAdd();
    }
  };

  const handleAddCustomClick = () => {
    setShowCustomInput(true);
  };

  const handleNext = () => {
    if (selectedOptions.length > 0) {
      navigate('/signup/success', { state: { from: location.pathname } });
    } else {
      setErrorMessage('Please select at least one option');
    }
  };

  return (
    <div className="container mx-auto px-4 h-screen overflow-hidden">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-4 h-[70px] px-4">
        <button onClick={() => navigate(-1)} className="text-gray-600 text-3xl">&larr;</button>
        <span className="text-gray-600">2 of 7</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row-reverse h-[calc(100vh-100px)] ">

        {/* Side Image (visible on large devices) */}
        <div className="hidden md:block md:w-1/2 bg-cover bg-center h-100">
          <img src={sidebarImage} alt="LOL" className='h-full w-full object-cover rounded-md' />
        </div>

        {/* Age Group Selection and BMI Inputs */}
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-bold mb-4 montserrat-font-regular">How about your dislikes?</h2>
          <p className="text-gray-600 mb-4">Please select your dislikes:</p>
          <div className="flex flex-wrap">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`rounded-lg py-2 px-4 border ${selectedOptions.includes(option) ? 'bg-blue-500 text-white' : 'border-gray-300'} mr-2 mb-2 capitalize`}
              >
                {option}
              </button>
            ))}
            {showCustomInput ? (
              <>
                <input
                  type="text"
                  value={customOption}
                  onChange={handleCustomInputChange}
                  onKeyDown={handleKeyDown}
                  className="border rounded-lg py-2 px-4 w-full mb-4"
                  placeholder="Custom option..."
                />
                <button onClick={handleCustomOptionAdd} className="bg-blue-500 text-white rounded-lg py-2 px-4 capitalize">Add</button>
              </>
            ) : (
              <button onClick={handleAddCustomClick} className="rounded-lg py-2 px-4 border border-gray-300 mr-2 mb-2 capitalize">Add Custom</button>
            )}
          </div>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          {/* Buttons */}
          <div className="flex justify-end">
            <button onClick={handleNext} className="bg-blue-500 text-white rounded-lg py-2 px-4 capitalize">Next</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Step2;
