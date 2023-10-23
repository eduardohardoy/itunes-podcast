import { configureStore } from "@reduxjs/toolkit";
import podcastReducer from "./podcast";
import playListReducer from "./play-list";

export const store = configureStore({
  reducer: {
    podcast: podcastReducer,
    playList: playListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
