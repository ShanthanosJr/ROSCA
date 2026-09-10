/**
 * Design tokens — Foreal → Seettu palette (STYLE_GUIDE.md §2)
 * These mirror the CSS custom properties in index.css for use in JS/TS.
 */

export const colors = {
  // Dark mode canvas (for dashboard/app screens)
  canvas: '#0B0F14',
  surface1: '#12171D',
  surface2: '#1A2029',
  border: 'rgba(255,255,255,0.08)',

  // Light mode (landing page) — Foreal palette
  navyInk: '#141A22',
  offWhite: '#F4F3F1',
  pureWhite: '#FFFFFF',
  powderBlue: '#B9D9E3',
  tealDeep: '#4D9CAF',
  tealDark: '#3E8999',
  mustardTag: '#F7E7C4',
  mutedGray: '#586A73',
  hairline: 'rgba(20,26,34,0.08)',

  // Functional
  textPrimary: '#F5F7FA',
  textMuted: '#8A94A6',
  accent: '#E87B5A',
  accentAlt: '#4C8DFF',
  warning: '#F5B942',
  danger: '#F0546B',
  success: '#3DDC97',
} as const;

export const radius = {
  sm: '8px',
  md: '14px',
  lg: '20px',
  xl: '24px',
  pill: '999px',
} as const;

export const spacing = [0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96, 120, 160] as const;

export const fonts = {
  sans: "'Inter Tight', system-ui, sans-serif",
  display: "'Host Grotesk', system-ui, sans-serif",
  accent: "'Instrument Serif', Georgia, 'Times New Roman', serif",
} as const;
