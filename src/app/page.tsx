import { tv } from 'tailwind-variants';

import { color } from '@/common/foundation/color';
import { shadow } from '@/common/foundation/shadow';

const button = tv({
  variants: {
    color,
    shadow,
  },
});
export default function Home() {
  return (
    <div>
      <button className={button({ shadow: 'book01' })}>Toks</button>
    </div>
  );
}
