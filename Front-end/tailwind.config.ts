const textShadow = require('tailwindcss-textshadow');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-img': "url('/sun-logo.png')",
      },
      textShadow: {
        'lg': '0 2px 4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    textShadow,
  ],
};
