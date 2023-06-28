import { tv } from 'tailwind-variants';

import { color, shadow } from '@/common/foundation';

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
