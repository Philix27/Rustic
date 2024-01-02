export class AppStyles {
  // Temp fonts
  static fonts = {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif",
  };
  // Colors for layout
  static colors = {
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
  };
  // Breakpoints for responsive design
  static breakpoints = {
    xs: "screen and (max-width: 400px)", // for small screen mobile
    sm: "screen and (max-width: 600px)", // for mobile screen
    md: "screen and (max-width: 900px)", // for tablets
    lg: "screen and (max-width: 1280px)", // for laptops
    xl: "screen and (max-width: 1440px)", // for desktop / monitors
    xxl: "screen and (max-width: 1940px)", // for big screens
  };
}
