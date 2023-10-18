import { Container, Image } from "./styled";

const PodcastImage = ({ imageSrc }) => (
  <Container>
    <Image src={imageSrc} />
  </Container>
);

export default PodcastImage;
