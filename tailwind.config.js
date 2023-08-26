/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E17800",
        secondary: "#FFF",
        tertiary: "#818181",
      },
      borderRadius: {
        DEFAULT: "5px",
        medium: "10px",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

