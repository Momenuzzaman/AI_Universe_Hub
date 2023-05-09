/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f2daa9",

          secondary: "#22b5ab",

          accent: "#342382",

          neutral: "#221523",

          "base-100": "#F5F7FA",

          info: "#6CA0E0",

          success: "#53E9C1",

          warning: "#D0A911",

          error: "#F43460",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
