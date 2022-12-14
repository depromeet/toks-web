export interface Study {
  id: number;
  name: string;
  studyUserCount: number;
  StudylatestquizStatus: 'UNSOLVED' | 'SOLVED' | 'PENDING' | 'UNCHECKED';
  StudylatestQuizId: number;
  studyTags: Array<{
    id: number;
    name: string;
  }>;
}
