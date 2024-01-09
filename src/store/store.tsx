import { combineReducers, configureStore } from "@reduxjs/toolkit";
import settingsSlice from "./settings.slice";


const rootRedusers = combineReducers({
  settings: settingsSlice
})


export const store = configureStore({
  reducer: rootRedusers,
  // middleware: getDefaultMiddleware => {
  //   return getDefaultMiddleware({
  //     immutableCheck: false,
  //     serializableCheck: false,
  //   })
  // },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
