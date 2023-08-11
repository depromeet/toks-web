import '../src/app/globals.css';
import React from 'react';
import type { Preview } from '@storybook/react';
import { GlobalPortal } from '../src/common/components/GlobalPortal';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    (Story) => (
      <GlobalPortal.Provider>
        <Story />
      </GlobalPortal.Provider>
    ),
  ],
};

export default preview;
