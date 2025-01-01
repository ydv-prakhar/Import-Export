/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sunset: "url('assets/pexels-photo-29960193.png')",
      },
    },
  },
  plugins: [],
};
