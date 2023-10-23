import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface IState {
  collectionId: string;
  collectionName: string;
  imageSrc: string;
}

const initialState: IState = {
  collectionId: "",
  collectionName: "",
  imageSrc: "",
};

export const podcastSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.collectionId = payload.collectionId;
      state.collectionName = payload.collectionName;
      state.imageSrc = payload.imageSrc;
    },
    resetData: (state) => {
      state.collectionId = "";
      state.collectionName = "";
      state.imageSrc = "";
    },
  },
});

// Selectors
export const selectPodcastImage = (state: RootState) => state.podcast.imageSrc;

export const { setData, resetData } = podcastSlice.actions;

export default podcastSlice.reducer;
