import styled from '@emotion/styled';
import { useOverlay } from '@toss/use-overlay';
import { ComponentProps, useRef } from 'react';

import { Modal } from '../components/Modal';

export function useModal() {
  const overlay = useOverlay();
  const ref = useRef<HTMLDivElement>(null);

  const openModal = (props: ComponentProps<typeof Modal>) =>
    new Promise(resolve => {
      overlay.open(({ isOpen, close }) => {
        return (
          <>
            {isOpen ? (
              <Dimmer
                ref={ref}
                onClick={(e: React.MouseEvent) => {
                  {
                    e.target === ref.current ? close() : null;
                  }
                  resolve(false);
                }}
              >
                <Modal {...props} />
              </Dimmer>
            ) : null}
          </>
        );
      });
    });

  return { openModal: openModal, close: overlay.close };
}

export default useModal;

const Dimmer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1010;
`;
