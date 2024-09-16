"use client";

import Navbar from '@/app/_components/Home/navbar';
import React from 'react';
import Sidenav from '@/app/_components/mentor_dash/Sidenav';
import Maincontent from '@/app/_components/mentor_dash/Maincontent';
import AnalyticsComponent from '@/app/_components/courseanalytics/analyticscomponents';

function Page() {
  return (
    <div className="flex flex-col h-screen"> 
      <Navbar /> 
      
      <div className="flex flex-1 overflow-hidden mt-4"> 
        <Sidenav className="w-1/4" /> 
        
        <div className="flex-1 overflow-auto">
          <div className="flex flex-col min-h-full space-y-4"> 
            
            <div className="flex-1 overflow-auto mb-6"> 
              <Maincontent />
            </div>
            
            <div className="flex-1 overflow-auto"> 
              <AnalyticsComponent />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
