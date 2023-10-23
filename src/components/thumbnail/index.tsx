import {
  Container,
  Description,
  Image,
  Title,
  TitlesContainer,
} from "./styled";

interface IThumbnailProps {
  description: string;
  imageSrc: string;
  title: string;
}

const Thumbnail = ({ description, imageSrc, title }: IThumbnailProps) => (
  <Container>
    <Image src={imageSrc} />
    <TitlesContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </TitlesContainer>
  </Container>
);

export default Thumbnail;
