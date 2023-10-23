import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsPlaying, setIsPlaying } from "../../../data/play-list";

interface IUseAudioProps {
  episodeUrl: string;
}

export const useAudio = ({ episodeUrl }: IUseAudioProps) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector(selectIsPlaying);

  useEffect(() => {
    dispatch(setIsPlaying(!!episodeUrl));
  }, [episodeUrl, dispatch]);

  const audioElement = document.querySelector("audio");

  const onPlay = useCallback(() => {
    dispatch(setIsPlaying(true));
    audioElement?.play();
  }, [audioElement, dispatch]);

  const onPause = useCallback(() => {
    dispatch(setIsPlaying(false));
    audioElement?.pause();
  }, [audioElement, dispatch]);

  const onReplay = useCallback(() => {
    dispatch(setIsPlaying(true));
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  }, [audioElement, dispatch]);

  const onPrev = useCallback(() => {
    if (audioElement?.currentTime && audioElement.currentTime > 5) {
      onReplay();
      return true;
    }
    return false;
  }, [audioElement, onReplay]);

  return { audioElement, onPause, onPlay, isPlaying, onReplay, onPrev };
};
