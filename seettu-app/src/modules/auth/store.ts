// Auth module local UI state (separate from the global user in rootStore)
import { create } from 'zustand';

type AuthStep = 'phone' | 'otp' | 'authenticated';

interface AuthUIState {
  step: AuthStep;
  phone: string;
  setStep: (step: AuthStep) => void;
  setPhone: (phone: string) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthUIState>((set) => ({
  step: 'phone',
  phone: '',
  setStep: (step) => set({ step }),
  setPhone: (phone) => set({ phone }),
  reset: () => set({ step: 'phone', phone: '' }),
}));
