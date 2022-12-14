export type CapacityRequest = 'SMALL' | 'MEDIUM' | 'LARGE';

export interface TagRequest {
  id: number;
  name: string;
}

export interface StudyRequest {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  capacity: CapacityRequest;
  tagList: TagRequest[];
}
