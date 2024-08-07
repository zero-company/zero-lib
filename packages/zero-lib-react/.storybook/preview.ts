import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import './../src/globals.css'

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'zinc-900',
      values: [
        {
          name: 'zinc-900',
          value: '#18181b',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
