"use client";

import React from "react";
import Navbar from "@/app/_components/Home/navbar.jsx";
import Sidenav from "@/app/_components/mentor_dash/Sidenav.jsx";
import MainContent from "@/app/_components/Task/Maincontenttask"; 

const TaskPage = () => {
  return (
    <div>
     
      <Navbar />

      <div className='container mx-auto flex mt-6'>
     
        <Sidenav />
 
        <MainContent />
      </div>
    </div>
  );
};

export default TaskPage;
