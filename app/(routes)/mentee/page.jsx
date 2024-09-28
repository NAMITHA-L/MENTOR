import React from 'react'
import Sidenav from '@/app/_component/mentee_dash/Sidenav'
import Maincontent from '@/app/_component/mentee_dash/Maincontent'
import Calendar from '@/app/_component/mentee_dash/Calendar'
import Navbar from '@/app/_component/Home/Navbar'

function page() {
  return (
    <div className=''>
      <Navbar/>
      <div className='container mx-auto flex mt-6'>
        <Sidenav/>
        <Maincontent/>
        <Calendar/>
      </div>
    </div>
  )
}

export default page