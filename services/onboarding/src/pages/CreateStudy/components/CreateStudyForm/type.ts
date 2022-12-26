import { CapacityResponse } from '@depromeet/toks-components';

export interface CreateStudyFormValues {
  name: string;
  description: string;
  startedAt: string;
  endedAt: string;
  capacity: CapacityResponse;
  tagList: string[];
}
