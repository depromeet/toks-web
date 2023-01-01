import { logout as requestLogout } from '@depromeet/http';
import { PATHS, pushTo } from '@depromeet/path';
import { SSRSuspense, ToksHeader } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { useBooleanState } from '@toss/react';
import { useSuspendedQuery } from '@toss/react-query';
import { useOverlay } from '@toss/use-overlay';
import { AnimatePresence, motion } from 'framer-motion';
import { ComponentProps, ReactNode } from 'react';
import { useMutation } from 'react-query';

import { safelyGetUser } from '../remote/user';
import { UserMenu } from './UserMenu';

function Component({ children }: { children: ReactNode }) {
  const { data: user } = useSuspendedQuery(safelyGetUser.queryKey, safelyGetUser, { retry: false });
  const { toggle } = useUserMenuDialog();

  const { mutateAsync: logout, isLoading } = useMutation(async () => {
    try {
      await requestLogout();
    } catch (err) {
      // TODO: alert, confirm 구현하기
      // TODO: 서버와 싱크 후, message를 에러 객체에 어떻게 담을지 정의하고 util만들기
      window.alert(err);
    }
  });

  const isNonMember = user == null;

  return (
    <StyledLayout>
      {isNonMember ? (
        <ToksHeader login={false} onClickButton={() => pushTo(PATHS.login.main)} />
      ) : (
        <ToksHeader
          imgUrl={user.profileImageUrl}
          userName={user.nickname}
          login
          onClickButton={() => {
            if (isLoading) {
              return;
            }

            toggle({
              img: user.profileImageUrl,
              name: user.nickname,
              nickname: user.nickname,
              handleLogout: () => logout(),
            });
          }}
        />
      )}

      {children}
    </StyledLayout>
  );
}

export function Layout(props: ComponentProps<typeof Component>) {
  return (
    <SSRSuspense fallback={<ToksHeader.Skeleton />}>
      <Component {...props} />
    </SSRSuspense>
  );
}

const StyledLayout = styled.main`
  position: relative;
  width: 100vw;
  max-width: 1320px;
  padding: 0 9vw;
  overflow: auto;
  margin: 0 auto;
`;

function useUserMenuDialog() {
  const overlay = useOverlay();
  const [isOpended, , , toggleState] = useBooleanState(false);

  const toggle = (props: ComponentProps<typeof UserMenu>) =>
    new Promise(resolve => {
      toggleState();
      if (isOpended) {
        overlay.close();
        resolve(true);
      } else {
        overlay.open(({ isOpen, close }) => {
          return (
            <AnimatePresence>
              {isOpen ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  onAnimationEnd={() => {
                    resolve(true);
                  }}
                >
                  <Dimmer
                    onClick={() => {
                      close();
                      toggleState();
                    }}
                  >
                    <PreventClickEvent>
                      <UserMenu {...props} />
                    </PreventClickEvent>
                  </Dimmer>
                </motion.div>
              ) : null}
            </AnimatePresence>
          );
        });
      }
    });

  return { toggle };
}

/**@Note 필요하면 공통 컴포넌틀로 빼기 */
function PreventClickEvent({ children }: { children: ReactNode }) {
  return <div onClick={e => e.stopPropagation()}>{children}</div>;
}

const Dimmer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
`;
