import { Container, Title, Description } from "./styled";

interface ITitlesProps {
  title: string;
  description: string;
}

const Titles = ({ title, description }: ITitlesProps) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
);

export default Titles;
