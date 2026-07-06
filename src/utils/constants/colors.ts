/** MagicMond color palette — matches CSS custom properties in base.css and Tailwind config */
export const COLORS = {
  // Core
  bg: '#0e081d',
  cardFrom: '#16101f',
  cardTo: '#1c0c29',
  tile: '#1c0c28',

  // Accent
  accent: '#c055e5',
  accentLight: '#e0b6ff',
  accentPink: '#d86cff',
  brand: '#692083',
  brandHover: '#7d279c',

  // Sub-brand
  ieBlue: '#0055ff',
  ieSerif: '#7db9ff',
  spGreen: '#1ff9b8',

  // Quarters
  ieQ1: '#00c285',
  ieQ2: '#b48cf2',
  ieQ3: '#7fb0f7',
  ieQ4: '#e8a04c',

  // Text
  text: '#ffffff',
  textDim: 'rgba(255, 255, 255, 0.6)',
  textDim2: '#aaaaaa',
  textFaint: 'rgba(255, 255, 255, 0.5)',

  // UI
  footerBg: '#0a0517',
  footerText: '#a7adbe',
  footerHeading: '#f0f1f4',
  badgeBg: '#cfe0ff',
  badgeText: '#0055ff',
} as const;
