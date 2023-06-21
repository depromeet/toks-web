import { tv } from 'tailwind-variants';

import { bgColor } from '@/components/foundation/bgColor';
import { shadow } from '@/components/foundation/shadow';
import { textColor } from '@/components/foundation/textColor';

// const typo = tv({
//   variants: {
//     typo: {
//       size24: 'text-24',
//     },
//   },
// });

const button = tv({
  variants: {
    bgColor,
    textColor,
    shadow,
  },
});

export default function Home() {
  return (
    <div>
      {/* <h1 className={color({ bgColor: 'primaryPress', textColor: 'success' })}>
        Toks
      </h1> */}
      <button
        className={button({
          bgColor: 'success',
          textColor: 'white',
          shadow: 'book01',
        })}
      >
        hihellomyname
      </button>
    </div>
  );
}
