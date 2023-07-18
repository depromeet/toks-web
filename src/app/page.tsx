import { Button, GhostButton, Text } from '@/common';

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
      <div>
        <Button className="w-screen" buttonType="primary" size="S">
          버튼
        </Button>
        <Button
          className="w-150px"
          buttonType="general"
          size="M"
          iconName="AVATAR_DEFAULT"
        >
          버튼
        </Button>
        <Button buttonType="primary" size="L" disabled>
          버튼
        </Button>
        <GhostButton buttonType="primary" size="M" iconName="CHEVRON_DOWN">
          버튼
        </GhostButton>
      </div>
    </div>
  );
}
