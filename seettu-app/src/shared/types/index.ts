export type Role = 'member' | 'organizer' | 'community_leader';

export interface User {
  id: string;
  phone: string;
  fullName: string;
  role: Role;
}

export interface Group {
  id: string;
  name: string;
  organizerId: string;
  contributionAmount: number;
  frequency: 'weekly' | 'fortnightly' | 'monthly';
  turnOrderRule: 'fixed' | 'lottery' | 'organizer_decision';
  status: 'active' | 'completed' | 'dissolved';
}

export interface Cycle {
  id: string;
  groupId: string;
  cycleNumber: number;
  dueDate: string;
  payoutUserId: string | null;
  status: 'open' | 'collected' | 'paid_out' | 'closed';
}

export interface Transaction {
  id: string;
  clientGeneratedId: string;
  cycleId: string;
  groupId: string;
  payerId: string;
  amount: number;
  recordedBy: string;
  recordedAt: string;
  clientRecordedAt: string;
  method: 'cash' | 'bank_transfer' | 'organizer_manual';
  isConfirmed: boolean;
  synced: boolean; // local-only flag, not persisted server-side
}
