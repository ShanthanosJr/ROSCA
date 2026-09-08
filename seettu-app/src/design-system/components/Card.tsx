import { clsx } from 'clsx';
import { HTMLAttributes } from 'react';

type Status = 'confirmed' | 'pending' | 'overdue' | 'none';
interface Props extends HTMLAttributes<HTMLDivElement> {
  status?: Status;
}

const statusBorderColors: Record<Status, string> = {
  confirmed: 'border-l-accent',
  pending: 'border-l-warn',
  overdue: 'border-l-danger',
  none: 'border-l-transparent',
};

export function Card({ status = 'none', className, children, ...props }: Props) {
  return (
    <div
      className={clsx(
        'bg-white rounded-lg p-5 border border-navy-ink/5 border-l-4 shadow-sm',
        statusBorderColors[status],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
