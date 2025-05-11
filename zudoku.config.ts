import type { ZudokuConfig } from 'zudoku'

const config: ZudokuConfig = {
  page: {
    pageTitle: ' ',
    logo: {
      src: {
        light: '/images/xcrow-dark.svg',
        dark: '/images/xcrow-light.svg',
      },
    },
  },
  topNavigation: [
    { id: 'docs', label: 'Documentation' },
    { id: 'api', label: 'API Reference' },
  ],
  sidebar: {
    docs: [
      {
        type: 'category',
        label: 'Overview',
        items: [
          'docs/introduction',
          'docs/basics',
          'docs/example',
          'docs/errors',
        ],
      },
    ],
  },
  redirects: [{ from: '/', to: '/docs/introduction' }],
  apis: {
    type: 'file',
    input: './apis/xcrow-schema.json',
    navigationId: 'api',
  },
  docs: {
    files: '/pages/**/*.{md,mdx}',
  },
}

export default config
