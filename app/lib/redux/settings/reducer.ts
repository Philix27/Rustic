import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { initialState } from "./types";
import Actions from "./actions";

export const SettingsReducer = createSlice({
  name: "SETTINGS",
  initialState,
  reducers: {
    ...Actions,
  },
});
