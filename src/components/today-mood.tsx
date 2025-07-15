import { fetchTodayMood } from "@/lib/data";
import Image from "next/image";

const MOODS = [
  {
    id: -2,
    icon: "/icon-very-sad-color.svg",
    quotes: [
      "You are stronger than you think; the storm will pass.",
      "It's okay to cry. Healing begins when you let your feelings flow.",
      "Even in darkness, a spark of hope can shine bright.",
      "This moment is tough, but you've overcome challenges before.",
      "A gentle step forward, no matter how small, is still progress."
    ],
  },
  {
    id: -1,
    icon: "/icon-sad-color.svg",
    quotes: [
      "Pain is temporary, brighter days lie ahead.",
      "Each setback is a chance to grow and learn.",
      "One small positive thought can change your entire day.",
      "It's okay to rest; self-care isn't selfish.",
      "Healing takes time - be patient and kind to yourself."
    ],
  },
  {
    id: 0,
    icon: "/icon-neutral-color.svg",
    quotes: [
      "A calm mind can find opportunity in every moment.",
      "Sometimes the greatest triumph is simply finding peace.",
      "Take a moment to breathe; every breath is a fresh start.",
      "Even an ordinary day can hold a pleasant surprise.",
      "Balance isn't found, it's created."
    ],
  },
  {
    id: 1,
    icon: "/icon-happy-color.svg",
    quotes: [
      "Happiness grows when it's shared with others.",
      "Celebrate even the small victories to make life extraordinary.",
      "Gratitude can turn what you have into enough.",
      "Keep smiling; your joy can be contagious.",
      "Where focus goes, energy flows - keep your focus on what lifts you."
    ],
  },
  {
    id: 2,
    icon: "/icon-very-happy-color.svg",
    quotes: [
      "When your heart is full, share your light with the world.",
      "Savor the highs in life; they become precious memories.",
      "Joy multiplies when spread among friends.",
      "Trust your journey; you're in a beautiful place right now.",
      "Let your happiness ripple out and inspire others."
    ]
  }
]

export async function TodayMood() {
  const todayMood = await fetchTodayMood();

  if (!todayMood) {
    return (
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      </section>
    );
  }

  function convertMoodIndexToMood(index: number) {
    if (index < -2 || index > 2) {
      throw new Error("Invalid mood index");
    }

    switch (index) {
      case -2:
        return "Very Sad";
      case -1:
        return "Sad";
      case 0:
        return "Neutral";
      case 1:
        return "Happy";
      case 2:
        return "Very Happy";  
      default:
        break;
    }
  }

  function getMoodIcon(index: number) {
    if (index < -2 || index > 2) {
      throw new Error("Invalid mood index");
    } 

    return MOODS.find(mood => mood.id === index)?.icon;
  }

  function getMoodQuote(index: number) {
    if (index < -2 || index > 2) {
      throw new Error("Invalid mood index");
    }

    const quotes = MOODS.find(mood => mood.id === index)?.quotes;

    if (!quotes || quotes.length === 0) {
      throw new Error("No quotes found for this mood index");
    }

    // Return a random quote from the array
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="relative md:flex md:flex-col md:justify-between lg:col-span-8 md:h-[340px] bg-white rounded-2xl md:overflow-hidden space-y-6 px-4 py-8 md:p-8">
        <span className="block w-full text-center md:text-left">
          <span className="text-preset-3 text-neutral-900/75">I&#39;m feeling</span>
          <br />
          <span className="text-preset-2 text-neutral-900">{convertMoodIndexToMood(todayMood.mood)}</span>
        </span>
        <Image 
          src={getMoodIcon(todayMood.mood) || ""}
          alt="mood icon"
          width={200}
          height={200}
          className="md:absolute md:right-10 md:top-[50px] md:w-[320px] md:h-[320px] mx-auto"
        />
        <div className="md:w-[246px] flex flex-col items-center md:items-baseline justify-center space-y-4">
          <Image 
            src="/icon-quote.svg"
            alt="quote icon"
            width={24}
            height={24}
          />
          <p className="text-preset-6-italic text-neutral-90 text-center md:text-left">{getMoodQuote(todayMood.mood)}</p>
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
          <p className="text-preset-3 text-neutral-900">{todayMood.sleep_hours} hours</p>
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
            <p className="text-preset-6 text-neutral-900">{todayMood.journal_entry}</p>
          </div>
          <div className="flex items-center space-x-3">
            {todayMood.feelings.map((feeling) => (
              <span key={feeling} className="text-preset-6-italic text-neutral-600">#{feeling}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}