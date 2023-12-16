import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-dark-10": "#434343",
        "grey-dark-20": "#DBDBDB",
        "grey-dark-30": "#C9C9C9",
        "grey-dark-40": "#2C2C2C",
        "grey-dark-50": "#252525",
        "grey-dark-60": "#1E1E1E",
        "grey-dark-70": "#161616",
        "grey-dark-80": "#0F0F0F",
        "grey-dark-90": "#070707",

        "rustic-blue": "#224C94",
        "rustic-green": "#59B94E",
        "rustic-yellow": "#FAD560",
        "rustic-grey": "#4A4A4A",
        "rustic-red": "#D80202",
        grey: "#505050",
        "circle-border": "#C0C0C0",
        "login-bg-color": "#FDFCFC",
      },
      backgroundImage: {
        // background: "url('/images/rect.png')",
        // loginBackground: "url('/images/login_bg.png')",
        // forgotPasswordBackground: "url('/images/forgot_password_bg.png')",
      },

      fontFamily: {
        redHatDisplay: "var(--font-red-hat-display)",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
