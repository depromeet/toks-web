import { isToksError, logout as requestLogout } from '@depromeet/http';
import { PATHS } from '@depromeet/path';
import { MAX_WIDTH, SSRSuspense, ToksHeader, useToast } from '@depromeet/toks-components';
import { useSafelyGetUser } from '@depromeet/utils';
import styled from '@emotion/styled';
import { useBooleanState } from '@toss/react';
import { useOverlay } from '@toss/use-overlay';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ComponentProps, ReactNode } from 'react';
import { useMutation } from 'react-query';

import { UserMenu } from './UserMenu';

function Component({ children, fullWidth = false }: { children: ReactNode; fullWidth?: boolean }) {
  const { data: user, refetch } = useSafelyGetUser();
  const { toggle, close } = useUserMenuDialog();
  const { open } = useToast();
  const router = useRouter();

  const { mutateAsync: logout, isLoading } = useMutation(async () => {
    try {
      await requestLogout();
      await refetch();
      await router.push(PATHS.login.main);
      close();
      await open({ title: '로그아웃 되었어요', type: 'success' });
    } catch (err) {
      if (isToksError(err)) {
        await open({ title: err.message, type: 'danger' });
      }
    }
  });

  const isNonMember = user == null;

  return (
    <>
      {isNonMember ? (
        <ToksHeader
          login={false}
          onClickButton={() => {
            const isLoginPage = router.pathname.includes('/login');

            if (isLoginPage) {
              return;
            }

            router.push(PATHS.login.main);
          }}
          onClickLogo={() => {
            if (!isNonMember) {
              router.push(PATHS.home.myStudy);
              return;
            }

            const isLoginPage = router.pathname.includes('/login');

            if (isLoginPage) {
              return;
            }

            router.push(PATHS.login.main);
          }}
        />
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
          onClickLogo={() => router.push(PATHS.home.myStudy)}
        />
      )}
      <StyledLayout fullWidth={fullWidth}>{children}</StyledLayout>
    </>
  );
}

export function Layout(props: ComponentProps<typeof Component>) {
  return (
    <SSRSuspense
      fallback={
        <>
          <ToksHeader.Skeleton />
          <StyledLayout fullWidth={props.fullWidth ?? false}></StyledLayout>
        </>
      }
    >
      <Component {...props} />
    </SSRSuspense>
  );
}

const StyledLayout = styled.main<{ fullWidth: boolean }>`
  position: relative;
  width: 100vw;
  max-width: ${MAX_WIDTH};
  padding: 0 ${({ fullWidth }) => (fullWidth ? '96px' : '9vw')};
  overflow: auto;
  margin: 0 auto;
`;

function useUserMenuDialog() {
  const overlay = useOverlay();
  const [isOpended, , setClosedState, toggleState] = useBooleanState(false);

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

  const close = () => {
    setClosedState();
    overlay.close();
  };

  return { toggle, close };
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
