import { colors } from '@/components/theme/colors';
import { tv } from 'tailwind-variants';

export const Text = tv({
  variants: {
    color: {
      success: {colors.success},
    },
  },
});
