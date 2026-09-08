import { useEffect, ReactNode } from 'react';
import { supabase } from '../../shared/api/apiClient';
import { useAppStore } from '../../store/rootStore';

export function AuthProvider({ children }: { children: ReactNode }) {
  const setUser = useAppStore((s) => s.setUser);

  useEffect(() => {
    // Check for existing session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          phone: session.user.phone ?? '',
          fullName: session.user.user_metadata?.full_name ?? '',
          role: session.user.user_metadata?.role ?? 'member',
        });
      }
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          phone: session.user.phone ?? '',
          fullName: session.user.user_metadata?.full_name ?? '',
          role: session.user.user_metadata?.role ?? 'member',
        });
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return <>{children}</>;
}
