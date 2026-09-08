import { create } from 'zustand';

interface MemberDashboardUIState {
  payNowSheetOpen: boolean;
  selectedCycleId: string | null;
  openPayNowSheet: (cycleId: string) => void;
  closePayNowSheet: () => void;
}

export const useMemberDashboardStore = create<MemberDashboardUIState>((set) => ({
  payNowSheetOpen: false,
  selectedCycleId: null,
  openPayNowSheet: (cycleId) => set({ payNowSheetOpen: true, selectedCycleId: cycleId }),
  closePayNowSheet: () => set({ payNowSheetOpen: false, selectedCycleId: null }),
}));
