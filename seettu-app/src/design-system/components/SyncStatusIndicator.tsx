import { clsx } from 'clsx';
import { useOnlineStatus } from '../../shared/hooks/useOnlineStatus';

type SyncState = 'synced' | 'syncing' | 'offline';

interface Props {
  pendingCount?: number;
  isSyncing?: boolean;
}

export function SyncStatusIndicator({ pendingCount = 0, isSyncing = false }: Props) {
  const online = useOnlineStatus();

  const state: SyncState = !online ? 'offline' : isSyncing ? 'syncing' : 'synced';

  const config: Record<SyncState, { label: string; dotClass: string }> = {
    synced: { label: 'Synced', dotClass: 'bg-accent' },
    syncing: { label: 'Syncing…', dotClass: 'bg-warn animate-pulse' },
    offline: {
      label: pendingCount > 0 ? `Offline (${pendingCount} pending)` : 'Offline',
      dotClass: 'bg-danger',
    },
  };

  const { label, dotClass } = config[state];

  return (
    <div className="flex items-center gap-1.5 text-xs text-muted">
      <span className={clsx('w-2 h-2 rounded-full', dotClass)} />
      <span>{label}</span>
    </div>
  );
}
