import { useQueryParam } from './useQueryParam';

export function usePathParam<T = string>(
  name: Parameters<typeof useQueryParam<T>>[0],
  options: Parameters<typeof useQueryParam<T>>[1]
) {
  const param = useQueryParam<T>(name, options);

  if (param == null) {
    throw new Error('비정상적인 접근입니다. 필요한 정보가 누락되었습니다.');
  }

  return param;
}
