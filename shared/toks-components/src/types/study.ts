export type CapacityResponse = 'SMALL' | 'MEDIUM' | 'LARGE';

export interface TagResponse {
  id: number;
  name: string;
}

export interface StudyResponse {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  capacity: CapacityResponse;
  tagList: TagResponse[];
}
