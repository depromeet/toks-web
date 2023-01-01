export interface Study {
  id: number;
  name: string;
  userCount: number;
  latestQuizStatus: 'UNSOLVED' | 'SOLVED' | 'PENDING' | 'UNCHECKED';
  latestQuizId: number;
  tags: Array<{
    id: number;
    name: string;
  }>;
  status: 'READY' | 'IN_PROGRESS' | 'FINISH';
}
