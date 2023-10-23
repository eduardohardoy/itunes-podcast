import {
  MdReplay,
  MdOutlineSkipPrevious,
  MdOutlineSkipNext,
} from "react-icons/md";
import { AiOutlinePause } from "react-icons/ai";
import { HiOutlinePlay } from "react-icons/hi2";
import { Container, Button } from "./styled";

interface IActionButtonProps {
  isPlaying: boolean;
  onNext: () => void;
  onPause: () => void;
  onPlay: () => void;
  onPrev: () => void;
  onReplay: () => void;
}

const ActionButtons = ({
  isPlaying,
  onNext,
  onPause,
  onPlay,
  onPrev,
  onReplay,
}: IActionButtonProps) => (
  <Container>
    <MdOutlineSkipPrevious size={24} onClick={onPrev} />
    <Button>
      {isPlaying ? (
        <AiOutlinePause fill="white" size={24} onClick={onPause} />
      ) : (
        <HiOutlinePlay fill="white" size={24} onClick={onPlay} />
      )}
    </Button>

    <MdOutlineSkipNext size={24} onClick={onNext} />
    <MdReplay size={24} onClick={onReplay} />
  </Container>
);

export default ActionButtons;
