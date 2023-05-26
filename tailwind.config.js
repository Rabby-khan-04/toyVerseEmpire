/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fade4b",
          secondary: "#ffffff",
          accent: "#48494a",
          neutral: "#1d1e1f",
          "base-100": "#000000",
          info: "#9FC5E5",
          success: "#4DEADD",
          warning: "#B08611",
          error: "#F24A82",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        orbitron: "Orbitron",
      },
    },
  },
  plugins: [require("daisyui")],
};
