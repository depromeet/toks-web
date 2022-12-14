import { clipboard } from '@toss/utils';

import { useToast } from './useToast';

export function useClipboard() {
  const { open } = useToast();
  const copyToClipboard = async (text: string) => {
    const isSuccess = await clipboard.writeText(text);

    console.log(isSuccess);
    if (isSuccess) {
      await open({
        type: 'success',
        title: '링크가 복사되었습니다.',
        time: 2000,
      });
      return;
    }

    await open({
      type: 'danger',
      title: '링크가 복사되지 않았습니다.',
      time: 2000,
    });
  };

  return {
    copyToClipboard,
  };
}
