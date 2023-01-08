import { PATHS } from '@depromeet/path';
import { safelyGetUser } from '@depromeet/utils';
import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';

export default function () {
  const router = useRouter();

  useLayoutEffect(() => {
    console.log(router);
    safelyGetUser()
      .then(user => {
        if (user == null) {
          router.replace(PATHS.login.main, window.location.href);
        } else {
          router.replace(PATHS.home.myStudy, window.location.href);
        }
      })
      .catch(() => {
        router.replace(PATHS.login.main, window.location.href);
      });
  }, [router]);

  return null;
}
