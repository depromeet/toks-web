import { CapacityResponse } from '@depromeet/toks-components';
import { CreateStudyFormValues } from './components/CreateStudyForm/type';

export const STUDY_CATEGORY_OPTIONS: Array<{ label: string; value: CapacityResponse }> = [
  { label: '2~4명', value: 'SMALL' },
  { label: '5~7명', value: 'MEDIUM' },
  { label: '8명 이상', value: 'LARGE' },
];

export const DEFAULT_STUDY_CREATE_FORM: CreateStudyFormValues = {
  name: '',
  description: '',
  startedAt: '',
  endedAt: '',
  capacity: 'SMALL',
  tags: [],
};
