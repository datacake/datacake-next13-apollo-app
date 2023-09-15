import type { Config } from 'tailwindcss';
// import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  },
  plugins: [
    // plugin(({ theme, addUtilities }) => {
    //   const sizes = theme('');
    //   addUtilities['custom-h']
    // }),
  ],
};
export default config;
