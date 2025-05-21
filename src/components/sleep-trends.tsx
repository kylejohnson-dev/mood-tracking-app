import Image from "next/image";
import { Chart } from "./chart";

export function SleepTrends() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4 bg-white rounded-2xl space-y-6 px-4 py-5">
        <div className="space-y-4">
          <p className="text-preset-5 text-neutral-900">
            Average Mood
            <span className="text-preset-7 text-neutral-600">(Last 5 Check-ins)</span>
          </p>
          <div className="relative h-[150px] place-content-center bg-blue-100 rounded-2xl overflow-hidden space-y-3 px-4 py-5">
            <Image 
                src="/bg-pattern-averages.svg"
                alt="pattern"
                width={243}
                height={251}
                className="z-10 absolute -top-[37px] -right-[156px]"
                aria-hidden="true"
              />
            <p className="text-preset-4 text-neutral-900">Keep tracking!</p>
            <span className="text-preset-7 text-neutral-900">Log 5 check-ins to see your average mood.</span>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-preset-5 text-neutral-900">
            Average Sleep
            <span className="text-preset-7 text-neutral-600">(Last 5 Check-ins)</span>
          </p>
          <div className="relative h-[150px] place-content-center bg-blue-100 rounded-2xl overflow-hidden space-y-3 px-4 py-5">
              <Image 
                src="/bg-pattern-averages.svg"
                alt="pattern"
                width={243}
                height={251}
                className="z-10 absolute -top-[37px] -right-[156px]"
                aria-hidden="true"
              />
            <p className="text-preset-4 text-neutral-900">Not enough data yet!</p>
            <span className="text-preset-7 text-neutral-900">Track 5 nights to view average sleep.</span>
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