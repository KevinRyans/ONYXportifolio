import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/utils'

export default function Reveal({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      className={cn('scroll-mt-20', className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
