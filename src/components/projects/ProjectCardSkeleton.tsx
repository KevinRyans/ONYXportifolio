import { cn } from '../../lib/utils'

export default function ProjectCardSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={`skeleton-${index}`}
          className={cn(
            'rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft',
          )}
        >
          <div className="h-4 w-2/3 rounded-full bg-white/10" />
          <div className="mt-3 h-3 w-full rounded-full bg-white/5" />
          <div className="mt-2 h-3 w-4/5 rounded-full bg-white/5" />
          <div className="mt-4 flex gap-2">
            <div className="h-6 w-16 rounded-full bg-white/10" />
            <div className="h-6 w-20 rounded-full bg-white/10" />
          </div>
          <div className="mt-6 flex justify-between">
            <div className="h-3 w-20 rounded-full bg-white/10" />
            <div className="h-3 w-14 rounded-full bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  )
}
