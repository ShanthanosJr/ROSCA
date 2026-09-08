// Module-scoped API calls for the member dashboard
// Built on shared/api/apiClient — never call fetch directly
import { apiClient } from '../../shared/api/apiClient';
import { Group, Cycle } from '../../shared/types';

export async function fetchMyGroups(): Promise<Group[]> {
  return apiClient.get<Group[]>('/groups/mine');
}

export async function fetchGroupCycles(groupId: string): Promise<Cycle[]> {
  return apiClient.get<Cycle[]>(`/groups/${groupId}/cycles`);
}
