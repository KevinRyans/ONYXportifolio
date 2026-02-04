import { Link } from 'react-router-dom'
import { profile } from '../content/profile'
import { buttonStyles } from '../components/ui/buttonStyles'

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-20 text-center">
      <h1 className="text-3xl font-semibold text-white">{profile.labels.notFoundTitle}</h1>
      <p className="mt-3 text-sm text-slate-400">{profile.labels.notFoundSubtitle}</p>
      <Link to="/" className={buttonStyles({ variant: 'secondary', className: 'mt-6' })}>
        {profile.labels.backHomeLabel}
      </Link>
    </div>
  )
}
