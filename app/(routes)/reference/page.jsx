"use client";

import React from "react";
import MentorSidenav from "@/app/_component/mentor_dash/MentorSidenav";
import References from "@/app/_component/courses/references";
import Navbar from "@/app/_component/Home/Navbar";

const TaskPage = () => {
  return (
    <div>
      
      <Navbar/>
      <div className='container mx-auto flex mt-6'>
      
        <MentorSidenav/>
 
        <main className="flex-1 p-6">
          <References/>
        </main>
      </div>
    </div>
  );
};

export default TaskPage;
