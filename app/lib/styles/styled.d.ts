// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundLight: string;
      backgroundDark: string;
      background3: string;
      button: string;
      offWhite1: string;
      offWhite2: string;
      grey1: string;
      grey2: string;
      book: string;
      blogs: string;
      quiz: string;
      admin: string;
      home: string;
      primary: string;
      secondary: string;
      video: string;
      success: string;
      backgroundLight: string;
    };
    fonts: {
      anekMalayalam: "Anek Malayalam";
    };
    paddings: {
      container: "15px";
      pageTop: "30px";
    };
    margins: {
      pageTop: "30px";
    };
    breakpoints: {
      xs: "screen and (max-width: 400px)"; // for small screen mobile
      sm: "screen and (max-width: 600px)"; // for mobile screen
      md: "screen and (max-width: 900px)"; // for tablets
      lg: "screen and (max-width: 1280px)"; // for laptops
      xl: "screen and (max-width: 1440px)"; // for desktop / monitors
      xxl: "screen and (max-width: 1940px)"; // for big screens
    };
  }
}
