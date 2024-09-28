"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";

function Hero() {
  const user = useUser();
  return (
    <section className="flex h-[90vh] px-10 bg-[#fff5f1]">
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="text-5xl">
          Find a Suitable Mentor for your Best Interest
        </h1>
        <p className="mt-4">
          Discover a world of{" "}
          <span className="span-div text-black">knowledge</span> at your
          fingertips and embarks on a transformative learning journey like never
          before
        </p>
        <div className="my-10 flex gap-6 ">
          {user.isSignedIn === false ? (
            <>
              <a href="/login">
                <button className="border px-5 py-3 rounded-md bg-blue-600  hover:bg-blue-700 text-white">
                  Get Started
                </button>
              </a>
              <button className="border px-5 py-3 rounded-md bg-white hover:bg-gray-100">
                Become a Mentor
              </button>
            </>
          ) : (
            <>
              <a href="/dashboard">
                <button className="border px-5 py-3 rounded-md bg-blue-600  hover:bg-blue-700 text-white">
                  Dashboard
                </button>
              </a>
              <button className="border px-5 py-3 rounded-md bg-white hover:bg-gray-100">
                Admin Support
              </button>
            </>
          )}
        </div>
        <div className="flex gap-10">
          <div>
            <h1 className="text-lg font-semibold">50+</h1>
            <h1>Mentor</h1>
          </div>
          <div>
            <h1 className="text-lg font-semibold">600+</h1>
            <h1>Courses</h1>
          </div>
          <div>
            <h1 className="text-lg font-semibold">300+</h1>
            <h1>classNamees (regularly)</h1>
          </div>
        </div>
        <hr className="my-10" />
        <div>
          <h1>Popular Courses</h1>
          <div className="flex gap-5 mt-5 ">
            <h1 className="py-2 px-5 rounded-lg text-white bg-orange-400 w-max cursor-pointer">
              DSA{" "}
            </h1>
            <h1 className="py-2 px-5 rounded-lg text-white bg-yellow-400 w-max cursor-pointer">
              Networking
            </h1>
            <h1 className="py-2 px-5 rounded-lg text-white bg-purple-400 w-max cursor-pointer">
              EDM
            </h1>
            <h1 className="py-2 px-5 rounded-lg text-white bg-violet-400 w-max cursor-pointer">
              Python
            </h1>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <img
          className="hover:translate-y-2 transition-all duration-200 ease-in"
          src="https://ictacademies.com/_next/image?url=%2Fassets%2Fimages%2Fhero.png&w=3840&q=75"
          width="500"
          alt=""
        />
      </div>
    </section>
  );
}

export default Hero;
