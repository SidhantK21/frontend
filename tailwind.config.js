/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [require("daisyui")],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-sapphire': '#0B1623', // Define the midnight-sapphire color
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
          
      },
      
    },
  }, // Added a comma here
  daisyui: {
    themes: ["light", "dark", "cupcake"],
    darkTheme: "light",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
},
};
