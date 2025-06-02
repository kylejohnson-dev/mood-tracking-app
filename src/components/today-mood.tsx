"use client"

import { useAuth } from "@/lib/auth-context";
import Image from "next/image";

export function TodayMood() {
  const { user } = useAuth();
  
  if (!user) {
    return null;
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="relative md:flex md:flex-col md:justify-between lg:col-span-8 md:h-[340px] bg-white rounded-2xl md:overflow-hidden space-y-6 px-4 py-8 md:p-8">
        <span className="block w-full text-center md:text-left">
          <span className="text-preset-3 text-neutral-900/75">I&#39;m feeling</span>
          <br />
          <span className="text-preset-2 text-neutral-900">Very Happy</span>
        </span>
        <Image 
          src="/icon-very-happy-color.svg"
          alt="happy"
          width={200}
          height={200}
          className="md:absolute md:right-10 md:top-[50px] md:w-[320px] md:h-[320px] mx-auto"
        />
        <div className="flex flex-col items-center md:items-baseline justify-center space-y-4">
          <Image 
            src="/icon-quote.svg"
            alt="quote"
            width={24}
            height={24}
          />
          <p className="text-preset-6-italic text-neutral-90 text-center md:text-left">&#34;When your hear is full, share<br className="hidden md:block" /> your light with the world.&#34;</p>
        </div>
      </div>
      <div className="lg:col-span-4 space-y-5">
        <div className="bg-white rounded-2xl space-y-4 p-5">
          <span className="flex items-center space-x-3">
            <Image 
              src="/icon-sleep.svg"
              alt="sleep"
              width={16}
              height={16}
              className="fill-neutral-600 w-[22px] h-[22px]"
            />
            <span className="text-preset-6 text-neutral-600">Sleep</span>
          </span>
          <p className="text-preset-3 text-neutral-900">9+ hours</p>
        </div>
        <div className="bg-white rounded-2xl space-y-4 p-5">
          <span className="flex items-center space-x-3">
            <Image 
              src="/icon-reflection.svg"
              alt="exercise"
              width={22}
              height={22}
              className=""
            />
            <span className="text-preset-6 text-neutral-600">Reflection of the day</span>
          </span>
          <div className="h-20">
            <p className="text-preset-6 text-neutral-900">Woke up early and finally tackled a big project!</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-preset-6-italic text-neutral-600">#Gratful</span>
            <span className="text-preset-6-italic text-neutral-600">#Optimistic</span>
          </div>
        </div>
      </div>
    </section>
  );
}