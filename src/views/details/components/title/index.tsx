import { Container, Heading } from "./styled";

interface ITitleProps {
  title: string;
}

const Title = ({ title }: ITitleProps) => (
  <Container>
    <Heading>{title}</Heading>
  </Container>
);

export default Title;
