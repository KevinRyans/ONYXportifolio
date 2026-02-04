import { cn } from '../../lib/utils'

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: 'default' | 'accent'
}

const toneStyles = {
  default: 'bg-white/10 text-slate-200',
  accent: 'bg-accent-500/20 text-accent-300',
}

export default function Badge({ tone = 'default', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-transparent px-3 py-1 text-xs font-medium uppercase tracking-wide transition',
        toneStyles[tone],
        'hover:-translate-y-0.5 hover:border-white/20',
        className,
      )}
      {...props}
    />
  )
}
