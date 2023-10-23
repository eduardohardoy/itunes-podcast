import { useEffect } from "react";
import styled from "styled-components";

interface IAudioControlsProps {
  episodeUrl: string;
}

const AudioControlContainer = styled.div`
audio::-webkit-media-controls-panel {
  background-color: #1a1a1a;
}
  audio::-webkit-media-controls-play-button {
    display: none;
  }

  audio::-webkit-media-controls-download-button {
    display: none;
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
