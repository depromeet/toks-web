export const color = {
  gray10: 'gray-10',
  gray20: 'gray-20',
  gray30: 'gray-30',
  gray40: 'gray-40',
  gray50: 'gray-50',
  gray60: 'gray-60',
  gray70: 'gray-70',
  gray80: 'gray-80',
  gray90: 'gray-90',
  gray100: 'gray-100',
  gray110: 'gray-110',
  gray120: 'gray-120',
  white: 'white',
  success: 'success',
  dangerDefault: 'danger-default',
  dangerPress: 'danger-press',
  primaryDefault: 'primary-default',
  primaryPress: 'primary-press',
} as const;

export type KeyOfColor = keyof typeof color;
