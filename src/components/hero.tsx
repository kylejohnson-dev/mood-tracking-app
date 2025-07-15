"use client"

import { useAuth } from "@/lib/auth-context";
import { LogMood } from "./log-mood";
import { Button } from "./ui/button";

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

export function Hero() {
  const { user, login } = useAuth();
  
  return (
    <div className="text-center">
      <div className="my-12 lg:my-16">
        {user && <p className="text-preset-3 text-blue-600">Hello, Lisa!</p>}
        <p className="text-preset-1 text-neutral-900">How are you feelin today?</p>
        <p className="text-preset-6 text-neutral-600">{formattedDate}</p>
      </div>
      {user ? (
        <LogMood />
      ) : (
        <>
          <Button 
            className="h-[60px] bg-blue-600 text-preset-5 text-white px-8 py-4 mb-12 lg:mb-16"
            onClick={login}
          >
            Login to start tracking
          </Button>
        </>
      )}
    </div>
  ) 
}