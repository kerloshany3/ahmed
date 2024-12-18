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
      dropShadow: {
        white: '0 4px 6px rgba(255, 255, 255, 0.5)',
        slate: '0 5px 20px rgba(255, 255, 255, 0.5)',
        red: '0 2px 50px rgba(245, 86, 85, 0.6)',
      },
      backgroundImage: {
        'custom-image': "url('/dna.png')",
        'brain-image': "url('/brain.jpeg')",
        'blood-image': "url('/blood.jpeg')",
        'biopat-image': "url('/biopat.png')",
        'blod2-image': "url('/blod2.jpeg')",
        'pattern-image': "url('/pattern.png')",
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
        anton: ['Anton', 'sans-serif'], // Add Anton as a custom font
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
