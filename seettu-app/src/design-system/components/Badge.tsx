import { clsx } from 'clsx';

type Variant = 'success' | 'warning' | 'danger' | 'info';
interface Props {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  success: 'bg-accent/15 text-accent',
  warning: 'bg-warn/15 text-warn',
  danger: 'bg-danger/15 text-danger',
  info: 'bg-accentAlt/15 text-accentAlt',
};

export function Badge({ variant = 'info', className, children }: Props) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-pill text-xs font-medium',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
