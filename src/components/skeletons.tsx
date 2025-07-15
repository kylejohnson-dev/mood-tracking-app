import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

export async function TodayMoodSkeleton() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="relative md:flex md:flex-col md:justify-between lg:col-span-8 md:h-[340px] bg-white rounded-2xl md:overflow-hidden space-y-6 px-4 py-8 md:p-8">
        <span className="block w-full text-center md:text-left">
          <span className="text-preset-3 text-neutral-900/75">I&#39;m feeling</span>
          <br />
          <Skeleton className="w-40 h-12 mx-auto md:mx-0" />
        </span>
        <div className="md:absolute md:right-10 md:top-[50px] w-[200px] h-[200px] md:w-[320px] md:h-[320px] bg-gray-100 rounded-full mx-auto"></div>
        {/* <Image 
          src={getMoodIcon(todayMood.mood) || ""}
          alt="mood icon"
          width={200}
          height={200}
          className="md:absolute md:right-10 md:top-[50px] md:w-[320px] md:h-[320px] mx-auto"
        /> */}
        <div className="md:w-[246px] flex flex-col items-center md:items-baseline justify-center space-y-4">
          <Image 
            src="/icon-quote.svg"
            alt="quote icon"
            width={24}
            height={24}
          />
          <div className="w-full space-y-1">
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-full h-6" /> 
          </div>
          
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
          <Skeleton className="w-full h-[44.75px]" />
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
          <div className="h-20 space-y-1">
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-full h-6" />
            {/* <p className="text-preset-6 text-neutral-900"></p> */}
          </div>
          <div className="flex items-center space-x-3">
            <Skeleton className="w-full h-6" />
            {/* {todayMood.feelings.map((feeling) => (
              <span key={feeling} className="text-preset-6-italic text-neutral-600">#{feeling}</span>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}