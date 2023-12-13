/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  prefix: 'tw-',
  important: true,
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    fontFamily: {
      danaR: ["danaR"],
      danaM: ["danaM"],
      danaL: ["danaL"],
      danaSB: ["danaSB"],
      morabbaB: ["morabbaB"],
    },
  },
}