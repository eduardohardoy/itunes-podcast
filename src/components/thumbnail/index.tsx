import { Container, Title, Image, Description } from "./styled";

interface IThumbnailProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Thumbnail = ({ imageSrc, title, description }: IThumbnailProps) => (
  <Container>
    <Image src={imageSrc} />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
);

export default Thumbnail;
