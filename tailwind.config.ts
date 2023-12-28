import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'foreground': '#E8EEF2',
        'background': '#37393A',
        'black': {
          DEFAULT: '#1A1D1A',
          100: '#464949',
          200: '#323434',
        },
        'blue': '#77B6EA',
        'orange': {
          DEFAULT: '#FFA047',
          light: '#F4C79D'
        },
        'green': '#26C485',
        'red': '#E63946',
      },
      aspectRatio: {
        'golden-v': '1 / 1.618',
        'golden-h': '1.618 / 1',
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '16/9': '16 / 9',
        '9/16': '9 / 16',
        'a4': '210 / 297',
        'resume': '210 / 316',
      }
    },
  },
  plugins: [],
}
export default config
