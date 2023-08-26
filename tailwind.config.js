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
        DEFAULT: "6px",
        medium: "10px",
        large: "20px",
        xl: "30px",
      },
      aspectRatio: {
        '229/117': '229 / 117'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

