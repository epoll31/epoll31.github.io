import type { Config } from 'tailwindcss'
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // cursor: {
      //   'circle': 'url(/images/cursor.png),auto',
      // },
      fontFamily: {
        lilita: ["Lilita One", "sans-serif"],
        k2d: ["K2D", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        foreground: {
          DEFAULT: '#F0F0C9',
          100: '#D9D9B8',
          200: '#C1C2A6',
        },
        'background': '#F15946',
        'black': {
          DEFAULT: '#32373B',
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
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [addVariablesForColors],
}
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config
