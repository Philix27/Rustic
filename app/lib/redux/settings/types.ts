import { McqList, McqTypes } from "@/lib/docs/mcq/types";

export interface ISettings {
  isSidebarOpen: boolean;
  isDarkTheme: boolean;
  quizSidebarList: McqList;
  quizContent: McqTypes[];
}

export const initialState: ISettings = {
  isSidebarOpen: true,
  isDarkTheme: false,
  quizSidebarList: {
    title: "Default title",
    subtitle: "Default subtitle",
    list: [],
  },
  quizContent: [],
};
