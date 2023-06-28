import { Text } from '@/components';

export default function Home() {
  return (
    <div>
      <button className="bg-success shadow-book01">Toks</button>
      <Text typo="headingL" color="gray120">
        텍스트 입니다.
      </Text>
      <Text typo="headingM" color="success">
        텍스트 입니다.
      </Text>
      <Text typo="subheading" color="gray120">
        텍스트 입니다.
      </Text>
      <Text typo="subheadingBold" color="success">
        텍스트 입니다.
      </Text>
      <Text typo="body" color="gray120">
        텍스트 입니다.
      </Text>
      <Text typo="bodyBold" color="gray120">
        텍스트 입니다.
      </Text>
      <Text typo="caption" color="gray120">
        텍스트 입니다.
      </Text>
      <Text typo="captionBold" color="gray120">
        텍스트 입니다.
      </Text>
    </div>
  );
}
