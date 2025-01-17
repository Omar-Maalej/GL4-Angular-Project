/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Titillium Web", "sans-serif"], // For titles and headers
        body: ["Roboto", "sans-serif"], // For paragraphs and general text
      },
    },
  },
  plugins: [],
};
