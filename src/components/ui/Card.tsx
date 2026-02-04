import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

export type CardVariant = 'default' | 'glow'

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant
  interactive?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', interactive = false, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'glass rounded-2xl border border-white/10 p-6 shadow-soft',
        variant === 'glow' && 'shadow-glow',
        interactive &&
          'transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-lift',
        className,
      )}
      {...props}
    />
  ),
)

Card.displayName = 'Card'

export default Card
