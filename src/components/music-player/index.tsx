import { useDispatch, useSelector } from "react-redux";
import { Container } from "./styled";
import Lib from "../../lib/music-player";
import {
  selectCurrentEpisode,
  setIsPlaying,
  setNextEpisode,
  setPrevEpisode,
} from "../../data/play-list";
import { useCallback } from "react";

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const {
    trackName = "",
    collectionName = "",
    episodeUrl = "",
    artworkUrl60 = "",
  } = useSelector(selectCurrentEpisode) || {};

  const onPlay = useCallback(() => {
    dispatch(setIsPlaying(true));
  }, [dispatch]);

  const onPause = useCallback(() => {
    dispatch(setIsPlaying(false));
  }, [dispatch]);

  const onNext = useCallback(() => {
    dispatch(setNextEpisode());
  }, [dispatch]);

  const onPrev = useCallback(() => {
    dispatch(setPrevEpisode());
  }, [dispatch]);

  return (
    <Container>
      <Lib
        artworkUrl60={artworkUrl60}
        collectionName={collectionName}
        episodeUrl={episodeUrl}
        onNextCallback={onNext}
        onPauseCallback={onPause}
        onPlayCallback={onPlay}
        onPrevCallback={onPrev}
        trackName={trackName}
      />
    </Container>
  );
};

export default MusicPlayer;
