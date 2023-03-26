/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Lora, serif",
      },
      colors: {
        Blue10: "#EDF5FE",
        Blue20: "#C8DEF9",
        Blue30: "#A4C8F3",
        Blue40:"#82B2EA",
        Blue50: "#629CE0",
        Blue60: "#4586D4",
        Blue70: "#2970C5",
        Blue80: "#1757A3",
        Blue90: "#0A3E7D",
        Blue100: "#022651",
        Neutral10: "#FDFDFD", 
        Neutral20:"#D8D8D8",
        Neutral30:"#B3B3B3",
        Neutral40:"#8E8E8E",
        Neutral50:"#6A6A6A",
        Neutral60:"#454545",
        Neutral100:"#111827",
        Negative1:"#940300",
        Negative2:"#E84C3D",
        Negative3:"#FFBAB3"

      },
      backgroundImage:{
        'StartupList':"url('/src/assets/startuplisthero.png')"
      }
    },
  },
  plugins: [],
}
