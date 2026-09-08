import { useState } from 'react';
import { Button } from '../../../design-system/components/Button';
import { useRecordPayment } from '../hooks/useRecordPayment';
import { Cycle, Group } from '../../../shared/types';
import { useAppStore } from '../../../store/rootStore';

export function PayNowSheet({ group, cycle, onClose }: { group: Group; cycle: Cycle; onClose: () => void }) {
  const user = useAppStore((s) => s.user);
  const [method, setMethod] = useState<'cash' | 'bank_transfer'>('bank_transfer');
  const { mutate, isPending } = useRecordPayment();

  function confirm() {
    if (!user) return;
    mutate({
      cycleId: cycle.id,
      groupId: group.id,
      payerId: user.id,
      amount: group.contributionAmount,
      recordedBy: user.id,
      method,
    });
    onClose();
  }

  return (
    <div className="fixed inset-x-0 bottom-0 bg-surface2 rounded-t-lg p-6 border-t border-white/10">
      <h3 className="text-white text-lg font-semibold mb-4">Confirm your contribution</h3>
      <div className="flex gap-3 mb-4">
        {(['bank_transfer', 'cash'] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMethod(m)}
            className={`px-4 py-2 rounded-pill text-sm ${method === m ? 'bg-accent text-canvas' : 'bg-surface1 text-muted'}`}
          >
            {m === 'bank_transfer' ? 'Bank Transfer' : 'Cash'}
          </button>
        ))}
      </div>
      <Button onClick={confirm} disabled={isPending}>
        {isPending ? 'Recording…' : 'Confirm Payment'}
      </Button>
    </div>
  );
}
