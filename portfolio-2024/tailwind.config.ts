import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-img': "url('/sun-logo.png')",
        'radial-gradient': 'radial-gradient(ellipse at center bottom, #1B2735 0%, #090A0F 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
