import { CapacityResponse } from '@depromeet/toks-components';

export interface CreateStudyFormValues {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  capacity: CapacityResponse;
  tagList: string[];
}
