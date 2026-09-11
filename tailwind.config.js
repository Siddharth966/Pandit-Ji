/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933',
        maroon: '#800000',
        cream: '#FFF8E7',
        gold: '#D4AF37',
        darkbg: '#1A1A1A',
        darkcard: '#2D2D2D',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        hindi: ['Tiro Devanagari Hindi', 'serif'],
      },
      // 👇 यहाँ से मार्की एनिमेशन शुरू होता है 👇
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 153, 51, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 153, 51, 0.8)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite', // 40s का मतलब है 40 सेकंड में पूरा स्क्रॉल होगा (आप इसे धीमा या तेज कर सकते हैं)
        float: 'float 4s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}