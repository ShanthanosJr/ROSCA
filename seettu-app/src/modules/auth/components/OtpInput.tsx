import { useState, useRef, useEffect } from 'react';
import { Button } from '../../../design-system/components/Button';

interface Props {
  onVerify: (token: string) => void;
  loading?: boolean;
}

export function OtpInput({ onVerify, loading = false }: Props) {
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  function handleChange(index: number, value: string) {
    if (!/^\d*$/.test(value)) return;
    const newDigits = [...digits];
    newDigits[index] = value.slice(-1);
    setDigits(newDigits);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent) {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  function handleSubmit() {
    const token = digits.join('');
    if (token.length === 6) {
      onVerify(token);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 justify-center">
        {digits.map((digit, i) => (
          <input
            key={i}
            ref={(el) => { inputRefs.current[i] = el; }}
            className="w-12 h-14 bg-surface2 text-white text-center text-xl rounded-md border border-white/10 focus:border-accent focus:outline-none"
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            maxLength={1}
            inputMode="numeric"
          />
        ))}
      </div>
      <Button onClick={handleSubmit} disabled={digits.join('').length < 6 || loading}>
        {loading ? 'Verifying…' : 'Verify OTP'}
      </Button>
    </div>
  );
}
