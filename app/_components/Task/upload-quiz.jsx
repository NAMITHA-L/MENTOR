"use client";

import React, { useState } from 'react';

const UploadQuiz = () => {
  const [quizName, setQuizName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!quizName || !selectedFile) {
      alert('Please provide a quiz name and upload a file before submitting.');
      return;
    }
   
    alert('Quiz submitted successfully!');
  };

  return (
    <div className="flex justify-center items-start min-h-screen p-6 bg-[#f8e4d9]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-xl font-bold text-center text-gray-700 mb-4">Upload Quiz</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">Quiz Name</label>
            <input
              type="text"
              name="quizName"
              value={quizName}
              onChange={(e) => setQuizName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter quiz name"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">Upload File</label>
            <div className="flex items-center space-x-2">
              <input
                type="file"
                name="quizFile"
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

export default UploadQuiz;
