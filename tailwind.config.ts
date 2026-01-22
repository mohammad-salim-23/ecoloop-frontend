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
        'forest-green': '#228B22',
        'lime-green': '#32CD32',
        'dark-green': '#006400',
        'eco-light': '#F0FFF0',
      },
    },
  },
  plugins: [],
};
export default config;