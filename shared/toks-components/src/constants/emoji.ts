const baseURL = 'https://toks-web-assets.s3.amazonaws.com/toks-emoji/';

export const emoji = {
  angry: `${baseURL}angry_emoji.svg`, //분노
  beforeStudy: `${baseURL}before_study_emoji.svg`, //졸림-스터디 전
  blackOut: `${baseURL}black_out_emoji.svg`, // 기절
  doneStudy: `${baseURL}done_study_emoji.svg`, //보통-스터디 완
  expected: `${baseURL}expected_emoji.svg`, //기대
  sad: `${baseURL}sad_emoji.svg`, //슬픔
  spacedOut: `${baseURL}spaced_out_emoji.svg`, //멍
  studying: `${baseURL}studying_emoji.svg`, //보통-스터디 중
} as const;
