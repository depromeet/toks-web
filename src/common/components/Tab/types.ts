export interface TabProps {
  activeIndex: number;
  onTabChange: (index: number) => void;
  tabs: string[];
}
