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
