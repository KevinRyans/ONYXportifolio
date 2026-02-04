import { forwardRef } from 'react'
import { buttonStyles, type ButtonSize, type ButtonVariant } from './buttonStyles'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => (
    <button
      ref={ref}
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  ),
)

Button.displayName = 'Button'

export default Button
