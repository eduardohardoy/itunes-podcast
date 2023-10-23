import { AiOutlinePause } from "react-icons/ai";
import { HiOutlinePlay } from "react-icons/hi2";
import { Button } from "./styled";

const PlayButton = ({
  isPlaying,
  onClick,
}: {
  isPlaying: boolean;
  onClick: () => void;
}) => (
  <Button onClick={onClick}>
    {isPlaying ? (
      <AiOutlinePause fill="white" size={24} />
    ) : (
      <HiOutlinePlay fill="white" size={24} />
    )}
  </Button>
);

export default PlayButton;
