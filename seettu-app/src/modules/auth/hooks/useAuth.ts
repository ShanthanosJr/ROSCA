import { useAppStore } from '../../../store/rootStore';
import { requestOtp, verifyOtp } from '../api';
import { useState } from 'react';

export function useAuth() {
  const { user, setUser } = useAppStore();
  const [loading, setLoading] = useState(false);

  async function login(phone: string, token: string) {
    setLoading(true);
    try {
      const session = await verifyOtp(phone, token);
      if (session?.user) {
        setUser({
          id: session.user.id,
          phone: session.user.phone ?? '',
          fullName: session.user.user_metadata?.full_name ?? '',
          role: session.user.user_metadata?.role ?? 'member',
        });
      }
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setUser(null);
  }

  return { user, loading, requestOtp, login, logout };
}
