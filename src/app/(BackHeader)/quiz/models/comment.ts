export interface CommentType {
  id: number;
  nickname: string;
  quizId: number;
  uid: number;
  likeCount: number;
  content: string;
  createdAt: string;
  profileImageUrl: string;
  isLiked: boolean;
}

export interface CommentListResponse {
  content: CommentType[];
}

export interface CommentSubmitRequest {
  quizId: string;
  comment: string;
}

export interface CommentLikeRequest {
  commentId: string;
}
