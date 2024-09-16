"use client";

import React from "react";
import Navbar from "@/app/_components/Home/navbar.jsx";
import Sidenav from "@/app/_components/mentor_dash/Sidenav.jsx";
import References from "@/app/_components/courses/references";

const TaskPage = () => {
  return (
    <div>
      
      <Navbar />

      <div className='container mx-auto flex mt-6'>
      
        <Sidenav />
 
        <main className="flex-1 p-6">
          <References />
        </main>
      </div>
    </div>
  );
};

export default TaskPage;
