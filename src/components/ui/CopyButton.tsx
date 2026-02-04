import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { cn } from '../../lib/utils'

export default function CopyButton({
  value,
  label,
  copiedLabel,
}: {
  value: string
  label: string
  copiedLabel: string
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        'focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 transition hover:border-white/20 hover:text-white',
        copied && 'border-teal-400/40 text-teal-200',
      )}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? copiedLabel : label}
    </button>
  )
}
