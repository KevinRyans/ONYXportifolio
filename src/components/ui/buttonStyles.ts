import { cn } from '../../lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

const baseStyles =
  'focus-ring inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-60'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-accent-500 via-accent-400 to-teal-400 text-base-950 shadow-glow hover:-translate-y-0.5 hover:shadow-lift',
  secondary:
    'border border-white/10 bg-white/5 text-slate-100 hover:-translate-y-0.5 hover:bg-white/10',
  ghost: 'text-slate-300 hover:text-slate-100 hover:bg-white/5',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export function buttonStyles({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
} = {}) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className)
}
