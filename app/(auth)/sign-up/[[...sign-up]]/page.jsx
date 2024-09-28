"use client";

import { SignUp } from "@clerk/nextjs";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Page() {
  const { isSignedIn, user, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("Auth state:", { isSignedIn, isLoaded, user });

    if (isLoaded && isSignedIn && user) {
      console.log("User signed in:", user);
      const isNewUser =
        new Date(user.createdAt).getTime() ===
        new Date(user.updatedAt).getTime();
      console.log("Is new user:", isNewUser);
      alert(user.createdAt);
      alert(user.updatedAt);

      if (isNewUser) {
        console.log("Redirecting to onboard page");
        router.push("/onboard");
      } else {
        console.log("Redirecting to dashboard");
        router.push("/dashboard");
      }
    }
  }, [isSignedIn, isLoaded, user, router]);

  return (
    <div className="h-screen w-screen justify-center items-center flex">
      <SignUp signUpUrl="/sign-up" redirectUrl="/onboard" />
    </div>
  );
}
