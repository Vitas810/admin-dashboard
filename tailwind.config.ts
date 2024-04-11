import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Include Vue components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

