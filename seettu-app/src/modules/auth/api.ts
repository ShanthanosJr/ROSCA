import { apiClient } from '../../shared/api/apiClient';

export async function requestOtp(phone: string) {
  await apiClient.post('/auth/otp/request', { phone });
}

export async function verifyOtp(phone: string, token: string) {
  const data = await apiClient.post<{ session: { access_token: string, user: any } }>('/auth/otp/verify', { phone, token });
  if (data.session?.access_token) {
    localStorage.setItem('access_token', data.session.access_token);
    localStorage.setItem('user_session', JSON.stringify(data.session.user));
  }
  return data.session;
}
