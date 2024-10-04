/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slowSpin :{
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        slowSpin: 'slowSpin 7s linear infinite',
        open : "fadeIn 0.2s forwards",
        close : "fadeOut 0.2s forwards",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: ["light", "dark", "forest", "halloween", "wireframe"],
  },
  
};

