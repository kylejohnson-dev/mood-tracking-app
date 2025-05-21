import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { SleepTrends } from "@/components/sleep-trends";
import { TodayMood } from "@/components/today-mood";

export default function Home() {
  return (
    <div className="max-w-[1170px] min-h-screen px-4 mx-auto font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="pb-16 md:pb-20">
        {/* hero section */}
        <Hero />
        {/*  */}
        <div className="space-y-8">
          <TodayMood />
          {/* Sleep trends */}
          <SleepTrends />
        </div>
      </main>
    </div>
  );
}
