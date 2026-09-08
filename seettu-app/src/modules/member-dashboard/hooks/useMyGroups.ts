import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../../shared/api/apiClient';
import { Group } from '../../../shared/types';
import { mockGroups } from '../../../shared/api/mockData';

export function useMyGroups() {
  return useQuery<Group[]>({
    queryKey: ['groups', 'mine'],
    queryFn: async () => {
      if (import.meta.env.VITE_APP_ENV === 'development') return mockGroups;
      return apiClient.get<Group[]>('/groups/mine');
    },
  });
}
