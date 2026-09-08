import { useMyGroups } from './hooks/useMyGroups';
import { ContributionSummaryCard } from './components/ContributionSummaryCard';
import { PayNowSheet } from './components/PayNowSheet';
import { UpcomingCycleList } from './components/UpcomingCycleList';
import { useMemberDashboardStore } from './store';
import { mockCycles } from '../../shared/api/mockData';
import { SyncStatusIndicator } from '../../design-system/components/SyncStatusIndicator';
import { Cycle } from '../../shared/types';

export function MemberDashboardPage() {
  const { data: groups, isLoading } = useMyGroups();
  const { payNowSheetOpen, selectedCycleId, openPayNowSheet, closePayNowSheet } = useMemberDashboardStore();

  // In development, use mock cycles; in production, these would come from a useCycles hook
  const cycles = mockCycles;
  const selectedCycle = cycles.find((c: Cycle) => c.id === selectedCycleId) ?? null;
  const selectedGroup = groups?.find((g) => g.id === selectedCycle?.groupId) ?? null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-canvas flex items-center justify-center">
        <p className="text-muted">Loading your dashboard…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-canvas p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white text-xl font-bold">My Seettu</h1>
          <SyncStatusIndicator />
        </div>

        {/* Contribution summary cards */}
        <div className="flex flex-col gap-3 mb-6">
          {groups?.map((group) => {
            const cycle = cycles.find((c: Cycle) => c.groupId === group.id);
            if (!cycle) return null;
            return <ContributionSummaryCard key={group.id} group={group} cycle={cycle} />;
          })}
        </div>

        {/* Upcoming cycles */}
        <UpcomingCycleList
          cycles={cycles}
          onSelectCycle={(cycle) => openPayNowSheet(cycle.id)}
        />

        {/* Pay Now bottom sheet */}
        {payNowSheetOpen && selectedGroup && selectedCycle && (
          <PayNowSheet
            group={selectedGroup}
            cycle={selectedCycle}
            onClose={closePayNowSheet}
          />
        )}
      </div>
    </div>
  );
}

// Re-export components and hooks for module contract
export { ContributionSummaryCard } from './components/ContributionSummaryCard';
export { PayNowSheet } from './components/PayNowSheet';
export { UpcomingCycleList } from './components/UpcomingCycleList';
export { useMyGroups } from './hooks/useMyGroups';
export { useRecordPayment } from './hooks/useRecordPayment';
export { useMemberDashboardStore } from './store';
