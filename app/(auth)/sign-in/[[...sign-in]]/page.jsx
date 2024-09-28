"use client";
import { SignIn, SignInButton } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
}

export default page;
