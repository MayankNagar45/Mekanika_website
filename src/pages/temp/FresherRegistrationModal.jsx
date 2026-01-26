import React, { useState, useEffect } from 'react';

const FresherRegistrationModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  // Configuration
  const FORM_START_DATE = new Date('2025-07-25');
  const FORM_DURATION_DAYS = 15;
  const MODAL_DELAY = 10000; // 10 seconds

  useEffect(() => {
    // Check if form should be disabled (after 15 days)
    const currentDate = new Date();
    const formEndDate = new Date(FORM_START_DATE);
    formEndDate.setDate(formEndDate.getDate() + FORM_DURATION_DAYS);
    
    if (currentDate > formEndDate) {
      setIsFormDisabled(true);
      return;
    }

    // Check if user has already interacted with modal today
    const lastInteraction = localStorage.getItem('mekanika_fresher_modal_date');
    const today = new Date().toDateString();
    
    if (lastInteraction === today) {
      return;
    }

    // Show modal after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowModal(true), 100);
    }, MODAL_DELAY);

    return () => clearTimeout(timer);
  }, [FORM_START_DATE]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('mekanika_fresher_modal_date', new Date().toDateString());
    }, 300);
  };

  const handleYesFresher = () => {
    window.open('https://forms.gle/UeVqYZy9UdeegEHN9', '_blank');
    handleClose();
  };

  const handleNoFresher = () => {
    handleClose();
  };

  // Don't render if not visible or form is disabled
  if (!isVisible || isFormDisabled) {
    return null;
  }

  return (
    <>
      {/* Full Page Backdrop */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          showModal ? 'opacity-70' : 'opacity-0'
        }`}
        onClick={handleClose}
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999
        }}
      />
      
      {/* Modal Container - Centered */}
      <div 
        className="fixed z-[10000] flex items-center justify-center p-4"
        style={{ 
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10000
        }}
      >
      
      {/* Compact Modal */}
      <div 
        className={`relative bg-gray-900 border-2 border-yellow-400 rounded-xl shadow-2xl w-96 max-w-sm transform transition-all duration-300 ${
          showModal ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        style={{ 
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 193, 7, 0.3)',
          position: 'relative',
          zIndex: 10001
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-yellow-400 transition-all duration-200 z-10 p-1 rounded-full hover:bg-gray-800"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 rounded-t-xl">
          <div className="flex items-center space-x-3">
            <div className="bg-gray-900 p-2 rounded-full">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Join Mekanika!</h2>
              <p className="text-gray-800 text-sm">Mech Engineering Society</p>
            </div>
          </div>
        </div>

        {/* Compact Content */}
        <div className="p-5 space-y-4">
          {/* Question */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              Are you a First / Second Year Student?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Join our society and become a part of the Mekanika family!
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleYesFresher}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-3 px-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Yes, Register Me!</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
            
            <button
              onClick={handleNoFresher}
              className="w-full bg-gray-800 text-gray-300 font-medium py-3 px-4 rounded-lg border border-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-200"
            >
              No, I'm not a fresher/ sophomore
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-1 -left-1 w-6 h-6 bg-yellow-400/20 rounded-full animate-pulse" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      </div>
    </>
  );
};

export default FresherRegistrationModal;