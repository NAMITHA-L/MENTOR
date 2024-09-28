"use client";
import Navbar from '@/app/_component/Home/Navbar'
import Teachers from '@/app/_component/mentee/teachers'
import Sidenav from '@/app/_component/mentee_dash/Sidenav'
import { useSearchParams } from 'next/navigation';
import React from 'react'

function page() {
    const searchParams = useSearchParams();
  return (
    <div>
        <Navbar/>
        <div className='container mx-auto flex mt-6'>
            <Sidenav/>
            <Teachers searchQuery={""} param={searchParams}/>
        </div>
    </div>
  )
}

export default page