export interface ISettings {
  isSidebarOpen: boolean;
  isDarkTheme: boolean;
}

export const initialState: ISettings = {
  isSidebarOpen: true,
  isDarkTheme: false,
};
