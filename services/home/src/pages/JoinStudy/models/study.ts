export interface StudyByIdResponse {
  id: number;
  name: string;
  description: string;
  startedAt: string;
  endedAt: string;
  users: [
    {
      userId: number;
      nickname: string;
      profileImageUrl: string;
    }
  ];
  tags: [
    {
      id: number;
      name: string;
    }
  ];
}
