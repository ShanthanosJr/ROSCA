import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, id, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-muted text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={id}
        className={clsx(
          'bg-surface2 text-white rounded-md px-4 py-3 border transition-colors',
          'placeholder:text-muted/50 focus:outline-none focus:border-accent',
          error ? 'border-danger' : 'border-white/10',
          className
        )}
        {...props}
      />
      {error && <p className="text-danger text-sm">{error}</p>}
    </div>
  );
}
