import { db } from './db';
import { apiClient } from '../api/apiClient';

class SyncEngine {
  private syncing = false;

  async flush(): Promise<void> {
    if (this.syncing || !navigator.onLine) return;
    this.syncing = true;
    try {
      const pending = await db.outbox.where('synced').equals(0).toArray();
      for (const item of pending) {
        try {
          const confirmed = await apiClient.post<Record<string, unknown>>(`/cycles/${item.cycleId}/transactions`, item);
          await db.outbox.update(item.clientGeneratedId, { synced: true });
          await db.transactionsCache.update(item.id, { isConfirmed: true, ...confirmed });
        } catch (err) {
          console.warn('Sync failed for item, will retry', item.clientGeneratedId, err);
          break; // stop on first failure to preserve order; retry on next flush
        }
      }
    } finally {
      this.syncing = false;
    }
  }
}

export const syncEngine = new SyncEngine();

window.addEventListener('online', () => syncEngine.flush());
