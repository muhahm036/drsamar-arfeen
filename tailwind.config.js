export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F1F5FA",
          100: "#E2EAF3",
          200: "#C3D2E5",
          300: "#97AFCD",
          400: "#6585AE",
          500: "#43648F",
          600: "#2F4C74",
          700: "#213A5C",
          800: "#162B47",
          900: "#0B1F3A",
          950: "#071528",
        },
        medical: {
          50: "#EEF5FB",
          100: "#D6E8F6",
          200: "#AED0EC",
          300: "#79B1DE",
          400: "#4590CB",
          500: "#1F78BA",
          600: "#1769AA",
          700: "#13568C",
          800: "#124872",
          900: "#123C5E",
        },
        teal: {
          50: "#EBFAFB",
          100: "#CEF2F5",
          200: "#9FE4EA",
          300: "#63CFD9",
          400: "#2FB9C6",
          500: "#16A6B6",
          600: "#12879A",
          700: "#136C7C",
          800: "#155865",
          900: "#164955",
        },
        heart: {
          50: "#FFF1F2",
          100: "#FFE1E3",
          200: "#FFC8CC",
          300: "#FCA0A7",
          400: "#F36A74",
          500: "#E63946",
          600: "#CF2533",
          700: "#AD1B28",
        },
        surface: "#F5F8FB",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,31,58,0.04), 0 8px 24px -12px rgba(11,31,58,0.12)",
        lift: "0 2px 4px rgba(11,31,58,0.05), 0 18px 40px -16px rgba(11,31,58,0.24)",
      },
    },
  },
  plugins: [],
};
