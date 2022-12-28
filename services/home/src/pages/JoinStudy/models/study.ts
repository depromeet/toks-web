export interface StudyByIdResponse {
  id: number;
  name: string;
  description: string;
  startedAt: string;
  endedAt: string;
  capacity: string;
  tags: [
    {
      id: number;
      name: string;
    }
  ];
}
