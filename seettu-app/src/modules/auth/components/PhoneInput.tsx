import { useState } from 'react';
import { Button } from '../../../design-system/components/Button';
import { isValidPhone } from '../../../shared/utils/validators';

export function PhoneInput({ onSubmit }: { onSubmit: (phone: string) => void }) {
  const [phone, setPhone] = useState('+94');
  const [error, setError] = useState('');

  function handleSubmit() {
    if (!isValidPhone(phone)) {
      setError('Enter a valid Sri Lankan phone number, e.g. +94711234567');
      return;
    }
    setError('');
    onSubmit(phone);
  }

  return (
    <div className="flex flex-col gap-3">
      <input
        className="bg-surface2 text-white rounded-md px-4 py-3 border border-white/10"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+94711234567"
      />
      {error && <p className="text-danger text-sm">{error}</p>}
      <Button onClick={handleSubmit}>Send OTP</Button>
    </div>
  );
}
