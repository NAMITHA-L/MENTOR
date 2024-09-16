"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; 
import Navbar from "@/app/_components/Home/navbar.jsx";
import SideNav from "@/app/_components/mentor_dash/Sidenav";
import CourseMain from "@/app/_components/courses/course-main"; 
const GridComponent = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen">
      
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        
        <SideNav className="w-1/4 " />
        
        <div className="flex-1 p-4 overflow-auto">
          <CourseMain />
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
