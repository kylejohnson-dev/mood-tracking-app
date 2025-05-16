"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import Image from "next/image"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartData2 = [
  {
    createdAt: "2025-03-20T09:00:00Z",
    mood: 2,
    feelings: ["Joyful", "Motivated", "Hopeful"],
    journalEntry: "Had an amazing morning run and feel full of energy!",
    sleepHours: 7.5
  },
  {
    createdAt: "2025-03-24T10:30:00Z",
    mood: 1,
    feelings: ["Grateful", "Calm"],
    journalEntry: "Spent time with family, feeling relaxed and thankful.",
    sleepHours: 7.5
  },
  {
    createdAt: "2025-03-26T08:15:00Z",
    mood: 0,
    feelings: ["Peaceful"],
    journalEntry: "Routine day at work, nothing too exciting or stressful.",
    sleepHours: 5.5
  },
  {
    createdAt: "2025-03-28T07:50:00Z",
    mood: -1,
    feelings: ["Down", "Tired"],
    journalEntry: "Tough day. Didn't sleep well and felt drained at work.",
    sleepHours: 3.5
  },
  {
    createdAt: "2025-03-31T11:00:00Z",
    mood: -1,
    feelings: ["Disappointed", "Frustrated"],
    journalEntry: "Got some bad news. Trying to process my emotions.",
    sleepHours: 5.5
  },
  {
    createdAt: "2025-04-02T12:05:00Z",
    mood: 1,
    feelings: ["Excited", "Content"],
    journalEntry: "A good friend visited, which lifted my spirits a lot.",
    sleepHours: 7.5
  },
  {
    createdAt: "2025-04-04T09:15:00Z",
    mood: -2,
    feelings: ["Overwhelmed", "Lonely"],
    journalEntry: "Feeling isolated. Need to talk to someone soon.",
    sleepHours: 3.5
  },
  {
    createdAt: "2025-04-06T19:45:00Z",
    mood: 0,
    feelings: ["Irritable"],
    journalEntry: "Woke up in a grouchy mood but it got better by evening.",
    sleepHours: 5.5
  },
  {
    createdAt: "2025-04-07T10:55:00Z",
    mood: 1,
    feelings: ["Optimistic", "Confident"],
    journalEntry: "Good progress on personal goals today, feeling proud.",
    sleepHours: 7.5
  },
  {
    createdAt: "2025-04-09T07:30:00Z",
    mood: 2,
    feelings: ["Joyful", "Excited", "Grateful"],
    journalEntry: "Slept well and woke up ready to tackle new challenges.",
    sleepHours: 9
  },
  {
    createdAt: "2025-04-10T08:30:00Z",
    mood: -1,
    feelings: ["Lonely", "Anxious"],
    journalEntry: "Feeling a bit off. Hoping tomorrow is better.",
    sleepHours: 3.5
  },
  {
    createdAt: "2025-04-12T08:00:00Z",
    mood: 0,
    feelings: ["Calm"],
    journalEntry: "Quiet day at home, reading and resting.",
    sleepHours: 7.5
  },
  {
    createdAt: "2025-04-13T09:00:00Z",
    mood: 1,
    feelings: ["Optimistic", "Confident"],
    journalEntry: "Had a productive morning cleaning and organizing.",
    sleepHours: 7.5
  },
  {
    createdAt: "2025-04-14T10:00:00Z",
    mood: -2,
    feelings: ["Down", "Tired"],
    journalEntry: "Rough night of sleep. Need support and rest.",
    sleepHours: 3.5
  },
  {
    createdAt: "2025-04-15T11:00:00Z",
    mood: 2,
    feelings: ["Grateful", "Optimistic"],
    journalEntry: "Woke up early and finally tackled a big project!",
    sleepHours: 9
  }
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

const chartConfig2 = {
  // mood: {
  //   label: "Mood",
  //   color: "#2563eb",
  // },
  sleepHours: {
    label: "Sleep Hours",
    color: "#60a5fa",
  },
} satisfies ChartConfig

const renderCustomAxisTick = ({ payload }: { payload: { value: string } }) => {
  // let path = '';

  console.log(payload.value)

  // switch (payload.value) {
  //   case 'Page A':
  //     path = 'M899.072 99.328q9.216 13.312 17.92 48.128t16.384 81.92 13.824 100.352 11.264 102.912 9.216 90.112 6.144 60.928q4.096 30.72 7.168 70.656t5.632 79.872 4.096 75.264 2.56 56.832q-13.312 16.384-30.208 25.6t-34.304 11.264-34.304-2.56-30.208-16.896q-1.024-10.24-3.584-33.28t-6.144-53.76-8.192-66.56-8.704-71.68q-11.264-83.968-23.552-184.32-7.168 37.888-11.264 74.752-4.096 31.744-6.656 66.56t-0.512 62.464q1.024 18.432 3.072 29.184t4.608 19.968 5.12 21.504 5.12 34.304 5.12 56.832 4.608 90.112q-11.264 24.576-50.688 42.496t-88.576 29.696-97.28 16.896-74.752 5.12q-18.432 0-46.08-2.56t-60.416-7.168-66.048-12.288-61.952-17.92-49.664-24.064-28.16-30.208q2.048-55.296 5.12-90.112t5.632-56.832 5.12-34.304 5.12-21.504 4.096-19.968 3.584-29.184q2.048-27.648-0.512-62.464t-6.656-66.56q-4.096-36.864-11.264-74.752-13.312 100.352-24.576 184.32-5.12 35.84-9.216 71.68t-8.192 66.56-6.656 53.76-2.56 33.28q-13.312 12.288-30.208 16.896t-34.304 2.56-33.792-11.264-29.696-25.6q0-21.504 2.048-56.832t4.096-75.264 5.632-79.872 6.656-70.656q2.048-20.48 6.144-60.928t9.728-90.112 11.776-102.912 13.824-100.352 16.384-81.92 17.92-48.128q20.48-12.288 56.32-25.6t73.216-26.624 71.168-25.088 50.176-22.016q10.24 13.312 16.896 61.44t13.312 115.712 15.36 146.432 23.04 153.6l38.912-334.848-29.696-25.6 43.008-54.272 15.36 2.048 15.36-2.048 43.008 54.272-29.696 25.6 38.912 334.848q14.336-74.752 23.04-153.6t15.36-146.432 13.312-115.712 16.896-61.44q16.384 10.24 50.176 22.016t71.168 25.088 73.216 26.624 56.32 25.6';
  //     break;
  //   case 'Page B':
  //     path = 'M662.528 451.584q10.24 5.12 30.208 16.384t46.08 31.744 57.856 52.736 65.024 80.896 67.072 115.2 64.512 154.624q-15.36 9.216-31.232 21.504t-31.232 22.016-31.744 15.36-32.768 2.56q-44.032-9.216-78.336-8.192t-62.976 7.68-53.248 16.896-47.616 19.968-46.08 16.384-49.664 6.656q-57.344-1.024-110.592-16.896t-101.376-32.256-89.6-25.088-75.264 4.608q-20.48 8.192-41.984 1.024t-38.912-18.432q-20.48-13.312-39.936-33.792 37.888-116.736 86.016-199.68t92.672-136.704 78.848-81.408 43.52-33.792q9.216-5.12 10.24-25.088t-1.024-40.448q-3.072-24.576-9.216-54.272l-150.528-302.08 180.224-29.696q27.648 52.224 53.76 79.36t50.176 36.864 45.568 5.12 39.936-17.92q43.008-30.72 80.896-103.424l181.248 29.696q-20.48 48.128-45.056 99.328-20.48 44.032-47.616 97.28t-57.856 105.472q-12.288 34.816-13.824 57.344t1.536 36.864q4.096 16.384 12.288 25.6z';
  //     break;
  //   default:
  //     path = '';
  // }

  return (
    <text>{payload.value}</text>
  );
};

export function Chart() {
  return (
    <ChartContainer config={chartConfig2} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData2}>
        <CartesianGrid vertical={false} />
        <XAxis 
          dataKey="createdAt"
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => {
            const date = new Date(value)
            
            return date.toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
            })
          }}
        />
        <YAxis 
          dataKey="sleepHours"
          axisLine={false}
          // tickLine={false}
          tickCount={6}
          tickFormatter={(value) => {
            if (value % 2 !== 0 || value === 0) {
              // Skip odd values and zero
              return "";
            }

            return `${value - 2}-${value} hours`
          }}
          // tick={renderCustomAxisTick}
        />
        <Bar dataKey="sleepHours" fill="var(--color-sleepHours)" radius={999} />
        {/* <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} /> */}
        {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
      </BarChart>
    </ChartContainer>
  )
}

// function Tick({ payload }: { payload: unknown }) {
//   const { value } = payload
//   console.log(value)
//   return (
//     // <span className="flex items-center space-y-1.5">
//     //   <Image 
//     //     src="/icon-sleep.svg"
//     //     alt="sleep"
//     //     width={10}
//     //     height={10}
//     //   />
//     //   <span>0-2 hours</span>
//     // </span>
//     <span>{value}</span>
//   )
// }