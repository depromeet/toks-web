import { PATHS, pushTo } from '@depromeet/path';
import { ToksHeader } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { useBooleanState } from '@toss/react';
import { useOverlay } from '@toss/use-overlay';
import { AnimatePresence, motion } from 'framer-motion';
import { ComponentProps, ReactNode } from 'react';
import { useMutation, useQuery } from 'react-query';

import { logout as requestLogout } from '../remote/logout';
import { getUser } from '../remote/user';
import { UserMenu } from './UserMenu';

export function Layout({ children, login = true }: { children: ReactNode; login?: boolean }) {
  const { data: user } = useQuery(getUser.queryKey, getUser);
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

  return (
    <StyledLayout>
      {user != null ? (
        <ToksHeader
          imgUrl={user.profileImageUrl}
          userName={user.nickname}
          login={login}
          onClickButton={() => {
            if (isLoading) {
              return;
            }

            if (!login) {
              pushTo(PATHS.login);
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
      ) : (
        <ToksHeader.Skeleton />
      )}

      {children}
    </StyledLayout>
  );
}

const StyledLayout = styled.main`
  position: relative;
  width: 100vw;
  max-width: 100vw;
  padding: 0 9vw;
  overflow: auto;
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
