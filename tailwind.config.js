/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/imageAhmed.png')",
      },
      direction: {
        rtl: 'rtl', // Right-to-left
        ltr: 'ltr', // Left-to-right 
      },
      colors: {
        primary: "#971c1c",
        primary2:"#d62727",
        primary3:"#ee8e1d",
        primary4:"#ffd43e",
        primary5: "#113441",
        maincolor: "#000814",
        maincolor2: "#012a4a",
        secondcolr: "#ffb703",
        thirdcolor:"#fb8500"
      },
      fontFamily: {
        arabicUI: ['arabicUI', 'sans-serif'],
        arabicUI2: ['arabicUI2', 'sans-serif'],
        arabicUI3: ['arabicUI3', 'sans-serif'],
        abril: ['"Abril Fatface"', 'cursive'], // Custom font name
        Gaza: ['DGGaza', 'sans-serif'],
        rakkas: ['Rakkas', 'sans-serif'], // Add Rakkas font to Tailwind theme

      },
    },
  },
  plugins: [],
};
