import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { SettingsReducer } from "../settings/reducer";

// import { AccountReducer } from "redux/account/reducer";
// import { SettingsReducer } from "redux/settings/reducer";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  version: 1,
};

const authPersistConfig = {
  key: "rustic",
  storage: storage,
  version: 1,
  blacklist: ["somethingTemporary"],
};

export const rootReducer = combineReducers({
  settings: SettingsReducer.reducer,
});

export const AppActions = {
  settings: SettingsReducer.actions,
};

export const persistedRootReducer = persistReducer(
  rootPersistConfig,
  rootReducer
);

// export const persistor = persistStore(store);
