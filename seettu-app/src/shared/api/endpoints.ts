// API endpoint constants — centralized so endpoint changes don't require hunting through modules
export const endpoints = {
  auth: {
    requestOtp: '/auth/otp/request',
    verifyOtp: '/auth/otp/verify',
  },
  groups: {
    mine: '/groups/mine',
    create: '/groups',
    members: (groupId: string) => `/groups/${groupId}/members`,
    cycles: (groupId: string) => `/groups/${groupId}/cycles`,
    transactions: (groupId: string) => `/groups/${groupId}/transactions`,
    turnOrder: (groupId: string) => `/groups/${groupId}/turn-order`,
  },
  cycles: {
    transactions: (cycleId: string) => `/cycles/${cycleId}/transactions`,
    payout: (cycleId: string) => `/cycles/${cycleId}/payout`,
  },
  users: {
    reminders: (userId: string) => `/users/${userId}/reminders`,
    export: (userId: string) => `/users/${userId}/export`,
  },
  reports: {
    communitySummary: '/reports/community-summary',
  },
} as const;
