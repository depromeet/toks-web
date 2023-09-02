import {
  CommentLikeRequest,
  CommentListResponse,
  CommentSubmitRequest,
} from '@/app/quiz/models/comment';
import { http } from '@/common';

export const getCommentsByQuizId = async (quizId: string) => {
  return await http.get<CommentListResponse>(
    `api/v1/quizzes/${quizId}/comments?page=0&size=100`
  );
};

export const postCommentByQuizId = async ({
  quizId,
  comment,
}: CommentSubmitRequest) => {
  return await http.post(`api/v1/quizzes/${quizId}/comments`, { comment });
};

export const postCommentLikeByCommentId = async ({
  commentId,
}: CommentLikeRequest) => {
  return await http.post(`api/v1/comments/${commentId}/like`);
};

export const postCommentUnlikeByCommentId = async ({
  commentId,
}: CommentLikeRequest) => {
  return await http.post(`api/v1/comments/${commentId}/unlike`);
};

// TODO: revalidate api 진짜로 필요 없을거 같으면 지우기. 일단은 냅둠.
