"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; 
import Navbar from '@/app/_component/Home/Navbar';
import MentorSidenav from '@/app/_component/mentor_dash/MentorSidenav';
import CourseMain from '@/app/_component/courses/CourseMain';
const GridComponent = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen">
      
      <Navbar/>
      <div className="flex flex-1 overflow-hidden">
        
        <MentorSidenav className="w-1/4 " />
        
        <div className="flex-1 p-4 overflow-auto">
          <CourseMain />
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
