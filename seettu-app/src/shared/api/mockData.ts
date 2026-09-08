import { Group, Cycle, Transaction, User } from '../types';

export const mockUser: User = { id: 'u1', phone: '+94711234567', fullName: 'Nadeeshi Perera', role: 'member' };

export const mockGroups: Group[] = [
  { id: 'g1', name: 'Office Seettu', organizerId: 'u2', contributionAmount: 5000, frequency: 'monthly', turnOrderRule: 'fixed', status: 'active' },
];

export const mockCycles: Cycle[] = [
  { id: 'c1', groupId: 'g1', cycleNumber: 3, dueDate: '2026-09-15', payoutUserId: 'u3', status: 'open' },
];

export const mockTransactions: Transaction[] = [
  { id: 't1', clientGeneratedId: 'cg1', cycleId: 'c1', groupId: 'g1', payerId: 'u1', amount: 5000,
    recordedBy: 'u1', recordedAt: '2026-09-01T10:00:00Z', clientRecordedAt: '2026-09-01T10:00:00Z',
    method: 'bank_transfer', isConfirmed: true, synced: true },
];
