import { Container, Image } from "./styled";

interface IPodcastImageProps {
  imageSrc: string;
}

const PodcastImage = ({ imageSrc }: IPodcastImageProps) => (
  <Container>
    <Image src={imageSrc} />
  </Container>
);

export default PodcastImage;
