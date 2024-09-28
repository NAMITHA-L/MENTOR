"use client";
import React, { useState } from "react";
import Navbar from "../../_component/Home/Navbar";
import Teachers from "../../_component/mentee/teachers";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const interest = searchParams.get("interest");
  const field = searchParams.get("field");
  console.log(interest, field);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  return (
    <div>
      <div className="sticky top-0">
        <Navbar setSearchQuery={setSearchQuery} />
      </div>
      <Teachers searchQuery={searchQuery} param={searchParams} />
    </div>
  );
};

export default Page;
