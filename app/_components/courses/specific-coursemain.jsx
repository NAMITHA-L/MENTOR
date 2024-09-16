"use client";

import React, { useState, useEffect } from 'react';
import { Clipboard, MessageSquare, User, Clock, Bell, Book } from 'lucide-react';

function Maincontent() {
    const [meetings, setMeetings] = useState([]);

    // Updated meeting data according to the new schedule
    const initialMeetings = [
        { id: 1, date: '2024-09-17', time: '10:00' },  
        { id: 2, date: '2024-09-17', time: '14:00' },  
        { id: 3, date: '2024-09-17', time: '16:00' },  
        { id: 4, date: '2024-09-18', time: '17:50' },  
        { id: 5, date: '2024-09-18', time: '20:00' },  
        { id: 6, date: '2024-09-18', time: '17:00' },  
        { id: 7, date: '2024-09-19', time: '20:00' },  
        { id: 8, date: '2024-09-19', time: '22:00' },  
        { id: 9, date: '2024-09-20', time: '10:00' },  
        { id: 10, date: '2024-09-21', time: '16:00' },  
        { id: 11, date: '2024-09-22', time: '20:00' },  
        { id: 12, date: '2024-09-22', time: '21:00' }   
    ];

    useEffect(() => {
        // Function to calculate remaining time
        const calculateRemainingHours = (meetingDate, meetingTime) => {
            const meetingDateTime = new Date(`${meetingDate}T${meetingTime}:00`);
            const now = new Date();
            const diffMs = meetingDateTime - now; // Difference in milliseconds
            const diffHrs = Math.ceil(diffMs / (1000 * 60 * 60)); // Convert milliseconds to hours
            return diffHrs > 0 ? diffHrs : null; // Return null if the meeting is in the past
        };

        // Update meetings with remaining hours
        const updatedMeetings = initialMeetings
            .map(meeting => ({
                ...meeting,
                remainingHours: calculateRemainingHours(meeting.date, meeting.time),
            }))
            .filter(meeting => meeting.remainingHours !== null) // Filter out past meetings
            .sort((a, b) => (a.remainingHours || Infinity) - (b.remainingHours || Infinity)); // Sort by remaining time

        setMeetings(updatedMeetings);
    }, []);

    return (
        <div className="flex-1 bg-[#f8e4d9] flex flex-col">
            <nav className='flex space-x-4 justify-center p-4 bg-[#f8e4d9]'>
                {[
                    { id: 1, name: 'Video Chat', icon: MessageSquare, href: "#" },
                    { id: 2, name: 'Inbox', icon: MessageSquare, href: "#" },
                    { id: 3, name: 'References', icon: Book, href: "/reference" },
                    { id: 4, name: 'Task', icon: Clipboard, href: "/task" },
                    { id: 5, name: '', icon: User, count: 10, href: "#" }, 
                ].map((item) => (
                    <a key={item.id} href={item.href} className='flex items-center px-6 py-3 bg-[#1F316F] text-white rounded-full shadow hover:bg-[#1A4870] transition duration-200 group'>
                        <item.icon className='mr-2' />
                        {item.name}
                        {item.count && <span className='ml-2 bg-[#e0e0e0] text-[#1F316F] px-2 py-1 rounded-full'>{item.count}</span>}
                    </a>
                ))}
            </nav>
            <div className="bg-[#e0e0e0] p-4 mt-4 flex-1 overflow-y-auto">
                <h2 className="font-bold text-xl mb-4 text-center">Scheduled Meetings</h2>
                {meetings.map((meeting) => (
                    <div key={meeting.id} className="flex items-center bg-white p-4 mb-2 rounded-lg shadow cursor-pointer hover:bg-[#f0f0f0]">
                        <div className="flex-1">
                            <p className="font-bold text-gray-700">Date: {meeting.date}</p>
                            <p className="text-gray-600">Time: {meeting.time}</p>
                        </div>
                        {meeting.remainingHours !== null && meeting.remainingHours <= 24 ? (
                            <div className="flex items-center text-red-500 mx-4">
                                <Clock className="mr-1" />
                                <span className="font-bold">Remaining Time: {meeting.remainingHours} hours</span>
                            </div>
                        ) : (
                            <div className="flex items-center mx-4">
                                <Clock className="mr-1 text-transparent" />
                                <span className="font-bold text-transparent"> </span>
                            </div>
                        )}
                        <div className="flex items-center text-yellow-500">
                            <Bell className="mr-1" />
                            <span className="font-bold">Alarm</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Maincontent;
