import React from 'react';
import SpecificCoursemain from '@/app/_component/courses/SpecificCoursemain';
import Navbar from '@/app/_component/Home/Navbar';
import MentorSidenav from '@/app/_component/mentor_dash/MentorSidenav';
import Calendar from '@/app/_component/mentor_dash/Calendar';

const HtmlCoursePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <div className="flex flex-1 overflow-hidden">
        <MentorSidenav className="w-64" />
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 p-8 overflow-y-auto" style={{ maxWidth: 'calc(100% - 400px)' }}>
            {/* Main content here */}
            < SpecificCoursemain/>
          </main>
          <div className="w-1/4 ">
              <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmlCoursePage;
