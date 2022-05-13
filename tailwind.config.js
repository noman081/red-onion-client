module.exports = {
  content: ["./src/**/*.{html,js}"],

  daisyui: {
    themes: [
      {
        oniontheme: {
          primary: "#f91944",
          secondary: "#cecece",
          accent: "#353535",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
  theme: {
    extend: {},
    backgroundImage: {
      'banner': "url('/src/assets/images/bannerBg.png')",

    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'full': '110%',
    },
  },
  plugins: [require("daisyui")],
}
