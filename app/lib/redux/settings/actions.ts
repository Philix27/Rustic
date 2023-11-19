import { PayloadAction } from "@reduxjs/toolkit";

function mcqList(state, action: PayloadAction<boolean>) {
  state.isSidebarOpen = action.payload;
}
function sidebar(state, action: PayloadAction<boolean>) {
  state.isSidebarOpen = action.payload;
}
function toggle_theme(state, action: PayloadAction) {
  state.isDarkTheme = !state.isDarkTheme;
}
const Actions = {
  sidebar,
  toggle_theme,
};
export default Actions;
