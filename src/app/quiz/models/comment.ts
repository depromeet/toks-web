export interface CommentType {
  id: number;
  nickname: string;
  quizId: number;
  uid: number;
  likeCount: number;
  content: string;
  createdAt: string;
}

export interface CommentListResponse {
  content: CommentType[];
}
