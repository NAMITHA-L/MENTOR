"use client";

import { Globe, Megaphone, Clock, Bell, Edit3, Trash } from "lucide-react";
import React, { useState, useEffect } from "react";

function Maincontent() {
    const [selectedMenu, setSelectedMenu] = useState("all");
    const [announcements, setAnnouncements] = useState([]);
    const [newAnnouncement, setNewAnnouncement] = useState("");
    const [editAnnouncement, setEditAnnouncement] = useState(null);
    const [editedContent, setEditedContent] = useState("");
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        const storedAnnouncements = localStorage.getItem("announcements");
        if (storedAnnouncements) {
            setAnnouncements(JSON.parse(storedAnnouncements));
        }
    }, []);

    useEffect(() => {
        if (announcements.length > 0) {
            localStorage.setItem("announcements", JSON.stringify(announcements));
        }
    }, [announcements]);

    const initialMeetings = [
        { id: 1, date: "2024-09-22", time: "10:00" },
        { id: 2, date: "2024-09-22", time: "14:00" },
        { id: 3, date: "2024-09-21", time: "16:00" },
        { id: 4, date: "2024-09-22", time: "17:50" },
        { id: 5, date: "2024-09-21", time: "20:00" }
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
            .map((meeting) => ({
                ...meeting,
                remainingHours: calculateRemainingHours(meeting.date, meeting.time),
            }))
            .filter((meeting) => meeting.remainingHours !== null)
            .sort((a, b) => (a.remainingHours || Infinity) - (b.remainingHours || Infinity));

        setMeetings(updatedMeetings);
    }, []);

    const handlePostAnnouncement = () => {
        if (newAnnouncement.trim() !== "") {
            const newPost = {
                content: newAnnouncement,
                time: new Date().toLocaleString(),
            };
            setAnnouncements([newPost, ...announcements]);
            setNewAnnouncement("");
            setSelectedMenu("all");
        }
    };

    const handleDeleteAnnouncement = (index) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this announcement? This action cannot be undone."
        );
        if (confirmDelete) {
            const updatedAnnouncements = announcements.filter((_, i) => i !== index);
            setAnnouncements(updatedAnnouncements);
        }
    };

    const handleEditAnnouncement = (index) => {
        setEditAnnouncement(index);
        setEditedContent(announcements[index].content);
    };

    const handleSaveEditedAnnouncement = () => {
        const updatedAnnouncements = announcements.map((announcement, index) => {
            if (index === editAnnouncement) {
                return { ...announcement, content: editedContent };
            }
            return announcement;
        });
        setAnnouncements(updatedAnnouncements);
        setEditAnnouncement(null);
        setEditedContent("");
    };

    return (
        <div className="flex-1 bg-gradient-to-r from-[rgb(7,25,82)] to-[rgb(55,183,195)] shadow-lg rounded-lg p-8 mx-6">
            <nav className="flex space-x-4 justify-center mb-6">
                <a
                    href="#"
                    className="flex items-center w-[200px] h-12 bg-[rgb(8,131,149)] text-white rounded-full shadow-lg hover:bg-[rgb(7,25,82)] transition duration-300 transform hover:scale-105 justify-center"
                    onClick={(e) => {
                        e.preventDefault();
                        setSelectedMenu("all");
                    }}
                >
                    <Globe className="mr-2" />
                    <span>All</span>
                </a>

                <a
                    href="#"
                    className="flex items-center w-[200px] h-12 bg-[rgb(8,131,149)] text-white rounded-full shadow-lg hover:bg-[rgb(7,25,82)] transition duration-300 transform hover:scale-105 justify-center"
                    onClick={(e) => {
                        e.preventDefault();
                        setSelectedMenu("announcement");
                    }}
                >
                    <Megaphone className="mr-2" />
                    <span>Announcement</span>
                </a>
            </nav>

            <div
                id="content-area"
                className="bg-[rgb(235,244,246)] p-6 mt-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-100"
            >
                {selectedMenu === "announcement" && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="font-bold mb-2 text-lg">What would you like to share?</h3>
                        <textarea
                            className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[rgb(7,25,82)] transition duration-200"
                            placeholder="Announce here..."
                            value={newAnnouncement}
                            onChange={(e) => setNewAnnouncement(e.target.value)}
                        ></textarea>
                        <button
                            className="mt-2 bg-[rgb(7,25,82)] text-white px-4 py-2 rounded-full transition duration-300 hover:bg-[rgb(8,131,149)] shadow-lg"
                            onClick={handlePostAnnouncement}
                        >
                            Post
                        </button>
                    </div>
                )}

                {selectedMenu === "all" && (
                    <>
                        <h3 className="text-xl font-bold mb-4">
                            Scheduled Meetings & Announcements
                        </h3>

                        {announcements.length > 0 && (
                            <div className="mb-4">
                                <h4 className="font-bold">Announcements</h4>
                                {announcements.map((announcement, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-r from-[rgb(253,253,253)] to-[rgb(131,194,199)] p-4 mb-2 rounded-lg shadow transition-transform duration-300 hover:shadow-lg hover:scale-105 flex justify-between"
                                    >
                                        {editAnnouncement === index ? (
                                            <div className="w-full">
                                                <textarea
                                                    className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[rgb(7,25,82)] transition duration-200"
                                                    value={editedContent}
                                                    onChange={(e) => setEditedContent(e.target.value)}
                                                />
                                                <button
                                                    className="mt-2 bg-[rgb(7,25,82)] text-white px-4 py-2 rounded-full transition duration-300 hover:bg-[rgb(8,131,149)] shadow-lg"
                                                    onClick={handleSaveEditedAnnouncement}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="flex-1">
                                                <p className="text-black">{announcement.content}</p>
                                                <p className="text-black text-sm">
                                                    Posted on: {announcement.time}
                                                </p>
                                            </div>
                                        )}

                                        <div className="flex items-center space-x-4">
                                            <Edit3
                                                className="cursor-pointer text-blue-600"
                                                onClick={() => handleEditAnnouncement(index)}
                                            />
                                            <Trash
                                                className="cursor-pointer text-red-600"
                                                onClick={() => handleDeleteAnnouncement(index)}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {meetings.length > 0 && (
                            <div>
                                <h4 className="font-bold text-black">Meetings within 24 hours</h4>
                                {meetings.map((meeting) => (
                                    <div
                                        key={meeting.id}
                                        className="flex items-center bg-gradient-to-r from-[rgb(253,253,253)] to-[rgb(114,191,198)] p-4 mb-2 rounded-lg shadow transition-transform duration-300 hover:shadow-lg hover:scale-105"
                                    >
                                        <div className="flex-1">
                                            <p className="font-bold text-black">
                                                Date: {meeting.date}
                                            </p>
                                            <p className="text-black">Time: {meeting.time}</p>
                                        </div>
                                        {meeting.remainingHours !== null &&
                                            meeting.remainingHours <= 24 && (
                                                <div className="flex items-center text-red-500 mx-4">
                                                    <Clock className="mr-1" />
                                                    <span className="font-bold">
                                                        Remaining Time: {meeting.remainingHours}{" "}
                                                        hours
                                                    </span>
                                                </div>
                                            )}
                                        <Bell className="text-yellow-400" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Maincontent;
