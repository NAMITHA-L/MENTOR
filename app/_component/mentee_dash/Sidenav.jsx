import React from 'react'
import Link from 'next/link'
import { BookCheck, BookOpen, GraduationCap, Home, Inbox, Projector, Users } from 'lucide-react';

function Sidenav() {
  const menu = [
    {
      id: 1,
      name: 'Home',
      icon: Home,
      href: '/mentee',
    },
    {
      id: 2,
      name: 'Dashboard',
      icon: BookOpen,
      href: '/dashboard',
    },
    {
      id: 3,
      name: 'Lesson',
      icon: BookCheck,
      href: '/lesson',
    },
    {
      id: 4,
      name: 'Inbox',
      icon: Inbox,
      href: '/inbox',
    },
    {
      id: 5,
      name: 'Meeting',
      icon: Projector,
      href: '/meeting',
    },
    {
      id: 6,
      name: 'Group',
      icon: Users,
      href: '/group',
    },
    {
      id: 7,
      name: 'Mentor',
      icon: GraduationCap,
      href: '/mentor',
    }
  ];

  return (
    <div className='w-64 rounded-lg shadow-md p-6 bg-[#f8e4d9] mx-6'>
      {/* menu side */}
      <div>
        {menu.map((item) => (
          <Link key={item.id} href={item.href} passHref>
            <div 
              className='group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-[#1A4870] hover:text-white rounded-md transition-all ease-in-out duration-200'
            >
              <item.icon className='group-hover:animate-bounce' />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidenav;
