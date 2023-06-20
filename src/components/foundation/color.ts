import { type VariantProps, tv } from 'tailwind-variants';

export const color = tv({
  variants: {
    bgColor: {
      gray10: 'bg-gray-10',
      gray20: 'bg-gray-20',
      gray30: 'bg-gray-30',
      gray40: 'bg-gray-40',
      gray50: 'bg-gray-50',
      gray60: 'bg-gray-60',
      gray70: 'bg-gray-70',
      gray80: 'bg-gray-80',
      gray90: 'bg-gray-90',
      gray100: 'bg-gray-100',
      gray110: 'bg-gray-110',
      gray120: 'bg-gray-120',
      white: 'bg-white',
      success: 'bg-success',
      dangerDefault: 'bg-danger-default',
      dangerPress: 'bg-danger-press',
      primaryDefault: 'bg-primary-default',
      primaryPress: 'bg-primary-press',
    },
    textColor: {
      gray10: 'text-gray-10',
      gray20: 'text-gray-20',
      gray30: 'text-gray-30',
      gray40: 'text-gray-40',
      gray50: 'text-gray-50',
      gray60: 'text-gray-60',
      gray70: 'text-gray-70',
      gray80: 'text-gray-80',
      gray90: 'text-gray-90',
      gray100: 'text-gray-100',
      gray110: 'text-gray-110',
      gray120: 'text-gray-120',
      white: 'text-white',
      success: 'text-success',
      dangerDefault: 'text-danger-default',
      dangerPress: 'text-danger-press',
      primaryDefault: 'text-primary-default',
      primaryPress: 'text-primary-press',
    },
  },
});

export type ColorVariants = VariantProps<typeof color>;
