import Dexie, { Table } from 'dexie';
import { Transaction } from '../types';

export interface OutboxItem extends Transaction {
  synced: boolean;
}

class SeettuDB extends Dexie {
  outbox!: Table<OutboxItem, string>;
  transactionsCache!: Table<Transaction, string>;

  constructor() {
    super('seettu-db');
    this.version(1).stores({
      outbox: 'clientGeneratedId, synced',
      transactionsCache: 'id, groupId, cycleId, payerId',
    });
  }
}

export const db = new SeettuDB();
