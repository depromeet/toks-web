import React from "react";
import Hello from ".";

export default {
  title: "components/basic/Hello", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
};

export const Standard = () => <Hello name="Storybook" />;
export const Big = () => <Hello name="Storybook" big />;