"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const CourseMain = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="overflow-auto h-screen p-8 bg-[rgb(235,244,246)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          { name: 'HTML COURSE', path: '/html-course', icon: '/html5.png', totalStudents: 100, enrolledStudents: 80 },
          { name: 'CSS COURSE', path: '/css-course', icon: '/css.png', totalStudents: 90, enrolledStudents: 75 },
          { name: 'PYTHON', path: '/python', icon: '/python.png', totalStudents: 120, enrolledStudents: 100, isWide: true },
          { name: 'OOPS', path: '/oops', totalStudents: 110, enrolledStudents: 85 },
          { name: 'MATHS', path: '/maths', totalStudents: 95, enrolledStudents: 70 },
          { name: 'CHEMISTRY', path: '/chemistry', totalStudents: 80, enrolledStudents: 65 },
          { name: 'TAMIL', path: '/tamil', totalStudents: 60, enrolledStudents: 55 },
          { name: 'SCIENCE', path: '/science', totalStudents: 100, enrolledStudents: 90 },
          { name: 'SOCIAL', path: '/social', totalStudents: 85, enrolledStudents: 60 },
        ].map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border border-gray-300 rounded-lg cursor-pointer
                       hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
            onClick={() => handleNavigation(course.path)}
          >
            {/* Image Section with Tailwind Customization */}
            <div className="h-48 w-full flex justify-center items-center p-4">
              {course.icon && (
                <img
                  src={course.icon}
                  alt={`${course.name} icon`}
                  className={`h-full ${course.isWide ? 'w-[120%]' : 'w-full'} object-contain rounded-t-lg`} // Stretch width for Python icon
                />
              )}
            </div>
            {/* Course Details */}
            <div className="p-4 flex flex-col justify-between items-center bg-white">
              <h3 className="font-bold text-black text-center text-lg mb-1">{course.name}</h3>
              <p className="text-gray-500 text-sm">Total Students: {course.totalStudents}</p>
              <p className="text-gray-500 text-sm">Enrolled Students: {course.enrolledStudents}</p>
              <button
                className="mt-2 bg-[#37B7C3] text-white px-4 py-2 rounded-lg w-full
                           hover:bg-[#088395] transition duration-300"
                onClick={() => handleNavigation(course.path)}
              >
                Go to Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseMain;
