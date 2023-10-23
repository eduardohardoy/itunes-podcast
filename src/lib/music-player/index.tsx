import { Container, Details } from "./styled";
import Image from "./components/image";
import Titles from "./components/titles";
import AudioControls from "./components/audio-controls";
import ActionButtons from "./components/action-buttons";
import { useAudio } from "./custom-hook/use-audio";

interface IMusicPlayerProps {
  artworkUrl60: string;
  collectionName: string;
  episodeUrl: string;
  onNextCallback: () => void;
  onPauseCallback: () => void;
  onPlayCallback: () => void;
  onPrevCallback: () => void;
  trackName: string;
}

const MusicPlayer = ({
  artworkUrl60,
  collectionName,
  episodeUrl,
  onNextCallback,
  onPauseCallback,
  onPlayCallback,
  onPrevCallback,
  trackName,
}: IMusicPlayerProps) => {
  const { isPlaying, onPause, onPlay, onReplay, onPrev } = useAudio({
    episodeUrl,
  });

  return (
    <Container>
      <Details>
        <Image src={artworkUrl60} />
        <Titles title={trackName} description={collectionName} />
      </Details>
      <ActionButtons
        isPlaying={isPlaying}
        onReplay={onReplay}
        onPause={() => {
          onPauseCallback();
          onPause();
        }}
        onPlay={() => {
          onPlayCallback();
          onPlay();
        }}
        onNext={onNextCallback}
        onPrev={() => {
          const shouldRestart = onPrev();
          if (!shouldRestart) onPrevCallback();
        }}
      />
      <AudioControls episodeUrl={episodeUrl} />
    </Container>
  );
};

export default MusicPlayer;
