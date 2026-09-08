import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-accent text-canvas hover:opacity-90',
  secondary: 'bg-surface2 text-white border border-white/10',
  ghost: 'bg-transparent text-accentAlt',
  danger: 'bg-danger text-white',
};

export function Button({ variant = 'primary', className, ...props }: Props) {
  return (
    <button
      className={clsx(
        'min-h-[48px] px-5 rounded-pill font-medium transition-opacity',
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
