import { Button } from '@depromeet/toks-components';

export function VoteSubmitButton() {
  return (
    <Button
      css={{ position: 'fixed', left: '100%', transform: 'translateX( -200px )', bottom: '20px' }}
      width={200}
      size="large"
    >
      똑표완료
    </Button>
  );
}
