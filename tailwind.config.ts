import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('./assets/leo-gerbacio-romero-about.png')",
      },
      colors: {
        silver: {
          DEFAULT: "#6F707A",
          0: "#F1F2FC",
          100: "#E7E8F2",
          200: "#D3D4DE",
          300: "#BFC0CA",
          400: "#A1A2AC",
          500: "#6F707A",
          600: "#474852",
          700: "#33343E",
          800: "#1F202A",
          900: "#0B0C16",
        },
        blue: {
          DEFAULT: "#0631CB",
          0: "#F6FFFF",
          100: "#BAE5FF",
          200: "#88B3FF",
          300: "#426DFF",
          400: "#1A45DF",
          500: "#0631CB",
          600: "#052598",
          700: "#031966",
          800: "#020C33",
          900: "#010619",
        },
        red: {
          'soft': '#F9CBDB',
          'mid': '#E73071',
          'dark': '#3F071B'
        },
        yellow: {
          'soft': '#F9E9CB',
          'mid': '#E7A630',
          'dark': '#3F2B07'
        },
        green: {
          'soft': '#CBF9E9',
          'mid': '#30E7A6',
          'dark': '#073F2B'
        },
        purple: {
          'soft': '#DBD6FA',
          'mid': '#4B30E7',
          'dark': '#190C64'
        }
      },
      fontSize: {
        h1: ["80px", "1.4"],
        h2: ["64px", "1.4"],
        h3: ["50px", "1.4"],
        h4: ["30px", "1.2"],
        subtitle: ["24px", "1.2"],
        bodyLarge: ["22px", "1.2"],
        'body-small': ["14px", "1.5"],
      },
      keyframes: {
        autoSliderMobile: {
          '0%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(-250%)'},
        },
      },
      animation: {
        autoSliderMobile: 'autoSliderMobile 15s ease-in-out infinite',
      },
      minHeight: {
        76: '19rem'
      }
    },
  },
  plugins: [],
};
export default config;
