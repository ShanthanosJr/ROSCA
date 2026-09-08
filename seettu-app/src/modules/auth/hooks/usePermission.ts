import { useAppStore } from '../../../store/rootStore';

const CAPABILITIES: Record<string, string[]> = {
  member: ['view_own_transactions', 'record_own_payment', 'view_turn_order'],
  organizer: ['view_own_transactions', 'record_any_payment', 'manage_turn_order', 'create_group', 'trigger_payout'],
  community_leader: ['view_aggregate_reports'],
};

export function usePermission(action: string): boolean {
  const user = useAppStore((s) => s.user);
  if (!user) return false;
  return CAPABILITIES[user.role]?.includes(action) ?? false;
}
