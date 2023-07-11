import { Text } from '@/common/components';

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
      <Text typo="subheading" color="gray110">
        텍스트 입니다.
      </Text>
      <Text typo="subheadingBold" color="dangerDefault">
        텍스트 입니다.
      </Text>
      <Text typo="body" color="primaryDefault">
        텍스트 입니다.
      </Text>
      <Text typo="bodyBold" color="dangerPress">
        텍스트 입니다.
      </Text>
      <Text typo="caption" color="primaryPress">
        텍스트 입니다.
      </Text>
      <Text typo="captionBold" color="gray10">
        텍스트 입니다.
      </Text>
    </div>
  );
}
