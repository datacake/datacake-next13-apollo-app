import type { Config } from 'tailwindcss';
// import plugin from 'tailwindcss/plugin';
import scrollbar from 'tailwind-scrollbar';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: [ 'class' ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 0 10px 4px rgba(0, 0, 0, 0.05)',
        // You can give it a custom name like 'custom' and specify the box-shadow value.
      },
    },
  },
  plugins: [
    // plugin(({ theme, addUtilities }) => {
    //   const sizes = theme('');
    //   addUtilities['custom-h']
    // }),
    scrollbar,
  ],
};
export default config;
