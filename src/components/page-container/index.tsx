import { PageContainer } from "./styled";

type PageProps = {
  children: string | JSX.Element | JSX.Element[];
};

const Page = ({ children }: PageProps) => (
  <PageContainer>{children}</PageContainer>
);

export default Page;
