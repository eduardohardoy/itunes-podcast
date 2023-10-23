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
    <MdOutlineSkipPrevious size={24} onClick={onPrev} cursor="pointer"/>
    <Button>
      {isPlaying ? (
        <AiOutlinePause fill="white" size={24} onClick={onPause} cursor="pointer"/>
      ) : (
        <HiOutlinePlay fill="white" size={24} onClick={onPlay} cursor="pointer"/>
      )}
    </Button>

    <MdOutlineSkipNext size={24} onClick={onNext} cursor="pointer"/>
    <MdReplay size={24} onClick={onReplay} cursor="pointer"/>
  </Container>
);

export default ActionButtons;
