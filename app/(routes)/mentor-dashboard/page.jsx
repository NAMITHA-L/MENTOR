import React from 'react'
import Navbar from '@/app/_component/Home/Navbar';
import MentorSidenav from '@/app/_component/mentor_dash/MentorSidenav';
import Maincontent from '@/app/_component/mentor_dash/Maincontent';
import Calendar from '@/app/_component/mentor_dash/Calendar';

function Page() {
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto flex mt-6">
        <MentorSidenav/>
        <Maincontent/>      
        <Calendar/>
      </div>
    </div>
  );
}

export default Page;
