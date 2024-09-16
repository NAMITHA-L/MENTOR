"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";

function Navbar({ setSearchQuery }) {
  const [isdropOpen, setdrop] = useState(false);
  const user = useUser();
  const router = useRouter();
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleDropdown = (value) => {
    setdrop(value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const focushandeler = (event) => {
    // Check if the current route is not '/explore'
    if (pathname !== "/explore") {
      router.push("/explore");
    }
  };

  return (
    <nav className="flex justify-between items-center px-5 py-2 border z-10 bg-[#f8e4d9]">
      <div>MENTI</div>
      <div>
        <div className="border border-gray-300 rounded-md bg-white px-3 py-2 justify-center items-center flex gap-3">
          <Search />
          <input
            type="search"
            placeholder="Search..."
            className="outline-none border-0 w-96 h-9 bg-white"
            onChange={handleSearchChange}
            onFocus={focushandeler}
          />
        </div>
      </div>
      <div>
        <div className="flex gap-6">
          <div
            className="dropdown relative"
            onMouseOver={() => handleDropdown(true)}
          >
            <button
              className="px-6 py-1 rounded-md flex justify-center items-center gap-4"
              id="dropdown-btn"
            >
              Know More
              <ChevronDown />
            </button>
            {isdropOpen && (
              <ul
                className="mt-6 absolute left-0 border px-7 w-50 py-4 flex-col gap-8 rounded-md bg-white z-10"
                id="dropdown-content"
                onMouseOver={() => handleDropdown(true)}
                onMouseLeave={() => handleDropdown(false)}
              >
                <li className="hover:text-blue-500 w-full cursor-pointer">
                  Who are we?
                </li>
                <li className="hover:text-blue-500 w-full cursor-pointer mt-3">
                  Why we?
                </li>
                <li className="hover:text-blue-500 w-full cursor-pointer mt-3">
                  Contact Us
                </li>
              </ul>
            )}
          </div>
          {user.isSignedIn === false ? (
            <a href="/sign-in">
              <button className="border px-6 py-1 rounded-md bg-blue-700 text-white hover:bg-blue-800 transition-all duration-200 ease-in-out">
                Login
              </button>
            </a>
          ) : (
            <UserButton />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;