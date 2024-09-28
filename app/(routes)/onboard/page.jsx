"use client";
import React from "react";
import { quiz } from "../../_component/Onboard/quiz";
import Quiz from "react-quiz-component";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  const setQuizResult = (result) => {
    const f = result.userInput;

    // Extract user input and other relevant data
    router.push(`/explore?interest=${f[0]}&field=${f[1]}`);

    // Navigate to the enroll page with quiz results as query parameters
    // router.push(`/enroll?${queryString}`);

    // Quix naming
    //1. Interest 2. Filed
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded-md shadow-lg">
        <Quiz
          quiz={quiz}
          showDefaultResult={false}
          disableSynopsis
          showInstantFeedback={false}
          onComplete={setQuizResult}
        />
      </div>
    </div>
  );
}

export default Page;
