import { motion, useReducedMotion } from 'framer-motion'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              y: 12,
            }
      }
      animate={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: 0,
            }
      }
      exit={
        shouldReduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              y: -12,
            }
      }
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
