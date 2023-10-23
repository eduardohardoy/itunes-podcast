import { Container, Description, Title } from "./styled";

interface IErrorProps {
  title: string;
  description: string;
}

const Error = ({ title, description }: IErrorProps) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
);

export default Error;
