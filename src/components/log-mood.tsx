export function LogMood({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-linear-to-b from-[#F5F5FF]/73 to-[#E0E0FF]/100 rounded-2xl px-10 py-12">
      {children}
    </div>
  )
}

LogMood.Title = function LogMoodTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-preset-2 text-neutral-900">{children}</h2>
  )
}
