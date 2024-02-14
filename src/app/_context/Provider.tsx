'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

const Provider = ({ children }: StrictPropsWithChildren) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Provider;
