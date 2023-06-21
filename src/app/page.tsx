import { color } from '@/components/foundation/color';

export default function Home() {
  return (
    <div>
      <h1 className={color({ bgColor: 'primaryPress', textColor: 'success' })}>
        Toks
      </h1>
    </div>
  );
}
