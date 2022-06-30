module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
        quato: "Quattrocento, sans-serif",
        ruda: "Ruda, sans-serif",
      },
      colors: {
        yellow: {
          400: "#F2C94C",
          500: "#F6B716",
        },
        black: {
          800: "#191F2C",
          900: "#151515",
        },
        gray: {
          100: "#ECEEF6",
        },
      },
    },
  },
  plugins: [],
};
