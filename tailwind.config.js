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
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "50%": { opacity: 1, transform: "scale(1.05)" }, // Slight overshoot for bounce
          "75%": { opacity: 1, transform: "scale(0.98)" }, // Slight dip back
          "100%": { opacity: 1, transform: "scale(1)" } // Final state
        },
        
        fadeOut: {
          "0%": { opacity: 1, transform: "scale(1)" },
          "25%": { opacity: 0.9, transform: "scale(1.02)" }, // Slight overshoot before shrinking
          "50%": { opacity: 0.7, transform: "scale(0.95)" },
          "100%": { opacity: 0, transform: "scale(0.9)" } // Shrink and disappear
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        slowSpin: 'slowSpin 7s linear infinite',
        open : "fadeIn 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        close : "fadeOut 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
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

