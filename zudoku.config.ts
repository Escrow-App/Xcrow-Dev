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
  metadata: {
    title: 'Xcrow - Developer Documentation',
    description:
      'This API enables developers to integrate secure and reliable escrow services into their platforms',
    logo: 'https://usexcrow.com/assets/img/white_logo.svg',
    favicon: 'https://usexcrow.com/assets/img/white_logo.svg',
    referrer: 'no-referrer',
    keywords: [
      'escrow',
      'developer',
      'nigeria',
      'xcrow',
      'usexcrow',
      'best escrow',
      'middleman',
      'secure',
      'SEO',
    ],
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
