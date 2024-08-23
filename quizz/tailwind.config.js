/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'custom-gray': 'rgba(208, 213, 221, 1)',
      },

      fontFamily: {
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
      },
      colors:{
        primary:"rgba(255, 255, 255, 1)",
        main:"#4818c8",
        font2:"rgba(71, 84, 103, 1)",
        secondary:"rgba(63, 13, 197, 1)",
        tertiary:"rgba(245, 245, 245, 1)",
        label:"rgba(52, 64, 84, 1)",
        secondLogo:"rgba(71, 84, 103, 1)",
        logo:"rgba(16, 24, 40, 1)",
        toper:"rgba(33, 30, 42, 1)",
        texto:"rgba(255, 255, 255, 1)",
        pxr:"rgba(245, 243, 252, 1)",
        bord:"rgba(63, 13, 197, 1)"
      },
      borderRadius: {
        'custom': '80px 0px 0px 80px',
        // "secondary":"0px, 20px, 20px, 0px",
        'customary':"0px, 20px, 20px, 0px"

      },
      padding:{
        "custom": "16px, 0px, 0px, 0px",
        "pad":"10px, 18px, 10px, 18px"
      }
    },
  },
  plugins: [],
}

