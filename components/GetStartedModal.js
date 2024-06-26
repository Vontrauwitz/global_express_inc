// components/GetStartedModal.js

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const GetStartedModal = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();
  const router = useRouter();

  const handleGetStarted = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  const handleHireClick = () => {
    router.push('/company-form');
    handleClose();
  };

  const handleJobClick = () => {
    router.push('/employee-form');
    handleClose();
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className="text-center mt-8">
      <button
        className="btn-glitch"
        onClick={handleGetStarted}
      >
        Get Started
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div ref={modalRef} className="bg-white p-8 rounded shadow-md text-black w-96">
            <h2 className="text-2xl mb-4">What are you looking for?</h2>
            <div className="flex flex-col items-center space-y-4">
              <button className="btn-glitch-blue" onClick={handleHireClick}>
                I want to hire
              </button>
              <button className="btn-glitch-green" onClick={handleJobClick}>
                I am looking for a job
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetStartedModal;
