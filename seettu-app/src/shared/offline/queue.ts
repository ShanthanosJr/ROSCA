import { db } from './db';
import { generateId } from '../utils/idGen';
import { Transaction } from '../types';
import { syncEngine } from './syncEngine';

type NewTransaction = Omit<Transaction, 'id' | 'clientGeneratedId' | 'recordedAt' | 'clientRecordedAt' | 'isConfirmed' | 'synced'>;

export async function enqueueTransaction(tx: NewTransaction): Promise<Transaction> {
  const record: Transaction & { synced: boolean } = {
    ...tx,
    id: generateId(),
    clientGeneratedId: generateId(),
    recordedAt: new Date().toISOString(),
    clientRecordedAt: new Date().toISOString(),
    isConfirmed: false,
    synced: false,
  };
  await db.outbox.add(record);
  await db.transactionsCache.add(record);
  syncEngine.flush();
  return record;
}
