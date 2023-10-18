import { useState } from "react";
import { PageContainer } from "../../components/page-container/styled";
import Searchbar from "../../components/searchbar";
import { usePodcasts } from "../../custom-hooks/use-podcasts";
import PodcastsList from "../../components/podcasts-list";

const Landing = () => {
  const [searchValue, setSearchValue] = useState("");
  const { podcasts, isLoading, isError } = usePodcasts(searchValue);

  return (
    <PageContainer>
      <Searchbar onChange={setSearchValue} />
      <PodcastsList podcasts={podcasts} />
    </PageContainer>
  );
};

export default Landing;
