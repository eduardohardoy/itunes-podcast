import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IPodcastEpisode } from "../../types/podcasts";

interface IState {
  currentEpisodeId: number | null;
  episodes: IPodcastEpisode[];
  isPlaying: boolean;
}

const initialState: IState = {
  currentEpisodeId: null,
  episodes: [],
  isPlaying: false,
};

export const playListSlice = createSlice({
  name: "playList",
  initialState,
  reducers: {
    setCurrentEpisodeId: (state: IState, { payload }) => {
      state.currentEpisodeId = payload;
      state.isPlaying = !!payload;
    },
    setPlaylist: (state: IState, { payload }) => {
      state.episodes = payload;
    },
    setIsPlaying: (state: IState, { payload }) => {
      state.isPlaying = payload;
    },
    setNextEpisode: (state: IState) => {
      const currentEpisodeIndex = state.episodes.findIndex(
        (episode) => episode.trackId === state.currentEpisodeId
      );
      if (state.episodes[currentEpisodeIndex + 1]) {
        state.currentEpisodeId =
          state.episodes[currentEpisodeIndex + 1].trackId;
      }
    },
    setPrevEpisode: (state: IState) => {
      const currentEpisodeIndex = state.episodes.findIndex(
        (episode) => episode.trackId === state.currentEpisodeId
      );
      if (state.episodes[currentEpisodeIndex - 1]) {
        state.currentEpisodeId =
          state.episodes[currentEpisodeIndex - 1].trackId;
      }
    },
    setPlayFormStart: (state: IState) => {
      state.currentEpisodeId = state.episodes[0]?.trackId || null;
    },
  },
});

// Selectors
export const selectCurrentEpisode = (state: RootState) =>
  state.playList.episodes.find(
    (episode) => episode.trackId === state.playList.currentEpisodeId
  );

export const selectEpisodes = (state: RootState) => state.playList.episodes;

export const selectIsPlaying = (state: RootState) => state.playList.isPlaying;

export const selectCurrentEpisodeId = (state: RootState) =>
  state.playList.currentEpisodeId;

export const {
  setCurrentEpisodeId,
  setIsPlaying,
  setNextEpisode,
  setPlayFormStart,
  setPlaylist,
  setPrevEpisode,
} = playListSlice.actions;

export default playListSlice.reducer;
