import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-[1170px] min-h-screen px-4 mx-auto font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="space-y-14">
        {/* hero section */}
        <div className="text-center">
          <div className="my-12 lg:my-16">
            <p className="text-preset-3 text-blue-600">Hello, Lisa!</p>
            <p className="text-preset-1 text-neutral-900">How are you feelin today?</p>
            <p className="text-preset-6 text-neutral-600">Wednesday, April 16th, 2025</p>
          </div>
          <Button className="h-[60px] bg-blue-600 text-preset-5 text-white px-8 py-4">Log today&#39;s mood</Button>
        </div>
        {/*  */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 bg-white rounded-2xl space-y-6 px-4 py-5">
            <div className="space-y-4">
              <p className="text-preset-5 text-neutral-900">
                Average Mood
                <span className="text-preset-7 text-neutral-600">(Last 5 Check-ins)</span>
              </p>
              <div className="h-[150px] place-content-center bg-blue-100 rounded-2xl space-y-3 px-4 py-5">
                <p className="text-preset-4 text-neutral-900">Keep tracking!</p>
                <span className="text-preset-7 text-neutral-900">Log 5 check-ins to see your average mood.</span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-preset-5 text-neutral-900">
                Average Sleep
                <span className="text-preset-7 text-neutral-600">(Last 5 Check-ins)</span>
              </p>
              <div className="h-[150px] place-content-center bg-blue-100 rounded-2xl space-y-3 px-4 py-5">
                <p className="text-preset-4 text-neutral-900">Not enough data yet!</p>
                <span className="text-preset-7 text-neutral-900">Track 5 nights to view average sleep.</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 bg-white rounded-2xl">

          </div>
        </section>
      </main>
    </div>
  );
}
