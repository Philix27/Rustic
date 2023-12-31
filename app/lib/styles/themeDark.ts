import { DefaultTheme } from "styled-components";

export const themeDark: DefaultTheme = {
  colors: {
    background: "#1F1F1F",
    backgroundLight: "#303030",
    backgroundDark: "#262626",
    background3: "#202121",
    button: "hsl(205.1,100%,36.1%)",
    offWhite1: "#eff1f6bf",
    offWhite2: "#DADBDEBF",
    grey1: "#555656B1",
    grey2: "#363737F2",
    book: "#BE9C06",
    blogs: "#A505B7",
    quiz: "#BC5E06",
    admin: "#027D8B",
    home: "#167B16",
    primary: "#BC7503",
    secondary: "#E6A926",
    video: "#9500FF",
    success: "#66A15A",
  },
  fonts: {
    anekMalayalam: "Anek Malayalam",
  },
  paddings: {
    container: "15px",
    pageTop: "30px",
  },
  margins: {
    pageTop: "30px",
  },
  breakpoints: {
    xs: "screen and (max-width: 400px)",
    sm: "screen and (max-width: 600px)",
    md: "screen and (max-width: 900px)",
    lg: "screen and (max-width: 1280px)",
    xl: "screen and (max-width: 1440px)",
    xxl: "screen and (max-width: 1940px)"
  }
};
