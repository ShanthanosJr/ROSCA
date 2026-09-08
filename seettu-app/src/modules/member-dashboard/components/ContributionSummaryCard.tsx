import { formatLKR } from '../../../shared/utils/currency';
import { daysUntil } from '../../../shared/utils/dateMath';
import { Cycle, Group } from '../../../shared/types';

export function ContributionSummaryCard({ group, cycle }: { group: Group; cycle: Cycle }) {
  const days = daysUntil(cycle.dueDate);
  return (
    <div className="bg-surface1 rounded-lg p-5 border border-white/5">
      <p className="text-muted text-sm">{group.name}</p>
      <p className="text-white text-2xl font-bold mt-1">{formatLKR(group.contributionAmount)}</p>
      <p className={days <= 3 ? 'text-warn text-sm mt-2' : 'text-muted text-sm mt-2'}>
        {days >= 0 ? `Due in ${days} day(s)` : `Overdue by ${Math.abs(days)} day(s)`}
      </p>
    </div>
  );
}
