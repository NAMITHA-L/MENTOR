import Navbar from '@/app/_components/Home/navbar'
import React from 'react'
import Sidenav from '@/app/_components/mentor_dash/Sidenav'
import Maincontent from '@/app/_components/mentor_dash/Maincontent'
import Calendar from '@/app/_components/mentor_dash/Calendar'

function Page() {
  return (
    <div>
      <Navbar />
 
      <div className="container mx-auto flex mt-6">
        <Sidenav />

        <Maincontent/>
      
        <Calendar />
        
      </div>
    </div>
  );
}

export default Page;
