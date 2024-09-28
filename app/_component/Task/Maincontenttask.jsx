"use client";

import React, { useState } from 'react';
import { PencilRuler, FileCheck } from 'lucide-react';
import UploadAssignment from './UploadAssignment';
import UploadQuiz from './UploadQuiz';
import { TopIconsAndCaption } from './TopIconsAndCaption';

const Maincontenttask = () => {
  const [activePage, setActivePage] = useState(''); 
  // Function to set active component
  const handleNavigation = (page) => {
    setActivePage(page); // Update active page based on button click
  };

  return (
    <div className="relative flex-1 bg-[#EBF4F6] shadow-md rounded-lg p-8 mx-6">
      
      <TopIconsAndCaption />

      {activePage === '' && (
        <div className="text-center">
         
          <h1 className="text-3xl font-bold mb-8 text-[#071952]">
            What would you like to upload?
          </h1>

          <div className="flex space-x-8 justify-center">
            <button
              className='flex items-center px-12 py-4 bg-[#071952] text-white rounded-full shadow hover:bg-[#088395] transition duration-200 group text-lg w-[300px]'
              onClick={() => handleNavigation('upload-assignment')} >

              <PencilRuler className="mr-3 text-[#ffffff]" />
              Upload Assignment
            </button>
            <button
              className='flex items-center px-12 py-4 bg-[#071952] text-white rounded-full shadow hover:bg-[#088395] transition duration-200 group text-lg w-[300px]'
              onClick={() => handleNavigation('upload-quiz')} 
            >
              <FileCheck className="mr-3 text-[#ffffff]" />
              Upload Quiz
            </button>
          </div>
        </div>
      )}

      {/* Conditionally render the UploadAssignment component */}
      {activePage === 'upload-assignment' && <UploadAssignment />}

      {/* Conditionally render the UploadQuiz component */}
      {activePage === 'upload-quiz' && <UploadQuiz />}
    </div>
  );
};

export default Maincontenttask;
