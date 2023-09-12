import { atom } from 'recoil';

export const isVisibleCategoryBottomSheetAtom = atom<boolean>({
  key: 'isVisibleCategoryBottomSheetAtom',
  default: false,
});

export const selectedTemporaryCategoryAtom = atom<string[]>({
  key: 'selectedTemporaryCategoryAtom',
  default: [],
});
