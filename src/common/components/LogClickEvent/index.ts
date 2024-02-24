'use client';

import { logEvent } from 'firebase/analytics';
import { Children, cloneElement } from 'react';

import { EVENT_NAME, EventNameType } from '@/common/constants/\beventName';
import { analytics } from '@/common/utils/firebase';
import { EventPath } from '@/types/eventName';

type LogClickEventProps = {
  children: React.ReactElement;
  eventPath: EventPath<typeof EVENT_NAME>;
};

export const LogClickEvent = ({ children, eventPath }: LogClickEventProps) => {
  const [feature, page, at, target] = eventPath;
  const eventName: string = (EVENT_NAME as EventNameType)[feature][page][at][
    target
  ]['click'];

  const child = Children.only(children);

  return cloneElement(child, {
    onClick: () => {
      logEvent(analytics, eventName);
    },
  });
};
