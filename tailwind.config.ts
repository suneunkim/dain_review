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
      }
    }
  },
  plugins: []
}
export default config
