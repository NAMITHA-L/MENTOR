"use client"; // Add this at the very top

import React from 'react';
import Link from 'next/link';
import { Home, Award, BarChart, CalendarCheck, User, Settings, HelpCircle, Link2 } from 'lucide-react'; // Import Link2 icon

function Sidenav() {
  const menu = [
    {
      id: 1,
      name: 'Home',
      icon: Home,
      href: "/dashboard",
    },
    {
      id: 2,
      name: "Courses I'm Excel",
      icon: Award,
      href: '/courses-excel',
    },
    {
      id: 3,
      name: 'Course Analytics',
      icon: BarChart,
      href: '/courseanalysis',
    },
    {
      id: 4,
      name: 'Calendar',
      icon: CalendarCheck,
      href: '/update-calendar',
    },
    {
      id: 5,
      name: 'Update Profile',
      icon: User,
      href: '/update-profile',
    },
    {
      id: 6,
      name: 'MentorLink',
      icon: Link2, 
      href: '/mentor-link', 
    },
    {
      id: 7,
      name: 'Settings',
      icon: Settings,
      href: '/settings',
    },
    {
      id: 8,
      name: 'Help',
      icon: HelpCircle,
      href: '/help',
    },
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
              <item.icon className='group-hover:animate-bounce'/>
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidenav;
