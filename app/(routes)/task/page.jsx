"use client";

import React from "react";
import Navbar from "@/app/_component/Home/Navbar";
import { Sidebar } from "lucide-react";
import MentorSidenav from "@/app/_component/mentor_dash/MentorSidenav";
import Maincontenttask from "@/app/_component/Task/Maincontenttask";

const TaskPage = () => {
  return (
    <div>
     
      <Navbar/>
      <div className='container mx-auto flex mt-6'>

        <MentorSidenav/>
        <Maincontenttask/>
      </div>
    </div>
  );
};

export default TaskPage;
