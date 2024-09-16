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
    // Handle the form submission logic here
    alert('Reference submitted successfully!');
  };

  return (
    <div className="flex justify-center items-center bg-[#f8e4d9] p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Submit Reference</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Reference Name</label>
            <input
              type="text"
              value={referenceName}
              onChange={(e) => setReferenceName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter reference name"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="" disabled>Select type</option>
              <option value="flipped-recordings">Flipped Recordings</option>
              <option value="flipped-materials">Flipped Materials</option>
              <option value="reference">Add-On Materials</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Upload File</label>
            <div className="flex items-center space-x-3">
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="file-upload"
                className="px-6 py-3 bg-gray-400 text-white rounded-lg shadow-md cursor-pointer hover:bg-gray-500 transition duration-300"
              >
                Choose File
              </label>
              <span className="text-sm text-gray-500">{selectedFile ? selectedFile.name : 'No file chosen'}</span>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full px-4 py-3 bg-[#1F316F] text-white rounded-lg shadow-md hover:bg-[#1A4870] transition duration-300"
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
