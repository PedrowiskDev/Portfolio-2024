const textShadow = require('tailwindcss-textshadow'); // Importando com require

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
        'radial-gradient': 'radial-gradient(ellipse at center bottom, #1B2735 0%, #090A0F 100%)',
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
