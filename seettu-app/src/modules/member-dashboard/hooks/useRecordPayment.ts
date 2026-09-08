import { useMutation, useQueryClient } from '@tanstack/react-query';
import { enqueueTransaction } from '../../../shared/offline/queue';
import { Transaction } from '../../../shared/types';

export function useRecordPayment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (tx: Omit<Transaction, 'id'|'clientGeneratedId'|'recordedAt'|'clientRecordedAt'|'isConfirmed'|'synced'>) =>
      enqueueTransaction(tx),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
    },
  });
}
