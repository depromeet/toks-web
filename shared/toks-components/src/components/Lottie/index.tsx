/**
 * normal, true : 0  -> 100, 0 -> 100 (frame)
 * reversed : 0 -> 100, 100 -> 0 (frame)
 * @default false
 */
type LoopType = boolean | 'normal' | 'reversed';

interface Asset {
  id: string;
  url: string;
}

interface CommonProps {
  className?: string;
  assets?: Asset[];
  loop?: LoopType;
  interval?: number;
  delay?: number;
  speed?: number;
  autoPlay?: boolean;
  width?: number | string;
  height?: number | string;
  onPlay?: () => void;
  onLoopComplete?: () => void;
  onComplete?: () => void;
  alt?: string;
}

interface JSONProps extends CommonProps {
  json: string;
  src?: undefined;
}

interface SRCProps extends CommonProps {
  src: string | string[];
  json?: undefined;
}

type Props = JSONProps | SRCProps;

interface LottieRef {
  start: () => void;
  stop: () => void;
  play: () => void;
  pause: () => void;
}

const {
  Lottie: TossLottie,
}: { Lottie: React.ForwardRefExoticComponent<Props & React.RefAttributes<LottieRef>> } = require('@toss/lottie');

export const Lottie = TossLottie;
