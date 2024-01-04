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
  }
}
