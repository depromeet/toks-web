import { studyInfo } from 'mock/db';

import { StudyInfo } from '../models/studyInfo';

export const getStudyInfo = () => {
  return new Promise<StudyInfo>(resolve => setTimeout(() => resolve(studyInfo), 800));
};

// export async function getStudyInfoById(studyId: string | string[] | undefined) {
//   return await http.get<StudyInfo>(`/api/v1/studies/${studyId}`, {
//     headers: {
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwb29oOTYwNDA3QG5hdmVyLmNvbSIsImlhdCI6MTY3MTQ3MTMwMiwiZXhwIjoyMDQ0NzE5MzAyfQ.sp4-Y5XvsnMfNfVe1wbWE9xnTsNMJT8dR1QTAuNsM7A',
//     },
//   });
// }
