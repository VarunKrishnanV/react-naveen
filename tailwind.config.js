/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        "bms-50": '#ffe3e9',
        "bms-100": '#ffb3c0',
        "bms-200": '#fb8398',
        "bms-300": '#f9536f',
        "bms-400": '#f62446',
        "bms-500": '#dc0d2e',
        "bms-600": '#ac0623',
        "bms-700": '#7c0319',
        "bms-800": '#4c000e',
        "bms-900": '#1f0003',
      }
    },
  },
  plugins: [],
}

