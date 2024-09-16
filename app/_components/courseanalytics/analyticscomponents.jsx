"use client";

import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
);

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
      data: [300, 250, 200, 280, 220, 260, 310, 180, 150], // Replace with actual data
      backgroundColor: [
        'rgba(0, 0, 139, 0.8)', // Dark Blue
        'rgba(255, 105, 180, 0.8)', // Pink
        'rgba(255, 200, 0, 0.8)', // Yellow
        'rgba(255, 182, 193, 0.8)', // Peach
        'rgba(173, 216, 230, 0.8)', // Light Blue
        'rgba(255, 165, 0, 0.8)', // Orange
        'rgba(34, 139, 34, 0.6)', // Green
        'rgba(255, 69, 0, 0.8)', // Red-Orange
        'rgba(128, 0, 128, 0.8)', // Purple
      ],
      borderColor: [
        'rgba(0, 0, 139, 1)', // Dark Blue
        'rgba(255, 105, 180, 1)', // Pink
        'rgba(255, 200, 0, 1)', // Yellow
        'rgba(255, 182, 193, 1)', // Peach
        'rgba(173, 216, 230, 1)', // Light Blue
        'rgba(255, 165, 0, 1)', // Orange
        'rgba(100, 150, 34, 1)', // Green
        'rgba(255, 69, 0, 1)', // Red-Orange
        'rgba(128, 0, 128, 1)', // Purple
      ],
      borderWidth: 2.5,
    },
  ],
};

const CourseAnalytics = () => {
  return (
    <div className="p-4" style={{ maxWidth: '100%', width: '800px', margin: '0 auto' }}>
      
      <h2 className="text-4xl font-extrabold mb-12 text-center">Course Analytics</h2>

      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-8">Monthly Student Enrollment</h3>
        <Bar 
          data={monthlyData} 
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  font: {
                    size: 16, 
                    weight: 'bold',
                  },
                },
              },
              tooltip: {
                callbacks: {
                  label: function(tooltipItem) {
                    return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
                  }
                },
                bodyFont: {
                  size: 18,
                  weight: 'bold',
                },
                titleFont: {
                  size: 20,
                  weight: 'bold',
                },
                padding: 12,
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Month',
                  font: {
                    size: 18, 
                    weight: 'bold', 
                  },
                },
                ticks: {
                  font: {
                    size: 16, 
                    weight: 'bold', 
                  },
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Number of Students',
                  font: {
                    size: 18,
                    weight: 'bold',
                  },
                },
                ticks: {
                  font: {
                    size: 16, 
                    weight: 'bold',
                  },
                },
              },
            },
          }}
        />
      </div>

      <div style={{ maxWidth: '100%', width: '600px', margin: '0 auto' }}>
        <h3 className="text-2xl font-bold mb-8">Overall Enrollment by Course</h3>
        <Pie 
          data={courseEnrollmentData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  font: {
                    size: 20, // Bold pie chart legend
                    weight: 'bold',
                  },
                },
              },
              tooltip: {
                callbacks: {
                  label: function(tooltipItem) {
                    return tooltipItem.label + ': ' + tooltipItem.raw;
                  }
                },
                bodyFont: {
                  size: 18, 
                  weight: 'bold',
                },
              },
            },
          }}
        />
      </div>

      <div style={{ maxWidth: '100%', width: '600px', margin: '0 auto' }}>
        <h3 className="text-2xl font-bold mb-8">Student Distribution by Course</h3>
        {['HTML Course', 'CSS', 'OOPs', 'Maths', 'Tamil', 'Science', 'Python', 'Chemistry', 'Social'].map((course, index) => (
          <div key={index} className="mb-12">
            <h4 className="text-xl font-bold mb-6">{course}</h4>
            <Pie 
              data={{
                labels: ['Enrolled Students', 'Completed Students', 'Learning Students'],
                datasets: [{
                  label: course,
                  data: [50, 30, 20], // Replace with actual data
                  backgroundColor: [
                    'rgba(0, 0, 128, 0.8)',   // Dark blue
                    'rgba(30, 144, 255, 0.6)', // Light blue
                    'rgba(173, 216, 230, 0.4)', // Very light blue
                  ],
                  borderColor: [
                    'rgba(0, 0, 128, 1)',
                    'rgba(30, 144, 255, 1)',
                    'rgba(173, 216, 230, 1)',
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
                      font: {
                        size: 20, // Bold pie chart legend
                        weight: 'bold',
                      },
                    },
                  },
                  tooltip: {
                    callbacks: {
                      label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                      }
                    },
                    bodyFont: {
                      size: 18, 
                      weight: 'bold',
                    },
                  },
                },
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseAnalytics;
