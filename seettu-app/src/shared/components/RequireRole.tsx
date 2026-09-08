import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppStore } from '../../store/rootStore';
import { Role } from '../types';

export function RequireRole({ role, children }: { role: Role; children: ReactNode }) {
  const user = useAppStore((s) => s.user);
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== role) return <Navigate to="/unauthorized" replace />;
  return children;
}
