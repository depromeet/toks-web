import { default as checked } from './icons/ic_checked.svg';
import { default as chevronDown } from './icons/ic_chevron-down.svg';
import { default as chevronLeft } from './icons/ic_chevron-left.svg';
import { default as chevronRight } from './icons/ic_chevron-right.svg';
import { default as chevronUp } from './icons/ic_chevron-up.svg';
import { default as deleted } from './icons/ic_delete.svg';
import { default as file } from './icons/ic_file.svg';
import { default as kakao } from './icons/ic_kakao.svg';
import { default as link } from './icons/ic_link.svg';
import { default as newFile } from './icons/ic_new-file.svg';
import { default as plus } from './icons/ic_plus.svg';
import { default as selected } from './icons/ic_selected.svg';
import { default as time } from './icons/ic_time.svg';
import { default as unchecked } from './icons/ic_unchecked.svg';
import { default as success } from './icons/ic_success.svg';
import { default as failed } from './icons/ic_failed.svg';

export const ICONS = {
  'ic-checked': checked,
  'ic-delete': deleted,
  'ic-chevron-down': chevronDown,
  'ic-chevron-up': chevronUp,
  'ic-chevron-right': chevronRight,
  'ic-chevron-left': chevronLeft,
  'ic-file': file,
  'ic-kakao': kakao,
  'ic-link': link,
  'ic-new-file': newFile,
  'ic-plus': plus,
  'ic-selected': selected,
  'ic-time': time,
  'ic-unchecked': unchecked,
  'ic-success': success,
  'ic-failed': failed,
} as const;

export type IconName = keyof typeof ICONS;
