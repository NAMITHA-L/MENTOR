"use client";

import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

// Sample data for monthly enrollment
const monthlyData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Number of Students',
      data: [120, 150, 170, 200, 180, 220, 240, 210, 190, 220, 230, 250],
      backgroundColor: 'rgba(34, 139, 34, 0.8)',
      borderColor: 'rgba(34, 139, 34, 1)',
      borderWidth: 2,
    },
  ],
};

// Data for overall enrollment by course
const courseEnrollmentData = {
  labels: ['HTML Course', 'CSS', 'OOPs', 'Maths', 'Tamil', 'Science', 'Python', 'Chemistry', 'Social'],
  datasets: [
    {
      label: 'Enrollment by Course',
      data: [300, 250, 200, 280, 220, 260, 310, 180, 150],
      backgroundColor: [
        'rgba(0, 0, 139, 0.8)', 'rgba(255, 105, 180, 0.8)', 'rgba(255, 200, 0, 0.8)',
        'rgba(255, 182, 193, 0.8)', 'rgba(173, 216, 230, 0.8)', 'rgba(255, 165, 0, 0.8)',
        'rgba(34, 139, 34, 0.6)', 'rgba(255, 69, 0, 0.8)', 'rgba(128, 0, 128, 0.8)'
      ],
      borderColor: [
        'rgba(0, 0, 139, 1)', 'rgba(255, 105, 180, 1)', 'rgba(255, 200, 0, 1)',
        'rgba(255, 182, 193, 1)', 'rgba(173, 216, 230, 1)', 'rgba(255, 165, 0, 1)',
        'rgba(100, 150, 34, 1)', 'rgba(255, 69, 0, 1)', 'rgba(128, 0, 128, 1)'
      ],
      borderWidth: 2.5,
    },
  ],
};

const CourseAnalytics = () => {
  const [selectedCourse, setSelectedCourse] = useState('HTML Course');

  // Course-specific data for pie charts
  const subjectData = {
    'HTML Course': [50, 30, 20],
    'CSS': [60, 25, 15],
    'OOPs': [40, 35, 25],
    'Maths': [70, 20, 10],
    'Tamil': [45, 35, 20],
    'Science': [55, 30, 15],
    'Python': [65, 20, 15],
    'Chemistry': [50, 30, 20],
    'Social': [30, 40, 30],
  };

  const handleChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  return (
    <div className="p-4" style={{ maxWidth: '100%', margin: '0 auto' }}>
      <h2 className="text-4xl font-extrabold mb-12 text-center">Course Analytics</h2>

      {/* Bar Graph */}
      <div className="mb-12" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h3 className="text-2xl font-bold mb-8">Monthly Student Enrollment</h3>
        <Bar 
          data={monthlyData} 
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  font: { size: 16, weight: 'bold' },
                },
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
                },
                bodyFont: { size: 18, weight: 'bold' },
                titleFont: { size: 20, weight: 'bold' },
                padding: 12,
              },
            },
            scales: {
              x: {
                title: { display: true, text: 'Month', font: { size: 18, weight: 'bold' } },
                ticks: { font: { size: 16, weight: 'bold' } },
              },
              y: {
                title: { display: true, text: 'Number of Students', font: { size: 18, weight: 'bold' } },
                ticks: { font: { size: 16, weight: 'bold' } },
              },
            },
          }}
        />
      </div>

      {/* Overall Enrollment Pie Chart */}
      <div className="mb-12" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h3 className="text-2xl font-bold mb-8 text-center">Overall Enrollment by Course</h3>
        <Pie 
          data={courseEnrollmentData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  font: { size: 20, weight: 'bold' },
                },
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
                },
                bodyFont: { size: 18, weight: 'bold' },
              },
            },
          }}
        />
      </div>

      {/* Course Selection Dropdown */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-8 text-center">Select Course</h3>
        <select 
          className="border border-gray-300 rounded-lg p-2 mb-8 w-full max-w-md mx-auto
                     focus:outline-none focus:ring-2 focus:ring-[#37B7C3] transition duration-300"
          value={selectedCourse}
          onChange={handleChange}
        >
          {Object.keys(subjectData).map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      {/* Course-specific Pie Chart */}
      <div className="mb-12" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h3 className="text-2xl font-bold mb-8 text-center">Enrollment for {selectedCourse}</h3>
        <Pie 
          data={{
            labels: ['Enrolled Students', 'Completed Students', 'Learning Students'],
            datasets: [{
              label: selectedCourse,
              data: subjectData[selectedCourse],
              backgroundColor: [
                'rgba(0, 0, 128, 0.8)', 'rgba(30, 144, 255, 0.6)', 'rgba(173, 216, 230, 0.4)',
              ],
              borderColor: [
                'rgba(0, 0, 128, 1)', 'rgba(30, 144, 255, 1)', 'rgba(173, 216, 230, 1)',
              ],
              borderWidth: 2.5,
            }]
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  font: { size: 16, weight: 'bold' },
                },
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
                },
                bodyFont: { size: 16, weight: 'bold' },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default CourseAnalytics;
