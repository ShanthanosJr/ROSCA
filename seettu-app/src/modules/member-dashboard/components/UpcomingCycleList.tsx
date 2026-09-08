import { Cycle } from '../../../shared/types';
import { daysUntil } from '../../../shared/utils/dateMath';
import { Badge } from '../../../design-system/components/Badge';

interface Props {
  cycles: Cycle[];
  onSelectCycle: (cycle: Cycle) => void;
}

export function UpcomingCycleList({ cycles, onSelectCycle }: Props) {
  if (cycles.length === 0) {
    return <p className="text-muted text-sm text-center py-4">No upcoming cycles</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-white text-lg font-semibold">Upcoming Cycles</h2>
      {cycles.map((cycle) => {
        const days = daysUntil(cycle.dueDate);
        const variant = days <= 0 ? 'danger' : days <= 3 ? 'warning' : 'info';
        return (
          <button
            key={cycle.id}
            onClick={() => onSelectCycle(cycle)}
            className="bg-surface1 rounded-md p-4 border border-white/5 flex items-center justify-between text-left w-full hover:border-accent/30 transition-colors"
          >
            <div>
              <p className="text-white text-sm font-medium">Cycle #{cycle.cycleNumber}</p>
              <p className="text-muted text-xs mt-0.5">{cycle.dueDate}</p>
            </div>
            <Badge variant={variant}>
              {days >= 0 ? `${days}d left` : `${Math.abs(days)}d overdue`}
            </Badge>
          </button>
        );
      })}
    </div>
  );
}
