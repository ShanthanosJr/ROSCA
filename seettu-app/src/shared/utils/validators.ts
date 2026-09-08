export function isValidPhone(phone: string): boolean {
  return /^\+94\d{9}$/.test(phone); // Sri Lanka E.164 format
}
export function isValidAmount(amount: number, expected: number): boolean {
  return amount > 0 && Math.abs(amount - expected) < 0.01;
}
