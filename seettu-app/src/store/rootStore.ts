import { create } from 'zustand';
import { User } from '../shared/types';

interface AppState {
  user: User | null;
  setUser: (u: User | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
