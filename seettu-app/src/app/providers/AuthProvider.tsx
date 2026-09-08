import { useEffect, ReactNode } from 'react';
import { useAppStore } from '../../store/rootStore';

export function AuthProvider({ children }: { children: ReactNode }) {
  const setUser = useAppStore((s) => s.setUser);

  useEffect(() => {
    // Check for existing session on mount
    const token = localStorage.getItem('access_token');
    const userStr = localStorage.getItem('user_session');
    
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        setUser({
          id: user.id,
          phone: user.phone ?? '',
          fullName: user.full_name ?? '',
          role: user.role ?? 'member',
        });
      } catch (e) {
        console.error('Failed to parse user session', e);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [setUser]);

  return <>{children}</>;
}
