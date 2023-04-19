/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Roboto",
      secondary: "Inter",
    },
    extend: {
      colors: {
        primary: "#F68422",
        darkPrimary: "#7F4924",
        blackSecondary: "#161311",
        blackPure: "#000",
        whitePure: "#fff",
        greyPrimary: "rgba(255, 255, 255, 0.6)",
        hoverColor: "rgba(255, 255, 255, 0.1)",
        greySecondary: "#DCD7C9",
        greyThird: "#D4D4D4",
        productColor: "#242424",
        productBackground: "#2E2E2E",
        clientBg: "rgba(240, 240, 240, 0.8)",
        replyText: "#727272",
      },
      backgroundImage: {
        bestSellerBg: "url('./assets/images/background.jpg')",
        sloganBg: "url('./assets/images/background2.png')",
        bannerBg:
          "linear-gradient(233.96deg, rgba(0, 0, 0, 0) 65.19%, rgba(0, 0, 0, 0.2) 93.4%), linear-gradient(180deg, rgba(0, 0, 0, 0) 23.44%, #000000 100%),url('./assets/images/coffee_image2.jpg');",
        headerBg:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.83) 4.69%, rgba(10, 10, 9, 0.4814) 100%)",
      },

      //
      lineHeight: {
        82: "82.97px",
        18: "18.21px",
        32: "32.38px",
        105: "105px",
        90: "90px",
        39: "39px",
        44: "44px",
        32: "34px",
      },
    },
  },
  plugins: [],
};
