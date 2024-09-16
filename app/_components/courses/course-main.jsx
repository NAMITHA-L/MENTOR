"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; 

const CourseMain = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path); 
  };

  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      <div
        className="bg-[#1F316F] border-8 border-[#f8e4d9] p-8 rounded-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-64 w-64 flex flex-col justify-center items-center"
        onClick={() => handleNavigation('/html-course')}
      >
        <h3 className="font-bold text-[#f8e4d9] text-center">HTML COURSE</h3>
        <p className="text-[#f8e4d9] mt-4 text-center">Students Enrolled: 0</p>
        <p className="text-[#f8e4d9] mt-2 text-center">Total Completed: 0</p>
      </div>
      <div
        className="bg-[#1F316F] border-8 border-[#f8e4d9] p-8 rounded-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-64 w-64 flex flex-col justify-center items-center"
        onClick={() => handleNavigation('/css-course')}
      >
        <h3 className="font-bold text-[#f8e4d9] text-center">CSS COURSE</h3>
        <p className="text-[#f8e4d9] mt-4 text-center">Students Enrolled: 0</p>
        <p className="text-[#f8e4d9] mt-2 text-center">Total Completed: 0</p>
      </div>
      <div
        className="bg-[#1F316F] border-8 border-[#f8e4d9] p-8 rounded-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-64 w-64 flex flex-col justify-center items-center"
        onClick={() => handleNavigation('/python')}
      >
        <h3 className="font-bold text-[#f8e4d9] text-center">PYTHON</h3>
        <p className="text-[#f8e4d9] mt-4 text-center">Students Enrolled: 0</p>
        <p className="text-[#f8e4d9] mt-2 text-center">Total Completed: 0</p>
      </div>
      <div
        className="bg-[#1F316F] border-8 border-[#f8e4d9] p-8 rounded-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-64 w-64 flex flex-col justify-center items-center"
        onClick={() => handleNavigation('/oops')}
      >
        <h3 className="font-bold text-[#f8e4d9] text-center">OOPS</h3>
        <p className="text-[#f8e4d9] mt-4 text-center">Students Enrolled: 0</p>
        <p className="text-[#f8e4d9] mt-2 text-center">Total Completed: 0</p>
      </div>
      <div
        className="bg-[#1F316F] border-8 border-[#f8e4d9] p-8 rounded-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-64 w-64 flex flex-col justify-center items-center"
        onClick={() => handleNavigation('/maths')}
      >
        <h3 className="font-bold text-[#f8e4d9] text-center">MATHS</h3>
        <p className="text-[#f8e4d9] mt-4 text-center">Students Enrolled: 0</p>
        <p className="text-[#f8e4d9] mt-2 text-center">Total Completed: 0</p>
      </div>
      <div
        className="bg-[#1F316F] border-8 border-[#f8e4d9] p-8 rounded-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-64 w-64 flex flex-col justify-center items-center"
        onClick={() => handleNavigation('/chemistry')}
      >
        <h3 className="font-bold text-[#f8e4d9] text-center">CHEMISTRY</h3>
        <p className="text-[#f8e4d9] mt-4 text-center">Students Enrolled: 0</p>
        <p className="text-[#f8e4d9] mt-2 text-center">Total Completed: 0</p>
      </div>
      <div
        className="bg-[#1F316F] border-8 border-[#f8e4d9] p-8 rounded-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-64 w-64 flex flex-col justify-center items-center"
        onClick={() => handleNavigation('/tamil')}
      >
        <h3 className="font-bold text-[#f8e4d9] text-center">TAMIL</h3>
        <p className="text-[#f8e4d9] mt-4 text-center">Students Enrolled: 0</p>
        <p className="text-[#f8e4d9] mt-2 text-center">Total Completed: 0</p>
      </div>
      <div
        className="bg-[#1F316F] border-8 border-[#f8e4d9] p-8 rounded-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-64 w-64 flex flex-col justify-center items-center"
        onClick={() => handleNavigation('/science')}
      >
        <h3 className="font-bold text-[#f8e4d9] text-center">SCIENCE</h3>
        <p className="text-[#f8e4d9] mt-4 text-center">Students Enrolled: 0</p>
        <p className="text-[#f8e4d9] mt-2 text-center">Total Completed: 0</p>
      </div>
      <div
        className="bg-[#1F316F] border-8 border-[#f8e4d9] p-8 rounded-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 h-64 w-64 flex flex-col justify-center items-center"
        onClick={() => handleNavigation('/social')}
      >
        <h3 className="font-bold text-[#f8e4d9] text-center">SOCIAL</h3>
        <p className="text-[#f8e4d9] mt-4 text-center">Students Enrolled: 0</p>
        <p className="text-[#f8e4d9] mt-2 text-center">Total Completed: 0</p>
      </div>
    </div>
  );
};

export default CourseMain;
