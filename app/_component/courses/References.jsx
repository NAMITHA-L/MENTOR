"use client";

import React, { useState } from 'react';

const References = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedType, setSelectedType] = useState('');
  const [referenceName, setReferenceName] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!referenceName || !selectedType || !selectedFile) {
      alert('Please fill out all fields and upload a file before submitting.');
      return;
    }
    alert('Reference submitted successfully!');
  };

  return (
    <div className="flex justify-center items-center h-[550px] bg-gradient-to-r from-[#EBF4F6] to-[#37B7C3] p-2">
      <div className="bg-gradient-to-r from-[#071952] to-[#088395] p-4 rounded-lg shadow-xl max-w-sm w-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
        <h1 className="text-2xl font-bold text-center text-white mb-2 tracking-wide drop-shadow-md">
          Submit Reference
        </h1>
        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Reference Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">Reference Name</label>
            <input
              type="text"
              value={referenceName}
              onChange={(e) => setReferenceName(e.target.value)}
              className="w-full px-2 py-1 rounded-md shadow-sm bg-[#EBF4F6] focus:outline-none focus:ring-2 focus:ring-[#37B7C3] transition-all duration-300"
              placeholder="Enter reference name"
            />
          </div>

          {/* Type Selector */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-2 py-1 rounded-md shadow-sm bg-[#EBF4F6] focus:outline-none focus:ring-2 focus:ring-[#37B7C3] transition-all duration-300"
            >
              <option value="" disabled>Select type</option>
              <option value="flipped-recordings">Flipped Recordings</option>
              <option value="flipped-materials">Flipped Materials</option>
              <option value="reference">Add-On Materials</option>
            </select>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">Upload File</label>
            <div className="flex items-center space-x-2">
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="file-upload"
                className="px-4 py-1 bg-gradient-to-r from-[#071952] to-[#088395] text-white font-medium rounded-md shadow-md cursor-pointer hover:bg-gradient-to-r hover:from-[#088395] hover:to-[#37B7C3] transition-all duration-300"
              >
                Choose File
              </label>
              <span className="text-xs text-gray-300">
                {selectedFile ? selectedFile.name : 'No file chosen'}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-4 py-1 bg-[#071952] text-white font-semibold text-sm rounded-md shadow-lg transition-all duration-300 hover:bg-[#088395] hover:shadow-xl transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default References;
