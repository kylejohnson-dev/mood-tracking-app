import Image from "next/image";
import { Chart } from "./chart";
import { MoodEntryType } from "@/lib/data";
import clsx from "clsx";
import { MoveDownRight, MoveRight } from "lucide-react";

const MOODS = [
  {
    number: -2,
    icon: "/icon-very-sad.svg",
    text: "Very Sad",
  },
  {
    number: -1,
    icon: "/icon-sad.svg",
    text: "Sad",
  },
  {
    number: 0,
    icon: "/icon-neutral.svg",
    text: "Neutral",
  },
  {
    number: 1,
    icon: "/icon-happy.svg",
    text: "Happy",
  },
  {
    number: 2,
    icon: "/icon-very-happy.svg",
    text: "Very Happy",
  },
];

export function SleepTrends({ mood_entries } : { mood_entries: MoodEntryType[] }) {
  // const [mood, setMood] = useState<MoodType | null>(null);
  // const { user } = useAuth();


  function getAverageMood() {
    const mood_entries_length = mood_entries.length;

    if (mood_entries_length < 5) {
      return "Log 5 check-ins to see your average mood.";
    }

    // round the mood entries to the last 5
    const lastFiveEntries = mood_entries.slice(0, 5);
    const averageMoodValue = lastFiveEntries.reduce((acc, entry) => acc + entry.mood, 0) / lastFiveEntries.length;

    return (MOODS.find(m => m.number === Math.round(averageMoodValue)) || null);
  }

  const averageMood = getAverageMood();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4 bg-white rounded-2xl space-y-6 px-4 py-5">
        <div className="space-y-4">
          <p className="text-preset-5 text-neutral-900">
            Average Mood
            <span className="text-preset-7 text-neutral-600"> (Last 5 Check-ins)</span>
          </p>
          <div 
            className={clsx(
              mood_entries.length < 5 ? "bg-blue-100" : 
              typeof averageMood === "object" && averageMood?.number === -2 ? "bg-red-300" :
              typeof averageMood === "object" && averageMood?.number === -1 ? "bg-nuetral-600" : 
              typeof averageMood === "object" && averageMood?.number === 0 ? "bg-blue-300" :
              typeof averageMood === "object" && averageMood?.number === 1 ? "bg-green-300" :
              typeof averageMood === "object" && averageMood?.number === 2 ? "bg-amber-300" : "",
              "relative h-[150px] place-content-center rounded-2xl overflow-hidden space-y-3 px-4 py-5"
            )}
          >
            <Image 
              src="/bg-pattern-averages.svg"
              alt="pattern"
              width={243}
              height={251}
              className="z-10 absolute -top-[37px] -right-[156px]"
              aria-hidden="true"
            />
            {mood_entries.length > 5 ? (
              <>
                <div className="flex items-center space-x-4">
                  <Image 
                    src={typeof averageMood === "object" && averageMood?.icon ? averageMood.icon : "/icon-neutral-white.svg"}
                    alt="Mood Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  {/* {mood?.icon} */}
                  <p className="text-preset-4 text-neutral-900">
                    {typeof averageMood === "object" && averageMood !== null ? averageMood.text : ""}
                  </p>
                </div>
                <span className="flex items-center space-x-2">
                  <MoveRight className="w-4 h-4" />
                  <p className="text-preset-6-italic text-neutral-900">Same as the previous 5 check-ins</p>
                </span>
              </>
            ) : (
              <>
                <p className="text-preset-4 text-neutral-900">Keep tracking!</p>
                <span className="text-preset-7 text-neutral-900">Log 5 check-ins to see your average mood.</span>
              </>
            )}
            
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-preset-5 text-neutral-900">
            Average Sleep
            <span className="text-preset-7 text-neutral-600"> (Last 5 Check-ins)</span>
          </p>
          <div 
            className={clsx(
              mood_entries.length > 5 ? "bg-blue-600" : "bg-blue-100",
              "relative h-[150px] place-content-center rounded-2xl overflow-hidden space-y-3 px-4 py-5"
            )}
          >
              <Image 
                src="/bg-pattern-averages.svg"
                alt="pattern"
                width={243}
                height={251}
                className="z-10 absolute -top-[37px] -right-[156px]"
                aria-hidden="true"
              />
            {mood_entries.length > 5 ? (
              <>
                <div className="flex items-center space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 16 16" opacity={0.7}>
                    <path fill="#FFFFFF" d="M10 .906c-.031.219-.125.531-.25.688L7.156 4.5H9c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5H5.5a.494.494 0 0 1-.5-.5v-.406c0-.188.094-.5.219-.657L7.812 1.5H6a.494.494 0 0 1-.5-.5V.5c0-.25.219-.5.5-.5h3.5c.25 0 .5.25.5.5v.406ZM7.25 8a.76.76 0 0 1 .75.75v.813c-.031.218-.156.53-.313.687L3.876 14H7.5c.25 0 .5.25.5.5v1c0 .281-.25.5-.5.5H1.75a.722.722 0 0 1-.75-.75v-.781c0-.219.125-.531.281-.688L5.094 10H2a.494.494 0 0 1-.5-.5v-1c0-.25.219-.5.5-.5h5.25Zm7.25-1c.25 0 .5.25.5.5v.406c-.031.219-.125.532-.25.688L12.156 11.5H14c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-3.5a.494.494 0 0 1-.5-.5v-.406c0-.188.094-.5.219-.656L12.813 8.5H11a.494.494 0 0 1-.5-.5v-.5c0-.25.219-.5.5-.5h3.5Z"/>
                  </svg>
                  <p className="text-preset-4 text-white">5-6 Hours</p>
                </div>
                <span className="flex space-x-2">
                  <MoveDownRight className="opacity-70" color="white" />
                  <p className="text-preset-6-italic text-white opacity-70">Decrease from the previous 5 check-ins</p>
                </span>
              </>
            ) : (
              <>
                <p className="text-preset-4 text-neutral-900">Not enough data yet!</p>
                <span className="text-preset-7 text-neutral-900">Track 5 nights to view average sleep.</span>
              </>
            )
          }
          </div>
        </div>
      </div>
      <div className="lg:col-span-8 bg-white rounded-2xl space-y-8 p-8">
        <p className="text-preset-3 text-neutral-900">Mood and sleep trends</p>
        <div>
          <Chart />
        </div>
      </div>
    </section>
  );
}

// function AverageMood() {
//   return (
//     <div className="space-y-4">
//       <p className="text-preset-5 text-neutral-900">
//         Average Mood
//         <span className="text-preset-7 text-neutral-600"> (Last 5 Check-ins)</span>
//       </p>
//       <div 
//         className={clsx(
//           mood_entries.length < 5 ? "bg-blue-100" : 
//           typeof averageMood === "object" && averageMood?.number === -2 ? "bg-red-300" :
//           typeof averageMood === "object" && averageMood?.number === -1 ? "bg-nuetral-600" : 
//           typeof averageMood === "object" && averageMood?.number === 0 ? "bg-blue-300" :
//           typeof averageMood === "object" && averageMood?.number === 1 ? "bg-green-300" :
//           typeof averageMood === "object" && averageMood?.number === 2 ? "bg-amber-300" : "",
//           "relative h-[150px] place-content-center rounded-2xl overflow-hidden space-y-3 px-4 py-5"
//         )}
//       >
//         <Image 
//           src="/bg-pattern-averages.svg"
//           alt="pattern"
//           width={243}
//           height={251}
//           className="z-10 absolute -top-[37px] -right-[156px]"
//           aria-hidden="true"
//         />
//         {mood_entries.length > 5 ? (
//           <>
//             <div className="flex items-center space-x-4">
//               <Image 
//                 src={typeof averageMood === "object" && averageMood?.icon ? averageMood.icon : "/icon-neutral-white.svg"}
//                 alt="Mood Icon"
//                 width={24}
//                 height={24}
//                 className="w-6 h-6"
//               />
//               {/* {mood?.icon} */}
//               <p className="text-preset-4 text-neutral-900">
//                 {typeof averageMood === "object" && averageMood !== null ? averageMood.text : ""}
//               </p>
//             </div>
//             <span className="flex items-center space-x-2">
//               <MoveRight className="w-4 h-4" />
//               <p className="text-preset-6-italic text-neutral-900">Same as the previous 5 check-ins</p>
//             </span>
//           </>
//         ) : (
//           <>
//             <p className="text-preset-4 text-neutral-900">Keep tracking!</p>
//             <span className="text-preset-7 text-neutral-900">Log 5 check-ins to see your average mood.</span>
//           </>
//         )}
        
//       </div>
//     </div>
//   )
// }