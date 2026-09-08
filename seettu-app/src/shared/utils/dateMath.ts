export function daysUntil(dateStr: string): number {
  const diff = new Date(dateStr).getTime() - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
export function computeSendAt(dueDate: string, leadDays: number): string {
  const d = new Date(dueDate);
  d.setDate(d.getDate() - leadDays);
  return d.toISOString();
}
