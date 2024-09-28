"use client"; // Add this at the very top

import { Bot, Clipboard, Globe, Megaphone, MessageSquare } from 'lucide-react';
import React, { useState } from 'react';

function Maincontent() {
    const [selectedMenu, setSelectedMenu] = useState(null);

    const smallnav = [
        {
          id: 1,
          name: 'All',
          icon: Globe,
          href: "#",
          content: 'This is the All content',
        },
        {
          id: 2,
          name: 'Announcement',
          icon: Megaphone,
          href: "#",
          content: 'This is the Announcement content',
        },
        {
          id: 3,
          name: 'Task',
          icon: Clipboard,
          href: "#",
          content: 'This is the Task content',
        },
        {
          id: 4,
          name: 'Chat',
          icon: MessageSquare,
          href: "#",
          content: 'This is the Chat content',
        },
        {
          id: 5,
          name: 'AI',
          icon: Bot,
          href: "#",
          content: 'This is the AI content',
        }   
    ];
      
    return (
        <div className='flex-1 bg-[#f8e4d9] shadow-md rounded-lg p-8 mx-6'>
            <nav className='flex space-x-4 justify-center'>
                {smallnav.map((item) => (
                  <a key={item.id} href={item.href} className='flex items-center px-6 py-3 bg-[#1F316F] text-white rounded-full shadow hover:bg-[#1A4870] transition duration-200 group' onClick={(e) => {e.preventDefault(); // Prevent the default anchor behavior
                    setSelectedMenu(item.content); // Set the selected menu's content
                        }}>
                        <item.icon className='mr-2 group-hover:animate-bounce' />
                        {item.name}
                    </a>
                ))}
            </nav>
            <div id="content-area" className="bg-[#e0e0e0] p-6 m-4 rounded-lg shadow-lg">
              {/* Dynamic content will be loaded here */}
              {selectedMenu ? <p>{selectedMenu}</p> : <p>Click on a menu item to display content here.</p>}
            </div>
        </div>
    )
}

export default Maincontent;
