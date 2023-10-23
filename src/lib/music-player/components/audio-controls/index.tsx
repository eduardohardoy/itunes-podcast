import { useEffect } from "react";
import styled from "styled-components";

interface IAudioControlsProps {
  episodeUrl: string;
}

const AudioControlContainer = styled.div`
  audio::-webkit-media-controls-play-button {
    display: none;
  }

  audio::-webkit-media-controls-download-button {
    display: none;
  }

  audio::-webkit-media-controls-current-time-display {
    order: 0;
  }

  audio::-webkit-media-controls-timeline-container {
    order: 1;
  }
  audio::-webkit-media-controls-time-remaining-display {
    order: 2;
  }
  audio::-webkit-media-controls-volume-slider-container {
    order: 3;
  }
`;

const AudioControls = ({ episodeUrl }: IAudioControlsProps) => {
  useEffect(() => {
    if (episodeUrl) {
      const audioElement = document.querySelector("audio");
      audioElement?.play();
    }
  }, [episodeUrl]);
  return (
    <AudioControlContainer>
      <audio controls src={episodeUrl}></audio>
    </AudioControlContainer>
  );
};

export default AudioControls;
