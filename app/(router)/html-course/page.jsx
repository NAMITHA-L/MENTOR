import React from 'react';
import Maincontent from '@/app/_components/courses/specific-coursemain';
import Navbar from '@/app/_components/Home/navbar';
import Sidenav from '@/app/_components/mentor_dash/Sidenav';
import Calendar from '@/app/_components/mentor_dash/Calendar';

const HtmlCoursePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidenav className="w-64" />
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 p-8 overflow-y-auto" style={{ maxWidth: 'calc(100% - 400px)' }}>
            {/* Main content here */}
            <Maincontent />
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
