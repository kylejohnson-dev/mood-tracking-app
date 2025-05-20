import { Chart } from "@/components/chart";
import { LogMood } from "@/components/log-mood";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1170px] min-h-screen px-4 mx-auto font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="pb-16 md:pb-20">
        {/* hero section */}
        <div className="text-center">
          <div className="my-12 lg:my-16">
            <p className="text-preset-3 text-blue-600">Hello, Lisa!</p>
            <p className="text-preset-1 text-neutral-900">How are you feelin today?</p>
            <p className="text-preset-6 text-neutral-600">Wednesday, April 16th, 2025</p>
          </div>
          <LogMood />
        </div>
        {/*  */}
        <div className="space-y-8">
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
          {/*  */}
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
        </div>
      </main>
    </div>
  );
}
