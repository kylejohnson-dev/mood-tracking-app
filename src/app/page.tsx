import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { TodayMoodSkeleton } from "@/components/skeletons";
import { SleepTrends } from "@/components/sleep-trends";
import { TodayMood } from "@/components/today-mood";
import { fetchMoodEntries } from "@/lib/data";
import { Suspense } from "react";

export default async function Home() {
  // Add limit if needed to check ternary condition in sleep-trends.tsx
  const mood_entries = await fetchMoodEntries();

  return (
    <div className="max-w-[1170px] min-h-screen px-4 mx-auto font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="pb-16 md:pb-20">
        {/* hero section */}
        <Hero />
        <div className="space-y-8">
          <Suspense fallback={<TodayMoodSkeleton />}>
            <TodayMood />
          </Suspense>
          {/* Sleep trends */}
          <SleepTrends mood_entries={mood_entries} />
        </div>
      </main>
    </div>
  );
}
