import { cn } from '../../lib/utils'

export type SectionHeaderProps = {
  title: string
  subtitle?: string
  eyebrow?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'space-y-3',
        align === 'center' && 'text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold text-slate-100 md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm text-slate-300 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
