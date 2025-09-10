import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#053B64',
        'accent-orange': '#DDA15E',
        'deep-green': '#283618',
        'warm-gray': '#F4F4F4',
        'light-gray': '#BC6C25',
      },
      fontFamily: {
        'heading': ['var(--font-oswald)', 'Arial', 'sans-serif'],
        'body': ['var(--font-inter)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
