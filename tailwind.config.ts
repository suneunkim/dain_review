import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/***/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          // text-gray-0
          0: '#F0F1F2',
          5: '#F0F1F2',
          10: '#E1E1E3',
          20: '#C4C5CA',
          30: '#A9ABB1',
          40: '#8E8F98',
          60: '#5D5F67',
          70: '#494A51',
          80: '#303136',
          90: '#19191B'
        },
        line: {
          neutral: '#ECEDEE',
          normal: '#D4D5D8'
        },
        status: {
          positive: '#00BF63',
          destructive: '#FC5454'
        },
        background: {
          red: '#FFECEE',
          gray: '#F7F8F8'
        },
        blue: {
          5: '#D4EAFA',
          50: '#0081E5'
        },
        red: {
          5: '#FFE5E8',
          30: '#FF6676',
          main: '#FF394E',
          50: '#D32C3E'
        }
      },
      // to do
      fontSize: {
        display1: ['3rem', { lineHeight: '4.2rem', fontWeight: '700' }], // ok
        display2: ['2rem', { lineHeight: '2.5rem', fontWeight: '600' }], // ok
        heading1: ['1.9rem', { lineHeight: '2.25rem', fontWeight: '600' }],
        heading2: ['1.8rem', { lineHeight: '2rem', fontWeight: '600' }],
        heading3: ['1.7rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        heading4: ['1.6rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        heading5: ['1.5rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        body1: ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }], // ok
        body1r: ['1rem', { lineHeight: '1.75rem', fontWeight: '400' }], // ok
        body2: ['0.9rem', { lineHeight: '2rem', fontWeight: '400' }], // ok
        caption1: ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }],
        caption2: ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }],
        caption3: ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }]
      }
    }
  },
  plugins: []
}
export default config
