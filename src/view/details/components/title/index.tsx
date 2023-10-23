import { Container, Heading } from "./styled";
import PlayButton from "../../../../components/play-button";

interface ITitleProps {
  title: string;
  isPlaying: boolean;
  onActionButtonClick: () => void;
}

const Title = ({ title, isPlaying, onActionButtonClick }: ITitleProps) => (
  <Container>
    <PlayButton isPlaying={isPlaying} onClick={onActionButtonClick} />
    <Heading>{title}</Heading>
  </Container>
);

export default Title;
