/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import colors from "tailwindcss/colors";
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.orange, DEFAULT: colors.orange[600] },
      },
      boxShadow: {
        neonen:
          "0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')",
      },
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const colors = theme("colors");
      Object.keys(colors)
        .filter((color) => typeof colors[color] === "object")
        .forEach((color) => {
          const lightColor = colors[color]["500"];
          const darkColor = colors[color]["700"];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${lightColor}, 0 0 20px ${darkColor}`,
          };
        });
      addUtilities(neonUtilities);
    }),
  ],
};
