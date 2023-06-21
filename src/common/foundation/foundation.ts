import { color } from './color';
import { shadow } from './shadow';

export type KeyOfColor = keyof typeof color;
export type KeyOfShadow = keyof typeof shadow;

export const foundation = {
  color,
  shadow,
};
