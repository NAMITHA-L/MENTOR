"use client";

import React, { useState, useEffect } from 'react';
import { Clipboard, MessageSquare, User, Clock, Bell, Book } from 'lucide-react';

function SpecificCoursemain() {
    const [meetings, setMeetings] = useState([]);

    const initialMeetings = [
        { id: 1, date: '2024-09-22', time: '10:00' },
        { id: 2, date: '2024-09-22', time: '14:00' },
        { id: 3, date: '2024-09-21', time: '16:00' },
        { id: 4, date: '2024-09-21', time: '17:50' },
        { id: 5, date: '2024-09-21', time: '20:00' },
        { id: 6, date: '2024-09-22', time: '17:00' },
        { id: 7, date: '2024-09-22', time: '20:00' },
        { id: 8, date: '2024-09-22', time: '22:00' },
        { id: 9, date: '2024-09-23', time: '10:00' },
        { id: 10, date: '2024-09-23', time: '16:00' },
        { id: 11, date: '2024-09-23', time: '20:00' },
        { id: 12, date: '2024-09-23', time: '21:00' }
    ];

    useEffect(() => {
        const calculateRemainingHours = (meetingDate, meetingTime) => {
            const meetingDateTime = new Date(`${meetingDate}T${meetingTime}:00`);
            const now = new Date();
            const diffMs = meetingDateTime - now;
            const diffHrs = Math.ceil(diffMs / (1000 * 60 * 60));
            return diffHrs > 0 ? diffHrs : null;
        };

        const updatedMeetings = initialMeetings
            .map(meeting => ({
                ...meeting,
                remainingHours: calculateRemainingHours(meeting.date, meeting.time),
            }))
            .filter(meeting => meeting.remainingHours !== null)
            .sort((a, b) => (a.remainingHours || Infinity) - (b.remainingHours || Infinity));

        setMeetings(updatedMeetings);
    }, []);

    return (
        <div className="flex-1 bg-gradient-to-br from-[#EBF4F6] to-[#f8e4d9] flex flex-col">
            <nav className='flex space-x-4 justify-center p-4 bg-[#071952] shadow-lg'>
                {[{ id: 1, name: 'Video Chat', icon: MessageSquare, href: "#" },
                { id: 2, name: 'Inbox', icon: MessageSquare, href: "#" },
                { id: 3, name: 'References', icon: Book, href: "/reference" },
                { id: 4, name: 'Task', icon: Clipboard, href: "/task" },
                { id: 5, name: '', icon: User, count: 10, href: "#" }].map((item) => (
                    <a 
                        key={item.id} 
                        href={item.href} 
                        className='flex items-center px-6 py-3 bg-[#088395] text-white rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-[#37B7C3] hover:shadow-xl group'
                    >
                        <item.icon className='mr-2' />
                        {item.name}
                        {item.count && <span className='ml-2 bg-[#f0f0f0] text-[#071952] px-2 py-1 rounded-full'>{item.count}</span>}
                    </a>
                ))}
            </nav>

            <div className= "bg-[rgb(235,244,246)] p-6 mt-6 flex-1 rounded-lg shadow-lg overflow-y-auto">
                <h2 className="font-bold text-2xl text-center mb-6 text-[#071952]">Scheduled Meetings</h2>
                {meetings.map((meeting) => (
                    <div key={meeting.id} className="flex items-center justify-between bg-gradient-to-r from-[rgb(253,253,253)] to-[rgb(131,194,199)] p-4 mb-4 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-[#37B7C3] hover:to-[#EBF4F6] transition duration-300 transform hover:scale-105 cursor-pointer">
                        <div className="flex-1">
                            <p className="font-semibold text-gray-700">Date: {meeting.date}</p>
                            <p className="text-gray-600">Time: {meeting.time}</p>
                        </div>
                        {meeting.remainingHours !== null && meeting.remainingHours <= 24 ? (
                            <div className="flex items-center text-red-600 mx-4">
                                <Clock className="mr-1 animate-pulse" />
                                <span className="font-bold">In {meeting.remainingHours} hours</span>
                            </div>
                        ) : (
                            <div className="flex items-center mx-4">
                                <Clock className="mr-1 text-transparent" />
                                <span className="font-bold text-transparent"> </span>
                            </div>
                        )}
                        <div className="flex items-center text-yellow-600 animate-pulse">
                            <Bell className="mr-1" />
                            <span className="font-bold">Alarm</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SpecificCoursemain;
