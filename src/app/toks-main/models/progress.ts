export interface ProgressResponse {
  username: string;
  attendance: number;
  description1: string;
  description2: string;
}

interface NoticeInfo {
  id: number;
  title: string;
  seq: number;
  imageUrl: string;
  landingUrl: string;
  isActive: boolean;
}

export interface NoticeResponse {
  bottomBanners: NoticeInfo[];
}
