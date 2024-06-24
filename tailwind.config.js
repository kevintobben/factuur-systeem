/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color': '#1E1E1E',
        'company-green': '#1BAE70',
        'status-betaald': '#35AE21',
        'dark-blue': '#2A5A74',
        'status-niet-betaald': '#35AE21',
        'sidebar-color': '#F8F8F8',
      },
    },
    
  },
  plugins: [],
}

