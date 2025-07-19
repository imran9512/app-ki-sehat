// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Automatically find all JavaScript/TypeScript files in the 'src' directory
    "./node_modules/lucide-react/dist/*.js", // Include Lucide React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};